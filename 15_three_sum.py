class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        ret = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            l = i + 1
            r = len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s > 0:
                    r -= 1
                elif s < 0:
                    l += 1
                else:
                    triplet = [nums[i], nums[l], nums[r]]
                    ret.append(triplet)
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while r > l and nums[r] == nums[r - 1]:
                        r -= 1
                    l += 1
                    r -= 1

        return ret


s = Solution()
# print(s.threeSum([-1, 0, 1, 2, -1, -4]))
# print(s.threeSum([0, 0, 0, 0]))
# print(s.threeSum([-2, 0, 1, 1, 2]))
print(s.threeSum([-1, 0, 1, 2, -1, -4]))
