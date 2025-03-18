const menuItem = document.querySelector("#services");
const submenu = document.querySelector('.submenu');

function openSubmenu () {
    if (submenu.classList.contains('submenu_hidden')) {
        submenu.classList.remove('submenu_hidden')
    } else {
        submenu.classList.add('submenu_hidden')
    }
}

menuItem.addEventListener("mouseover", () => {
    openSubmenu ()
})