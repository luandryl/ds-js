class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
/*
	todo:: refactor this._root prxy methods
*/
export default class BinarySearchTree {

    constructor () {
        this._root = null
        this.lenght = 0
    }

    add (e) {
			if (!e)
				console.log("You shold pass a object to this method")
			
			if (!this._root)
				this._root = new Node(e)
			else 
				this._insertNode(this._root, e)
			
			this.lenght++
		}
		
		_insertNode(root, e) {
			if (e._id < root.data._id) {
				if (!root.left) 
					root.left = new Node(e)
				else
					this._insertNode(root.left, e)
			} else {
				if (!root.right)
					root.right = new Node(e)
				else
					this._insertNode(root.right, e)
			}
		}

		search(e) {

			if (!e)
				console.log("You shold pass a object to this method")

			if (!this._root)
				return -1;
			else {
				if (this._root.data._id == e._id)
					return e;
				else 
					return this._searchNode(this._root, e)
			}
		}

		_searchNode (root, e) {
			
			if (e._id < root.data._id) {
				return (root.data._id !== e._id && root.left !== null) 
					? this._searchNode(root.left, e)
						: e
			} else {
				return (root.data._id !== e._id && root.right !== null) 
					? this._searchNode(root.right, e)
						: e
			}
		}

		remove (e) {
			if (!e)
				console.log("You shold pass a object to this method")
			else 
				this._removeNode(this._root, e)
			
				this.lenght--
		}

		_removeNode(root, e) {

			if (e._id < root.data._id) {
				root.left = this._removeNode(root.left, e)
				return root
			} else if (e._id > root.data._id){
				root.right = this._removeNode(root.right, e)
				return root
			} else {
				
				if (root.left === null && root.right === null) {
					root = null;
					return root;
				} 

				if (root.left === null) {
					root = root.right
					return root
				} else if (root.right === null) {
					root = root.left
					return root
				}

				const tmp = this._findMin(root.right)
				root.data = tmp.data
				root.right = this._removeNode(root.right, tmp.data)

				return root
			}
		}

		_findMin (root) {
			return (root.left === null) 
				? root 
					: this._findMin(root.left)			
		}

		_inO (root) {
			if (root){
				this._inO(root.left)
				console.log(root.data)
				this._inO(root.right)
			}
		}

		inOrder() {
			console.log("In Order")
			if (this._root)
				this._inO(this._root)
			else
				console.log("Empty Tree")
		}

		_preO (root) {
			if (root){
				console.log(root.data)
				this._preO(root.left)
				this._preO(root.right)
			}
		}

		preOrder() {
			console.log("Pre Order")
			if (this._root)
				this._preO(this._root)
			else
				console.log("Empty Tree")
		}

		_posO (root) {
			if (root){
				this._posO(root.left)
				this._posO(root.right)
				console.log(root.data)
			}
		}

		postOrder() {
			console.log("Post Order")
			if (this._root)
				this._posO(this._root)
			else
				console.log("Empty Tree")
		}
}