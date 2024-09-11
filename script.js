let notes = [];

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        noteInput.value = '';
        displayNotes();
    }
}

function displayNotes() {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            notes.splice(index, 1);
            displayNotes();
        };
        li.appendChild(deleteButton);
        noteList.appendChild(li);
    });
}
