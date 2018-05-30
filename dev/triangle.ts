class Triangle extends GameObject {

    private element: HTMLElement
    public width: number = 60
    public height: number = 6
    // public speed: number
    public positionX:number
    public positionY:number

    constructor() {
        super()
        this.element = document.createElement("triangle")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        // this.speed = 4 + Math.random() * 8
        // this.positionY= Math.random() * (window.innerHeight - 200)
        // this.positionX = window.innerWidth
        // this.positionY = Math.random() * (window.innerHeight - 200)
        this.positionX = window.innerWidth
        this.positionY = 200
    }

    public update(): void {
        this.positionX = this.positionX - 2
        this.element.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`
    }
    public getBounds() {
        return this.element.getBoundingClientRect()
    }
}