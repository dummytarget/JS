let user = {
    name: 'John',
    age: 30
  };

const countKeys = (keys) => {
    return Object.keys(keys).length;
}

console.log(countKeys(user));