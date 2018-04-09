function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node('head');
    this.find = function (item) {
        let curNode = this.head;
        while (curNode.element != item) {
            curNode = curNode.next;
        }
        return curNode;
    };
    this.insert = function (newEl, item) { 
        let newNode = new Node(newEl);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
     };
    this.remove = remove;
    this.display = function () { 
        let curNode = this.head;
        while(curNode.next != null){
            console.log(curNode.next.element);
            curNode = curNode.next;
        }
     };
}