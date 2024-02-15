export const createArray = (amount: number) => {
    
    let array = [];
    
    for (let i = 1; i <= amount; i++) {
      array.push(i);
    }

    return array
  }