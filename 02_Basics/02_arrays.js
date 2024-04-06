const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// // best method of concatenate is using spread operator

// const all_new_Heroes = [...marvel_heros,...dc_heros]
// console.log(all_new_Heroes);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// // For making new array of all elements(included array inside array)
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("Akshay"));   // give boolean value
// console.log(Array.from("Akshay"));   // make array of the string "akshay"
// console.log(Array.from({name: "Akshay"}));  // not possible, so it give blank [] as output


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
