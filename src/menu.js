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

    header.append(restaurantName, homeButton, menuButton, contactsButton)
    contentContainer.appendChild(header)

    let menuContainer = newDiv()
    menuContainer.id = 'menu-container'

    let menu = newDiv()
    menu.id = 'menu'

    let menuTitle = newDiv()
    menuTitle.classList.add('title')
    menuTitle.innerText = "Menu"

    let mainDishContainer = newDiv()
    mainDishContainer.classList.add('main-dish-container')
    let mainDishSectionTitle = MenuSectionTitle('Main Dishes', mainDishContainer)

    mainDishContainer.appendChild(Dish('Beef Roast', 'Delicious beef roast with our signature berry sauce', 20))
    mainDishContainer.appendChild(Dish('Baked Salmon', 'Perfectly baked salmon fillets with a roasted red pepper sauce', 25))
    mainDishContainer.appendChild(Dish('Seafood Jambalaya', 'A delicious dish containing a healthy serving of shrimp, scallops and crawfish', 30))

    let dessertContainer = newDiv()
    dessertContainer.classList.add('dessert-container')
    let dessertSectionTitle = MenuSectionTitle('Desserts', dessertContainer)

    dessertContainer.appendChild(Dish('Lava Cake', 'Warm chocolate cake with a molten chocolate center', 10))
    dessertContainer.appendChild(Dish('Tiramisu', 'Our signature in-house tiramisu - limited quantity per day!', 15))
    dessertContainer.appendChild(Dish('Crème Brûlee', 'A rich custard dessert with a layer of caramlized sugar on top', 10))

    let drinkContainer = newDiv()
    drinkContainer.classList.add('drink-container')
    let drinkSectionTitle = MenuSectionTitle('Drinks', drinkContainer)

    drinkContainer.appendChild(Dish('Bubble Tea', 'Our spin on bubble tea, using specially sourced tea leaves', 10))
    drinkContainer.appendChild(Dish('Iced Lemon Tea', 'A Hong Kong special - very refreshing and sweet!', 8))
    drinkContainer.appendChild(Dish('Canned Drink', 'Coca-cola, Fanta, Sprite, Dr Pepper', 5))

    menuContainer.appendChild(menu)
    menu.append(menuTitle, mainDishContainer, dessertContainer, drinkContainer)
    contentContainer.appendChild(menuContainer)

    function newDiv() {
        return document.createElement('div')
    }

    function MenuSectionTitle(title, appendTarget) {
        let newSectionTitle = newDiv()
        newSectionTitle.classList.add('section-heading')
        newSectionTitle.innerText = title
        appendTarget.append(newSectionTitle)

        return newSectionTitle
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


