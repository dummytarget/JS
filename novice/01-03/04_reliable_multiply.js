class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  while (true) {
    
    try {
      if (Math.random() < 0.2) {
      return a * b; }
    } catch {
      throw new MultiplicatorUnitFailure("Klunk");
    }
  }
  
  
}

function reliableMultiply(a, b) {
  
  while(true){

    if (Math.random() < 0.2) {
      return a * b;
    } else {
      console.log('above 20%');
    }

  }
}

console.log(reliableMultiply(2, 8));
