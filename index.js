// // code your solution here
// * The function should receive 1 argument, an Array of JavaScript Objects
// * Each object has two properties: year and result
// * It should use find() to test each Object to see if the result is "W" — a win!
// * It should return the year when the win occurred (if it occurred at all!)
// * If no win is found, it should return, sadly, undefined

//This is the object the lab said to use:

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]


function superbowlWin(inputArray){
    const test = inputArray.find((element) => {return element.result === "W"})

    if(test){
        console.log("in if")
        return test.year;
    }
    else {return undefined}
 }

superbowlWin(record)

