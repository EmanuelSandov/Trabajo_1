const { request, response } = require('express');
const servidorHTTP = require('express');
const res = require('express/lib/response');
const app= servidorHTTP();
const port = process.env.PORT || 3000;

//Configuracionesn - Respuestas para el cliente (Chrome. Firefox, Imsonia, Edge)

/*
app.get == Solicitamos un recurso del servidor
app.post == Creamos un recurso en el servidor
app.delete == Eliminamos un recurso del servidor
app.put == Actualizamos un recurso en el servidor
*/

app.get("/",(req,res)=>{
    res.send("Pagina principal. Servidor en Node.js con express");
})//HTDODS = Public_html
app.get('*',(req,res)=>{
    res.send("404 | pagina no encontrada");
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto", port);
})