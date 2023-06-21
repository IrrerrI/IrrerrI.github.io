const gameBoard = document.querySelector('.game-board')
const piece = ('<div class="piece"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></div>')




const piecesOrigin = [
    piece,'',piece,'',piece,'',piece,'',
    '',piece,'',piece,'',piece,'',piece,
    piece,'',piece,'',piece,'',piece,'',
    '','','','','','','','',
    '','','','','','','','',
    '',piece,'',piece,'',piece,'',piece,
    piece,'',piece,'',piece,'',piece,'',
    '',piece,'',piece,'',piece,'',piece
]
const rowNumber = piecesOrigin.length / 8;
let isRedTurn = true









const createGame =() => {
    piecesOrigin.forEach((pieceOrigin, i)=> {
       square = document.createElement('div')
       square.setAttribute('square-id', i)
       square.classList.add('square');
       square.innerHTML = pieceOrigin;
       gameBoard.appendChild(square);
       if ((i % 2 === 0) ^ (i / rowNumber) % 2) {
        square.classList.add('red');
    }})};




createGame()


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

const checkValid = (targetSquareID, originSquare) => {
  //console.log(originSquare)
  //console.log(targetSquareID)
  console.log()
  
};

  const commitMove = () => {
    console.log('committing')
    targetSquare.innerHTML = ('')
    targetSquare.appendChild(draggedPiece)
  isredTurn = !isredTurn
    setPlayer()
  }




const setPlayer =() => {switch (isRedTurn) {
  case true:
    redPieces.forEach(redPiece => {
      redPiece.draggable = true;
    });
    blackPieces.forEach(blackPiece => {
      blackPiece.draggable = false;
    });
    playerDisplay.innerHTML ='red turn'
    break;
    
  case false:
    redPieces.forEach(redPiece => {
      redPiece.draggable = false;
    });
    blackPieces.forEach(blackPiece => {
      blackPiece.draggable = true;
    });
    playerDisplay.innerHTML ='black turn'
    break;
}
}





const allPieces = document.querySelectorAll('.piece')
allPieces.forEach(allPiece =>{
    allPiece.addEventListener('dragstart', pick)
    allPiece.addEventListener('drop', drop)
    allPiece.addEventListener('dragover', dragover)})

const blackPieces = Array.from(allPieces).splice(0, 12)
const redPieces = Array.from(allPieces).splice(12, 25)

redPieces.forEach(redPiece =>
redPiece.firstChild.classList.add('redpiece'))
blackPieces.forEach(blackPiece =>
blackPiece.firstChild.classList.add('blackpiece'))

switch (isRedTurn) {
    case true:
      redPieces.forEach(redPiece => {
        redPiece.draggable = true;
      });
      blackPieces.forEach(blackPiece => {
        blackPiece.draggable = false;
      });
      break;
      
    case false:
      redPieces.forEach(redPiece => {
        redPiece.draggable = false;
      });
      blackPieces.forEach(blackPiece => {
        blackPiece.draggable = true;
      });
      break;
  }
  