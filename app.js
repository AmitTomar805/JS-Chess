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
    let j=0;
    startPieces.forEach((startPiece,i)=>{
        const square=document.createElement('div');
        square.innerHTML=startPiece;
        square.setAttribute('square-id',i);
        
        if((i)%8==0){
            j=j+1;
        }
        if(j%2==1){
            if((i+1)%2==0){
                square.classList.add('beige');
            }
            else{
                square.classList.add('brown');
            }
        }
        else{
            if((i+1)%2==0){
                square.classList.add('brown');
            }
            else{
                square.classList.add('beige');
            }
        }
        if(i<=15){
            square.firstChild.firstChild.classList.add('black');
        }
        if(i>=48 && i<=63){
            square.firstChild.firstChild.classList.add('white');
        }
        square.classList.add('square');
        gameBoard.append(square);
    })
}
createBoard()