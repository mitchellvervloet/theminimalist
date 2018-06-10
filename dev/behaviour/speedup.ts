class SpeedUp implements Behaviour {
    triangle: Triangle;

    constructor(triangle: Triangle) {
        this.triangle = triangle
    }
    performBehaviour(): void {
        this.onSpeedUp()
    }
    onSpeedUp(): void {
        if (this.triangle.speed < 15) {
            this.triangle.speed = this.triangle.speed + 0.02
        } else {
            this.triangle.speed = 15
        }
    }
    onSpeedDown(): void {
    }
    onNormal(): void {
    }

}