import {Router}from 'express';

import { 
    buscarTodosAnimais, 
    buscarAnimaisPorId,
    criarAnimal,
    atualizarAnimal,
    deletarAnimal,
} from "../controllers/animais.controllers.js";     

const rotasAnimais = Router();

rotasAnimais.get("/", buscarTodosAnimais);

rotasAnimais.get("/:id", buscarAnimaisPorId);

rotasAnimais.post("/", criarAnimal);

rotasAnimais.put("/:id", atualizarAnimal);

rotasAnimais.delete("/:id", deletarAnimal);

export default rotasAnimais;


