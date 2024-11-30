import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFile = async(data, pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)
        
        await fs.mkdir(path.dirname(datafilePath) , { recursive: true })

        await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'utf8');
    } catch (error) {
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}


export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(datafilePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}` )
        return null
    }
}

export const crearAnimal = async(animal, ruta) =>{
    try {
        const readData = await readFile(ruta)
        let newData = []

        if(readData || readData.length != 0){
            readData.forEach(dato => {
                newData.push(dato)
            });
        }
        newData.push(animal)
        await createFile(newData, ruta)
        return newData

    } catch (error) {
        console.log(error.message)
    }
}

export const getById = (id, ruta) =>{
    try {
        const animales = readFile(ruta)
        console.log(animales)
        const busquedaAnimal = animales.find(animal => animal.id == id)
        return busquedaAnimal
    } catch (error) {
        console.log(error)
    }
}