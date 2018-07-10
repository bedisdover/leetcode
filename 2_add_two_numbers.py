# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(0)
        current = result
        carry = 0
        while l1 and l2:
            current.next = ListNode((l1.val + l2.val + carry) % 10)
            carry = (l1.val + l2.val + carry) // 10
            current = current.next

            l1 = l1.next
            l2 = l2.next

        if not l1 and not l2 and carry:
            current.next = ListNode(carry)

        if l1:
            l1 = self.addTwoNumbers(l1, ListNode(carry)) if carry else l1
            current.next = l1
        elif l2:
            l2 = self.addTwoNumbers(l2, ListNode(carry)) if carry else l2
            current.next = l2

        return result.next


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __str__(self) -> str:
        return str(self.val) + ('->' + str(self.next))


a1 = ListNode(4)
# a2 = ListNode(9)
# a3 = ListNode(3)
# a4 = ListNode(1)
# a1.next = a2
# a2.next = a3
# a3.next = a4

b1 = ListNode(7)
b2 = ListNode(3)
# b3 = ListNode(4)
b1.next = b2
# b2.next = b3

s = Solution()
print(s.addTwoNumbers(a1, b1))
