import {newDiv} from './htmlfunctions'

function loadContactsPage() {
    let contentContainer = document.querySelector("#content")
    
    let header = document.createElement('header')
    let restaurantName = document.createElement('div')
    restaurantName.id = 'restaurant-name'
    restaurantName.innerText = 'MoodFood'

    let homeButton = document.createElement('button')
    homeButton.innerText = 'Home'
    homeButton.classList.add('home-btn')
    homeButton.disabled = false

    let contactsButton = document.createElement('button')
    contactsButton.innerText = 'Contacts'
    contactsButton.classList.add('contacts-btn')
    contactsButton.disabled = true
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = false

    header.append(restaurantName, homeButton, menuButton, contactsButton)
    contentContainer.appendChild(header)

    let contactsContainer = newDiv()
    contactsContainer.id = 'contacts-container'

    let contacts = newDiv()
    contacts.id = 'contacts'

    let contactsTitle = newDiv()
    contactsTitle.classList.add('title')
    contactsTitle.innerText = 'Contact Information'

    contacts.append(contactsTitle)
    contactsContainer.append(contacts)
    contentContainer.append(contactsContainer)
}

export {loadContactsPage}


