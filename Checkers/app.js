const gameBoard = document.querySelector('.game-board')
const piece = ('<div class="piece"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></div>')

const piecesOrigin = [
    piece,'',piece,'',piece,'',piece,'',
    '',piece,'',piece,'',piece,'',piece,
    piece,'',piece,'',piece,'',piece,'',
    '','','','','','','','',
    '','','','','','','','',
    piece,'',piece,'',piece,'',piece,'',
    '',piece,'',piece,'',piece,'',piece,
    piece,'',piece,'',piece,'',piece,''
]
const rowNumber = piecesOrigin.length / 8;


const createGame =() => {
    piecesOrigin.forEach((pieceOrigin, i)=> {
       square = document.createElement('div')
       square.setAttribute('square-id', i)
       square.classList.add('square');
       square.innerHTML = pieceOrigin;
       gameBoard.appendChild(square);
       if ((i % 2 === 0) ^ (i / rowNumber) % 2) {
        square.classList.add('red');
    }

    });
}



createGame()
