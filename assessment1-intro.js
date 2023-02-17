// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE

let string = "Hello"
const string1 = "World"
let number = 1
const number1 = 2
let boolean = true
const boolean1 = false

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE

let codingLanguages = ["Java", "Python", "JavaScript", "Swift"]

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE

codingLanguages[2]

/*
    Copy the array using one of the arrays built in functions, and call it 'codingLanguage2.'
*/

//CODE HERE

let codingLanguage2 = codingLanguages.slice(0, codingLanguages.length)
// console.log(codingLanguage2)

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE

codingLanguage2.push("C++")
// console.log(codingLanguage2)

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop()


/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift()

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE

instruments.unshift("guitar")

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2,1,"glockenspiel")
// console.log(instruments)

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE

if(num % 2 === 0){
    console.log(num)
}else{
    console.log("num is not an even number")    
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

if(score <= 10){
    console.log("Failed")
} else if(10 < score && score <41){
    console.log("The grade is C")
} else if(score >= 41 && score < 71){
    console.log("The grade is B")
} else {
    console.log("The grade is A.")
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0
for(let i=0; i < price.length; i++){
    totalPrice += price[i]
}
// console.log(totalPrice)
/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

totalPriceAverage = totalPrice / price.length

console.log(totalPriceAverage)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE

for(i=0; i < colors.length; i++){
    if(colors[i] === "red"){
        console.log("apple")
    } else if (colors[i] === "green"){
        console.log("melon")
    } else if (colors[i] === "yellow"){
        console.log("banana")
    } else {
        console.log("Something is wrong")
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    deciding what is needed, how it will be used, who is needed
    -- Analysis of Requirements
    breaking down the plan to see exactly what is needed, gather the actual things needed, focusing on what the goal of the project is
    -- Design
    Setting up a basic layout for the project, making it look appealing
    -- Implementation
    Building the actual code for the project. Making it actually happen
    -- Testing & Integration
    solving the bugs and problem, testing the project or app on the actual device, QA
    -- Maintain
    fixing random bugs, adding updates if necessary
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        version control
        -- github
        a website to store gits in a cloud
        -- git init
        initializes a directory as a git repository
        -- git clone
        copies a git
        -- git status
        to check the status of a git, if it is ready 
        -- git add
        add a file to the staging area to be ready to commit it
        -- git commit
        actually commits the git to the repository git commit -m "message"
        -- git push
        pushes a copy of your repository to github
    - How to push git to github
    build repository in github
    check directory
    git init
    git add (name)(or just . which will add everything)
    git commit -m (message)
    copy lines from github

    following commits
    git add . 
    git commit -m "add changes"
    git push
*/

