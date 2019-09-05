import * as dotenv from "dotenv";
dotenv.config();

let config = {
  development: {
    ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || "3000",

    DB_DIALECT: process.env.DB_DIALECT || "mongo",
    DB_HOST: process.env.DB_HOST || "mongodb://localhost:27017/rest-node-ts",
    DB_NAME: process.env.DB_NAME || "rest-node-ts",
    DB_PORT: process.env.DB_PORT || "27017",

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "$eckretKey",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
  },
  production: {
    ENV: process.env.NODE_ENV || "production",
    PORT: process.env.PORT || "3000",

    DB_DIALECT: process.env.DB_DIALECT || "mongo",
    DB_HOST: process.env.DB_HOST || "mongodb://localhost:27017/rest-node-ts",
    DB_NAME: process.env.DB_NAME || "rest-node-ts",
    DB_PORT: process.env.DB_PORT || "27017",

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "$eckretKey",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
  }
};

export default config[process.env.NODE_ENV || 'development'];
