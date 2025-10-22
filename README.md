#  Netflix Clone (Frontend)

A responsive **Netflix web app prototype** built using **React.js**.  
It simulates a streaming experience by displaying a random movie banner,  
interactive hover previews, and fullscreen playback — inspired by Netflix UI.

---

## Features

- **Dynamic Banner:** A random movie appears on each refresh.
- **Play Button:** Opens the selected movie in fullscreen video mode.
- **Back Button:** Returns smoothly to the main home screen.
-  **Movie Grid:** Displays 9 sample movies fetched from local data.
-  **Responsive Design:** Works seamlessly on both desktop and mobile.
-  **Instant Transitions:** Built using React Hooks (`useState`, `useEffect`).

---

## Tech Stack

| Layer | Technology Used |
|--------|------------------|
| **Frontend Framework** | React.js (with Vite setup) |
| **Styling** | CSS3 |
| **Routing** | React Router DOM |
| **Data Source** | Local JavaScript array (`movies.js`) |
| **Video Handling** | HTML5 `<video>` tag |

---

## Folder Structure

```plaintext
netflix-clone/
│
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Login.css
│   │   ├── Home.css
│   │   ├── MovieGrid.css
│   ├── movies.js
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
│   └── movie-posters/
│
├── package.json
├── vite.config.js
└── README.md
---
```
## Setup Instructions


1. **Clone the repository**
git clone repo-url


2. **Navigate into the project folder**

cd netflix-clone


3. **Install dependencies**
```
npm install
```

4. **Start the development server**
```
npm start
```

5. **Open the app in your browser**  
Go to [http://localhost:3000](http://localhost:3000)

## How It Works

- The app displays **9 movies** in a Netflix-like interface with hover and playback interactions.  
- **Banner:** A random movie is selected as the main banner on page load.  
- **Hover Effect:** Hovering over a movie card plays its video preview in place of the poster.  
- **Play Movie:** Clicking a movie (or the banner Play button) opens a **full-screen video player**.  
- **Back Button:** Clicking Back closes the video and returns to the main page.  
- The project uses **React.js** for UI, **CSS** for styling, and **React state** to manage hovered/selected movies.
