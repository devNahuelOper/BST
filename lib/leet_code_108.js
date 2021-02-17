// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function sortedArrayToBST(nums) {
   if (!nums.length) return null;
   const midIdx = Math.floor(nums.length / 2);
   let root = new TreeNode(nums[midIdx]);
   root.left = sortedArrayToBST(nums.slice(0, midIdx));
   root.right = sortedArrayToBST(nums.slice(midIdx + 1));
   return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

// Runtime: 100 ms, faster than 26.11% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 43.9 MB, less than 6.60% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
