# Sumukh Bhandarkar - Professional Consulting Website

A modern, responsive React website showcasing professional consulting services for developers and students. Built with Vite, React, and modern CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Smooth scrolling navigation and interactive elements
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Services Offered

1. **Freelancing Opportunities** - Project sourcing and client relationship management
2. **Technical Mentorship** - 1-on-1 guidance for programmers and students
3. **Mock Interviews** - Practice technical and behavioral interviews
4. **Learning Support** - Structured learning paths and concept clarification

## 🏗️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **GitHub Pages** - Free hosting and deployment

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/sumukhbhandarkar/profile.git
cd profile
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🚀 Deployment

### GitHub Pages (Free Hosting)

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

3. Your site will be available at: `https://sumukhbhandarkar.github.io/profile`

### Custom Domain (sumukhbhandarkar.com)

1. **Build the project:**

```bash
npm run build
```

2. **Deploy to your hosting provider:**

   - Upload the `dist` folder contents to your web server
   - Configure your domain to point to the hosting provider
   - Set up SSL certificate for HTTPS

3. **Update configuration for custom domain:**
   - Change `base: '/profile/'` to `base: '/'` in `vite.config.js`
   - Update `homepage` in `package.json` to your domain
   - Update meta tags in `index.html` with your domain

## 📁 Project Structure

```
profile/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors and Styling

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... other variables */
}
```

### Content Updates

- **Personal Information**: Update contact details in `Contact.jsx`
- **Services**: Modify service descriptions in `Services.jsx`
- **About Section**: Update bio and stats in `About.jsx`
- **Social Links**: Update social media links in `Footer.jsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `Header.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: sumukh@example.com
- **LinkedIn**: [linkedin.com/in/sumukhbhandarkar](https://linkedin.com/in/sumukhbhandarkar)
- **GitHub**: [github.com/sumukhbhandarkar](https://github.com/sumukhbhandarkar)

---

Built with ❤️ by Sumukh Bhandarkar
