'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnShowModal=document.querySelectorAll('.show-modal');
//showing modal when clicked on any modals

const closeModal=function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

const openModal=function () {
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');  //overlay is the background blur effect
};
for (var i = 0; i < btnShowModal.length; i++ ) 
	btnShowModal[i].addEventListener('click' , openModal);
//hiding the modal when clicked on close button

btnCloseModal.addEventListener('click' ,closeModal); 
//here we are not calling the function by doing closeModal() bcz we want this to run as soon as the event happens(click).....if we call the function directly js will call this at the beginning only and this function will be of no use
//hiding modal when clicked on overlay or outside of modal
overlay.addEventListener('click', closeModal);

//closing modal when ESC key is pressed in keyboard
document.addEventListener('keydown',function (e) {

	//checking if modal is visible if it is then closing it if ESC is pressed
	if(e.key === 'Escape' && !modal.classList.contains('hidden'))
			closeModal();
});
