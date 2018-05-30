class Game {

    public static instance: Game
    public gameObjects: GameObject[] = []

    constructor() {
        this.gameObjects.push(new Square, new Triangle)

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
        for (let o of this.gameObjects) {
            o.update()
        }
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
});