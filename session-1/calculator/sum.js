function sum (args) {
  
    const inputs =  args.split(',')
    .map(arg => arg.trim())
    .filter(arg => arg !== '')
    .map(arg => parseInt(arg))
    .filter(arg => !!arg)
    
    return inputs.reduce((sum, input) => {
    sum = sum + input;
    return sum;
    }, 0);
  
}

module.exports = sum;