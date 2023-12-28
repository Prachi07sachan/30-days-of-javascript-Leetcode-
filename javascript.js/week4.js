//day 22
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) {
  return -1;
} else {
  return this[this.length - 1];
}
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/

//day 23
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((map, c)=>{
        const id=fn(c);
      map[id] ? map[id].push(c) : (map[id] = [c]);
      return map;
    },{});
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

//day 24
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a ,b) => fn(a) - fn(b));
};

//day 25
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map={},arrs=[...arr1,...arr2].map((e)=> map[e.id]={...map[e.id],...e})
   return [...Object.values(map)]
};

//day 26
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
       return arr;
   }
   
   let answer = [];
   
   arr.forEach(element => {
       if (n > 0 && Array.isArray(element)) {
           answer.push(...flat(element, n - 1));
       } else {
           answer.push(element);
       }
   });
   
   return answer; 
};

//day 27
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)){
      for(let i = 0;i< obj.length;i++){
         if(obj[i] ===null|| obj[i] ===0 || obj[i]===false||obj[i]===""){
            obj.splice(i,1);
            i--;
         }
         if(typeof obj[i]==='object'){
            compactObject(obj[i]);
         }
      }
   }
   else{
      for(const key in obj){
         if(obj[key]===null||obj[key]===0||obj[key]===false||obj[key]===""){
            delete obj[key];
         }
         if(typeof obj[key]==='object'){
            compactObject(obj[key]);
         }
      }

   }
   return obj;
};
//day 28
class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const item = { id: Math.floor(Math.random() * 1000), callback };
        
        if(this[eventName]) {
            this[eventName].push(item);
        }else {
            this[eventName] = [item];
        }
        return {
            unsubscribe: () => {
              	this[eventName] = this[eventName].filter(i => i.id !== item.id)  
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
          const result = [];
        
        if(!this[eventName]) {
            return result;
        }
		for (const item of this[eventName]) {
            result.push(item.callback(...args));
        }

        return result;
	
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

//day 29

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function() {
    return '[' + this.nums.toString() + ']';
};
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

//day 30

class Calculator {
	constructor(val) {
        this.val = val
	}

	add(val) {
        this.val += val
        return this
	}

	subtract(val) {
        this.val -= val
        return this
	}

	multiply(val) {
        this.val *= val
        return this
	}

	divide(val) {
        if (val === 0) throw "Division by zero is not allowed"
        this.val /= val
        return this
	}

	power(val) {
        this.val = Math.pow(this.val, val)
        return this
	}
    
	getResult() {
        return this.val
	}
}


