// Task 1: forEach()
let favoriteCities = ["Chicago", "Taos", "Saint Louis", "Bentonville", "Dallas"];
favoriteCities.forEach(city => {
    console.log(city.toUpperCase()); // Output: CHICAGO, TAOS, SAINT LOUIS, BENTONVILLE, DALLAS
});

// Task 2: map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Task 3: filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores); // Output: [85, 90, 100]

// Task 4: find() & findIndex()
let favortieFood = ["Creme Brulee", "Chicken Marsala", "Tave Kosi", "Salsa Verde Grilled Cheese", "Gyros", "Kabob"];
// Use find()
let foodWithMore = favortieFood.find(food => food.length > 4);
// Use findIndex() 
let indexOfFood = favortieFood.findIndex(food => food === foodWithMore);
console.log(foodWithMore); // Output: Creme Brulee
console.log(indexOfFood); // Output: 0