import {v4 as uuidv4 } from "uuid"
import { crearAnimal, getById } from "../utils/utilsAnimales.js"
export class Animal {

    #id
    #nombre
    #tipo

    constructor(nombre, tipo){
        this.#id = uuidv4().slice(0, 10)
        this.#nombre = nombre
        this.#tipo = tipo
    }

    get id(){
        return this.#id
    }

    get nombre(){
        return this.#nombre
    }

    get tipo(){
        return this.#tipo
    }

    setNombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }

    setTipo(nuevoTipo){
        this.#tipo = nuevoTipo
    }

    getAll(){
        return {
            id: this.#id,
            nombre: this.#nombre,
            tipo: this.#tipo
        }
    }

    static crearAnimal (animal){
        const { nombre, tipo } = animal
        const nuevoAnimal = new Animal(nombre, tipo)
        const animalPublico = nuevoAnimal.getAll()
        crearAnimal(animalPublico, "animales.json")
        return animalPublico
        
    }
    
}


