class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

export default class HashTable {

	constructor (size) {
		if (size) {
			this._MAXSIZE = size
			this._HashTable = []
			this._lenght = 0
		} else {
			console.error("Size");
		}
	}

	_hashFunction (e) {
		if (e) {
			return (e._id%this._MAXSIZE)
		} else {
			console.error("Element");
		}
	}

	insertHash (e) {
		const hashCode = this._hashFunction(e)
		let node = this._HashTable[hashCode]
		
		while (node) 
			node = node.next;

		if (!node) {
			node = new Node(e)
			node.next = this._HashTable[hashCode]
			this._HashTable[hashCode] = node
		}
		this._lenght++
	}

	printHash () {
		for (let i = 0; i < this._MAXSIZE; i++) {
			if (this._HashTable[i] != null) {
				console.log("\n ["+ i +"] ->", this._HashTable[i].data)
				let tmp = this._HashTable[i].next
				while(tmp) {
					console.log("\t->", tmp.data)
					tmp = tmp.next;
				}
			}
		}
	}

	removeHash (e) {

		const hashCode = this._hashFunction(e)
		let node = this._HashTable[hashCode]
		let prev = null

		if (node) {

			while(node && node.data._id !== e._id) {
				prev = node
				node = node.next
			}

			if (!prev) {
				this._HashTable[hashCode] = node.next;
			} else if (!node.next) {
				prev.next = null
			} else {
				prev.next = node.next
				node = null;
			}

		} else {
			console.log("Element not founded")
		}

		this._lenght--;
	}

}
