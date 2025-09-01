import express from "express";
import db from "../config/database.js";

const router = express.Router();

// Check session status
router.get('/', (req, res) => {
    if (req.session.username) {
        console.log(req.session.username + "this is session user name\n" + req.session.des + "\n" + req.session.u_id)
        return res.json({ valid: true, username: req.session.username, des: req.session.des, id: req.session.u_id })
    } else {
        return res.json({ valid: false })
    }
});

// User login
router.post("/fetch_user", (req, res) => {
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
            const abc = data[0];
            req.session.des = abc.flag;
            // console.log(req.session.username)
            // console.log(req)
            // console.log(req.session.des) 
            req.session.username = abc.name;
            req.session.u_id = abc.id;
            // console.log(req.session.username)
            return res.status(200).json(abc);

        } else {
            return res.status(404).json({ message: "User not found" });
        }
    });
});

// User registration
router.post('/reg', (req, res) => {
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

// User logout
router.get('/logot', (req, res) => {
    console.log("her")
    try {
        req.session.destroy();
        return res.json({ status: "logged Out" });
    } catch (err) {
        return res.json(err)
    }
});

export default router;
