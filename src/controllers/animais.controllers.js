import { Animais } from "../models/animais/animais";
import { AnimaisList } from "../models/animais/animaisList";

const list = new AnimaisList();

export const buscarTodosAnimais = (req, res) => {
    const animais = list.getAllAnimais();

    if (!animais.length) {
        return res.status(404).send({
            message: "Animais econtrados",
            status: "Not Foud",
        });
    }
     return res.status(200).send({
     message: "GET ALL animals found controller",
     status: "Ok",
 });
 }

 export const buscarAnimaisPorId = (req, res) => {
    const {id} = req.params;

    const animal = list.getAnimalById(id);

    if (!animal) {
       return res.status(404).send ({
           message: "Animal for ID found",
           origem: "Controller",
       })
    }

    return res.status(200).send({
    message: `GET ALL ID animal ${id}`,
    origem: "Controller",
});
};


export const criarAnimal = (req, res) => {
    const {nome, idade, tipo, cor, status, imagem} = req.body;

    if (!nome || !idade || !tipo || !cor|| !status|| !imagem) {
        return res.status(400).send({
            message: "Dados inválidos",
            origem: "Controller"
        })
    }
    return res.status(201).send ({
        message: "Rotas POST animal",
        origem: "Controller",   
});
}

const animais = new Animais (nome, idade, tipo, cor, status, imagem)

export const atualizarAnimal = (req, res) => {
    const {id} = req.params;
    const {nome, idade, tipo, cor, status, imagem} = req.body;

    if (!nome || !idade || !tipo || !cor|| !status|| !imagem) {
        return res.status(400).send({
            message: "Atualização não realizada",
            origem: "Controller"
        })
    }
    return res.status(201).send ({
        message: "Rotas PUT animal",
        origem: "Controller",   
});
};

export const deletarAnimal = (req, res) => {
    const {id} = req.params;
    return res.status(200).send ({
        message: "Rotas DELETE animal",
        origem: "Controller",   
});
};
