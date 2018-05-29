class Square extends GameObject {

    private element: HTMLElement
    private speedLeft: number = 0
    private speedRight: number = 0
    public x: number
    public y: number

    constructor() {
        super()
        this.element = document.createElement("square")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.y = window.innerHeight - 60
        this.x = 0

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public update(): void {
        this.x = this.x + this.speedRight - this.speedLeft
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
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
                console.log('jump!')
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
        }
    }
}