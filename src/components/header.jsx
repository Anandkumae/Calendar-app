import React from 'react';
import { getMonthName } from '../utils/dateutils.jsx';

function Header({ currentDate }) {
  const month = getMonthName(currentDate.getMonth());
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  
  // Different image seeds for each month to ensure variety
  const monthImageSeeds = [
    'january-winter', 'february-snow', 'march-spring', 'april-flowers',
    'may-bloom', 'june-summer', 'july-beach', 'august-sunshine',
    'september-autumn', 'october-fall', 'november-leaves', 'december-holiday'
  ];
  
  const imageSeed = monthImageSeeds[monthIndex];
  const imageUrl = `https://picsum.photos/seed/${imageSeed}-${year}/800/200.jpg`;

  return (
    <header className="calendar-header">
      <div className="hero-section">
        <div className="hero-image">
          <img src={imageUrl} alt={`${month} ${year} calendar hero`} />
        </div>
        <div className="month-year-display">
          <h1 className="month">{month}</h1>
          <h2 className="year">{year}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;