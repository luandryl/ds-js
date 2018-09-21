class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

export default class Stack {

	constructor () {
		this._top = null;
		this.lenght = 0;
	}

	push (e) {
		if(!e)
			console.log("You shold pass a object to this method")
		
		if (this._top) {
			const newNode = new Node(e)
			newNode.next = this._top
			this._top = newNode
		} else {
			this._top = new Node(e)
		}
		this.lenght++;
	}

	pop() {
		if (this._top) {
			const tmp = this._top
			const ele = tmp.data
			this._top = tmp.next
			this.lenght--;
			return ele

		} else{
			console.log("Empty Stack");
		}
	}

	display() {
		if (this._top) {
			let iterable = this._top

			while(iterable) {
				console.log(iterable.data)
				iterable = iterable.next
			}

		} else {
			console.log("Empty Stack");
		}
	}

	search(e) {
		if(!e)
			console.log("You shold pass a object to this method")
		
		if (this._top) {
			let iterable = this._top

			while(iterable && iterable.data !== e)
				iterable = iterable.next
			
			if (iterable)
				return 1
			else
				return -1
		}
		else 
			console.log("Empty Stack");
	}

}