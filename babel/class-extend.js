var util = require('util')

class Character {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }

    damage() {
        this.health_ -= 10;
    }

    getHealth() {
        return this.health_
    }

    toString() {
        return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    }
}

class Player extends Character {
    constructor(x,y,name) {
        super(x,y);
        this.name = name
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    toString() {
        return 'name: ' + this.name + ' ' + super.toString();
    }
}

var [x,y,name] = process.argv.slice(2)
var char = new Character(+x,+y);
char.damage();
console.log(char.toString());
var player = new Player(+x,+y,name);
player.damager();
player.move(7,8);
console.log(player.toString());
