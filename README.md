# MyTheatre

**MyTheatre** is a web application that allows users to **book theatre tickets easily and quickly**. It features a sleek and modern interface with a Hero carousel, trending shows section, and a responsive navigation bar.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Demo

![MyTheatre Screenshot](link-to-screenshot-if-any)

---

## Features

- **User Authentication**: Sign In and Sign Up functionality.
- **Hero Carousel**: Dynamic carousel for showcasing top shows or events.
- **Trending Section**: Displays trending theatre shows.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop.
- **Loading Overlay**: Smooth loading screen when navigating between pages.

---

## Tech Stack

- **Frontend**: Next.js (React 18)
- **Styling**: Tailwind CSS
- **Components**: ShadCN UI (Card, Button, Carousel)
- **Routing**: Next.js App Router (`useRouter`)
- **State Management**: React `useState` and `useRef`
- **Animations**: Embla Carousel Autoplay

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mytheatre.git

# Navigate to project folder
cd mytheatre

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Folder Structure

```
mytheatre/
│
├─ components/
│   ├─ Hero.js
│   ├─ Trending.js
│   ├─ Loading.js
│   └─ ui/ (Card, Button, Carousel components)
│
├─ pages/ or app/
│   ├─ page.js (Home)
│   ├─ login.js
│   └─ register.js
│
├─ public/ (images, icons)
├─ styles/
├─ package.json
└─ README.md
```

---

## Future Improvements

- Integrate a **backend API** for real-time ticket booking.
- Add **user profile management**.
- Implement **payment gateway** for booking tickets online.
- Add **search and filter** for shows.
- Improve **accessibility** and ARIA support.

---
