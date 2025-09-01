import session from "express-session";

const sessionConfig = {
    secret: 'secrete',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 40
    }
};

export default sessionConfig;
