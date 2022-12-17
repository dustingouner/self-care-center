var radioButton1 = document.getElementById('radio1Btn')
var radioButton2 = document.getElementById('radio2Btn')
var receiveMessageButton = document.querySelector('.receive-message-button')
var affirmationMessage = document.querySelector('.affirmation-message')
var mantraMessage = document.querySelector('.mantra-message')
var meditateImage = document.querySelector('.meditate-image')
var messageReceived = document.querySelector('.message-received')
var receiveMessage = document.querySelector(".receive-message")
var buddah = document.querySelector(".buddah")
var favoriteButton = document.getElementById("favorite")
var saveMessageButton = document.getElementById('view-saved-button')
var mainPage = document.querySelector('.main-page')
var messageTypeBox = document.querySelector('.message-type-box')
var savedMessagesPage = document.querySelector('.saved-messages')
var header = document.querySelector('.header')
var question = document.querySelector('.question')
var savedMessagesSetion = document.querySelector('.saved-messages-section')

var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices.",
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don't let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather.",
];

var favoriteMessages = [];
var affirmation = getRandomIndex(affirmations)
var mantra = getRandomIndex(mantras)
var likedMessage;

receiveMessageButton.addEventListener('click', getMessage)
favoriteButton.addEventListener('click', saveFavorites)
saveMessageButton.addEventListener('click', showSavedMessagesPage)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getMessage() {
    if(radioButton1.checked) {
        buddah.classList.add('hidden');
        affirmationMessage.classList.remove('hidden');
        mantraMessage.classList.add('hidden');
        affirmationMessage.innerText = `${affirmations[affirmation]}`
        favoriteButton.classList.remove('hidden');
        likedMessage = `${affirmations[affirmation]}`
    } else if (radioButton2.checked) {
        buddah.classList.add('hidden');
        affirmationMessage.classList.add('hidden');
        mantraMessage.classList.remove('hidden');
        mantraMessage.innerText = `${mantras[mantra]}`
        favoriteButton.classList.remove('hidden');
        likedMessage = `${mantras[mantra]}`
    }
}

function saveFavorites() {
    favoriteMessages.push(likedMessage);
    console.log(likedMessage);
    console.log(favoriteMessages);
}

function showSavedMessagesPage() {
    displaySavedMessages();
    mainPage.classList.add('hidden');
    question.classList.add('hidden');
    messageTypeBox.classList.add('hidden');
    messageReceived.classList.add('hidden');
    savedMessagesPage.classList.remove('hidden');
    savedMessagesSetion.classList.remove('hidden');
}

function displaySavedMessages() {
    savedMessagesSetion.innerHTML = '';
    for (var i = 0; i < likedMessage; i++) {
        savedMessagesSetion.innerHTML +=
        `<h2 class= "liked-message id="${likedMessage[i].id}"</h2>`
    }
}






