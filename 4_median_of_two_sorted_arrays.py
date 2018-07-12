class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        m = len(nums1)
        n = len(nums2)

        if m == 0:
            return nums2[n // 2] if n % 2 == 1 else (nums2[n // 2] + nums2[n // 2 - 1]) / 2
        if n == 0:
            return nums1[m // 2] if m % 2 == 1 else (nums1[m // 2] + nums1[m // 2 - 1]) / 2

        a = b = 0
        while a + b < (m + n - 1) // 2:
            if nums1[a] <= nums2[b]:
                if a < m - 1:
                    a += 1
                elif b < n - 1:
                    b += 1
            else:
                if b < n - 1:
                    b += 1
                elif a < m - 1:
                    a += 1

        print([a, b])

        if (m + n) % 2 == 0:
            if a == m - 1 and b != n - 1:
                return (nums2[b] + min(nums1[a], nums2[b + 1])) / 2
            elif b == n - 1 and a != m - 1:
                return (nums1[a] + min(nums2[b], nums1[a + 1])) / 2
            else:
                return (nums1[a] + nums2[b]) / 2
        else:
            return min(nums1[a], nums2[b])


s = Solution()
nums1 = [1]
nums2 = [2, 3]
print(s.findMedianSortedArrays(nums1, nums2))
