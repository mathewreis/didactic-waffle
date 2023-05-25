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
