function stackJack(playerOne, playerTwo) {
  var rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var playerOneScore = 0;
  var playerTwoScore  = 0;
  var msg;

  
  for (var card_idx = 0; card_idx < playerOne.length; card_idx++) {
  
    if (rank.indexOf(playerOne[card_idx]) > rank.indexOf(playerTwo[card_idx])) {
      playerOneScore++;
    } else if (rank.indexOf(playerOne[card_idx]) < rank.indexOf(playerTwo[card_idx])) {
        playerTwoScore++;      
    }
    
  }
  
  if (playerOneScore > playerTwoScore) {
    msg = "Player 1 wins " + playerOneScore + " to " + playerTwoScore + "!";
  } else if (playerOneScore < playerTwoScore) {
    msg = "Player 2 wins " + playerTwoScore + " to " + playerOneScore;
  } else {
    msg = "Tie!";
  }
  
  return msg;
}
