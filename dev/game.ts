class Game {

    public static instance: Game
    private square: Square
    
    constructor() {
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
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
});