
# 🧠 Neura – AI-Powered Wellness Smartwatch

**Neura** is a premium product landing page for a fictional AI-powered smartwatch focused on personal wellness. It features immersive interaction, modern UI/UX, and stunning visuals crafted to simulate a real tech brand’s marketing site.

---

## 🌐 Live Preview  
[🔗 View Website](https://your-deployment-link.com)

---

## 🎯 Product Overview

The **Neura Smartwatch** blends advanced AI-driven health tracking with interactive animations and a clean layout. Built as a frontend showcase project, this landing page includes key features that mirror premium SaaS/product launch standards.

---

## 🌟 Features Implemented (Replicated from Provided Assets)

| Feature | Description |
|--------|-------------|
| 🎬 **Hero Section with Video Background** | Fullscreen autoplayed video with bold tagline |
| 🌀 **Loader Screen** | Animated Neura loader with glowing rings |
| 💡 **Scroll Reveal Effects** | Elements animate in when scrolled into view |
| 🎧 **Music Toggle Button** | Toggle ambient background music (autoplay + mute toggle) |
| 🌊 **Ripple Effect** | Visual ripple on button click for CTA |
| 🖼 **Carousel Switcher** | Front, Side, and Back images of smartwatch with smooth transition |
| ⌚ **Product Viewer** | 3D-style rotation, zoom, and floating UI labels |
| 💬 **ChatBot** | AI assistant floating at the bottom of the page |
| 💸 **Dynamic Pricing** | Toggle pricing plans (monthly/yearly) with animation |
| ❓ **FAQ Accordion** | Expand/collapse feature for user queries |
| 🧾 **Testimonials** | Auto-rotating user reviews carousel |
| 💼 **Showcase Work** | Visual section showing product/service highlights |
| 📩 **Newsletter & Contact** | Form for collecting user leads with visual feedback |
| 🌒 **Dark/Light Mode** | System-aware theme toggle |
| 🔔 **Popups / Modals** | Floating chatbot and potential prompts animated via framer-motion |

---

## 🧩 Tech Stack

- **React 18** + **TypeScript**
- **Vite** for fast dev build
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** + **React Icons** for iconography
- **Pexels** and other free stock for images/videos

---

## 📁 Project Structure
src/
├── components/
│   ├── ChatBot.tsx             # AI Assistant UI
│   ├── ContactSection.tsx      # Contact form / newsletter
│   ├── CTA.tsx                 # Call to action with countdown
│   ├── FAQ.tsx                 # Frequently asked questions (accordion)
│   ├── Features.tsx            # Product feature cards
│   ├── Footer.tsx              # Footer with links & social
│   ├── Hero.tsx                # Hero section with video background
│   ├── Loader.tsx              # Custom animated loading screen
│   ├── Navbar.tsx              # Top navigation with theme toggle
│   ├── Pricing.tsx             # Dynamic pricing table
│   ├── PricingSection.tsx      # Wrapper for pricing layout
│   ├── ProductShowcasing.tsx   # Smartwatch feature highlight section
│   ├── ProductViewer.tsx       # 3D interactive product viewer
│   ├── Snapbar.tsx             # Notification/snackbar component
│   ├── StatSection.tsx         # Stats and performance info
│   ├── CarouselSwitch.tsx      # Image carousel for product angles
│   ├── RippleEffect.tsx        # Ripple animation on buttons
│   ├── ShowcaseWork.tsx        # Visual product/service showcase section
│   ├── Testimonials.tsx        # Auto-rotating user testimonials
├── App.tsx                     # Main application layout
├── main.tsx                    # ReactDOM entry point
├── index.css                   # Global Tailwind and custom styles
├── vite-env.d.ts               # TypeScript environment declarations


---

## ⚙️ Setup & Run

### Installation

```bash
git clone https://github.com/yourusername/neura-landing-page.git
cd neura-landing-page
npm install
npm run dev
