function reverseAnArrayOfNumbers(n, nums) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = nums[i];
    }
    
    const reversed = [];
    for (let i = result.length - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }

    console.log(reversed.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [123, 11, 99, 5]);