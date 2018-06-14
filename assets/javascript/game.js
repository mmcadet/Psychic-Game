/*
<script type="text/javascript">
   
    var letters = ["a", "b", "c"];

    
    var guessedLetters = [];

   
    var letterToGuess = null;

    
    var totalGuesses = 9;
    var guessesLeft = 9;

    
    var wins = 0;
    var losses = 0;

    
    var updateGuessesLeft = function() {
      
     
      document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    var updateLetterToGuess = function() {
      
      this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
    };

    var updateGuessesSoFar = function() {
     
      document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
    };

    
    var reset = function() {
      totalGuesses = 9;
      guessesLeft = 9;
      guessedLetters = [];
      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    };

    
    updateLetterToGuess();
    updateGuessesLeft();

 
    document.onkeyup = function(event) {
      
      

     
      var letter = String.fromCharCode(event.keyCode).toLowerCase();

     
      guessedLetters.push(letter);

      
      updateGuessesLeft();
      updateGuessesSoFar();


      
      if (letter === letterToGuess) {

        
        wins++;
        document.querySelector("#wins").innerHTML = wins;

       
        reset();
      }


     
      if (guessesLeft === 0) {

       
        losses++;
        document.querySelector("#losses").innerHTML = losses;

       
        reset();
      }
    };
  </script>
  */