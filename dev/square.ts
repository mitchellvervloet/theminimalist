class Square extends GameObject {

    private element: HTMLElement
    private speedLeft: number = 0
    private speedRight: number = 0
    public positionX: number
    public positionY: number
    public velocityX: number = 4
    public velocityY: number = 0
    public gravity: number = 0.5
    public onTheGround: boolean = false

    constructor() {
        super()
        this.element = document.createElement("square")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.positionY = window.innerHeight - 60
        this.positionX = 0

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }

    public update(): void {
        //X - Axis
        this.positionX = this.positionX + this.speedRight - this.speedLeft

        //Y - Axis
        this.velocityY += this.gravity;
        this.positionY += this.velocityY;
        console.log("y pos              " + this.positionY)
        console.log("window innerheight    " + (window.innerHeight - 60))

        if (this.positionY > (window.innerHeight - 60)) {
            this.positionY = window.innerHeight - 60;
            this.velocityY = 0.0;
            this.onTheGround = true;
        }

        this.element.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`
    }

    public startJump() {
        console.log('clicked up key to jump!')
        //Only start jump when 
        if (this.onTheGround) {
            this.velocityY = -30.0
            this.onTheGround = false
        }
    }
    public endJump() {
        console.log('released up key!')

        //Different sized height jump
        // if (this.velocityY < -6.0) {
        //     this.velocityY = -6.0
        // }

        this.velocityY = -12.0
    }
    public getBounds() {
        return this.element.getBoundingClientRect()
    }

    public onKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 10
                break
            case "ArrowRight":
                this.speedRight = 10
                break
            case "ArrowUp":
                if (this.onTheGround) {
                    this.startJump()
                }
                break
        }
    }

    public onKeyUp(event: KeyboardEvent): void {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 0
                break
            case "ArrowRight":
                this.speedRight = 0
                break
            case "ArrowUp":
                this.endJump()
                break
        }
    }
}