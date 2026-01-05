# 🌌 threeFolio — A 3D Journey Through My Work

**threeFolio** is my interactive 3D portfolio — a minimal orbit through my projects, experience, and design philosophy.  
Built with **React Three Fiber**, **TailwindCSS**, and **Framer Motion**, it blends clean frontend engineering with creative 3D design.

---

## ✨ Preview

🔗 [Live Demo](https://meghamalge.github.io/threeFolio/)

🧠 Designed & Developed by [Megha Malge](https://www.linkedin.com/in/meghamalge)

---

## 🧩 Tech Stack

| Layer | Tools / Libraries |
|-------|--------------------|
| **Framework** | [React](https://react.dev/) |
| **3D Engine** | [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) |
| **3D Helpers** | [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) |

---

## 🧱 Project Structure

The project is organized to keep **3D components**, **UI overlays**, and **pages** modular and easy to extend as the portfolio grows.

```bash
threeFolio/
├── public/                         # Public assets and favicon
├── src/
│   ├── assets/                     # Textures, icons, small 3D models
│   ├── components/                 # Core reusable components
│   │   ├── scenes/                 # Main Three.js scene (3D world)
│   │   │   ├── HomeScene.jsx        
│   │   │   └── ProjectsScene.jsx 
│   │   ├── camera/                 # Camera movement logic / scroll controls
│   │   └── Overlay/                # 2D UI overlays
│   │       ├── Navbar.jsx          # Top navigation bar
│   │       └── Overlay.jsx         # Overlay cards for Home, Projects, etc.
│   ├── constants/                  
│   ├── context/                  
│   ├── data/                  
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global + Tailwind styles
│   └── main.jsx                    # Entry point for React
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/threeFolio.git
cd threeFolio
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Locally
```bash
npm run dev
```

### 4️⃣ Build for Production
```bash
npm run build
```

---

## 🎨 Theme Concept

### 🪐 Minimal Orbit

A sleek, monochrome 3D experience inspired by the concept of orbits — where each section of my portfolio represents a unique planet in my professional journey.

The design blends **minimalism**, **motion**, and **depth**, creating an environment that feels both futuristic and focused on clarity.

**Visual Highlights**
- ⚫ Monochrome palette with soft glow accents (black, white, and cyan)
- 🎥 Smooth camera transitions between sections
- 💫 Floating geometric shapes and ambient lighting
- 🧭 Overlay UI with glass or matte finish for clean readability

**Sections**
- **Home** — The entry orbit, introducing who I am and what I do  
- **Experience** — A connected timeline of roles and learnings  
- **Projects** — Interactive previews of featured works  

---

## 👩‍💻 Author

**Megha Malge**  
Frontend-Focused Full Stack Developer  
📍 Bangalore, India  

I build interactive, scalable, and beautiful web experiences — combining performance-driven engineering with creative front-end design.

**Connect with me:**  
- 💼 [LinkedIn](https://www.linkedin.com/in/meghamalge)  
- 💻 [GitHub](https://github.com/meghamalge)  
- ✉️ [meghamalge226@gmail.com](mailto:meghamalge226@gmail.com)

