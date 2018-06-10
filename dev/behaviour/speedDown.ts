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
        console.log(this.triangle.speed);
        if (this.triangle.speed < 5) {
            this.triangle.speed = 5;
        } else {
            this.triangle.speed = this.triangle.speed - 0.005
        }
    }
    onNormal(): void {
    }
}