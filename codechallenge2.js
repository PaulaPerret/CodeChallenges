class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`);
    }
}

const player1 = new Player('p1', 5);
const player2 = new Player('p2', 2);

function balloonAttack(player1, player2) {
    const balloonHit1 = 10 * player1.hitsPerMinute;
    const balloonHit2 = 10 * player2.hitsPerMinute;
    const saldoPlayer2 = player2.balloonCount - balloonHit1;
    const saldoPlayer1 = player1.balloonCount - balloonHit2;

    if (saldoPlayer2 < saldoPlayer1) {
        return player1.name;
    } else if (saldoPlayer2 > saldoPlayer1) {
        return player2.name;
    } else {
        return `Tie`;
    }
}

console.log(balloonAttack(player1, player2));
