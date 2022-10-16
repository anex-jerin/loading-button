const button = document.querySelector('#search-button')
const Text = document.querySelector('#search-button div')
button.addEventListener('click',toggleButton)

function toggleButton(){
    Text.classList.toggle('loading')
}