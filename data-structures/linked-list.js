// Linked Lists
// In a linked list, each item contains a reference to the item that follows it.
// HEAD and TAIL
// We can start from the beginning of the list, the head, and iterate through all the items of the list, until we reach the end (the tail).
// We can’t reference an item in the middle of the list, without starting from the beginning, as we don’t know how to reference it.
// JavaScript does not have an implementation of linked lists, so we will create one now.

class Item {
  next = null
  value = null
  constructor(value) {
    this.value = value
  }
}

// We have a pointer to the next item in the list, and the value.
class LinkedList {
	#head = null
	#tail = null
	append = (value) => {
		const item = new Item(value)
		if (!this.#head) {
			this.#head = item
			this.#tail = item
			return
		}
		this.#tail.next = item
		this.#tail = item
	}
	size = () => {
		let count = 1
		let item = this.#head
		if (!item) return 0
		while ((item = item.next)) {
			count++
		}
		return count
	}
	find = (value) => {
		let count = 1
		let item = this.#head
		if (!item) return null
		while ((item = item.next)) {
			if (item.value === value) {
				return item
			}
		}
		return null
	}
	insert = (index, value) => {
		//check for out-of-bounds values
		if (index < 0 || index > this.size()) return

		const node = new Item(value)
		let current = this.#head
		let previous

		if (index === 0) {
			//first position
			node.next = current
			this.#head = node
		} else {
		let i = 0
			while (i++ < index) {
				previous = current
				current = current.next
			}
			node.next = current
			previous.next = node
		}
	}
}

// Usage
const list = new LinkedList()
list.size() //0
list.append(1)
list.size() //1
list.append(2)
list.append(3)
list.size() //3
const item = list.find(2) //item.value === 2

// Another type of linked list is the double linked list, where each item contains a link to the previous element, too.