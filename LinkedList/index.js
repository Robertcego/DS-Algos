class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (data) {
      this.push(data);
    }
  }
  push(data) {
    const node = {
      data,
      next: null,
    };
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node.data;
  }
  shift() {
    if (this.length === 0) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node.data;
  }
  unshift(data) {
    const node = {
      data,
      next: this.head,
    };
    if (this.length === 0) {
      this.tail = node;
    }
    this.head = node;
    this.length++;
  }
  remove(data) {
    const current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current;
        }
      }
    }
  }
}

let newLL = new LinkedList();
newLL.push(1);
console.log(newLL);
