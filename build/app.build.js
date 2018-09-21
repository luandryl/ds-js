/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class BinarySearchTree {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = BinarySearchTree;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class HashTable {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = HashTable;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Stack;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_structures_BST_BinarySearchTree__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_structures_Stack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_structures_HashTable__ = __webpack_require__(1);





const user = {
    name: 'Archer',
    email: 'archer@test.com',
    _id: 3
}

const user1 = {
    name: 'Batman',
    email: 'batman@test.com',
    _id: 2
}

const user2 = {
    name: 'Luke',
    email: 'luke@test.com',
    _id: 4
}
const user3 = {
    name: 'dirLUKE',
    email: 'luke@test.com',
    _id: 8
}

console.log("Create BST")
const userList = new __WEBPACK_IMPORTED_MODULE_0__data_structures_BST_BinarySearchTree__["a" /* default */]()
userList.add(user)
userList.add(user1)
userList.add(user2)
userList.add(user3)
userList.inOrder()

let a = userList.search(user3)
console.log("\n Search a user =>", user3 ," \n Found =>", a, "\n")
console.log("Remove element =>", user)
userList.remove(user)
userList.inOrder()
console.log("\n\n")


console.log("Create Stack")
const userStack = new __WEBPACK_IMPORTED_MODULE_1__data_structures_Stack__["a" /* default */]() 
userStack.push(user)
userStack.push(user1)
userStack.push(user3)
let b = userStack.search(user1)
userStack.display()
console.log("\n",user1, " => this element Exists on stack? (0/1): "+ b)



const userc = {
    name: 'Luan',
    email: 'Luan@test.com',
    _id: 3
}

const hs = new __WEBPACK_IMPORTED_MODULE_2__data_structures_HashTable__["a" /* default */](200);
hs.insertHash(user)
hs.insertHash(user1)
hs.insertHash(user2)
hs.insertHash(userc)
hs.printHash()
console.log("\n Remove user => ", user1)
hs.removeHash(user1)
hs.printHash()



/***/ })
/******/ ]);