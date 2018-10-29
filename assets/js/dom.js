

// Nav button functions
var fullNav = document.querySelector('.buttonFunction');
var hiddenNav = document.querySelector('.buttonExpand');
var closeButton = document.querySelector('.closebutton');
var openButton = document.querySelector('.openbutton');



function closeNav() {
	fullNav.style.display = 'none';
	hiddenNav.style.display = 'block';
}

function openNav() {
	hiddenNav.style.display = 'none';
	fullNav.style.display = 'block';

}

closeButton.onclick = closeNav;
openButton.onclick = openNav;