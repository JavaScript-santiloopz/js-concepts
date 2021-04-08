// Queue

// Queues are similar to stacks, except the insertion point is different from the removal point.
// queues are First In, First Out (FIFO).

class Queue {
  #items = []
  enqueue = (item) => this.#items.splice(0, 0, item)
  dequeue = () => this.#items.pop()
  isempty = () => this.#items.length === 0
  empty = () => (this.#items.length = 0)
  size = () => this.#items.length
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.size() //3

queue.dequeue() //1
queue.dequeue() //2
queue.dequeue() //3

