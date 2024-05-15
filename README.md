# React Star Rating

A lightweight and customizable star rating component for React apps, built with TypeScript and powered by Vite for an optimized development experience.

## Features

- **Customizable**: Easily adjust the number of stars, colors, and sizes.
- **Accessibility Friendly**: Implements ARIA roles and properties to ensure accessibility standards are met.
- **Dependencies-Free**: Uses only React and `react-icons` for visual representations without heavy dependencies.

## Getting Started

### Prerequisites

- Node.js (v12.x or newer)
- npm or yarn

### Installation

Install `react-star-rating` using npm:

npm install react-star-rating

### Usage
 - Here's a quick example to get you started:

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { StarRating } from 'react-star-rating';

  function App() {
    return (
      <div>
        <StarRating totalStars={5} />
      </div>
    );
  }


Interview Explanation Practice
show how many stars are select by hovering over it.
show how many stars are selected after selecting it + mouseLeave.

steps to resolve interview test:
- npm install react-icons
- ask interviewer how many stars do you wish to use.
- create an array with the size of stars passed through props. 
- iterate through the array and use the index as the key and the main value passed through all event functions.
- for each event handler assign logic for state handling through handler functions.
- ensure the icons are properly rendered and explain how they are rendered.





