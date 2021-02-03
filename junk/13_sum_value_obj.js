let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

const sumSalary = (salary) => {
    let sum = 0;
    for (let value of Object.values(salaries)){
        sum+=value;
    }

    return sum;
}
  
  
  console.log(sumSalary(salaries));