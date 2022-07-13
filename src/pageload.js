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
    openingHoursContainer.classList.add('opening-hours-outer', 'info-container')
    let openingHoursHeading = document.createElement('h1')
    openingHoursHeading.innerText = 'Opening Hours'
    let openingHours = document.createElement('p')
    openingHours.innerText = 'Mondays: 12pm - 9pm \n Tuesdays: 12pm- 9pm \n Wednesdays: 12pm - 9pm \n Thursdays: 12pm - 9pm \n Fridays: 12pm - 11pm \n Saturdays: 10am - 12am \n Sunday: 10am - 10pm'
    openingHoursContainer.append(openingHoursHeading, openingHours)

    let locationContainer = newDiv()
    locationContainer.classList.add('location-outer', 'info-container')
    let locationHeading = document.createElement('h1')
    locationHeading.innerText = 'Pay us a visit!'
    let locationText = document.createElement('p')
    locationText.innerText = "Address: 112 Austin Road, Tsim Sha Tsui"
    let locationMap = document.createElement('iframe')
    locationMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.164202032087!2d114.17240634706445!3d22.30236627495107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ebf6c0d2a9%3A0xbc859add8fc618a8!2s112%20Austin%20Rd%2C%20Tsim%20Sha%20Tsui!5e0!3m2!1sen!2shk!4v1657707615077!5m2!1sen!2shk"
    locationContainer.append(locationHeading, locationText, locationMap)

    restaurantInformationContainer.append(openingHoursContainer, locationContainer)
    mainContents.append(heroBanner, restaurantInformationContainer)
    contentContainer.append(header, mainContents)
}

export {loadPage}

