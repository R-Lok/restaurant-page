import {newDiv} from './htmlfunctions'
import managerPic from './manager.jpeg'
import chefPic from './chef.jpeg'
import chefTwoPic from './chef2.jpeg'

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

    let manager = Contact('Bob Smith', 'Restaurant Manager', '8888-1111', 'bobsmith@moodfoods.com', managerPic)
    let chef = Contact('John Doe', 'Chef', '7777-1111', 'johndoe@moodfood.com', chefPic)
    let chefTwo = Contact ('Jane Doe', 'Chef', '6666-1111', 'janedoe@moodfood.com', chefTwoPic)

    contacts.append(contactsTitle, manager, chef, chefTwo)
    contactsContainer.append(contacts)
    contentContainer.append(contactsContainer)

    function Contact(name, role, phoneNumber, email, image) {
        let personContainer = newDiv()
        personContainer.classList.add('person-container')

        let contactInfo = newDiv()
        contactInfo.classList.add('information')

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
        
        let personImage = document.createElement('img')
        personImage.src = image
        personImage.classList.add('person-image')

        contactInfo.append(personName, personRole, personPhoneNo, personEmail)
        personContainer.append(contactInfo, personImage)
        return personContainer
    }
}

export {loadContactsPage}


