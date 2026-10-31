class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const countMap = new Map<string, number>();

        for (const char of s) {
            countMap.set(char, (countMap.get(char) ?? 0) + 1);
        }
        for (const char of t) {
            const count = countMap.get(char);
            if (!count) return false;
            countMap.set(char, count - 1);
        }
        return true;
    }
}
