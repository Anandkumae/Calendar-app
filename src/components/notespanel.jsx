import React, { useState, useEffect } from 'react';

/**
 * Notes Panel Component
 * 
 * Allows users to add and edit notes for specific calendar dates.
 * Notes are persisted in localStorage and automatically saved.
 * 
 * @param {Date} selectedDate - The currently selected date from the calendar
 */
function NotesPanel({ selectedDate }) {
  // All notes stored as object with date string keys
  const [allNotes, setAllNotes] = useState({});
  
  // Current note text for the selected date
  const [currentNoteText, setCurrentNoteText] = useState('');
  
  // Load saved notes from localStorage when component first mounts
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('calendarNotes');
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes);
        setAllNotes(parsedNotes);
      }
    } catch (error) {
      console.error('Error loading notes from localStorage:', error);
    }
  }, []); // Run only once on mount
  
  // Auto-save notes to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('calendarNotes', JSON.stringify(allNotes));
    } catch (error) {
      console.error('Error saving notes to localStorage:', error);
    }
  }, [allNotes]); // Run whenever notes change
  
  // Update the textarea content when a different date is selected
  useEffect(() => {
    if (selectedDate) {
      // Use date string as key (consistent across date selections)
      const dateKey = selectedDate.toDateString();
      const noteForDate = allNotes[dateKey] || '';
      setCurrentNoteText(noteForDate);
    } else {
      // Clear textarea when no date is selected
      setCurrentNoteText('');
    }
  }, [selectedDate, allNotes]);
  
  /**
   * Handle changes to the note textarea
   * Updates both the local state and the notes storage
   * 
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The change event
   */
  const handleNoteTextEdit = (event) => {
    const newNoteContent = event.target.value;
    setCurrentNoteText(newNoteContent);
    
    // Only save if we have a selected date
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      
      // Update notes object with new content for this date
      setAllNotes(previousNotes => ({
        ...previousNotes,
        [dateKey]: newNoteContent
      }));
    }
  };
  
  /**
   * Format date for display in a user-friendly way
   * 
   * @param {Date|null} date - Date to format
   * @returns {string} Formatted date string or placeholder
   */
  const formatSelectedDate = (date) => {
    if (!date) {
      return 'No date selected';
    }
    
    return date.toLocaleDateString('en-US', {
      weekday: 'long',    // Monday, Tuesday, etc.
      year: 'numeric',    // 2024
      month: 'long',      // January, February, etc.
      day: 'numeric'      // 1, 2, 3, etc.
    });
  };
  
  return (
    <aside className="notes-panel">
      <header className="notes-header">
        <h3>Notes</h3>
        <div className="selected-date">
          {formatSelectedDate(selectedDate)}
        </div>
      </header>
      
      <section className="notes-content">
        {selectedDate ? (
          <textarea
            className="note-textarea"
            value={currentNoteText}
            onChange={handleNoteTextEdit}
            placeholder="Add your notes here..."
            rows={8}
            aria-label="Notes for selected date"
          />
        ) : (
          <div className="no-date-selected">
            <p>Click on a date to add notes</p>
          </div>
        )}
      </section>
    </aside>
  );
}

export default NotesPanel;