# ⚡ DigiTools

> Your all-in-one digital toolkit marketplace — discover, purchase, and start using the best productivity software curated for creators, teams, and entrepreneurs.

---

## 🖼️ Preview

![DigiTools Banner](https://placehold.co/1200x500/6d28d9/ffffff?text=DigiTools+—+Your+Digital+Toolkit)

---

## 🚀 Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI architecture |
| **Tailwind CSS** | Utility-first responsive styling |
| **DaisyUI** | Pre-built accessible UI components |
| **React-Toastify** | Toast notification system |
| **JavaScript (ES6+)** | App logic and state management |
| **JSON** | Local product data store |

---

## ✨ Features

### 🛒 Full Cart System
Add products to your cart from the product grid, see the live count in the navbar badge, remove individual items, and clear everything with a single "Proceed to Checkout" click.

### 🔔 Toast Notifications
Every cart interaction — add, remove, or checkout — triggers a contextual React-Toastify notification so users always know what just happened.

### 📱 Fully Responsive
Built mobile-first with Tailwind CSS. Adapts seamlessly from small phones to widescreen desktops: single-column on mobile, three-column product grid on desktop, sticky navbar throughout.

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/digitools.git
cd digitools

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Dependencies
```bash
npm install react-toastify
npm install -D tailwindcss daisyui
```

---

## 🗂️ Project Structure

```
src/
├── App.jsx          # Root component — state, cart logic
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── Stats.jsx
│   ├── MainSection.jsx   # Products + Cart toggle
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── Steps.jsx
│   ├── Pricing.jsx
│   └── Footer.jsx
└── data/
    └── products.json     # 8 product records
```

---

## 📊 Product Data Shape

```json
{
  "id": 1,
  "name": "ResumeForge AI",
  "description": "Craft ATS-optimised resumes in minutes...",
  "price": 12,
  "period": "monthly",
  "tag": "Popular",
  "tagType": "popular",
  "features": ["100+ templates", "ATS optimisation", "Export to PDF"],
  "icon": "📄"
}
```

---

## 🔧 Sections

- **Navbar** — Sticky, cart icon with live badge count
- **Banner** — Hero section with heading, description, floating tool cards, and CTA buttons
- **Stats** — Key numbers (users, tools, uptime, rating)
- **Main Section** — Toggle between Products grid and Cart
- **Steps** — Three-step how-it-works walkthrough
- **Pricing** — Three-tier plan cards (Starter / Pro / Enterprise)
- **Footer** — Links, brand, legal

---

## 📄 License

MIT © 2025 DigiTools
