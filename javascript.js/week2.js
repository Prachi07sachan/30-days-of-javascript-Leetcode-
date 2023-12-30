//day 8

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

/ 


//day9

var argumentsLength = function(...args) {
    return args.length;
};



//day 10

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


//day11

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



//day12

var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 +value2;
};

//day 13

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis)); 


 
}



//day14

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

