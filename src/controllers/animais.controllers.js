import { Animais } from "../models/animais/animais.js";
import { AnimaisList } from "../models/animais/animaisList.js";

const list = new AnimaisList();

export const buscarTodosAnimais = (req, res) => {
    const animais = list.getAllAnimais();
    if (!animais.length) {
        return res.status(404).send({
            message: "Não há animais cadastrados",
        })
    }
    return res.status(200).send({
        message: "Animal encontrado",
        contador: `${animais.length}`,
        data: animais
    });
}

export const buscarAnimaisPorId = (req, res) => {
    const { id } = req.params;

    const animal = list.getAnimalById(id);

    if (!animal) {
        return res.status(404).send({
            message: `Animal encontrado pelo ID ${id}`,
        })
    }

    return res.status(200).send({
        message: `GET ALL ID animal ${id}`,
        origem: "Controller",
    });
};

export const criarAnimal = (req, res) => {
    const { nome, idade, tipo, cor, vacinado, imagem } = req.body;

    const isURLValid = (url) => {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
            return true;
        } else {
            return false;
        }
    }

    if (!nome || !idade || !tipo || !cor || !vacinado || !imagem) {
        return res.status(400).send({
            message: "Dados inválidos",
        })
    }

    if (nome.length < 3 || nome.length > 50) {
        return res.status(400).send({
            message: "Nome inválido digite entre 3 e 50 caracteres",
        })
    }
    if (idade < 0) {
        return res.status(400).send({
            message: "Idade inválida",
        })
    }

    if (tipo.length >= 30) {
        return res.status(400).send({
            message: "Tipo inválido digite entre 30 caracteres",
        })
    }

    if (cor.length >= 20) {
        return res.status(400).send({
            message: "Tipo inválido digite entre 30 caracteres",
        })
    }

    if (typeof vacinado != 'boolean') {
        return res.status(400).send({
            message: "Vacinado inválido! O valor deve ser verdadeiro ou falso!"
        })
    }

    if (isURLValid(imagem) === false) {
        return res.status(400).send({
            message: "URL da imagem é inválida!"
        });
    }

    const animais = new Animais(nome, idade, tipo, cor, vacinado, imagem)
    list.createAnimal(animais);
    return res.status(201).send({
        message: "Animal cadastrado com sucesso",
        data: animais
    });
};

export const atualizarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, vacinado, imagem } = req.body;

    if (!nome || !idade || !tipo || !cor || !vacinado || !imagem) {
        return res.status(400).send({
            message: "Atualização realizada",
        })
    }
    return res.status(201).send({
        message: `Animal ${id} atulizado`,
    });
};

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Animal ${id} excluído `,
    });
};
