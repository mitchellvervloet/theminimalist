class Square extends GameObject {

    private element: HTMLElement
    private speed: number
    protected x: number
    protected y: number

    constructor() {
        super()
        this.element = document.createElement("square")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.speed = 4 + Math.random() * 8
        this.y = 500
        this.x = Math.random() * 450
    }

    public update(): void {
        this.x += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getBounds() {
        return this.element.getBoundingClientRect()
    }
}