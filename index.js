'use strict'
//Selectors
const btnLess=document.querySelector('.less')
const btnBigger=document.querySelector('.more')
const btnCorrect=document.querySelector('.correct')
const btnRefresh=document.querySelector('.refresh')
let guessedNumber=document.querySelector('.number h1')

let result=0;
function findRecur(min, max){
    setTimeout(function(){
        let res=Math.trunc((min+max)/2)
        guessedNumber.textContent=res
        if(btnLess.addEventListener('click', function() {
            guessedNumber.value=res
            findRecur(min,res) 
         })){} //if block
        else if(btnBigger.addEventListener('click', function(){
            guessedNumber.textContent=res
            findRecur(res,max)
        })){} //if else first
        else if (btnCorrect.addEventListener('click', function(){
            guessedNumber.textContent=`VICTORY`
            guessedNumber.style.color="#FF0000"
            return  result=res
        })){}//else if second
       
    },1)
}
if(btnRefresh.addEventListener('click', function(){
    result=0;
    guessedNumber.style.color="#000"
    findRecur(0,101)
})){}  
findRecur(0,101)

