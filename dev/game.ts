class Game {

    public static instance: Game
    public gameObjects: GameObject[] = []
    public square: Square
    public lives: number = 3;
    public paused: boolean = false
    public score: number = 0

    constructor() {
        this.gameObjects.push(new Triangle, new Triangle, new Triangle)
        this.square = new Square()

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        this.scoreUp()
        this.gameLoop()
    }

    public onKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case "Escape":
                if (this.paused) {
                    this.paused = false
                } else {
                    this.paused = true
                }
                break
        }
    }
    public scoreUp() {
        setInterval(()=> {
            if (!this.paused) {
                this.score++
            }
            console.log("score = " + this.score)
        }, 1000)
    }

    //Check if there's already a game instance, if not create one. //SINGLETON DESIGN PATTERN
    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    //Game loop that runs 60fps, or as fast as the device can handle when it's less than 60
    private gameLoop() {
        if (!this.paused) {
            if (this.lives > 0) {
                this.square.update()
                for (let o of this.gameObjects) {
                    o.update()

                    if (o instanceof Triangle) {
                        if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                            o.reset()
                            this.lives--
                        }
                    }
                }
            } else {
                this.paused = true
                console.log("game over")
            }
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
});