// like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  let r = names.length-2;
  if(names.length === 0){return "no one likes this"};
  if(names.length > 3){return  names[0] + ", " + names[1] + " and " + r + " others like this"};
  if(names.length === 3){return  names[0] + ", " + names[1] + " and " + names[2] + " like this"};
  return names.length === 2 ?  names[0] + " and " + names[1] + " like this"  : names[0] + " likes this";                 
}
