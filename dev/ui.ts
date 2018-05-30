class UI extends GameObject {
    private score: HTMLElement
    private paused: HTMLElement
    public game: Game

    constructor(g:Game) {
        super()
        this.game = g
        this.score = document.createElement("score")
        this.paused = document.createElement("paused")
        
        let foreground = document.getElementsByTagName("foreground")[0]


        foreground.appendChild(this.score)
        foreground.appendChild(this.paused)
    }
    public update() {
        this.score.innerHTML = "Score: " + this.game.score
    }

    public gamePause(pause:boolean) {
        if (pause) {
            console.log(pause)
            this.paused.innerHTML = "The game is paused. Press 'Escape' to unpause."
        } else {
            this.paused.innerHTML = ""
        }
    }
}