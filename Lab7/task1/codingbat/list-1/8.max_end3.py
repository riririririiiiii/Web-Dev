def max_end3(nums):
  greatest = max(nums[0], nums[2])
  nums[0] = greatest
  nums[1] = greatest
  nums[2] = greatest
  return nums