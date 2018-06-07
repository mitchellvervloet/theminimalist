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
        this.triangle.speed = this.triangle.speed + 0.01
    }
    onSpeedDown(): void {
    }
    onNormal(): void {
    }

}