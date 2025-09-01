import express from "express";
import db from "../config/database.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Create new category
router.post('/createcategory', upload.single('img'), (req, res) => {
    if (!req.file) {
        console.log("No file uploaded or multer failed to process file.");
        return res.status(400).json({ error: "No file uploaded or multer failed to process file." });
    }

    const { name } = req.body;
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

// Get all categories
router.get("/fetchcat", (req, res) => {
    const q = "SELECT * FROM category";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Get products by category
router.get("/fetchcatdata/:name", (req, res) => {
    const category = req.params.name;
    const q = "SELECT * FROM products where category=?";
    db.query(q, category, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Get distinct weights
router.get("/fetchweight", (req, res) => {
    const q = "SELECT DISTINCT weight FROM products ORDER BY  weight ASC;";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

// Get products by weight
router.get("/fetchwtdata/:weight", (req, res) => {
    const wt = +`${req.params.weight}`;
    console.log(wt)
    const q = "SELECT * FROM products where weight=?";
    db.query(q, [wt], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

export default router;
