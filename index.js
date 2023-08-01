//write a function take array of integar and return sum of all number 

//Approch 1

const sumOfAllNumber = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }

    return sum;
}

const sum = sumOfAllNumber([1, 4, 7, 8, 9]);
console.log(sum);

//Approch 2

const sumOfAllNumberSecoundApproch = (nums) => {
    const sum = nums.reduce((num, sum) => {
        return num + sum
    })

    return sum;
}

console.log(sumOfAllNumberSecoundApproch([1, 4, 7, 8, 9]))
