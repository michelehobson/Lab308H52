const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//EVERY

console.log('Every')
const greaterThanZero = function() {
    let arr = [...nums]
    arr.sort();
    if (arr[0] < 0) {
        console.log('One or more numbers are less than zero');
    }
    else {
        console.log('All numbers are greater than or equal to zero');
    }
    for (let a = 0; a < panagram.length; a++) {
        if (panagram[a].length < 8) {
            console.log('One or more words have less than eight characters');
            return;
        }
    }
    console.log('All of the words have at least eight characters');
}
greaterThanZero();

//FILTER
console.log('\nFilter')
console.log(nums.filter(value => value < 4))
console.log(panagram.filter(value => value.length % 2 === 0))

//FIND
console.log('\nFind')
console.log(nums.find(value => value % 5 === 0))
console.log(panagram.find(value => value.length > 5))

//FIND INDEX
console.log('\nFind Index')
console.log(nums.findIndex(value => value % 3 === 0))
console.log(panagram.findIndex(value => value.length < 2))

console.log('\nFor Each')
nums.forEach(element => {
    console.log(element * 3);
})
panagram.forEach(element => {
    console.log(element + '!');
})

console.log('\nMap');
nums.map(x => console.log(100 * x));
panagram.map(x => console.log(x.toUpperCase()));

console.log('\nSome');
const divisibleBySeven = (element) => element % 7 === 0;
console.log(nums.some(divisibleBySeven));

const hasAnA = (element) => element.includes('a');
console.log(panagram.some(hasAnA));

console.log('\nReduce');
console.log(nums.reduce(function (total, curElement) {return total + curElement}));
console.log(panagram.reduce(function (str, curElement) {return str + curElement}));

console.log('\nSort');
let sortNumbers = (a,b) => a-b;
let sortArray = [...nums];
console.log(sortArray.sort(sortNumbers));
console.log(sortArray.reverse(sortNumbers));

let sortWords = [...panagram];
sortWords = sortWords.map(e => e.toLowerCase());
console.log(sortWords.sort());
console.log(sortWords.reverse());

console.log('\nisPanagram');
let lowerCase = [...panagram];
lowerCase = lowerCase.map(e => e.toLowerCase());
const a_z = (element) => element.includes('a' && 'b' && 'c' && 'd' && 'e' && 'f' && 'g' && 'h' && 'i' && 'j' && 'k' && 'l' && 'm' 
                                          && 'n' && 'o' && 'p' && 'q' && 'r' && 's' && 't' && 'u' && 'v' && 'w' && 'x' && 'y' && 'z')
console.log(lowerCase.some(a_z));

console.log('\nWorking with Data')
const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

console.log('\nPrice < $10');
console.log(products.filter(products => products.price < 10));

console.log('\nSort by Product Name');
let sortFunction = function (prodName1, prodName2) {
    const p1 = prodName1.name.toLowerCase();
    const p2 = prodName2.name.toLowerCase();
    let result = 0;
    if (p1 > p2) {
        result = 1;
    } 
    else if (p1 < p2) {
        result = -1;
    }
    return result;
}
console.log(products.sort(sortFunction));
