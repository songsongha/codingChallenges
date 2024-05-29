import { ListNode, reverseList, createLinkedListFromArray, createArrayFromLinkedList } from "./index"



describe("reverseList", () => {
    it('should return the correct reverse List when there are more than 2 entries', () => {
    const head = createLinkedListFromArray([1,2,3,4,5])
      expect(createArrayFromLinkedList(reverseList(head))).toStrictEqual([5,4,3,2,1])
    });
    it('should return the correct reverse List when there are only 2 entries', () => {
        const head = createLinkedListFromArray([1,2])
          expect(createArrayFromLinkedList(reverseList(head))).toStrictEqual([2,1])
        });
    it('should return an empty array if head does not exist', () => {
        const head = null
            expect(createArrayFromLinkedList(reverseList(head))).toStrictEqual([])
        });

});