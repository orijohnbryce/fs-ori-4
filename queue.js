

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

    peek(){
        return this.array[0];
    }

    isEmpty(){
        return this.array.length === 0;
    }

    size(){
        return this.array.length;
    }
}

const q = new Queue();

q.enqueue(50);
q.enqueue("david");
q.enqueue(90);

console.log(q.isEmpty());

