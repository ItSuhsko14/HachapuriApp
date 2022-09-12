let zalishkiButton = document.querySelector(".zalishki-button");
console.log(zalishkiButton);

zalishkiButton.addEventListener('click', function(event) {
	let zalishki = document.getElementById('zalishki');
	zalishki.classList.toggle('close');
	console.log(zalishki);
})

let closeModal = document.getElementById('zalishki-close');

closeModal.addEventListener('click', function(event) {
	zalishki.classList.toggle('close');
	console.log(zalishki);
})