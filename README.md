# Calendar App

A beautiful and responsive calendar application built with React that features date range selection, note-taking capabilities, and holiday support. The app is designed with a modern UI and works seamlessly on both desktop and mobile devices.

## Features

- **Interactive Calendar**: Navigate through months and years with an intuitive interface
- **Date Range Selection**: Click to select single dates or date ranges
- **Note-Taking**: Add and edit notes for specific dates with persistent storage
- **Holiday Display**: Shows holidays for different countries (US, UK, etc.)
- **Theme Toggle**: Switch between light and dark themes
- **Mobile Responsive**: Optimized for touch devices and mobile screens
- **Weekend Highlighting**: Visual distinction for weekends
- **Today Indicator**: Clear marking of the current date

## Tech Stack

- **React 18**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS3**: Custom CSS with responsive design
- **LocalStorage**: Client-side persistence for notes

## Project Structure

```
calendar-app/
  public/
  src/
    components/          # React components
      calendar.jsx       # Main calendar component
      day.jsx           # Individual day component
      header.jsx        # Calendar header with navigation
      notespanel.jsx    # Notes panel for date-specific notes
      theme-toggle.jsx  # Theme switcher component
    utils/              # Utility functions
      dateutils.jsx     # Date manipulation utilities
      holidays.jsx      # Holiday data and functions
    styles/
      calendar.css      # Global styles and theme definitions
    app.jsx             # Main application component
    main.jsx           # Application entry point
  index.html           # HTML template
  package.json         # Dependencies and scripts
  vite.config.js       # Vite configuration
```

## How It Works

### Core Components

1. **App Component** (`src/app.jsx`)
   - Manages global state (current date, selected dates, theme)
   - Handles date range selection logic
   - Coordinates between all child components

2. **Calendar Component** (`src/components/calendar.jsx`)
   - Renders the monthly calendar grid
   - Handles month navigation
   - Manages date selection states (start, end, in-range)
   - Integrates holiday and weekend highlighting

3. **Day Component** (`src/components/day.jsx`)
   - Renders individual calendar days
   - Shows visual states (selected, today, weekend, holiday)
   - Handles click events for date selection

4. **Notes Panel** (`src/components/notespanel.jsx`)
   - Provides note-taking functionality for selected dates
   - Persists notes to localStorage
   - Updates automatically when date selection changes

### Date Range Selection Logic

The app implements a three-click date range selection:

1. **First Click**: Sets the start date
2. **Second Click**: Sets the end date (automatically orders dates chronologically)
3. **Third Click**: Starts a new range selection

### Theme System

- Light and dark themes with CSS custom properties
- Theme preference persists in localStorage
- Smooth transitions between themes

### Holiday Integration

- Pre-defined holidays for multiple countries
- Visual indicators on calendar days
- Extensible holiday system for adding new countries

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd calendar-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage Guide

### Basic Navigation

- **Previous/Next Month**: Use the arrow buttons in the header
- **Date Selection**: Click on any date to select it
- **Range Selection**: Click start date, then click end date
- **Add Notes**: Select a date and type in the notes panel

### Keyboard Shortcuts

The app is optimized for both mouse and touch interactions, making it accessible on various devices.

### Data Persistence

- Notes are automatically saved to localStorage
- Theme preference is remembered
- No server-side storage required

## Customization

### Adding New Holidays

Edit `src/utils/holidays.jsx` to add holidays for new countries:

```javascript
export const getHolidays = (year, country = 'US') => {
  const holidays = {
    // Add your country here
    YOUR_COUNTRY: [
      { month: 0, day: 1, name: "New Year's Day" },
      // Add more holidays
    ],
    // ... existing countries
  };
  return holidays[country] || [];
};
```

### Theme Customization

Modify CSS custom properties in `src/styles/calendar.css`:

```css
:root {
  --primary-color: #2d89ef;
  --background-color: #ffffff;
  --text-color: #333333;
  /* Add more custom properties */
}
```

### Adding New Features

The component-based architecture makes it easy to extend:

- Add new components to `src/components/`
- Create utility functions in `src/utils/`
- Extend styles in `src/styles/`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Performance

- Optimized for fast rendering with React hooks
- Efficient date calculations
- Minimal bundle size with Vite
- Smooth animations and transitions

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast themes
- Screen reader friendly
- Touch-optimized for mobile devices

---

Built with React, Vite, and modern web technologies for a delightful user experience.
