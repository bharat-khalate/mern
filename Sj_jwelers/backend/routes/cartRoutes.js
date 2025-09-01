import express from "express";
import db from "../config/database.js";

const router = express.Router();

// Add item to cart
router.post("/add_to_cart", (req, res) => {
    const { uid, pdid, quantity } = req.body; // Destructure name and cpasss from req.body
    const q = "insert into cart (uid ,pd_id, quantity) values (?, ?, ?)";
    const values = [uid, pdid, quantity];

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

// Fetch cart items for a user
router.post("/fetch_cart/:uid", (req, res) => {
    const uid = req.params.uid; // Destructure name and cpasss from req.body
    const q = "SELECT * FROM cart WHERE uid=?";
    var arr = []

    console.log("Received ", uid);

    db.query(q, uid, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        } else {
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    let abc = data[i]
                    // console.log(abc)
                    const q = "select * from products where id=?";
                    db.query(q, abc.pd_id, (err, row) => {
                        if (err) {
                            console.log(err)
                        } else {
                            let mnc = row[0];
                            console.log("pd_id " + abc.od_id);
                            mnc.quantity = abc.quantity;
                            mnc.od_id = abc.od_id;
                            arr.push(mnc)
                            if (i == (data.length - 1)) {
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

// Delete item from cart
router.delete("/del_cart/:id", (req, res) => {
    const del_id = req.params.id;
    console.log(del_id)
    const q = "delete from cart where od_id=?";
    db.query(q, del_id, (err, data) => {
        if (err) return res.json(err);
        return res.json("product has been deleted successfully");
    })
});

export default router;
