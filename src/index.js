import express from 'express';
import routeTest from './routes/test.route.js';
import routeIndex from './routes/index.route.js';
import routeEquipos from './routes/equipos.route.js';

import { PORT_LISTEN } from '../config.js';

const app = express();

app.use(express.json())

app.use(routeIndex);
app.use(routeTest);
app.use("/api", routeEquipos);

app.use((req, res, next) =>{
    res.status(404).json({
        "message": "endpoint not found"
    })
});

app.listen(PORT_LISTEN, ()=>{
    console.log("Listen port", PORT_LISTEN)
});