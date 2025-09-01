import express from "express";
import db from "../config/database.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Get all products
router.get("/fetch", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Get product by ID
router.get("/fetch/product/:id", (req, res) => {
    const get_id = req.params.id;
    const q = "SELECT * FROM products where id=?";
    db.query(q, get_id, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Get product by ID with cart status
router.post("/fetchh/product/:id", (req, res) => {
    const get_id = req.params.id;
    const uid = req.body.log;
    console.log("haha " + uid)
    const q = "SELECT * FROM products where id=?";
    db.query(q, get_id, (err, data) => {
        if (err) {
            return res.json(err);
        }
        const q = "select * from cart where uid=? AND pd_id=?";
        db.query(q, [uid, get_id], (err, info) => {
            if (err) {
                console.log(err)
            }
            const abc = data[0];
            if (info.length == 0) {
                abc.show = 1;
                return res.json([abc]);
            }
            abc.show = 0;
            return res.json([abc])
        })
    });
});

// Add new product
router.post('/upload', upload.single('img'), (req, res) => {
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

// Update product
router.put("/update_product/:id", upload.single('img'), (req, res) => {
    const up_id = req.params.id;
    if (!req.file) {
        console.log("No file uploaded or multer failed to process file.");
        return res.status(400).json({ error: "No file uploaded or multer failed to process file." });
    }

    const { name, price, weight, avail, purity, category } = req.body;
    const img = req.file.filename; // Get the filename of the uploaded image

    const q = "UPDATE products SET name = ?, price =?, weight=?, stock=?, purity=?, category=?, img=? WHERE id=?";
    const values = [name, price, weight, avail, purity, category, img, up_id];
    console.log(values + "\n" + q);
    db.query(q, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("success");
        return res.json(data);
    });
});

// Update product stock
router.put("/update_product_stock/:id", (req, res) => {
    console.log("Updating product on the server..." + req.body);
    const up_id = req.params.id;
    const abc = req.body.avail
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

// Delete product
router.delete("/del/:id", (req, res) => {
    const del_id = req.params.id;
    const q = "delete from products where id=?";
    db.query(q, del_id, (err, data) => {
        if (err) return res.json(err);
        return res.json("product has been deleted successfully");
    })
});

// Search products
router.post('/search/:s_id', (req, res) => {
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

export default router;
