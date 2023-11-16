export class AnimaisList {
    constructor() {
        this.animais = [];
    }
    getAllAnimais() {
        return this.animais;
    }

    getAnimalById(id) {
        return this.animais.find((animal) => animal.id == id);
    }

    createAnimal(animal) {
        this.animais.push(animal)
    }

    updateAnimal(nome, idade, tipo, cor, status, imagem) {
        const animal = this.getAnimalById(id);

        if (!animal) {
            return null;
        }
        animal.nome = nome;
        animal.idade = idade;
        animal.tipo = tipo;
        animal.cor = cor;
        animal.status = status;
        animal.imagem = imagem;

        return animal;
    }
    removeAnimal(animalId) {
        this.animal = this.animais.filter((animal) => animal.id !== animalId)
    }
}