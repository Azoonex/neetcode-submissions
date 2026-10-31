class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();
        for (let key of nums) {
      if (!map.has(key)) {
        map.set(key, key);
      } else {
        return true;
      }
    }
    return false;
    }
}
