// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    let strUpper = str.split(" ").map(s=> s.charAt(0).toUpperCase().concat("",s.slice(1))).join("");
    return strUpper.length > 140 || strUpper.length === 0 ? false: "#".concat("",strUpper).split(" ").join("");
  }

//Alternative Solution by

function generateHashtag (str = "") {
  var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
  return !!str && hashtag.length <= 140 && hashtag
}
