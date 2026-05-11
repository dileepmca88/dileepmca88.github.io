# Dileep Patel - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, TailwindCSS
- **Beautiful UI**: Built with shadcn/ui components
- **Smooth Animations**: Framer Motion for engaging interactions
- **Dark Mode**: Automatic dark/light theme support
- **Mobile Responsive**: Optimized for all devices
- **Performance**: Optimized for fast loading times

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 16
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my_portfolio.git
cd my_portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Development

```bash
# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open [http://localhost:3000](http://localhost:3000) with your browser
```

## 🏗️ Build & Deploy

### Building for Production

```bash
npm run build
```

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. The workflow will:

1. Build the static site
2. Deploy to GitHub Pages
3. Automatically update on every push to main branch

To enable deployment:
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the deployment source

### Manual Deployment

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# You can deploy this folder to any static hosting service
```

## 📁 Project Structure

```
my_portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── portfolio/         # Portfolio-specific components
├── public/                # Static assets
├── styles/                # Additional styles
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── .github/               # GitHub Actions workflows
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Personal Information

Update your personal details in the following files:
- `app/layout.tsx` - Update metadata (title, description)
- `components/portfolio/hero-section.tsx` - Update name and tagline
- `components/portfolio/about-section.tsx` - Update about content
- `components/portfolio/contact-section.tsx` - Update contact information

### Adding Projects

Update your projects in `components/portfolio/projects-section.tsx`

### Skills & Experience

Update your skills and experience in:
- `components/portfolio/skills-section.tsx`
- `components/portfolio/experience-section.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌐 Live Demo

Check out the live demo: [Your Portfolio URL]

---

**Built with ❤️ by Dileep Patel**
