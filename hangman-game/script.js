let fruits = ["Apple", "Banana", , "Orange", "Mango", "Grapes", "Pineapple", "Pomegranate", "Avocado", "Coconut", "Papaya", "Watermelon", "Dragonfruit", "Strawberry", "Blueberry", "Blackberry", "Gooseberry", "Cherry", "Apricot", "Jackfruit", "Kiwi", "Lime", "Peach", "Pear", "Tamarind", "Custard-Apple", "Fig", "Guava", "Muskmelon", "Olives", "Melon"];
let countries = ["Albanai", "Algeria", "Argentina", "Armenia", "Australia", "Austiria", "Azerbaijan", "Belarus", "Belgium", "Bolivia", "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Finland", "Germany", "France", "Hungary", "India", "Indonesia", "Iran", "Ireland", "Israel", "Italy", "Japan", "Mexico", "Netherlands", "Poland", "Turkiye", "Ukraine", "Uruguay"];
let animals = ["Badger", "Bat", "Deer", "Fox", "Hare", "Hedgehog", "Mouse", "Otter", "Rabbit", "Squirrel", "Stoat", "Weasel", "Bird", "Crow", "Duck", "Goose", "Hawk", "Heron", "Kingfisher", "Owl", "Peafowl", "Pheasant", "Pigeon", "Rook", "Robin", "Sparrow", "Starling", "Swan", "Ant", "Bee", "Buuterfly", "Snake", "Frog", "Crab", "Dog", "Cat", "Horse", "Pig",
    "Sheep", "Chicken", "Fish"];
let questionWord = "";
let fruitsBtn = document.querySelector(".btn:first-child");
let countriesBtn = document.querySelector(".btn:nth-child(2)");
let animalsBtn = document.querySelector(".btn:last-child");
let textArea = document.querySelector(".text");
let alphabeticBtn = document.querySelectorAll(".alphabet button");
let letter = "";
let hataliGiris = 0;
function fruitsBTNclicked() {
    fruitsBtn.classList.add("disabled");
    countriesBtn.classList.add("disabled");
    animalsBtn.classList.add("disabled");
    for (let i = 0; i < alphabeticBtn.length; i++) {
        alphabeticBtn[i].classList.remove("disabled");
    }

    let index = parseInt(Math.random() * (fruits.length));
    let word = fruits[index];
    questionWord = word;
    let count = word.length;
    let lines = `<span><pre> _ </pre></span>`;
    for (let i = 0; i < count; i++) {
        textArea.insertAdjacentHTML("beforeend", lines);

    }
    letter = textArea.querySelectorAll("span");

}
function countriesBTNclicked() {
    fruitsBtn.classList.add("disabled");
    countriesBtn.classList.add("disabled");
    animalsBtn.classList.add("disabled");
    for (let i = 0; i < alphabeticBtn.length; i++) {
        alphabeticBtn[i].classList.remove("disabled");
    }

    let index = parseInt(Math.random() * (countries.length));
    let word = countries[index];
    questionWord = word;
    let count = word.length;
    let lines = `<span><pre> _ </pre></span>`;
    for (let i = 0; i < count; i++) {
        textArea.insertAdjacentHTML("beforeend", lines);

    }
    letter = textArea.querySelectorAll("span");
}
function animalsBTNclicked() {
    fruitsBtn.classList.add("disabled");
    countriesBtn.classList.add("disabled");
    animalsBtn.classList.add("disabled");
    for (let i = 0; i < alphabeticBtn.length; i++) {
        alphabeticBtn[i].classList.remove("disabled");
    }

    let index = parseInt(Math.random() * (animals.length));
    let word = animals[index];
    questionWord = word;
    let count = word.length;
    let lines = `<span><pre> _ </pre></span>`;
    for (let i = 0; i < count; i++) {
        textArea.insertAdjacentHTML("beforeend", lines);

    }
    letter = textArea.querySelectorAll("span");
}
function alphabeticBTNclicked(input) {
    let a = 1;
    hataliGiris++;
    input.classList.add("disabled");
    for (let j = 0; j < questionWord.length; j++) {
        if (questionWord[j].toUpperCase() == input.innerText) {
            letter[j].innerText = questionWord[j].toUpperCase();
            if (a == 1) {
                hataliGiris--;
                a++;
            }
        }
    }
    mistakes();
    Win();

}
function mistakes() {
    if (hataliGiris == 1) {
        let item = `<div class="circle"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    else if (hataliGiris == 2) {
        let item = `<div class="vucut"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    else if (hataliGiris == 3) {
        let item = `<div class="solKol"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    else if (hataliGiris == 4) {
        let item = `<div class="sagKol"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    else if (hataliGiris == 5) {
        let item = `<div class="solBacak"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    else if (hataliGiris == 6) {
        let item = `<div class="sagBacak"></div>`;
        document.querySelector(".man").insertAdjacentHTML("beforeend", item);
    }
    if (hataliGiris == 6) {
        document.querySelector(".playAgain").classList.remove("displayNone");
        document.querySelector(".container").classList.add("displayNone");
        document.querySelector(".man").classList.add("displayNone");
        window.alert(`KAYBETTİNİZ.Adam Öldü.Kelimenin Doğrusu :  ${questionWord}`);
    }
}
function reloaded() {
    location.reload();
}
function Win() {
    let sayac = 0;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].innerText != " _ ") {
            sayac++;
        }
    }
    if (sayac == letter.length) {
        window.alert("KAZANDIN.Tebrikler.");
        document.querySelector(".playAgain").classList.remove("displayNone");
        document.querySelector(".container").classList.add("displayNone");
        document.querySelector(".man").classList.add("displayNone");
    }
}