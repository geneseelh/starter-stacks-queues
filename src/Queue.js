// Creates a node containing the data and a reference to the next item
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }
}

enqueue(value) {
    const newNode = new Node(value);

    if (this.first){
        this.last.next = newNode;
    } else {
        // set the node of the queue's next pointer to be the new node
        this.first = newNode;
    }

    //make the new node the last item in the queue
    this.last = newNode;
}

dequeue() {
    // if the queue is empty, there is nothing to dequeue
    if (this.first){
        // save the first node so we can return it
        const dequeued = this.first;

        // set the queue's first pointer to the next node/element in the queue
        this.first = dequeued.next;

        // if the dequeued node is the last in the queue
        if (dequeued === this.last){
            // update the last pointer to point to null
            this.last = null;
        }
        // return the value of the dequeued node
        return dequeued.value;
    }
}