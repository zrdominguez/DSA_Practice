/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function DFS(p, q){
            if(!p && !q) return true
            if(!p || !q || p.val != q.val) return false
            return DFS(p.left, q.left) && DFS(p.right, q.right)
        }
        return(DFS(p,q))
    }
}
