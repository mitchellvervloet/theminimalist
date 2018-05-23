class GameObject {

    public div: HTMLElement;
    public x:number = 0;
    public y:number = 0;
    public width:number;
    public height:number;

    constructor(tag:string, parent:HTMLElement) {
        this.div = document.createElement(tag);
        parent.appendChild(this.div);
    }

    public update():void {
        console.log("Draw the objects here and transform")
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}