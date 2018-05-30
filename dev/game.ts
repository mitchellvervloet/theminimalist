class Game {

    public static instance: Game
    public gameObjects: GameObject[] = []
    public square: Square

    constructor() {
        this.gameObjects.push(new Triangle,new Triangle,new Triangle)
        this.square = new Square()

        this.gameLoop()
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
        this.square.update()
        for (let o of this.gameObjects) {
            o.update()

            if (o instanceof Triangle) {
                if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                    console.log("collision detected!")
                }
            }
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
});