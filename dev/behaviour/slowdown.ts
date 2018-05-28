class slowDown implements Behaviour {

    square: Square;

    constructor(square: Square) {

        this.square = square

    }

    performBehaviour(): void {
        this.onSlowDown()
    }

    onSpeedUp(): void {
        console.log("Not in this behaviour")
    }

    onSlowDown(): void {
        console.log("Slow down")
    }

}