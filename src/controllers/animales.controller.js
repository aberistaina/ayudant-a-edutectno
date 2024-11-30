import { Animal } from "../models/Animales.model.js";
import { getById } from "../utils/utilsAnimales.js";

export const obtenerAnimales = (req, res) =>{
    try {
        const animal = req.body
        const nuevoAnimal = Animal.crearAnimal(animal)

        res.status(200).json({
            code:200,
            message: "solicitud exitosa",
            data: nuevoAnimal
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code:500,
            message: "Ha ocurrido un error"
        })
    }
}

export const crearAnimal = async(req, res) =>{
    try {
        const data = req.body
        const animal = Animal.crearAnimal(data)

        res.status(201).json({
            code: 201,
            message: "El animal fue almacenado de forma correcta en la base de datos",
            data: animal,  
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Hubo un problema al procesar la solicitud",
        })
    }
}

export const getAnimalById = async(req, res) =>{
    try {
        const { id } = req.params
        console.log(id)
        const animalEncontrado = await getById(id, "animales.json")

        res.status(201).json({
            code: 201,
            message: "El animal fue encontrado con éxito",
            data: animalEncontrado,  
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            code: 500,
            message: "Hubo un problema al procesar la solicitud"
        })
    }
}