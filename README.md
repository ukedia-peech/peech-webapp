# Peech - AI-Powered Business Intelligence Platform

A modern, premium React website with enhanced animations, performance optimization, and scalability. Built with React, Framer Motion, and Tailwind CSS, inspired by Celonis.com design principles.

## 🚀 Enhanced Features

### ✨ **Premium Design & Animations**
- **Modern Aesthetic**: Clean, techy, and premium look inspired by Celonis.com
- **Advanced Animations**: Framer Motion powered scroll-reveal, hover effects, and smooth transitions
- **Loading Screen**: Animated logo and progress bar with floating elements
- **Floating CTA**: Interactive chat widget with expandable interface

### 🎯 **Interactive Components**
- **Animated Counters**: Scroll-triggered metrics with smooth counting animations
- **Team Section**: Hover effects and social links for team members
- **Resources Hub**: Blog preview cards with category filters and newsletter signup
- **Enhanced Navigation**: Sticky header with scroll effects and mobile menu

### ⚡ **Performance & SEO**
- **Lazy Loading**: Images and components load on demand
- **Performance Monitoring**: Core Web Vitals tracking and optimization
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Lighthouse Score**: Optimized for 90+ performance and SEO scores

### 🛠️ **Developer Experience**
- **Reusable Components**: Button, Card, LoadingScreen, FloatingCTA
- **Theme System**: Centralized color, typography, and spacing configuration
- **Custom Hooks**: Performance monitoring, lazy loading, scroll animations
- **Clean Architecture**: Modular, scalable, and maintainable code structure
- **DRY Principle**: Centralized animations and no duplicate code

## 🎨 Design System

### **Color Palette**
- **Primary**: Orange (#f97316) - matches peech.tech branding
- **Corporate**: Professional grays for business feel
- **Dark**: Premium dark theme colors
- **Gradients**: Smooth color transitions throughout

### **Typography**
- **Fonts**: Inter (primary), JetBrains Mono (code)
- **Scale**: Consistent heading and body text sizes
- **Weights**: Light to Black for hierarchy

### **Components**
- **Buttons**: Multiple variants with hover animations
- **Cards**: Premium shadows and hover effects
- **Animations**: Staggered reveals and smooth transitions

## 🛠️ Tech Stack

- **React 19**: Latest React with hooks and modern patterns
- **Framer Motion**: Advanced animations and transitions
- **Tailwind CSS**: Utility-first CSS with custom configuration
- **Performance Hooks**: Custom hooks for optimization
- **SEO Tools**: Sitemap, robots.txt, meta tags

## 📁 Clean Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js          # Enhanced navigation with scroll effects
│   │   └── Footer.js          # Dark theme footer with newsletter
│   ├── sections/
│   │   ├── Hero.js            # Animated hero with floating elements
│   │   ├── Features.js        # Feature cards with hover animations
│   │   ├── UseCases.js        # Interactive industry tabs
│   │   ├── CustomerLogos.js   # Social proof with testimonials & stats
│   │   ├── HowItWorks.js      # Step-by-step process with timeline
│   │   ├── Team.js            # Team profiles with hover effects
│   │   └── Resources.js       # Knowledge hub with blog previews
│   └── ui/
│       ├── Button.js          # Reusable button component
│       ├── Card.js            # Premium card component
│       ├── FloatingCTA.js     # Interactive chat widget
│       └── LoadingScreen.js   # Animated loading screen
├── hooks/
│   └── usePerformance.js      # Performance monitoring & scroll hooks
├── utils/
│   ├── animations.js          # Centralized animation variants
│   └── theme.js               # Theme configuration
├── App.js                     # Main app with loading screen
└── index.js                   # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd peech
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm start` - Development server with hot reload
- `npm run build` - Production build with optimization
- `npm test` - Run test suite
- `npm run analyze` - Build and serve for analysis
- `npm run lighthouse` - Generate Lighthouse performance report
- `npm run performance` - Performance-only Lighthouse analysis

## 🎯 Customization Guide

### **Theme Configuration**
Update `src/utils/theme.js` for consistent styling:
```javascript
export const theme = {
  colors: {
    primary: { 500: '#f97316' }, // Main orange
    corporate: { /* professional grays */ },
    dark: { /* premium dark colors */ }
  },
  // ... typography, spacing, animations
};
```

### **Component Customization**
- **Buttons**: Use `<Button variant="primary" size="lg">` with multiple variants
- **Cards**: Use `<Card variant="premium" hover={true}>` for different styles
- **Animations**: Import from `src/utils/animations.js` for consistent motion

### **Content Updates**
- Replace placeholder text in component files
- Update team member information in `Team.js`
- Customize metrics in `Metrics.js`
- Add blog posts in `Resources.js`

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px - Single column, stacked navigation
- **Tablet**: 768px - 1024px - Two-column grids
- **Desktop**: > 1024px - Multi-column layouts, full navigation

### **Mobile-First Approach**
- All components built mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interactions

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant ratios

## ⚡ Performance Optimization

### **Core Web Vitals**
- **LCP**: Optimized image loading and critical resources
- **FID**: Debounced event handlers and efficient animations
- **CLS**: Stable layouts with proper image dimensions

### **Optimization Techniques**
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused CSS removal with Tailwind
- **Caching**: Optimized asset caching strategies

### **Monitoring**
```javascript
import { usePerformanceMonitor } from './hooks/usePerformance';
const metrics = usePerformanceMonitor();
// Monitor Core Web Vitals in real-time
```

## 📈 SEO Optimization

### **Meta Tags**
- Open Graph tags for social sharing
- Twitter Card optimization
- Structured data markup
- Canonical URLs

### **Technical SEO**
- `robots.txt` for search engine guidance
- `sitemap.xml` for content discovery
- Semantic HTML structure
- Fast loading times

### **Content Strategy**
- Keyword-optimized headings
- Descriptive alt text for images
- Internal linking structure
- Mobile-friendly design

## 🔧 Development Workflow

### **Code Quality**
- ESLint configuration for code standards
- Prettier for consistent formatting
- Component documentation with JSDoc
- TypeScript ready (optional upgrade)

### **Testing Strategy**
- Unit tests for utility functions
- Component testing with React Testing Library
- Performance testing with Lighthouse
- Cross-browser compatibility testing

### **Deployment**
- Optimized production builds
- CDN-ready static assets
- Environment-specific configurations
- Monitoring and analytics setup

## 🤝 Contributing

### **Development Process**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper documentation
4. Test thoroughly across devices and browsers
5. Submit a pull request with detailed description

### **Code Standards**
- Follow existing component patterns
- Use TypeScript for new features (optional)
- Maintain accessibility standards
- Optimize for performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Resources

- **Documentation**: Comprehensive inline code comments
- **Issues**: GitHub issues for bug reports and feature requests
- **Email**: support@peech.tech for direct support
- **Community**: Join our developer community for discussions

## 🚀 Future Enhancements

- **TypeScript Migration**: Full TypeScript support
- **PWA Features**: Service worker and offline capabilities
- **Internationalization**: Multi-language support
- **Advanced Analytics**: User behavior tracking
- **A/B Testing**: Component variant testing

---

**Built with ❤️ by the Peech team**

*Inspired by the premium design of Celonis.com and the innovative spirit of peech.tech*
