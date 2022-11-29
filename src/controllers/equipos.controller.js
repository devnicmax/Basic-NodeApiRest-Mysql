import { pool } from "../db/db.js";

export const getEquipos = async (req, res) => {
    
    try{
        const [rows] = await  pool.query("Select * from equipos");
        res.json(rows);
    }catch (error){
        return res.status(400).json({
            "message": "Algo salio mal"
        })
    }
};

export const getEquipo = async (req, res) => {
    
    try {

        const [ rows ] = await pool.query("SELECT * FROM equipos WHERE id = ?", [req.params.id]);

        if(rows.length <= 0) return res.status(404).json({
            "mensaje": "id no encontrado"
        });

        res.json(rows);

    }catch (error){

        return res.status(404).json({
            "message": "Algo salio mal"
        })
    }
};

export const createEquipo = async (req, res) => {
    const { nombre } = req.body;

    try {

        const [rows] = await pool.query("INSERT INTO equipos(nombre) VALUES(?)", [nombre]);
        res.send({
            id: rows.insertId,
            nombre
        });

    }catch (error){

        return res.status(404).json({
            "message": "Algo salio mal"
        })
    }
};

export const updateEquipo = async (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;

    try {
        
        const [result] = await pool.query("UPDATE equipos SET nombre = IFNULL(?,nombre) WHERE id =?", [nombre,id]);

        if(result.affectedRows === 0) return res.status(404).json({
            "message": "Equipo no encontrado"
        });

        const [rows] = await pool.query("SELECT * FROM equipos WHERE id =?", [id]);

        res.json(rows);

    } catch (error) {
        
        return res.status(500).json({
            "message": "Algo salio mal"
        });
    }
};

export const deleteEquipo = async (req, res) => {

    try{

        const [result] = await pool.query("DELETE FROM equipos WHERE id=?", [req.params.id]);

        if(result.affectedRows <= 0) return res.status(404).json({
            "message": "Equipo no encontrado"
        })

        res.sendStatus(204)

    }catch (error) {

        return res.status(500).json({
            "message": "Algo salio mal"
        })
    }  
}