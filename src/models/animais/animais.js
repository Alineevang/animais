import {v4 as uuid} from 'uuid';

export class Animais {
    constructor (nome, idade, tipo, cor, vacinado, imagem) {
        this.id = uuid();
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.cor = cor;
        this.vacinado = vacinado;
        this.imagem = imagem;
    }
}