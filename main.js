var radioButton1 = document.querySelector('.radio-button1')
var radioButton2 = document.querySelector('.radio-button2')
var receiveMessageButton = document.querySelector('.receive-message')
var affirmationMessage = document.querySelector('.affirmation-message')
var mantraMessage = document.querySelector('.mantra-message')
var meditateImage = document.querySelector('.meditate-image hidden')
var messageReceived = document.querySelector('.message-received')



// radioButton1.addEventListener('click',)
// radioButton2.addEventListener('click',)
receiveMessageButton.addEventListener('click', hideBuddah)


// function getRandomIndex(array) {
//     return Math.floor(Math.random() * array.length);
// }



// function displayAffirmation() {

// }

function hideBuddah() {
    meditateImage.classList.add('hidden');
    messageReceived.classList.remove('hidden')
    
}
