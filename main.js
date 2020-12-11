// A map of playerName to an array of playerPER values

// Variables to keep track of constants 

// Variables to track state throughout the game

// Variables to track the PER throughout the game

// Function to read in all of the player stats
function processPlayers(allPlayerStats) {
    // Split the data by newline into an array

    // remove the first line

        // Get all individual stat values

        // If it's just an empty line, skip it


        // The second column has the player name
        

        // check if player exists in map
        
            // First time we see the player; Add them in!

        // Get per value for player

        // Add per value to player's array (the next quarter)


    // Add the players to the Bench
    
}

// Function to add the players to the bench to start the game
function displayPlayerBench() {
    // Get the bench div where the players will be shown
    
    // For each player, create a button 
    
        // Create a button for each player
        
        // Set the ID to the name of the player so we can get it later
        
        // Identify the style class, which will set the color scheme
        
        // When the button is clicked, call the movePlayer function
        
        // Add the players image to the button
        
        // Set the source (or location) of the image

        // Add the image to the button

        // Add the button to the bench

    // Display cards for all players
   
}

// This function is called at the beginning of the game play to initialize the 
// PER for each player, and at each quarter to do two things: 
// 1. Ensure the players currently on the court have the correct PER represented
// 2. Update the stats for each player for the current quarter
function displayPlayerCards() {
    // Get the div where the stats will be shown

    // For each player, create a player stat card to show the PER for that player for the 
    // given quarter
    
        // Create an overall div that will contain the player stat information
        
        // Set an ID for the card so we can get it later
        
        // Set the style class name

        // Add the player image to the div
        
        // Set the style for the image
        
        // Load the image
        
        // Add the image to the card
        
        // Add the player's PER to the div
        
        // Set the style for the number
        
        // Set the text for the PER
        
        // Add the PER

        // Add the player stat card to the game

}

// This function is called each time a player button is clicked. A player
// button being clicked indicates the players is either moving to the court
// or to the bench for a water break
function movePlayer() {
    // Do not let the coach change players during a quarter


    // Get the div where this button currently is (either bench or court)

    // Check if the player is currently on the bench

        // If there are already 5 players on the court, don't let the player 
        // move to the court, alert the coach that there are enough players

            // If there is room on the court, update the number of players on 
            // the court, and update the average PER for the quarter based on
            // this player moving to the court

            // Move the player to the court

        // If the player is being taken off the court for a water break, decrement
        // the number of players on the bench and remove the player's PER from the
        // average

            // If there are no more players on the court, set the values to 0

        // Update the PER average. This could result in a zero value if your team is particularly tired

        // Move the player to the bench

}

// At the start of each quarter to do two things:
// 1. Ensure the players currently on the court have the correct PER represented
// 2. Update the stats for each player for the current quarter
function updateCardsInGame() {
    // For each player, update their player stat card to show the PER for that player for the 
    // given quarter

    // Reset the current quarter's total PER

    // Get a list of all of the players currently on the court

    // Loop through each of the players currently on the court
    
        // Get the name of the player
        
        // Get the PER for the player


    // Get the average PER for the start of the quarter

    // Update the Current PER with the new average PER for the quarter now that the 
    // stats have been updated.

}

// At the end of each quarter, show the coach the average PER
// for that quarter, allow the coach to make changes to the
// players on the court again, and add the stats for the next quarter to the game
function endQuarter() {
    // Update the clock display

    // Allow the coach to move players again

    // Add the average PER of the quarter to the total count

    // Add the value to the display counter above the stats column

    // Progress ot the next quarter

    // Update the stats so that they reflect the next quarter

    // Let the coach know that the new PER stats are up to date 

    // Encourage the coach to consider new players

    // Update the button text

}

// At the end of the game, show the coach the average PER
// for the entire game and clean up the final view of the app
function endGame() {
    // Don't let the coach move players around, the game is over

    // Calculate the average PER for the entire game, including the last quarter

    // Let the coach know that the game is over and what the PER was for the game

    // Clean up the web app view

}

// This function is called when the Game button is clicked. Each time the button is clicked
// it will run through a 12-second timer (simulating 12 minutes) and then update the game
// to the next quarter
function startNextQuarter() {
    // If there aren't exactly 5 players on the court, alert the coach that the game can't start

    // Define the interval period for the quarter, in this case, 12 seconds

    // Set the quarterInPlay variable to true so that the coach
    // can't move players during gameplay

    // Update the count down every 1 second, as indicated by the `1000` as
    // the second parameter to the setInterval function
       
        // Display the current time on the court board

        // Decrement the interval counter for this quarter

        // If the quarter has ended, reset the interval timer, and get ready for the next quarter

}