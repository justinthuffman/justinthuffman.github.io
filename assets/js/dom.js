
//
// Nav button functions
//



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




//
// Description Button Functions
//



var hiddenDescriptions = document.querySelector('.projectDescriptions');
var showDescriptionsButton = document.querySelector('.showDescriptionButton');
var hideDescriptionsButton = document.querySelector('.hideDescriptionButton');


function showDescriptions() {
	hiddenDescriptions.style.display = 'inline-block';
	showDescriptionsButton.style.display = 'none';
	hideDescriptionsButton.style.display = 'inline-block';
}

function hideDescriptions() {
	hiddenDescriptions.style.display = 'none';
	showDescriptionsButton.style.display = 'inline-block';
	hideDescriptionsButton.style.display = 'none';

}

showDescriptionsButton.onclick = showDescriptions;
hideDescriptionsButton.onclick = hideDescriptions;



//
// BIO Button Functions
//


var aboutMeLink = document.querySelector('.aboutMeLink');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var modalButton = document.querySelector('.modalButton');


function showModal() {
	modal.style.display = 'block';
	backdrop.style.display = 'block';
}

aboutMeLink.onclick = showModal;


function hideModal() {
	modal.style.display = 'none';
	backdrop.style.display = 'none';
}

modalButton.onclick = hideModal;



