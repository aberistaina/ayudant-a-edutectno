import { Router } from "express";
import { obtenerAnimales, crearAnimal, getAnimalById } from "../controllers/animales.controller.js";

const router = Router()


router.get("/", obtenerAnimales)
router.get("/:id", getAnimalById)
router.post("/", crearAnimal)





export default router