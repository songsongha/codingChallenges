// https://leetcode.com/problems/merge-two-sorted-lists/

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
const createLinkedListFromArray = (numArray: number []): ListNode | null => {
    if (numArray.length === 0) return null 
    let head = new ListNode(numArray[0])
    let current = head
    for (let i = 1; i< numArray.length; i++){
        current.next = new ListNode(numArray[i])
        current = current.next
    }
    return head
}

const createArrayFromLinkedList = (head: ListNode | null): number[] => {
    if (!head) return []
    const arr: number[] = []
    let current: ListNode | null = head

    while (current !== null){
        arr.push(current.val)
        current = current.next
    }
    return arr
}

const sortLinkedList = (head: ListNode | null): ListNode | null => {
    if (!head) return null
    // turn list into an array
    const array = createArrayFromLinkedList(head)
    // sort array
    array.sort()
    // turn back into an array
    return createLinkedListFromArray(array)

}
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    console.log({list1})
    console.log({list2})
    if (list1 === null && list2 === null) return null
    if (list1 === null) return sortLinkedList(list2)
    if (list2 === null) return sortLinkedList(list1)    
    // merge the two lists
    const head = list1
    let currentNode = head
    while (currentNode !== null){
        if (currentNode.next === null){
            currentNode.next = list2
            break
        } else {
            currentNode = currentNode.next
        }
    }
    return sortLinkedList(head)

    
};

const listOne = createLinkedListFromArray([])
const listTwo = createLinkedListFromArray([0])
console.log(createArrayFromLinkedList(mergeTwoLists(listOne,listTwo)))