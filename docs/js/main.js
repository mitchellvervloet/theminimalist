"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        this.square = new Square();
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
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
    }
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this) || this;
        _this.speedLeft = 0;
        _this.speedRight = 0;
        _this.element = document.createElement("square");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(_this.element);
        _this.y = window.innerHeight - 60;
        _this.x = 0;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Square.prototype.update = function () {
        this.x = this.x + this.speedRight - this.speedLeft;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Square.prototype.getBounds = function () {
        return this.element.getBoundingClientRect();
    };
    Square.prototype.onKeyDown = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 10;
                break;
            case "ArrowRight":
                this.speedRight = 10;
                break;
            case "ArrowUp":
                console.log('jump!');
        }
    };
    Square.prototype.onKeyUp = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 0;
                break;
            case "ArrowRight":
                this.speedRight = 0;
                break;
        }
    };
    return Square;
}(GameObject));
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (go1, go2) {
        return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y);
    };
    return Util;
}());
var slowDown = (function () {
    function slowDown(square) {
        this.square = square;
    }
    slowDown.prototype.performBehaviour = function () {
        this.onSlowDown();
    };
    slowDown.prototype.onSpeedUp = function () {
        console.log("Not in this behaviour");
    };
    slowDown.prototype.onSlowDown = function () {
        console.log("Slow down");
    };
    return slowDown;
}());
var speedUp = (function () {
    function speedUp(square) {
        this.square = square;
    }
    speedUp.prototype.performBehaviour = function () {
        this.onSpeedUp();
    };
    speedUp.prototype.onSpeedUp = function () {
        console.log("Speed up");
    };
    speedUp.prototype.onSlowDown = function () {
        console.log("Not in this behaviour");
    };
    return speedUp;
}());
//# sourceMappingURL=main.js.map