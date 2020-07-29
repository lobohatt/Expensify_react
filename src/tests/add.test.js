const add = (a,b) => a+b;

test('should add two numbers',()=>{
  const result = add(3,4);
  expect(result).toBe(7);
});

/*test('should add two numbers',()=>{
  const result = add(3,4);

  if(result !== 7){
    throw new Error(`You added 4 & 3. The result was ${result}. Expect 7`)
  }
});*/