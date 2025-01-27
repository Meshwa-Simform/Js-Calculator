let key = localStorage.length;
// Function to save history inlocal storage
function history(equation , Answer){
    let data = {
        equation ,
        Answer
    }
    localStorage.setItem(key , JSON.stringify(data));
    key++;
}

// Function to display history
function displayHistory() {
    let historyContent = document.getElementById('history-content');
    historyContent.innerHTML = ''; // Clear previous history content

    for (let i = 0; i < localStorage.length; i++) {
        let historyItem = JSON.parse(localStorage.getItem(i));
        let historyEntry = document.createElement('div');
        historyEntry.innerHTML = `<p>${historyItem.equation} = </p><h4>${historyItem.Answer}</h4>`;
        historyContent.appendChild(historyEntry);
    }
    historyContent.scrollTop = historyContent.scrollHeight;
}

// Function to clear history
function clearHistory() {
    if(localStorage.length === 0){
        alert("No history to clear.");
        return;
    }
    localStorage.clear();
    key = 0;
    displayHistory(); // Re-display the empty history
}



export { history , displayHistory , clearHistory};
