class Square {

    public div: HTMLElement

    constructor(parent: HTMLElement) {
        

        this.div = document.createElement("jibby")
        parent.appendChild(this.div)
    }

    update() {
        console.log("Hi, I'm a square.")
    }
}