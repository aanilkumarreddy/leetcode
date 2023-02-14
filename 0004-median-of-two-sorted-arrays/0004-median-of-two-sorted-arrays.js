function findMedianSortedArrays(nums1, nums2) {
  // Determine the smaller of the two arrays and assign it to A
  let A, B;
  if (nums1.length <= nums2.length) {
    A = nums1;
    B = nums2;
  } else {
    A = nums2;
    B = nums1;
  }

  const m = A.length;
  const n = B.length;
  let leftA = 0;
  let rightA = m;
  const halfLen = Math.floor((m + n + 1) / 2);

  while (leftA <= rightA) {
    const midA = Math.floor((leftA + rightA) / 2);
    const midB = halfLen - midA;

    const leftAVal = (midA === 0) ? -Infinity : A[midA - 1];
    const rightAVal = (midA === m) ? Infinity : A[midA];
    const leftBVal = (midB === 0) ? -Infinity : B[midB - 1];
    const rightBVal = (midB === n) ? Infinity : B[midB];

    if (leftAVal <= rightBVal && leftBVal <= rightAVal) {
      // Median found
      if ((m + n) % 2 === 0) {
        // Even number of elements
        return (Math.max(leftAVal, leftBVal) + Math.min(rightAVal, rightBVal)) / 2;
      } else {
        // Odd number of elements
        return Math.max(leftAVal, leftBVal);
      }
    } else if (leftAVal > rightBVal) {
      // Move left in A
      rightA = midA - 1;
    } else {
      // Move right in A
      leftA = midA + 1;
    }
  }
}
