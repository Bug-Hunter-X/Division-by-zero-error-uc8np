function add(a, b) { return a + b; } function sub(a, b) { return a - b; } function mul(a, b) { return a * b; } function div(a, b) { if (b === 0) { throw new Error('Division by zero'); } return a / b; } let result = div(10, 0); console.log(result);