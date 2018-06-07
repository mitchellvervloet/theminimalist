class SpeedDown implements Behaviour {

    triangle: Triangle;

    constructor(triangle: Triangle) {

        this.triangle = triangle
    }
    performBehaviour(): void {
        this.onSpeedDown()
    }
    onSpeedUp(): void {
    }
    onSpeedDown(): void {
        console.log("speeding DOWN")
    }
    onNormal(): void {
    }
}