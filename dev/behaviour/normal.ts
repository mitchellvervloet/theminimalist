class Normal implements Behaviour {
    triangle: Triangle;

    constructor(triangle: Triangle) {
        this.triangle = triangle
    }
    performBehaviour(): void {
        this.onNormal()
        console.log(this.triangle.speed)
        //After 5 seconds speed the triangles up 
        //Possible wait with this function if the score user picked up a power up? 
        // setTimeout(() => { this.triangle.behaviour = new SpeedUp(this.triangle) }, 5000);
    }
    onSpeedUp(): void {
    }
    onSpeedDown(): void {
    }
    onNormal(): void {
        this.triangle.speed = 10;
    }
}