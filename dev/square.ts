class Square extends GameObject {

    public behaviour: Behaviour
    public speed: number

    constructor(parent: HTMLElement) {

        super("square", parent);
        this.width = 60;
        this.height = 60;
        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = Math.random() * (window.innerHeight / 2) + (window.innerHeight / 2 - this.height);

        this.behaviour = new slowDown(this)
        this.speed = 1

    }

    update() {
        this.behaviour.performBehaviour()

        // console.log("speed is: " + this.speed)

        super.update()

    }
}