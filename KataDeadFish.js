// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse( data )
{
  let value = 0;
  let array = [];
  
  for(let i = 0; i < data.length; i++) {
      switch(data.charAt(i))
      {
        case 'i':
            value+=1;
            break;
        case 'd':
            value-=1;
            break;
        case 's':
          value*=value;
            break;
        case 'o':
            array.push(value);
            break;
      }
  };
  
  return array;
    
}
