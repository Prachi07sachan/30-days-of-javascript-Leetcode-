//day 22

Array.prototype.last = function() {
    if (this.length === 0) {
  return -1;
} else {
  return this[this.length - 1];
}
};


//day 23

Array.prototype.groupBy = function(fn) {
    return this.reduce((map, c)=>{
        const id=fn(c);
      map[id] ? map[id].push(c) : (map[id] = [c]);
      return map;
    },{});
};
/

//day 24

var sortBy = function(arr, fn) {
    return arr.sort((a ,b) => fn(a) - fn(b));
};

//day 25

var join = function(arr1, arr2) {
    let map={},arrs=[...arr1,...arr2].map((e)=> map[e.id]={...map[e.id],...e})
   return [...Object.values(map)]
};

//day 26

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


