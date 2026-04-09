import React from 'react';

function Day({ day, isWeekend, selectionState, onClick, isToday, isHoliday }) {
  const getDayClasses = () => {
    let classes = ['day'];
    
    if (isWeekend) {
      classes.push('weekend');
    }
    
    if (isToday) {
      classes.push('today');
    }
    
    if (isHoliday) {
      classes.push('holiday');
    }
    
    if (selectionState === 'start') {
      classes.push('selection-start');
    } else if (selectionState === 'end') {
      classes.push('selection-end');
    } else if (selectionState === 'between') {
      classes.push('selection-between');
    } else if (selectionState === 'selected') {
      classes.push('selected');
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getDayClasses()} onClick={() => onClick(day)}>
      <span className="day-number">{day}</span>
    </div>
  );
}

export default Day;