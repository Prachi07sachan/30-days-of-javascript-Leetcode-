//day 8
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    functions.reverse()
   return function(x){ 
 
     let result= x
   for(let i=0;i<functions.length;i++){
       result=functions[i](result)
   }
   return result;
}
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/ 


//day9
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
* argumentsLength(1, 2, 3); // 3
*/

//day 10
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled =false;
    return function(...args){
        if(!hasBeenCalled){
            hasBeenCalled =true;
            return fn(...args);        
        }
       }
	return function(...args){
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//day11
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache={};

    return function(...args) {
         //Generate a unique key based on the input arguments using JSON.stringify.
            const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        // If the result is not in the cache, calculate it using the original function (fn).
        cache[key] = fn(...args);
    
        return cache[key];
            }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
//day12
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 +value2;
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/
//day 13
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis)); 


 
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/

//day14
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
      let cancelled = false;

    const cancelFn = function () {
        cancelled = true;
    };
// setTimeout function is used to schedule the execution of a function after a specified time delay (t milliseconds).
    setTimeout(() => {
        if (!cancelled) {
            fn(...args);
        }
    }, t);

    return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *     console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
