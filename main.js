// Voegt een nieuwe taak toe aan de lijst
function addTask() {
    // Haal het invoerveld en de lijst op
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Controleer of de invoer leeg is
    if (taskInput.value.trim() === "") {
        alert("Voer een taak in!");
        return;
    }

    // Maak een nieuw lijstelement aan en voeg HTML-inhoud toe met knoppen
    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Verwijderen</button> <button onclick="markCompleted(this)">Voltooid</button>';
    taskList.appendChild(li);

    // Wis de invoer na het toevoegen van de taak
    taskInput.value = "";
}

// Verwijdert een taak uit de lijst
function removeTask(button) {
    // Haal het ouderlijke lijstelement en de lijst op
    var li = button.parentNode;
    var taskList = document.getElementById("taskList");

    // Verwijder het lijstelement uit de lijst
    taskList.removeChild(li);
}

// Markeert een taak als voltooid en wijzigt de stijl van de knop
function markCompleted(button) {
    // Haal het ouderlijke lijstelement op
    var li = button.parentNode;

    // Toggle de "completed" klasse om de stijl te wijzigen
    li.classList.toggle("completed");

    // Voeg een klasse toe aan de voltooide knop om de stijl te wijzigen
    var markButton = li.querySelector('button:nth-child(2)');
    markButton.classList.toggle("completed-button");
}

// Verwijdert alle voltooide taken uit de lijst
function removeAllCompletedTasks() {
    // Haal de lijst en voltooide taken op
    var taskList = document.getElementById("taskList");
    var completedTasks = document.getElementsByClassName("completed");

    // Controleer of er voltooide taken zijn om te verwijderen
    if (completedTasks.length === 0) {
        alert("Er zijn geen voltooide to-do's om te verwijderen.");
        return;
    }

    // Verwijder alle voltooide taken uit de lijst
    while (completedTasks.length > 0) {
        taskList.removeChild(completedTasks[0]);
    }
}
