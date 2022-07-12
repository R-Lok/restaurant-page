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

    let manager = Contact('Bob Smith', 'Restaurant Manager', '8888-1111', 'bobsmith@moodfoods.com')

    contacts.append(contactsTitle, manager)
    contactsContainer.append(contacts)
    contentContainer.append(contactsContainer)

    function Contact(name, role, phoneNumber, email) {
        let personContainer = newDiv()
        personContainer.classList.add('person-container')

        let personName = newDiv()
        personName.classList.add('person-name')
        personName.innerText = name

        let personRole = newDiv()
        personRole.classList.add('person-role')
        personRole.innerText = role

        let personPhoneNo = newDiv()
        personPhoneNo.classList.add('person-number')
        personPhoneNo.innerText = phoneNumber

        let personEmail = newDiv()
        personEmail.classList.add('person-email')
        personEmail.innerText = email

        personContainer.append(personName, personRole, personPhoneNo, personEmail)
        return personContainer
    }
}

export {loadContactsPage}


