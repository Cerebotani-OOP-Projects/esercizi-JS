
let x = 50;
let y = 50;

class List {

    constructor(value) {
        this.payload = value; 
    }

    add(value) {
        if(this.next) {
            this.next.add(value);
        }
        else {
            x = x + 150;
            if(x >= screen.width) {
                x = 50;
                y += 50; 
            }
            value.style.left = x + "px";
            value.style.top = y + "px";
            this.next = new List(value);
            board.appendChild(value);
        }
    }

    forEach(action) {
        action(this.payload);
        if(this.next) 
            this.next.forEach(action);
    }

}

let board = document.getElementById("board");
let car = document.getElementById("car");
// console.log("ads")

let list = new List(car);

function addCar() {
    list.add(car.cloneNode(true));
}

function moveDown() {
    y += 100;
    list.forEach( (value) => {
        value.style.top = y + "px";
    })
}


