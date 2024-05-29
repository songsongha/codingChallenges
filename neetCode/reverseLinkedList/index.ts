
  // Definition for singly-linked list.
  export class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 
export const createLinkedListFromArray = (numArray: number []): ListNode | null => {
    if (numArray.length === 0) return null 
    let head = new ListNode(numArray[0])
    let current = head
    for (let i = 1; i< numArray.length; i++){
        current.next = new ListNode(numArray[i])
        current = current.next
    }
    return head
}

export const createArrayFromLinkedList = (head: ListNode | null): number[] => {
    if (!head) return []
    const arr: number[] = []
    let current: ListNode | null = head

    while (current !== null){
        arr.push(current.val)
        current = current.next
    }
    return arr
}
export const reverseList = (head: ListNode | null): ListNode | null => {
    if (!head) return null
    let newHead = new ListNode(head?.val)
    let current = head?.next
    while (current !== null){
        newHead = new ListNode(current?.val, newHead)
        current = current?.next
    }
    return newHead
};