import express from 'express';
import helmet from 'helmet';
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import adminRoutes from "./routes/admin.route";
import publicRoutes from "./routes/pblic.route";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors())

const port: number = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api/v1/auth", authRoutes);     
app.use("/api/v1/user", userRoutes);     
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/public", publicRoutes); 

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
}
);