import { pool } from './../db/db.js'

export const getTest = async (req, res) =>{
    const [result] = await pool.query("SELECT 1+1 AS result");
    res.json(result);
}