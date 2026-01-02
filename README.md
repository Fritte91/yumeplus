# Yume Plus Sushi - React Website

A modern React website for Yume Plus Sushi Premium Seafood & Sushi Buffet in Rangsit, Thailand, with dual language support (English/Thai).

## Features

- 🌐 **Dual Language Support**: Toggle between English and Thai
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite
- 🎨 **Modern UI**: Beautiful design with smooth animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── StatusBar.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Menu.jsx         # Interactive menu with categories
│   ├── Pricing.jsx
│   ├── Amenities.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── Footer.jsx
│   └── LanguageToggle.jsx
├── context/             # React context
│   └── LanguageContext.jsx
├── data/               # Data files
│   └── menuItems.js    # Menu items (easy to add/delete)
├── translations/        # Translation files
│   ├── en.js
│   └── th.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## Managing Menu Items

The menu is now interactive with category filtering! To add or delete menu items:

### Adding a Menu Item

1. Open `src/data/menuItems.js`
2. Copy an existing item object
3. Update the following:
   - `id`: Use a unique number
   - `category`: Must be one of: `'sushi'`, `'seafood'`, `'teppanyaki'`, `'desserts'`
   - `name`: Object with `en` and `th` properties
   - `description`: Object with `en` and `th` properties
   - `image`: URL to the image
   - `badge`: Optional badge text (object with `en` and `th`)
   - `tag`: Optional tag text (object with `en` and `th`)

### Deleting a Menu Item

Simply remove the entire object from the `menuItems` array in `src/data/menuItems.js`

### Adding a New Category

1. Add menu items with your new category name
2. Add the category definition to the `categories` array in `src/data/menuItems.js`

## Language Toggle

The language toggle button is located in the header. The selected language is saved to localStorage and persists across page reloads.

## Technologies

- React 18
- Vite
- Tailwind CSS
- Iconify (for icons)

## Configuration

### Social Media & External Links

**IMPORTANT**: Before going live, update your social media links and external URLs in `src/config/links.js`:

- Line Official Account URL (e.g., `https://lin.ee/xxxxx` or `https://page.line.me/xxxxx`)
- Facebook Page URL
- Facebook Messenger Link (e.g., `https://m.me/yourpage`)
- Instagram Profile URL
- Menu PDF URL (upload your menu PDF and update the link)

### SEO & Meta Tags

Before deploying, update the following in `index.html`:

1. **Update the canonical URL and Open Graph URLs** with your actual domain (replace `https://yumeplussushi.com` with your actual domain)
2. **Add an Open Graph image** (`og-image.jpg`) to your `public` folder and ensure the path is correct
3. **Update structured data URLs** in `src/components/StructuredData.jsx` with your actual domain

## SEO & Meta Tags

The website includes:
- Open Graph tags for social media sharing
- Twitter Card tags
- Dynamic HTML lang attribute based on selected language
- Proper meta descriptions and keywords
- Canonical URL

## Accessibility Features

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Dynamic language attribute updates

