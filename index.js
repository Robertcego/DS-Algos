// ! Queue Data Structure in JavaScript

class Queue {
    constructor() {
        this.element = [];
    }
}

Queue.prototype.enqueue = function (element) {
    return this.element.push(element);
}

Queue.prototype.dequeue = function () {
    return this.element.unshift();

}

Queue.prototype.isEmpty = function () {
    return this.element.length === 0;
}


// Peek last element in the Queue
Queue.prototype.peek = function () {
    if (!this.isEmpty()) {
        return this.element[this.element.length - 1];
    }
}

Queue.prototype.size = function () {
    return this.element.length;
}


let q = new Queue();

for (let i = 0; i < 10; i++) {
   q.enqueue(i)

}


console.table(q.dequeue())
