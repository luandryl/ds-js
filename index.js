
import BST from './data_structures/BST/BinarySearchTree'
import STACK from './data_structures/Stack'
import HASHTABLE from './data_structures/HashTable'

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
const userList = new BST()
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
const userStack = new STACK() 
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

const hs = new HASHTABLE(200);
hs.insertHash(user)
hs.insertHash(user1)
hs.insertHash(user2)
hs.insertHash(userc)
hs.printHash()
console.log("\n Remove user => ", user1)
hs.removeHash(user1)
hs.printHash()

