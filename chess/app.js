
///////////////////////////////////////////selectors//////////////////////////////////////////////////////

const gameBoard = document.querySelector('.game-board')
const playerDisplay = document.querySelector('.player-display')
let draggedPiece
let targetSquareID
let targetSquare
let isValidMove


//////////////////////////////////////////////////pieces/////////////////////////////////

const king = ('<div class="piece king"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>')
const queen = ('<div class="piece queen"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>')
const bishop = ('<div class="piece bishop"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg></div>')
const knight = ('<div class="piece knight"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/></svg></div>')
const rook = ('<div class="piece rook"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>')
const pawn = ('<div class="piece pawn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>')



const piecesOrigin = [
    rook,knight,bishop,king,queen,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook,
]

const rowNumber = piecesOrigin.length / 8;
let isWhiteTurn = true
let validMove
let dropSquare
let validMovesKing

/////////////////////////////////////////////functions///////////////////////////////////////////////
const createGame =() => {
  piecesOrigin.forEach((pieceOrigin, i)=> {
     const square = document.createElement('div');
     square.setAttribute('square-id', i);
     square.classList.add('square');
     square.innerHTML = pieceOrigin;
     gameBoard.appendChild(square);
     if ((i % 2 === 0) ^ (i / rowNumber) % 2) {
      square.classList.add('colored');}
  });
};

const pick = (e) => {
  draggedPiece = e.target;
  originSquare = e.target.parentNode.getAttribute('square-id')

};

const dragover = (e) => {
  e.preventDefault();
}

const drop = (e) => {
e.preventDefault();
const target = e.target
if(target.classList.contains('square')){
  targetSquareID = target.getAttribute('square-id')
  targetSquare = target
} else if(target.classList.contains('piece')){
  targetSquareID = target.parentNode.getAttribute('square-id')
  targetSquare = target.parentNode
}
checkValid(targetSquareID, originSquare)
if (validMove == true){
  commitMove(targetSquareID, originSquare)
} 
//console.log(validMove)
}

const checkValid = (targetSquareID) => {

  checkPiece()
  
  if (draggedPiece.classList.contains('pawn')&& draggedPiece.firstChild.classList.contains('whitepiece')) {
    if (pawnMovesWhite.includes(targetSquareID)) {
      validChoice = true;
    } else validMove = false
  } else if (draggedPiece.classList.contains('pawn')&& draggedPiece.firstChild.classList.contains('blackpiece')){
    if (pawnMovesBlack.includes(targetSquareID)) {
      validChoice = true;
    } else validMove = false
  } 
  
  else if (draggedPiece.classList.contains('knight')) {
    if (knightMoves.includes(targetSquareID)) {
      validChoice = true;
    } else {
      validMove = true;
    }
  } else if (draggedPiece.classList.contains('rook')){
    if (rookMoves.includes(targetSquareID)) {
      validChoice = true;
    }
    } else {
      validMove == false
    }
  }

  checkPiece = () => {
    const chosenPiece = draggedPiece.classList[0]
    console.log(chosenPiece)
  }

  const commitMove = () => {
    console.log('committing')
    targetSquare.innerHTML = ('')
    targetSquare.appendChild(draggedPiece)
    isWhiteTurn = !isWhiteTurn
    checkState()
  
  }


const checkState = () =>{
  if (validMovesKing = null){
    gameOver = true
  } else gameOver = false
  if (gameOver = false){
    setPlayer()
  } else {
    endGame()
  }
}

endGame = () =>{
  winningPLayer = currentPlayer
  console.log(winningPLayer)
}

const setPlayer =() => {switch (isWhiteTurn) {
  case true:
    whitePieces.forEach(whitePiece => {
      whitePiece.draggable = true;
    });
    blackPieces.forEach(blackPiece => {
      blackPiece.draggable = false;
    });
    playerDisplay.innerHTML ='white turn'
    currentPlayer = 'white';
    break;
    
  case false:
    whitePieces.forEach(whitePiece => {
      whitePiece.draggable = false;
    });
    blackPieces.forEach(blackPiece => {
      blackPiece.draggable = true;
    });
    playerDisplay.innerHTML ='black turn'
    currentPlayer = 'black'
    break;
}
}



///////////////////////////////////////board////////////////////////////////////////////////
createGame();

const chessPieces = document.querySelectorAll('.piece')
const squares = document.querySelectorAll('.square')
chessPieces.forEach(chessPiece =>{
    chessPiece.addEventListener('dragstart', pick)
    chessPiece.addEventListener('drop', drop)
    chessPiece.addEventListener('dragover', dragover)
})

squares.forEach(square =>{
  square.addEventListener('dragover', dragover)
  square.addEventListener('drop', drop)
})

const blackPieces = Array.from(chessPieces).splice(0, 16)
const whitePieces = Array.from(chessPieces).splice(16, 31)

blackPieces.forEach(blackPiece =>
blackPiece.firstChild.classList.add('blackpiece'))
whitePieces.forEach(whitePiece =>
whitePiece.firstChild.classList.add('whitepiece'))

setPlayer()