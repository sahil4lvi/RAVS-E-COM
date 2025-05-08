 // Function to toggle sidebar visibility
 function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.left = (sideNav.style.left === "0px") ? "-300px" : "0px";
}

// Function to toggle submenus
function toggleSubmenu(event) {
    event.preventDefault();
    var submenu = event.target.nextElementSibling;
    var allSubmenus = document.querySelectorAll('.submenu');

    allSubmenus.forEach(function(sub) {
        if (sub !== submenu) {
            sub.classList.remove('submenu-open');
        }
    });

    submenu.classList.toggle('submenu-open');
}

// Function to filter the sidebar menu
function filterMenu() {
    var input = document.getElementById("searchBar").value.toLowerCase();
    var menuList = document.getElementById("menuList");
    var items = menuList.getElementsByTagName("li");

    Array.from(items).forEach(function(item) {
        var a = item.querySelector("a");
        var submenu = item.querySelector(".submenu");

        if (a) {
            var textValue = a.textContent || a.innerText;
            var isMatch = textValue.toLowerCase().includes(input);

            if (isMatch) {
                item.style.display = "";
            } else if (submenu) {
                var submenuItems = submenu.getElementsByTagName("li");
                var submenuVisible = Array.from(submenuItems).some(submenuItem => {
                    var submenuLink = submenuItem.querySelector("a");
                    return submenuLink && submenuLink.textContent.toLowerCase().includes(input);
                });

                if (submenuVisible) {
                    item.style.display = "";
                    submenu.classList.add('submenu-open');
                } else {
                    item.style.display = "none";
                    submenu.classList.remove('submenu-open');
                }
            } else {
                item.style.display = "none";
            }
        }
    });
}
function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.left = (sideNav.style.left === "0px") ? "-300px" : "0px";
}

function toggleSubmenu(event) {
    event.preventDefault();
    var submenu = event.target.nextElementSibling;
    var allSubmenus = document.querySelectorAll('.submenu');

    // Close all other submenus
    allSubmenus.forEach(function(sub) {
        if (sub !== submenu) {
            sub.classList.remove('submenu-open');
        }
    });

    // Toggle the clicked submenu
    submenu.classList.toggle('submenu-open');
}

function filterMenu() {
    var input = document.getElementById("searchBar").value.toLowerCase();
    var menuList = document.getElementById("menuList");
    var items = menuList.getElementsByTagName("li");

    Array.from(items).forEach(function(item) {
        var a = item.querySelector("a");
        var submenu = item.querySelector(".submenu");

        if (a) {
            var textValue = a.textContent || a.innerText;
            var isMatch = textValue.toLowerCase().includes(input);

            if (isMatch) {
                item.style.display = "";
            } else if (submenu) {
                var submenuItems = submenu.getElementsByTagName("li");
                var submenuVisible = Array.from(submenuItems).some(submenuItem => {
                    var submenuLink = submenuItem.querySelector("a");
                    return submenuLink && submenuLink.textContent.toLowerCase().includes(input);
                });

                if (submenuVisible) {
                    item.style.display = "";
                    submenu.classList.add('submenu-open');
                } else {
                    item.style.display = "none";
                    submenu.classList.remove('submenu-open');
                }
            } else {
                item.style.display = "none";
            }
        }
    });
}
// script for login page
