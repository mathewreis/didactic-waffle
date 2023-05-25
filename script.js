// Function to get current timestamp in EST
function getCurrentTimestamp() {
    const currentDate = new Date();
    const estOffset = -5 * 60; // Offset in minutes for EST timezone (UTC-5:00)
    const estTimestamp = new Date(currentDate.getTime() + estOffset * 60 * 1000);
  
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return estTimestamp.toLocaleString('en-US', options);
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
  // Print notes function
function printNotes() {
    const notesList = document.getElementById('notes-list');
    const notesText = [];
    
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    notesText.push('William Floyd Student Government Meeting Minutes');
    notesText.push('Date: ' + formattedDate);
    
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
  