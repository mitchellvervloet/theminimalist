class slowDown implements Behaviour {

    square: Square;

    constructor(square: Square) {

        this.square = square

    }

    performBehaviour(): void {
        console.log("check for changes behaviour")
    }

    onSpeedUp(): void {
        console.log("Not in this behaviour")
    }

    onSlowDown(): void {
        console.log("Slow down")
    }

}