// 1st page - START BUTTON (initiates game, begins timer)
    // Create buton & function to start the game (large start button)


// 2nd page - QUESTIONNAIRE
    // Create a var for time clock
        // Include countdown timer
    // Create var'S for the answers
        // Need to link each var to the divs in html
    // Create FORM
        // Limit to no more than 1 answer per question
$(document).ready(function() {
    console.log("ready test");
});
    var timeRemaining=30;

    var counter=setInterval(timer, 1000); //1000 will run it every 1 second

    function timer() {
        timeRemaining=timeRemaining-1;
        if (timeRemaining <=0) {
            clearInterval(counter);
            //counter ended, do something here
            // alert("Timer done!");
        }
    //Do code for showing the number of seconds here:
    document.getElementById("timer").innerHTML=timeRemaining + " Seconds"; // watch for spelling

    }
    

// 3rd page - RESULTS 
    // Calculate answers and show tallies at the end
        // Results page takes over questionnaire page

// DONT FORGET:
    // THE READ-ME FILE!!! Resources available at Class Repo
    // ADD PIECE TO MY PORTFOLIO
