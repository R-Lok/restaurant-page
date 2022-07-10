import {loadPage} from './pageload'
import {loadContactsPage} from './contact'
import {loadMenuPage} from './menu'
import './style.css'

function applyEventListeners () {
    let homeBtn = document.querySelector('.home-btn')
    let menuBtn = document.querySelector('.menu-btn')
    let contactsBtn = document.querySelector('.contacts-btn')

    homeBtn.addEventListener('click', clearAndLoadHome)
    menuBtn.addEventListener('click', clearAndLoadMenu)
    contactsBtn.addEventListener('click', clearAndLoadContacts)

}

function clearContents() {
    let content = document.querySelector('#content')
    content.replaceChildren()
}

function clearAndLoadHome() {
    clearContents()
    loadPage()
    applyEventListeners()
}

function clearAndLoadMenu() {
    clearContents()
    loadMenuPage()
    applyEventListeners()
}

function clearAndLoadContacts() {
    clearContents()
    loadContactsPage()
    applyEventListeners()
}


loadPage()
applyEventListeners()

console.log('Test')
//         <header>
//             <div id="restaurant-name">
//                 MoodFood
//             </div>
//         </header>
//         <div id="content-body">
//             <div class="motto">
//                 Perfect food, fitting for your mood
//             </div>
//             <div class="image">
//                 <img src="../src/food-image.jpeg" alt="">
//             </div>
//         </div>