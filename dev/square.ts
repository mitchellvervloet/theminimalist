class Square extends GameObject {

    private element: HTMLElement
    private speed:number
    private x:number
    private y:number
        
    constructor() {
        super()
        this.element = document.createElement("square")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.speed = 4 + Math.random() * 8
        this.x = Math.random() * (window.innerWidth - 200)
        this.y = -400 - (Math.random() * 450) 
    }

    public update():void {
        this.y += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getBounds() {
        return this.element.getBoundingClientRect()
    }
}