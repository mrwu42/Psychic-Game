   
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var wins = 0;
        var losses = 0;
        var guessesleft = 10;
        var guessesused = [];
        var reset = function(){
            guessesleft = 10;
            computerChoice = letters[Math.floor(Math.random() * letters.length)];
            guessesused.length = 0;
            // console.log(guessesused)
            }
        var computerChoice = letters[Math.floor(Math.random() * letters.length)];
        document.onkeyup = function (event) {
            

            var playerGuess = event.key;

          var doubles = guessesused.includes(playerGuess);
          if (doubles === true){
            alert("That letter has already been guessed. TRY AGAIN");
            return false;
        }
          
            if (playerGuess  !== computerChoice) {
                guessesleft--;
                guessesused.push(playerGuess);
              //   alert("Incorrect");

              if (guessesleft === 0) {
                    losses++;
                  alert("You are out of guesses. TRY AGAIN");
                  reset();
              }
          
              if (losses === 3) {
                  alert("YOU LOSE!!!");
                  location.reload();
              }
          }




            if (guessesleft > 0){
                if (playerGuess === computerChoice) {
                    wins++;                
                    alert("You Win!!!");                    
                    reset();
  
                  if (wins === 3) {
                      alert("OMG YOU WON it ALL?!?!");
                      location.reload();
              
                  }
              }

            }    
            
      
            



            var html =
            "<p>You chose: " + playerGuess + "</p>" +
            "<p>You previously guessed: " + guessesused + "</p>" +
            // "<p>The computer was thinking: " + computerChoice + "</p>" +
            "<p>Wins: " + wins + "</p>" + 
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesleft + "</p>";
        

          document.querySelector("#body").innerHTML = html;


        
    };
        // console.log(guessesused)
        // console.log(playerGuess);
        // console.log("choice " + computerChoice);