import React from 'react';
import Day from './day.jsx';
import { getDaysInMonth, getFirstDayOfMonth, isWeekend, isToday, getMonthName } from '../utils/dateutils.jsx';
import { isHoliday } from '../utils/holidays.jsx';

/**
 * Calendar Component
 * 
 * Renders a monthly calendar view with date range selection capabilities.
 * Handles month navigation and renders individual day components.
 */
function Calendar({ currentDate, setCurrentDate, startDate, endDate, selectedDate, onDateClick, theme, toggleTheme }) {
  // Week day headers - starting Monday as per calendar standard
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  // Extract year and month from current viewing date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Navigation handlers
  const goToPreviousMonth = () => {
    // Create new date for previous month, day 1
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const goToNextMonth = () => {
    // Create new date for next month, day 1
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  /**
   * Determine the selection state of a specific day
   * Used for styling and visual feedback
   * 
   * @param {number} day - Day of month
   * @returns {string} Selection state: 'start', 'end', 'between', 'selected', or 'none'
   */
  const getDaySelectionState = (day) => {
    const dateToCheck = new Date(year, month, day);
    const dateString = dateToCheck.toDateString();
    
    // Check if this day is the start of a range
    if (startDate && startDate.toDateString() === dateString) {
      return 'start';
    }
    
    // Check if this day is the end of a range
    if (endDate && endDate.toDateString() === dateString) {
      return 'end';
    }
    
    // Check if this day is in the middle of a range
    if (startDate && endDate && dateToCheck > startDate && dateToCheck < endDate) {
      return 'between';
    }
    
    // Check if this day is selected (single selection, no range yet)
    if (selectedDate && selectedDate.toDateString() === dateString) {
      return 'selected';
    }
    
    // No special state
    return 'none';
  };
  
  // Calendar calculations
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfMonth(year, month);
  
  // Build the calendar grid
  // 1. Create array of days (1 to daysInMonth)
  const daysArray = Array(daysInMonth).fill(null).map((_, index) => index + 1);
  
  // 2. Create empty slots for days before the 1st of the month
  const emptySlots = Array(firstDayOfWeek).fill(null);

  return (
    <div className="calendar-grid">
      {/* Month navigation controls */}
      <div className="month-navigation">
        <button className="nav-button" onClick={goToPreviousMonth}>
          &lt; Previous
        </button>
        <div className="current-month">
          {getMonthName(month)} {year}
        </div>
        <button className="nav-button" onClick={goToNextMonth}>
          Next &gt;
        </button>
      </div>
      
      {/* Week day headers */}
      <div className="weekdays">
        {weekDays.map((dayName, index) => (
          <div key={index} className="weekday-header">
            {dayName}
          </div>
        ))}
      </div>
      
      {/* Calendar days grid */}
      <div className="days-grid">
        {/* Empty cells for alignment (days before month starts) */}
        {emptySlots.map((_, index) => (
          <div key={`empty-${index}`} className="empty-day" aria-hidden="true"></div>
        ))}
        
        {/* Actual calendar days */}
        {daysArray.map((dayNumber) => (
          <Day 
            key={dayNumber} 
            day={dayNumber}
            isWeekend={isWeekend(dayNumber, year, month)}
            selectionState={getDaySelectionState(dayNumber)}
            onClick={onDateClick}
            isToday={isToday(dayNumber, year, month)}
            isHoliday={isHoliday(dayNumber, month, year)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;