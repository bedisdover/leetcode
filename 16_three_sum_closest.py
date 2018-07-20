class Solution:
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if len(nums) < 3:
            return 0

        nums.sort()
        ret = sum(nums[0:3])
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            l = i + 1
            r = len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s > target:
                    if abs(s - target) < abs(ret - target):
                        ret = s
                        r -= 1
                    else:
                        break
                elif s < target:
                    if abs(s - target) < abs(ret - target):
                        ret = s
                        l += 1
                    else:
                        break
                else:
                    return target

        return ret


s = Solution()
# print(s.threeSumClosest([-1, 2, 1, -4], 1))
# print(s.threeSumClosest([0, 2, 1, -3], 1))
print(s.threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82))
