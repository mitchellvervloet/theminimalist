class Triangle extends GameObject {

    public element: HTMLElement
    public width: number = 50
    public height: number = 50
    public positionX:number
    public positionY:number
    public speed: number
    public behaviour: Behaviour

    constructor() {
        super()
        this.element = document.createElement("triangle")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);

        this.behaviour = new Normal(this);

        this.positionX = window.innerWidth
        this.positionY = Math.random() * (window.innerHeight - this.height)
    }

    public update(): void {
        this.behaviour.performBehaviour()

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