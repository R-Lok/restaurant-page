import mainFoodImage from './food-image.jpeg';
import {newDiv} from './htmlfunctions'

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

    let heroBanner = newDiv()
    heroBanner.classList.add('banner')

    let motto = document.createElement('div')
    motto.classList.add('motto')
    motto.innerText = "Perfect food, fitting for your mood"

    let foodImage = document.createElement('img')
    foodImage.src = mainFoodImage
    foodImage.id = "main-food-image"
    heroBanner.append(motto, foodImage)

    let restaurantInformationContainer = newDiv()
    restaurantInformationContainer.classList.add('restaurant-info-container')

    let openingHoursContainer = newDiv()
    openingHoursContainer.classList.add('opening-hours-outer')

    let locationContainer = newDiv()
    locationContainer.classList.add('location-outer')

    restaurantInformationContainer.append(openingHoursContainer, locationContainer)


    mainContents.append(heroBanner, restaurantInformationContainer)
    contentContainer.append(header, mainContents)
}

export {loadPage}

