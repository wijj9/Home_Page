const toggle_switch = document.getElementById("label");
const container = document.getElementById("container");
const Body = document.getElementById("bd");
const page = document.body

const checkBox = document.getElementById("switch");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    page.classList.add("checked");
    container.style.backgroundColor = "black";
    container.classList.toggle("night-mode-on");
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    page.classList.remove("checked");
    container.style.backgroundColor = "#dddddd";
    container.classList.toggle("night-mode-off");
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}
toggle_switch.addEventListener("click", function () {
    /*dark_mode_on = !dark_mode_on;*/
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});




/*Buttons*/
const Search_Button = document.querySelector(".search");
const Random_Button = document.querySelector(".random");

const Search_Field = document.getElementById('user_input');

const Programs_List = [
    { word: "Rock Paper Scissors", url: "./Home/Games/Rock_Paper_Scissors/index.html" },
    { word: "Password Generator", url: "./Home/Games/Password_Generator/index.html" },
    { word: "Signature Creator", url: "./Home/Games/Rock_Paper_Scissors/scissors.html" },
    { word: "Tic Tac Toe", url: "./Home/Games/Rock_Paper_Scissors/paper.html" },
    { word: "Toggle Switch", url: "./Home/Games/Rock_Paper_Scissors/scissors.html" },
    // Add more suggestions with their respective URLs
];
/*Variables*/
const RPS_Word_List = ["ROCK", "PAPER","SCISSORS", "ROCKS","PAPERS","SCISSOR"]


const searchInput = document.getElementById("user_input");
const suggestionsList = document.getElementById("suggestions-list");

const suggestions = [
    "Rock Paper Scissors",
    "Password Generator",
    "Signature Creator",
    "Tic Tac Toe",
    "Toggle Switch",
];

function displaySuggestions() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchTerm)
    );

    suggestionsList.innerHTML = "";
    filteredSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement("li");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = suggestion;
        suggestionItem.addEventListener("click", () => {
            searchInput.value = suggestion;
            suggestionsList.style.display = "none";
        });
        suggestionsList.appendChild(suggestionItem);
    });

    if (filteredSuggestions.length > 0) {
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}


function search() {
    const user_input = Search_Field.value.toUpperCase(); // Convert user input to uppercase
    for (const suggestion of RPS_Word_List) {
        if (user_input.includes(suggestion.word)) {
            window.location.href = suggestion.url; // Redirect to the corresponding URL
            break; // Exit the loop after the first match
        }
    }
}

function start() {
    Search_Button.addEventListener('click', function () {
        Search_Button.classList.toggle('clicked');
        search();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            search()
        }
    });
}
window.onload = function () {
    /*container.style.backgroundColor = "#dddddd";*/

    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

window.addEventListener("beforeunload", function () {
    // Reset the checkbox to its initial state (unchecked)
    checkBox.checked = localStorage.getItem("dark-mode") === "enabled";
});


// Event listener for input changes
searchInput.addEventListener("input", displaySuggestions);

start();