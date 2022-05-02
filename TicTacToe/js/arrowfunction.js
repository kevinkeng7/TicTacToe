function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You cancelled the excecution."); }
);

//The above function can be written with an arrow function '=>' to replace the function() 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree???",
    () => alert("You agreed!!!"),
    () => alert("You canceled the execution!!!")
);

// .Some() Method --> below

var ages = [2, 10, 18, 20, 13, 15, 30];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age => 18;

function myFunction() {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById("displayAge").innerHTML = ages.some(checkAge);
}
