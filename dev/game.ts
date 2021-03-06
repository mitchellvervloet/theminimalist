class Game {

    public static instance: Game
    public gameObjects: GameObject[] = []
    public square: Square
    public lives: number = 3;
    public paused: boolean = false
    public score: number = 0
    public pickedUpSlowDownPowerBall: boolean = false;

    constructor() {
        this.gameObjects.push(new Triangle, new ScoreBall, new ScoreBall, new UI(this))
        this.square = new Square()

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        setTimeout(() => { this.gameObjects.push(new Triangle) }, 10000);
        setTimeout(() => { this.gameObjects.push(new Triangle) }, 20000);
        setTimeout(() => { this.gameObjects.push(new SlowDownPowerBall) }, 1000);
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
            default:
                break
        }
    }

    //Check if there's already a game instance, if not create one. //SINGLETON DESIGN PATTERN
    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    //Check if menu screen etc
    private gameLoop() {
        if (!this.paused) {
            if (this.lives > 0) {
                this.square.update()
                for (let o of this.gameObjects) {
                    o.update()

                    if (o instanceof Triangle) {
                        if (this.pickedUpSlowDownPowerBall) {
                            o.behaviour = new SpeedDown(o)
                        }
                        if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                            o.reset()
                            this.lives--
                        }
                    }
                    if (o instanceof ScoreBall) {
                        if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                            o.reset()
                            this.score++
                        }
                    }
                    if (o instanceof SlowDownPowerBall) {
                        if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                            o.remove()

                            let i = this.gameObjects.indexOf(o)
                            this.gameObjects.splice(i, 1)

                            this.pickedUpSlowDownPowerBall = true;
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