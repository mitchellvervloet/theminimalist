"use strict";
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.square = new Square(container);
        this.gameLoop();
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.square.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Square = (function () {
    function Square(parent) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
    }
    Square.prototype.update = function () {
        console.log("Hi, I'm a square.");
    };
    return Square;
}());
//# sourceMappingURL=main.js.map