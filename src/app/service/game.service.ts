import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  public winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6], // Diagonal /
  ];

  public gameOver = false;
  public chance = 0;
  public draw = false;
  public winner = 3; // 0 for X, 1 for O, 3 for none

  constructor() {}

  restartGame() {
    this.gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    this.gameOver = false;
    this.chance = 0;
    this.draw = false;
    this.winner = 3; // Reset winner to none
  }

  changeGameState(position: number) {
    //Check Game Over
    if (this.gameOver) {
      alert('Game is already over. Please restart the game.');
      return; // Do nothing if the game is already over
    }
    //Check For Position Occupied
    if (this.gameState[position] !== 3) {
      alert('Position already occupied. Please choose another position.');
      return; // Do nothing if the position is already occupied
    }

    // If POsition black ==  3
    this.gameState[position] = this.chance;

    //Check For Winner
    if (this.checkForWinner()) {
      this.gameOver = true;
      this.winner = this.chance; // Set winner to current player
      return;
    }

    //if no winner

    //Check for Draw

    if (this.checkForDraw()) {
      this.gameOver = true;
      this.draw = true; // Set draw to true
      return;
    }

    //no winner and no draw
    this.chance = this.chance === 0 ? 1 : 0; // Switch chance
  }

  ///Checks For Winner
  checkForWinner() {
    for (let i = 0; i < this.winningCombinations.length; i++) {
      let winningSubArray = this.winningCombinations[i];
      if (
        this.gameState[winningSubArray[0]] ===
          this.gameState[winningSubArray[1]] &&
        this.gameState[winningSubArray[1]] ===
          this.gameState[winningSubArray[2]] &&
        this.gameState[winningSubArray[0]] !== 3
      ) {
        return true;
      }
    }
    return false;
  }

  ///Check for Draw
  checkForDraw() {
    for (let i = 0; i < this.gameState.length; i++) {
      if (this.gameState[i] === 3) {
        return false; // Found an empty position, so not a draw
      }
    }
    return true;
  }
}
