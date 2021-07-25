class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
    movieTime() {
        const conta = this.users * 5;
        const resultado = this.data - conta;

        if (resultado < 10) {
            return false;
        } else if (resultado >= 10) {
            return true;
        }
    }
}

const library = new Network(50, 9);
console.log(library.movieTime);
