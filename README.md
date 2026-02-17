# Yab G - Cinematic Portfolio

A premium cinematic portfolio website for **Yab G**, a creative videographer and editor. The site features a moody, film-inspired aesthetic with smooth animations and an interactive cinematic mode toggle.

## 🎬 Features

- **Cinematic Mode Toggle**: Switch between full cinematic experience (with letterbox bars) and standard view
- **Film Grain Effect**: Subtle texture overlay for authentic film quality
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Premium Aesthetic**: Deep blacks, warm gold accents, and elegant typography
- **Video Showcase**: Featured works for Dawit Dreams and Abay TV (video placeholders ready for integration)
- **Smooth Animations**: Fade-in effects and hover interactions throughout

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with state management
│   └── globals.css         # Global styles, theme tokens, film grain
├── components/
│   ├── header.tsx          # Navigation + Cinematic Mode toggle
│   ├── hero.tsx            # Hero section with image
│   ├── about.tsx           # About section with skills & stats
│   ├── works.tsx           # Works showcase (Dawit Dreams, Abay TV)
│   └── contact.tsx         # Contact section + footer
└── public/
    └── yab-g-hero.jpg      # Hero image
```

## 🎨 Design System

### Colors
- **Background**: Deep charcoal (#0a0a0a)
- **Foreground**: Light gray (#e8e8e8)
- **Accent**: Warm gold (#d4a233)
- **Secondary**: Dark gray for subtle contrast

### Typography
- **Headings**: Bold, tracked uppercase for premium feel
- **Body**: Clean sans-serif with generous line-height
- **Accents**: Small caps, letter spacing for cinematic elegance

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

## 🎥 Adding Videos

Replace video placeholders in `components/works.tsx`:

```tsx
{/* Replace the video placeholder div */}
<video
  autoPlay
  muted
  loop
  className="w-full h-full object-cover"
>
  <source src="/path/to/video.mp4" type="video/mp4" />
</video>
```

## 🎭 Customization

### Cinematic Mode
The letterbox effect is toggleable via the header button. Adjust heights in `globals.css`:
```css
.letterbox-top,
.letterbox-bottom {
  height: 32px; /* Adjust bar height */
}
```

### Colors
Update design tokens in `globals.css` `:root` section to match your brand.

### Animation Speed
Modify `--duration` in Tailwind utilities for faster/slower animations.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Smooth animations with GPU acceleration

## 📞 Contact Information

- **Email**: yabetsassfa@gmail.com
- **Phone**: +251 945 770 952
- **Location**: Addis Ababa, Ethiopia

---

*Crafted with vision. Shot with passion. Edited with precision.*
