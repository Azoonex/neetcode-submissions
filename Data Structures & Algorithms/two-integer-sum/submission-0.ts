class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
           const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let neededNumber = target - nums[i];
      if (map.has(neededNumber)) {
        return [i, map.get(neededNumber)];
      }
      map.set(nums[i], i);
    }
    return [];
    }
}
