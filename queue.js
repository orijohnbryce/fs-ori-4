

class Queue {
    constructor(){
        this.array = [];
    }

    enqueue(newElement){
        this.array.push(newElement);
    }

    dequeue(){
        return this.array.shift(); 
    }
}

const q = new Queue();

q.enqueue(50);
q.enqueue("david");
q.enqueue(90);

console.log(q.dequeue());

