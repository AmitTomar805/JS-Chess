const gameBoard=document.querySelector('#gameboard');
const playerDisplay=document.querySelector('#player');
const infoDisplay=document.querySelector('#info-display');
const width=8;
const startPieces=[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,king,queen,bishop,knight,rook,
]
function createBoard(){
    startPieces.forEach((startPiece,i)=>{
        const square=document.createElement('div');
        square.innerHTML=startPiece;
        square.setAttribute('square-id',i);
        square.classList.add('beige');
        square.classList.add('square');
        gameBoard.append(square);
    })
}
createBoard()