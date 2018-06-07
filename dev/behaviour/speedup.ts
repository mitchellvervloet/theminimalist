class SpeedUp implements Behaviour {  
    triangle: Triangle;

    constructor(triangle: Triangle) {
        this.triangle = triangle
    }
    performBehaviour(): void {
        this.onSpeedUp()
    }
    onSpeedUp(): void {
        console.log("speeding up")
    }
    onSpeedDown(): void {
    }
    onNormal(): void {
    }

}