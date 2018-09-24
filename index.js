fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      // return for (let i = 0; i < collection.length; i++){
      for (a in collection) {
        cb(collection[a])
      }
      return collection
    },

    map: function(collection, cb) {
      let arr = []
      for (a in collection) {
        arr.push(cb(collection[a]))
      }
      return arr
    },

    reduce: function(collection, cb, acc=0) {

      for (a in collection) {
        acc = cb(acc, collection[a], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (a in collection) {
        if (predicate(collection[a])) {
          return collection[a]
        };
      }
    },


    filter: function (collection, cb) {
      let arr = [];
      for (a in collection) {
        if (cb(collection[a])) {
          arr.push(collection[a])
        }
      }
      return arr
    },

    size: function(arr) {
      let counter = 0;
      for (a in arr) {
        counter++
      }
      return counter
    },

    first: function(arr, num = 1) {
      if (num == 1) {
        return arr[0]
      }
      let newArr = [];
      for (let i = 0; i < num; i++) {
          newArr.push(arr[i])
        }
      return newArr
    },

    last: function(arr, num = 1) {
      if (num == 1) {
        return arr[arr.length - 1]
      }
      let newArr = [];
      for (let i = 0; i < num; i++) {
          newArr.unshift(arr[arr.length - 1 - i])
        }
      return newArr
    },



    compact: function(arr) {
      let newArr = [];
      for (a in arr) {
        if (!!(arr[a])) {
          newArr.push(arr[a])
          // debugger
        }
      }
      return newArr

    },
    sortBy: function(array, cb) {
      let newArr = array.slice();
      newArr.sort(function(a, b) {
        return cb(a) - cb(b)
      });
      return newArr
    },

    unpack: function(receiver, arr) {
     for (let val of arr)
       receiver.push(val)
    },

    flatten: function(array, shallow, newArr=[]) {

      if (shallow) {
        for (let val of array){
          if(Array.isArray(val)){
            this.unpack(newArr, val)
          } else{
            newArr.push(val)
          }
        }
      } else {
        for (i in array) {
          if (typeof array[i] === 'number') {
            newArr.push(array[i])
          } else if (typeof array[i] === 'object') {
            this.flatten(array[i], false, newArr)
        }
      }
    }
      return newArr
    },


    uniq: function(array, isSorted = false, callback) {
         let arr = array.slice().sort()
         let answer = []
         let temp = 0
         for (a in arr){
           if (!!callback) {
             if (callback(array[a]) == 0){
               if(temp == 0){
                 temp = array[a]
               }
               if(array.indexOf(callback(array[a]) + temp) == parseInt(a)){
                 answer.push(array[a])
               }
             }
             else{
               if(array.indexOf(callback(array[a])) == parseInt(a)){
                 answer.push(array[a])
               }
             }
           }
           else {
             if(array.indexOf(array[a]) === parseInt(a)){
               answer.push(array[a])
             }
           }
         }
         return answer
       },

    keys: function(obj) {
      let newArr = [];

      for (a in obj) {
        newArr.push(a)
      }
      return newArr

    },

    values: function(obj) {
      let newArr = [];

      for (a in obj) {
        newArr.push(obj[a])
      }
      return newArr

    },

    functions: function(obj) {
      let answer = []
      for(a in obj){
        if(obj[a]){
          answer.push(a)
        }
      }
      return answer
    },

     giveMeMore: function() {
      return true
    },

}
})()

fi.libraryMethod()
