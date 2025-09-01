import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client's origin URL
    credentials: true // Allow credentials (cookies, authorization headers)
};

export default corsOptions;
