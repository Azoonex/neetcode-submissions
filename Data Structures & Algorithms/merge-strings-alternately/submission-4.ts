class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        if (word1.length === 0) return word2;
        if (word2.length === 0) return word1;
        return word1[0] + word2[0] + this.mergeAlternately(word1.slice(1), word2.slice(1));
    }
}
