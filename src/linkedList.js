const createNode = (data) => ({
    data,
    next: null
})

const LinkedList =() => ({
    head: null,
    tail: null,
    toArray() {
        const arr = [];
        let currentNode = this.head
        while (currentNode){
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        return arr;
    },
    addFirst(d) {
        if(!d) return this
        const node = createNode(d)
        const newNode = node
        newNode.next = this.head
        this.head = newNode
        if( !this.tail ){
            this.tail = newNode;
        }
        return this;
    },
    addLast(d) {
        if(!d) return this
        const node = createNode(d)
        if( !this.head || !this.tail ){
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    },
    removeFirst() {
        if(this.head){
            this.head = this.head.next
            return this
        } else {
            throw new Error("List don't have elements")
        }
    },
    removeLast() {
        if(this.tail){
            let prevNode = this.head;
            let currentNode = this.head
            while (currentNode.next) {
                prevNode = currentNode
                currentNode = currentNode.next
            }
            this.tail = prevNode;
            return this
        } else {
            throw new Error("List don't have elements")
        }
    },
    getFirst() {
        if (!this.head) return null
        return this.head.data;
    },
    getLast() {
        if (!this.tail) return null
        return this.tail.data;
    },
    getLength() {
        if(!this.head) return 0
        const arr = [];
        let currentNode = this.head
        while (currentNode){
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        return arr?.length;
    },
    clear(){
        this.head = null;
        this.tail = null;
    }
    
})

module.exports = {
    LinkedList : LinkedList,
    createNode
}

