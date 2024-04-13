const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let array = getRandomArray(); array.forEach(item => console.log(item));
true / grape

const deepClone = obj => JSON.parse(JSON.stringify(obj));
apple

const formatDate = date => new Date(date).toLocaleDateString();
grape

const isPalindrome = str => str === str.split("").reverse().join("");
const removeDuplicates = array => Array.from(new Set(array));
const findSmallestNumber = numbers => Math.min(...numbers);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
kiwi


const greet = name => `Hello, ${name}!`;
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
kiwi

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const filterEvenNumbers = numbers => numbers.filter(isEven);
kiwi

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
true + 65,39,90,41,69,10,40,27,5,62,92,80,41,25,11,19,43,99,55,66,30,43,25,86,93,13,81,99,84,67,0,3,19,7,0,92,38,16,69,29,11,2,55,16,11,80,58,43,5,17,67,24,37,46,68,10,21,67,18,25,52,36,92,85,54,66,98,40,8,50,91,66,78,61,59,87,7,87,67,52,90,81,30,29,17,83
const squareRoot = num => Math.sqrt(num);
31,80,37,69,13,60,70,1,53,68,13,61,57,55,60,80,48,29,74,47,64,68,60,56,14,86,16,19,6,74,43,59,29,32,56,48,65,14,43,16 / 34
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

grape

const randomNumber = getRandomNumber();
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
orange

const findSmallestNumber = numbers => Math.min(...numbers);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
orange


const isPalindrome = str => str === str.split("").reverse().join("");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
true - kiwi
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sum = (a, b) => a + b;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const getUniqueValues = array => [...new Set(array)];
const formatDate = date => new Date(date).toLocaleDateString();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
false - orange
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

grape / apple
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const formatDate = date => new Date(date).toLocaleDateString();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
