import React, { useState } from 'react';
import Header from './components/header.jsx';
import Calendar from './components/calendar.jsx';
import NotesPanel from './components/notespanel.jsx';
import ThemeToggle from './components/theme-toggle.jsx';

/**
 * Main App Component
 * 
 * This is the root component of our calendar application.
 * It manages all the state for date selection, navigation, and coordinates
 * between the calendar, notes panel, and theme toggle.
 */
function App() {
  // Current viewing date (the month/year being displayed)
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Date range selection state
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  // Currently selected date (for notes panel)
  const [selectedDate, setSelectedDate] = useState(null);

  /**
   * Handle date clicks for range selection
   * 
   * Logic:
   * 1. First click: Set start date
   * 2. Second click: Set end date (auto-orders if clicked before start)
   * 3. Third click: Start new range
   * 
   * @param {number} day - Day of month (1-31)
   */
  const handleDateClick = (day) => {
    // Create proper Date object for the clicked day
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    // Case 1: No start date yet - this is the first selection
    if (startDate === null) {
      setStartDate(clickedDate);
      setEndDate(null); // Clear any previous end date
      setSelectedDate(clickedDate);
      return;
    }
    
    // Case 2: We have a start date but no end date - this completes the range
    if (endDate === null) {
      // If clicked date is before start date, swap them
      if (clickedDate < startDate) {
        setEndDate(startDate);
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
      setSelectedDate(clickedDate);
      return;
    }
    
    // Case 3: We already have a complete range - start a new selection
    setStartDate(clickedDate);
    setEndDate(null);
    setSelectedDate(clickedDate);
  };
  
  return (
    <main className="calendar-app">
      {/* Theme toggle button - fixed position */}
      <ThemeToggle />
      
      {/* Main calendar container */}
      <div className="calendar-container">
        <Header currentDate={currentDate} />
        <Calendar 
          currentDate={currentDate} 
          setCurrentDate={setCurrentDate}
          startDate={startDate}
          endDate={endDate}
          selectedDate={selectedDate}
          onDateClick={handleDateClick}
        />
      </div>
      
      {/* Notes panel for selected date */}
      <NotesPanel selectedDate={selectedDate} />
    </main>
  );
}

export default App;