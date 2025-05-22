class Stack {
    constructor(maxSize=Infinity) {
        this.maxSize = maxSize;
        this.array = new Array()
    }

    push (newElement){
        if (this.array.length >= this.maxSize)
            throw new Error("Stack size limit reached");            
        this.array.push(newElement);
    }

    pop (){
        if (this.array.length === 0)
            throw new Error("Stack is empty");            
        return this.array.pop()
    }           

    peek(){
        // if (this.array.length >= 1)
        return this.array[this.array.length - 1];
    }

    isEmpty(){
        return this.array.length === 0;
    }
    size(){
        return this.array.length;
    }
}   