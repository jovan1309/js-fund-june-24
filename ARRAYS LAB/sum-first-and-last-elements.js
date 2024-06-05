function sumFirstAndLastElements(nums) {
    const firstElement = nums[0];
    const lastElement = nums[nums.length - 1];
    const sum = firstElement + lastElement;
    console.log(sum);
}

sumFirstAndLastElements([20, 30, 40]);
sumFirstAndLastElements([5, 10]);
sumFirstAndLastElements([2]);