// day1


/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//day2

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//day3
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};



/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

//day4
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    c = i = init

   function increment() {
       return ++c
   }

   function decrement() {
       return --c
   }

   function reset() {
       return c = i
   }
   return {increment, decrement, reset} 
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

//day5
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
 for (let i = 0; i < arr.length; i++) {
   res.push(fn(arr[i], i));
 }
 return res;
};

//day6
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = [];
 for(let i=0; i<arr.length;i++){
    if(fn(arr[i], i)){
        newArray.push(arr[i]);
    }
 }
 return newArray; 
};

//day7
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
for (let i = 0; i < nums.length; i++) {
  val = fn(val, nums[i]);
}
return val;
};
