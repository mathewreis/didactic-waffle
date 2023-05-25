// Get current timestamp in HH:MM format
function getCurrentTimestamp() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  // Add note function
  function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');
  
    if (noteInput.value.trim() !== '') {
      const note = document.createElement('li');
      const timestamp = document.createElement('span');
      const noteText = document.createElement('span');
  
      timestamp.classList.add('timestamp');
      timestamp.textContent = getCurrentTimestamp();
      noteText.textContent = noteInput.value;
  
      note.classList.add('note');
      note.appendChild(timestamp);
      note.appendChild(noteText);
  
      notesList.appendChild(note);
  
      noteInput.value = '';
      noteInput.focus();
    }
  }
  
  // Print notes function
  function printNotes() {
    const secretaryContainer = document.getElementById('secretary-container');
    const notesList = document.getElementById('notes-list');
  
    const secretaryName = prompt('Enter the name of the secretary:');
    const currentDate = new Date().toLocaleDateString('en-US');
  
    if (secretaryName.trim() !== '') {
      secretaryContainer.textContent = 'Secretary: ' + secretaryName;
  
      const notesText = [];
      notesText.push('WFHS Student Gov\'t Meeting');
      notesText.push('Secretary: ' + secretaryName);
      notesText.push('Date: ' + currentDate);
  
      for (let i = 0; i < notesList.children.length; i++) {
        const note = notesList.children[i];
        const timestamp = note.querySelector('.timestamp').textContent;
        const noteText = note.lastChild.textContent;
        notesText.push(`[${timestamp}] ${noteText}`);
      }
  
      if (notesText.length > 0) {
        console.log(notesText.join('\n'));
      } else {
        console.log('No meeting notes available.');
      }
    }
  }
  
  // Event listeners
  document.getElementById('add-note-btn').addEventListener('click', addNote);
  document.getElementById('print-notes-btn').addEventListener('click', printNotes);
  