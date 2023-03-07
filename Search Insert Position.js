/*
Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
Constraints:

1 <= nums.length <= 104

-104 <= nums[i] <= 104

nums contains distinct values sorted in ascending order.

-104 <= target <= 104


*/

const nums = [1,3,5,6];

const target = 7;

function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // 2 // 0
    if (nums[mid] === target) { //nums[2] = 3, target =2, 3==2, 1 --2
      return mid;
    } else if (nums[mid] < target) { // 3 < 2, 1 < 2
      start = mid + 1; // start = 0 + 1 = 1
    } else { // 3 > 2
      end = mid - 1; // 2 -1, end = 1, start = 0 , end =1 
    }
  }
  return start;
}

console.log(searchInsert(nums, target));
