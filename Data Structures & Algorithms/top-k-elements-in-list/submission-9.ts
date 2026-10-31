class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
      const map = new Map<number, number>();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    const asArray = Array.from(map.entries());
    console.log("asArray", asArray);

    const result = asArray.filter((item) => item[1] < k);

    asArray.sort((a, b) => b[1] - a[1]);
    console.log(result);

    return asArray.slice(0, k).map((item) => item[0]);
    }
}
