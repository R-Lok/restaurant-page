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

    let menuContainer = newDiv()
    menuContainer.id = 'menu-container'

    let menu = newDiv()
    menu.id = 'menu'

    let menuTitle = newDiv()
    menuTitle.classList.add('title')
    menuTitle.innerText = "Menu"

    let mainDishContainer = newDiv()
    let mainDishSectionTitle = newDiv()
    mainDishContainer.classList.add('menu-section-title')
    mainDishContainer.innerText = 'Main Dishes'
    mainDishContainer.append(mainDishSectionTitle)

    menu.append(menuTitle, mainDishContainer)
    mainDishContainer.appendChild(Dish('Beef Roast', 'Delicious beef roast with our signature berry sauce', 20))
    menuContainer.appendChild(menu)
    contentContainer.appendChild(menuContainer)

    function newDiv() {
        return document.createElement('div')
    }

    function Dish(name, description, price){
        let dishContainer = newDiv()
        dishContainer.classList.add('dish-container')
        
        let dishName = newDiv()
        dishName.classList.add('dish-name')
        dishName.innerText = name

        let dishDescription = newDiv()
        dishDescription.classList.add('dish-description')
        dishDescription.innerText = description

        let dishPrice = newDiv()
        dishPrice.classList.add('dish-price')
        dishPrice.innerText = `$${price}`

        dishContainer.append(dishName, dishDescription, dishPrice)

        return dishContainer
    }
}

export {loadMenuPage}


