// alert("Js is here")

const foods = ["pizza", "cheeseburger"];
console.log("Exersise 1 result:", foods);


console.log("Exercise 2 result", foods)

foods.unshift("taco")
console.log('Exercise 3 result:', foods);

favFood = foods[1];
console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, "tofu")
console.log('Exercise 5 result:', foods);

foods.splice(1, 1, "sushi", "cupcake")
console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1,3)
console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf("tofu")
console.log('Exercise 8 result:', soyIdx);

const allFoods = foods.join("->")
console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes("soup")
console.log("Exercise 10 result:", hasSoup);


const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter((nums, index) => {
    if (nums % 2 === 1) return nums;
})

console.log('Exercise 11:', "nums", nums)
console.log('Exercise 11 result:',"odds", odds);


const fizz = nums.filter((nums, index)=> {
    if (nums % 3 === 0) return nums; 

})
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);

const buzz = nums.filter((nums, index)=> {
    if (nums % 5 === 0) return nums;
})
console.log('  buzz:', buzz);

const fizzbuzz = nums.filter((nums, index) => {
    if (nums % 3 === 0 && nums % 5 === 0) return nums;
})
console.log('  fizzbuzz:', fizzbuzz);

console.log('Exercise 13 :');
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
console.log(numArrays)

const numList = numArrays[3]
console.log('Exercise 13 result:', numList);

const num = numArrays[2][1]
console.log('Exercise 14 result:', num);

let total = 0;
numArrays.forEach((numArrays)=>{
     numArrays.forEach((num)=>{total += num;});
});

console.log('Exercise 15 result:\n', total);

