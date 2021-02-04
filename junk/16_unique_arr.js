function unique(arr) {
    let uniq = new Set();

    for( let value of arr ){
        uniq.add(value);
    }

    return uniq;

  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

let set = unique(values);

let sum = '';
for(let value of set){
    sum+= value+", ";
}

console.log(sum);