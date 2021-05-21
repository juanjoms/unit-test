export function sum (a: number, b: number) {
  return a + b;
}

export function divide (a: number, b: number) {
  if (b === 0) {
    return null;
  }
  return a / b;

}


export function checkFive(num: number){
  let result = '';
  if (num < 5){
     result = num + ' is less than 5.';
  } else if (num === 5){
     result = num + ' is equal to 5.';
  } else {
     result = num + ' is greater than 5.';
  }

  return result;
}


type Param = 'rock' | 'paper' | 'scissors';
export function whoWon(player1: Param, player2: Param) {

  if (player1 === player2){
     return 'TIE!';
  }

  if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
  }

  if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
  }

  if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
  }

  return 'Player 1 wins!';
}
