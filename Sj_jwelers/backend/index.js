import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import  { dirname } from 'path';
import session from "express-session";
import { Cookie } from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
// app.use(cors()); // Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your client's origin URL
    credentials: true // Allow credentials (cookies, authorization headers)
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
app.use(bodyParser.json()); // Parse JSON bodies (alternative to express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret:'secrete',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*40
    }
}))

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Rename file with timestamp and original extension
    }
});

const upload = multer({ storage: storage });





// MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5242",
    database: "sj_jwelers"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("db:  "+err)
    }
    console.log("MySQL database connected...");
});





// Routes
app.get("/fetch", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});



app.get('/',(req,res)=>{
    if(req.session.username){
        console.log(req.session.username+"this is session user name\n"+req.session.des+"\n"+req.session.u_id)
        return res.json({valid:true, username:req.session.username, des:req.session.des, id:req.session.u_id})
    }else{
        return res.json({valid:false})
    }
})

app.post("/fetch_user", (req, res) => {
    const { name, cpasss } = req.body; // Destructure name and cpasss from req.body
    const q = "SELECT * FROM user WHERE email=? AND password=?";
    const values = [name, cpasss];
    
    console.log("Received credentials:", values);
    
    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        
        // Assuming data is an array of user objects, return the first user found
        if (data.length > 0) {
            const abc=data[0];
            req.session.des=abc.flag;
            // console.log(req.session.username)
            // console.log(req)
            // console.log(req.session.des) 
            req.session.username=abc.name;
            req.session.u_id=abc.id;
            // console.log(req.session.username)
            return res.status(200).json(abc);
            
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    });
});


app.post("/add_to_cart", (req, res) => {
    const { uid, pdid , quantity } = req.body; // Destructure name and cpasss from req.body
    const q = "insert into cart (uid ,pd_id, quantity) values (?, ?, ?)";
    const values = [uid, pdid , quantity];
    
    console.log("Received credentials:", values);
    
    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        

        if (1) {
            console.log(data)
            return res.status(200).json(data);
            
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    });
});

app.post("/fetch_cart/:uid", (req, res) => {
    const uid = req.params.uid; // Destructure name and cpasss from req.body
    const q = "SELECT * FROM cart WHERE uid=?";
    var arr=[]
    
    console.log("Received ", uid);
    
    db.query(q, uid, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }else{
            if(data.length>0){
                for(let i=0;i<data.length;i++){
                    let abc=data[i]
                    // console.log(abc)
                    const q="select * from products where id=?";
                    db.query(q,abc.pd_id,(err,row)=>{
                        if(err){
                            console.log(err)
                        }else{
                            let mnc =row[0];
                            console.log("pd_id "+abc.od_id);
                            mnc.quantity=abc.quantity;
                            mnc.od_id=abc.od_id;
                            arr.push(mnc)
                            if(i==(data.length-1))
                                {
                                    console.log(arr)
                                    return res.json(arr)

                                }
                        }
                    })
                }

                // console.log(arr)
                
            }
        }
        
       
    });
});

app.get('/logot',(req,res)=>{
    console.log("her")
    try{

        req.session.destroy();
        return res.json({status:"logged Out"});
    }catch(err){
        return res.json(err)
    }
})

// POST route to handle product upload with image
app.post('/upload', upload.single('img'), (req, res) => {
    if (!req.file) {
        console.log("No file uploaded or multer failed to process file.");
        return res.status(400).json({ error: "No file uploaded or multer failed to process file." });
    }

    const { name, price, weight, avail, purity, category } = req.body;
    const img = req.file.filename; // Get the filename of the uploaded image

    const sql = "INSERT INTO products (name, price, weight, stock, purity, category, img) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [name, price, weight, avail, purity, category, img];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database insertion error:", err);
            return res.status(500).json({ error: "Failed to insert product into database" });
        }
        res.json({ message: "Product added successfully", id: result.insertId });
    });
});


app.post('/reg',(req, res) => {
    
    const { name, email, password } = req.body;
   

    const sql = "INSERT INTO user (name, email, password,flag) VALUES (?, ?, ?, 0)";
    const values = [name, email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database insertion error:", err);
            return res.status(500).json({ error: "Failed to insert product into database" });
        }
        res.json({ message: "Product added successfully", id: result.insertId });
    });
});

app.delete("/del/:id",(req,res)=>{
    const del_id=req.params.id;
    const q="delete from products where id=?";
    db.query(q,del_id,(err,data)=>{
        if (err) return res.json(err);
        return res.json("product has been deleted successfully");
    })
})

app.post('/search/:s_id', (req, res) => {
    const search_key = req.params.s_id;
    // Corrected SQL query with proper concatenation of '%'
    const sql = "SELECT * FROM products WHERE name LIKE ?";
    console.log(search_key)
    // Pass search_key as an array to db.query for proper escaping
    db.query(sql, [`%${search_key}%`], (err, data) => {
        if (err) {
            // Handle database error
            console.error("Database error:", err);
            return res.json({ error: "Database error" });
        } else {
            // Log the first result to console (if any)
            // console.log(data[0]);
            // Return the search results as JSON response
            res.json(data);
        }
    });
});

app.delete("/del_cart/:id",(req,res)=>{
    const del_id=req.params.id;
    console.log(del_id)
    const q="delete from cart where od_id=?";
    db.query(q,del_id,(err,data)=>{
        if (err) return res.json(err);
        return res.json("product has been deleted successfully");
    })
})


app.get("/fetch/product/:id", (req, res) => {
    const get_id=req.params.id;
    const q = "SELECT * FROM products where id=?";
    db.query(q,get_id, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});


app.post("/fetchh/product/:id", (req, res) => {
    const get_id=req.params.id;
    const uid=req.body.log;
    console.log("haha "+uid)
    const q = "SELECT * FROM products where id=?";
    db.query(q,get_id, (err, data) => {
        if (err) {
            return res.json(err);
        }
        const q="select * from cart where uid=? AND pd_id=?";
        db.query(q,[uid,get_id],(err,info)=>{
            if(err){
                console.log(err)
            }
            const abc=data[0];
            if(info.length==0){
                abc.show=1;
            return res.json([abc]);
            }
            abc.show=0;
            return res.json([abc])
        })
    });
});


app.put("/update_product/:id",upload.single('img'), (req, res) => {
    const up_id=req.params.id;
    if (!req.file) {
        console.log("No file uploaded or multer failed to process file.");
        return res.status(400).json({ error: "No file uploaded or multer failed to process file." });
    }
    
    const { name, price, weight, avail, purity, category } = req.body;
    const img = req.file.filename; // Get the filename of the uploaded image
    
    const q = "UPDATE products SET name = ?, price =?, weight=?, stock=?, purity=?, category=?, img=? WHERE id=?";
    const values = [name, price, weight, avail, purity, category, img, up_id];
    console.log(values+"\n"+q);
    db.query(q,values, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("success");
        return res.json(data);

    });
});


app.put("/update_product_stock/:id", (req, res) => {
    console.log("Updating product on the server..."+req.body);
    const up_id = req.params.id;
    const abc= req.body.avail
    // const { name, price, weight, avail, purity, category } = req.body;
    
    const q = "UPDATE products SET stock=? WHERE id=?";
    const values = [abc, up_id];
    console.log(abc);
    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Error updating product:", err);
            return res.status(500).json({ error: "Failed to update product" });
        }
        return res.json({ message: "Product updated successfully", data });
    });
});



app.post('/createcategory', upload.single('img'), (req, res) => {
    if (!req.file) {
        console.log("No file uploaded or multer failed to process file.");
        return res.status(400).json({ error: "No file uploaded or multer failed to process file." });
    }

    const { name} = req.body;
    const img = req.file.filename; // Get the filename of the uploaded image

    const sql = "INSERT INTO category (category, img) VALUES (?, ?)";
    const values = [name, img];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database insertion error:", err);
            return res.status(500).json({ error: "Failed to insert product into database" });
        }
        res.json({ message: "Product added successfully", id: result.insertId });
    });
});



app.get("/fetchcat", (req, res) => {
    const q = "SELECT * FROM category";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/fetchweight", (req, res) => {
    const q = "SELECT DISTINCT weight FROM products ORDER BY  weight ASC;"; 
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});


app.get("/fetchcatdata/:name", (req, res) => {
    const category=req.params.name;
    const q = "SELECT * FROM products where category=?";
    db.query(q,category, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/fetchwtdata/:weight", (req, res) => {
    const wt= +`${req.params.weight}`;
    console.log(wt)
    const q = "SELECT * FROM products where weight=?";
    db.query(q,[wt], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
