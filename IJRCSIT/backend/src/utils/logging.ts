import winston from "winston";

export const logger = winston.createLogger({
    //info,warn,debug
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "app.log" })
    ]
});

// Logging examples
// logger.info("Server started on port 3000");
// logger.error("Database connection failed");