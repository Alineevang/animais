import {v4 as uuid} from 'uuid';

export class Animais {
    constructor (nome, idade, tipo, cor, status, imagem) {
        this.id = uuid();
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.cor = cor;
        this.status = status;
        this.imagem = imagem;
    }
}