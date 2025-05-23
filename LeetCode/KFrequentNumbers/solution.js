class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const tracker = {};
        const res = [];
        for(let num of nums){
            if(!tracker[num]) tracker[num] = 1;
            else tracker[num]++
        }

        const sorted = Object.entries(tracker).sort((a,b) => b[1] - a[1]);

        for(let i=0; i<k ; i++){
            res.push(sorted[i][0])
        }
        return res;
    }
}
