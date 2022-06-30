'use strict'

const player = document.querySelector('.player')
const square = document.querySelectorAll('.square')
const gameOverP = document.querySelector('.game-over')
const PWinner = document.querySelector('.winner')
const restBtn = document.querySelectorAll('.rest-btn')
const board = document.querySelector('.board')

let y =1;

console.log(square[4].textContent)

const check = (p)=>{
    if(square[0].textContent == square[1].textContent && square[1].textContent == square[2].textContent 
        && square[0].textContent != '' 
        || square[3].textContent == square[4].textContent && square[3].textContent == square[5].textContent
        && square[3].textContent != ''
        || square[6].textContent == square[7].textContent  && square[7].textContent == square[8].textContent
        && square[6].textContent != ''
        || square[0].textContent == square[3].textContent  && square[3].textContent == square[6].textContent
        && square[0].textContent != '' 
        || square[1].textContent == square[4].textContent  && square[4].textContent == square[7].textContent
        && square[1].textContent != ''
        || square[2].textContent == square[5].textContent  && square[2].textContent == square[8].textContent
        && square[2].textContent != '' 
        || square[0].textContent == square[4].textContent  && square[4].textContent == square[8].textContent
        && square[0].textContent != ''
        || square[2].textContent == square[4].textContent  && square[4].textContent == square[6].textContent
        && square[2].textContent != ''){
            gameOverP.classList.remove('hidden')
            PWinner.textContent = `player ${p} won`
            restBtn[1].classList.add('hidden')
            board.classList.add('hidden')
        }else{
            let x = 0
            for(let i = 0; i < 9; i++)
                if(square[i].textContent === '')
                    x++
            
            if(x === 0){
                gameOverP.classList.remove('hidden')
                PWinner.textContent = `Draw`
                restBtn[1].classList.add('hidden')
                board.classList.add('hidden')
            }
        }
}

const restGame = function(){
    gameOverP.classList.add('hidden')
    square.forEach(el=>{
        el.textContent = ''
    })
    restBtn[1].classList.remove('hidden')
    board.classList.remove('hidden')

}

square.forEach(el=>{
    el.addEventListener('click', ()=>{
        // console.log(Number(el.id.slice(2)))
        if(y === 1 && el.textContent == ''){
            el.textContent = 'X'
            player.textContent= 'O';
            y = 2
            check('X')

        }else if(y === 2 && el.textContent === ''){
            el.textContent = 'O'
            player.textContent= 'X';
            y = 1
            check('O')
        }
    })
})

restBtn.forEach(el=>el.addEventListener('click', restGame))
