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
        var _this = this;
        this.gameObjects = [];
        this.lives = 3;
        this.paused = false;
        this.score = 0;
        this.gameObjects.push(new Triangle, new Triangle, new Triangle);
        this.square = new Square();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.scoreUp();
        this.gameLoop();
    }
    Game.prototype.onKeyDown = function (event) {
        switch (event.key) {
            case "Escape":
                if (this.paused) {
                    this.paused = false;
                }
                else {
                    this.paused = true;
                }
                break;
        }
    };
    Game.prototype.scoreUp = function () {
        var _this = this;
        setInterval(function () {
            if (!_this.paused) {
                _this.score++;
            }
            console.log("score = " + _this.score);
        }, 1000);
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        if (!this.paused) {
            if (this.lives > 0) {
                this.square.update();
                for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                    var o = _a[_i];
                    o.update();
                    if (o instanceof Triangle) {
                        if (Util.checkCollision(this.square.getBounds(), o.getBounds())) {
                            o.reset();
                            this.lives--;
                        }
                    }
                }
            }
            else {
                this.paused = true;
                console.log("game over");
            }
        }
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
var Square = (function () {
    function Square() {
        var _this = this;
        this.speedLeft = 0;
        this.speedRight = 0;
        this.velocityX = 4;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.onTheGround = false;
        this.width = 60;
        this.height = 60;
        this.element = document.createElement("square");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.positionY = window.innerHeight - this.height;
        this.positionX = 0;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Square.prototype.update = function () {
        this.positionX = this.positionX + this.speedRight - this.speedLeft;
        this.velocityY += this.gravity;
        this.positionY += this.velocityY;
        this.movement();
        this.element.style.transform = "translate(" + this.positionX + "px, " + this.positionY + "px)";
    };
    Square.prototype.movement = function () {
        if (this.positionX < 0) {
            this.positionX = 0;
        }
        if ((this.positionX + this.width) > window.innerWidth) {
            this.positionX = (window.innerWidth - this.width);
        }
        if (this.positionY > (window.innerHeight - this.height)) {
            this.positionY = window.innerHeight - this.height;
            this.velocityY = 0.0;
            this.onTheGround = true;
        }
        if (this.positionY < 0) {
            this.positionY = 0;
            this.velocityY = 0.0;
        }
    };
    Square.prototype.startJump = function () {
        if (this.onTheGround) {
            this.velocityY = -30.0;
            this.onTheGround = false;
        }
    };
    Square.prototype.endJump = function () {
        if (this.velocityY < -6.0) {
            this.velocityY = -6.0;
        }
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
                if (this.onTheGround) {
                    this.startJump();
                }
                break;
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
            case "ArrowUp":
                this.endJump();
                break;
        }
    };
    return Square;
}());
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        _this.width = 50;
        _this.height = 50;
        _this.element = document.createElement("triangle");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(_this.element);
        _this.speed = Math.floor(Math.random() * (10 - 3 + 1)) + 10;
        _this.positionX = window.innerWidth;
        _this.positionY = Math.random() * (window.innerHeight - _this.height);
        return _this;
    }
    Triangle.prototype.update = function () {
        this.positionX = this.positionX - this.speed;
        if ((this.positionX + this.width) < 0) {
            this.reset();
        }
        this.element.style.transform = "translate(" + this.positionX + "px, " + this.positionY + "px)";
    };
    Triangle.prototype.getBounds = function () {
        return this.element.getBoundingClientRect();
    };
    Triangle.prototype.reset = function () {
        this.positionX = window.innerWidth;
        this.positionY = Math.random() * (window.innerHeight - this.height);
    };
    return Triangle;
}(GameObject));
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
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