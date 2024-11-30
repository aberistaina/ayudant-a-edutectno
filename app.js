import express from "express"
import animalesRoutes from "./src/routes/animales.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () =>{
    console.log("Servidor escuchando en el puerto 3000 🚀");
})


app.use("/api/v1/animales", animalesRoutes)
