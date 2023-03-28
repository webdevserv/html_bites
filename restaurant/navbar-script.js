// Tento skript slouží k přepínání viditelnosti navigace.

// Obě promněnné načítají HTML elementy podle názvů jejich tříd.
const button = document.getElementsByClassName('hamburger')
const navbarItems = document.getElementsByClassName('navbar-items')

// Přepínacímu tlačítku přiřadíme, že v případě události 'click', tj. kliknutí na element se provede funkce, která elementu přiřadí/odebere třídu 'active'.
button[0].addEventListener('click', () => {
    navbarItems[0].classList.toggle('active')
})