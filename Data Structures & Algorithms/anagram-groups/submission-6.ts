class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

    for (const word of strs) {
        // مرتب کردن حروف کلمه به عنوان کلید (Key)
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(word);
    }

   
    const result: string[][] = [];
    for (const group of map.values()) {
        result.push(group.sort());
    }


    return result.sort((a, b) => a[0].localeCompare(b[0]));

    }   
}
