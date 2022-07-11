import mainFoodImage from './food-image.jpeg';

function loadPage() {
    let contentContainer = document.querySelector("#content")

    let header = document.createElement('header')
    let restaurantName = document.createElement('div')
    restaurantName.id = 'restaurant-name'
    restaurantName.innerText = 'MoodFood'

    let homeButton = document.createElement('button')
    homeButton.innerText = 'Home'
    homeButton.classList.add('home-btn')
    homeButton.disabled = true

    let contactsButton = document.createElement('button')
    contactsButton.innerText = 'Contacts'
    contactsButton.classList.add('contacts-btn')
    contactsButton.disabled = false
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = false
    
    header.append(restaurantName, homeButton, menuButton, contactsButton)
    
    let mainContents = document.createElement('div')
    mainContents.id = 'main-content'

    let motto = document.createElement('div')
    motto.classList.add('motto')
    motto.innerText = "Perfect food, fitting for your mood"

    let foodImageContainer = document.createElement('div')
    let foodImage = document.createElement('img')
    foodImage.src = mainFoodImage
    foodImage.id = "main-food-image"
    foodImageContainer.appendChild(foodImage)

    mainContents.appendChild(motto)
    mainContents.appendChild(foodImage)

    contentContainer.appendChild(header)
    contentContainer.appendChild(mainContents)
}

export {loadPage}

