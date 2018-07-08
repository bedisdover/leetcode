class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {}
        for i in range(len(nums)):
            complete = target - nums[i]
            if complete in map:
                return [map[complete], i]

            map[nums[i]] = i


s = Solution()
nums = [3, 2, 4]
print(s.twoSum(nums, 6))
