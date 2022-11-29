import { config} from "dotenv";

config();

export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_DATABASE = process.env.DB_DATABASE || "";
export const DB_HOST = process.env.DB_HOST || "127.0.0.1";
export const PORT_LISTEN = process.env.PORT_LISTEN || 2205;

