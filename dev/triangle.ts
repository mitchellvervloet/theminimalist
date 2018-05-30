class Triangle extends GameObject {

    public element: HTMLElement
    public width: number = 50
    public height: number = 50
    public speed: number
    public positionX:number
    public positionY:number

    constructor() {
        super()
        this.element = document.createElement("triangle")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);

        //Random speed between 3 and 10?
        this.speed = Math.floor(Math.random() * (10 - 3 + 1)) + 10;

        this.positionX = window.innerWidth
        this.positionY = Math.random() * (window.innerHeight - this.height)
    }

    public update(): void {
        this.positionX = this.positionX - this.speed

        if ((this.positionX + this.width) < 0){
            this.reset()
        }
        this.element.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`
    }
    public getBounds() {
        return this.element.getBoundingClientRect()
    }

    public reset(){
        this.positionX = window.innerWidth
        this.positionY = Math.random() * (window.innerHeight - this.height)
    }
}