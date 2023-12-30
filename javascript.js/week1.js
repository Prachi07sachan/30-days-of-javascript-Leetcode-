// day1



var createHelloWorld = function() {
    
    return function(...args) {
        
    }
};


//day2


var createCounter = function(n) {
    
    return function() {
        
    };
};



//day3

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




//day4

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



//day5

var map = function(arr, fn) {
    const res = [];
 for (let i = 0; i < arr.length; i++) {
   res.push(fn(arr[i], i));
 }
 return res;
};

//day6

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

var reduce = function(nums, fn, init) {
    let val = init;
for (let i = 0; i < nums.length; i++) {
  val = fn(val, nums[i]);
}
return val;
};
