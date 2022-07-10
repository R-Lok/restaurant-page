function loadMenuPage() {
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
    contactsButton.disabled = false
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = true

    header.appendChild(restaurantName)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactsButton)


    contentContainer.appendChild(header)

    let menuContainer = document.createElement('div')
    menuContainer.id = 'menu-container'

    contentContainer.appendChild(menuContainer)

    //finish menu html contents
    
}

export {loadMenuPage}


