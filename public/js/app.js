//const { response } = require("express")

console.log('Client side javascript file is loaded..')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

messageOne.textContent='Loading....'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location=search.value

    
    fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        
        messageOne.textContent=data.puzzle
        messageTwo.textContent='Your location is '+location
    })
    

    
})
} )