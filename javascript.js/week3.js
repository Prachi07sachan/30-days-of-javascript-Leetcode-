//day 15
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    const intervalid =setInterval(() => fn(...args),t);
    return() => clearInterval(intervalid); 
};

//day 16
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
 
    return async function (...args) {

        const resolvePromise = new Promise((resolve) => resolve(fn(...args)));
        
        const rejectPromise = new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));

        return new Promise((resolve, reject) => {
            Promise.race([resolvePromise, rejectPromise]).then((res) => resolve(res)).catch((err) => reject(err))
        })

        
    }
}

//day 17
var TimeLimitedCache = function() {
    this.memory= new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let isthere=false;
    if(this.memory.has(key)){
        isthere=true;
        clearTimeout(this.memory.get(key)[1]);
    }
    const timeoutID=setTimeout(()=>{
        this.memory.delete(key);
    },duration)
    this.memory.set(key,[value,timeoutID]);
    return isthere;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.memory.has(key)) return this.memory.get(key)[0];
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.memory.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

//day 18
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;
   return function(...args) {
           clearTimeout(timeoutId);
            timeoutId =setTimeout(() => {
                fn.apply(this,args);
           }, t);
   
   };
};
//day 19
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {  
       const results = new Array(functions.length);
             let count = 0;
       functions.forEach((fn, i) => {
           fn()
           .then(val => {
               results[i] = val;
               count++;
               if(count === functions.length) resolve(results);
           })
           .catch(reason => reject(reason));
       });
       
   });


};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/

//day 20
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (const _ in obj){ 
        return false;
    }
    return true;
};

//day 21
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = []
  for(i=0; i<arr.length; i+=size) {
      result.push(arr.slice(i, i+size))
  }
  return result
};
