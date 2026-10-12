# Thamizha Constructions (தமிழா கன்ஸ்ட்ரக்ஷன்ஸ்)
### Premium 3D Business Website • Trichy (Tiruchirappalli), Tamil Nadu, India

"Building Trust, Shaping Spaces" — நம்பிக்கையை உருவாக்குகிறோம், வாழ்விடங்களை செதுக்குகிறோம்.

---

## 🏛️ Business Overview
**Thamizha Constructions** is an architectural and turnkey construction engineering firm headquartered in Thillai Nagar, Tiruchirappalli, Tamil Nadu. The firm serves homeowners, real estate developers, and commercial clients across Trichy, Srirangam, Thanjavur, Karur, Madurai, and throughout Tamil Nadu.

### Direct Contact Channels
- **WhatsApp**: **`+91 9944351752`** (Instant pre-filled quotation chat)
- **Email**: **`info@thamizhaconstructions.com`** (Direct email client navigation)
- **Phone**: **`+91 99443 51752`**
- **Head Office**: No. 45, Second Cross, Salai Road, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018

### Core Services
1. **Architectural Design & Planning** (Vastu-compliant layouts, DTCP drawings, photorealistic 3D renders)
2. **Interior Design & Execution** (Modular kitchens, teak woodwork, false ceilings, ambient lighting)
3. **Exterior Design & Elevation Work** (Parametric jaali screens, terracotta louvers, facade retrofits)
4. **Construction Consulting & Approvals** (Trichy Corporation bye-laws, DTCP permits, soil tests, BOQ audits)
5. **Full Turnkey Building Completion** (Design → Soil to RCC → Finishing → Handover with 10-year warranty)

---

## 🚀 Tech Stack (100% Pure Client-Side Frontend)
- **Frontend Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS 3.4 (Deep Charcoal `#111827`, Warm Concrete `#9CA3AF`, Off-White `#F9FAFB`, Construction Amber/Gold `#F59E0B`)
- **3D Graphics Engine**: Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Animations**: GSAP, Framer Motion
- **Smooth Scrolling**: Lenis (`lenis`)
- **Internationalization (i18n)**: `react-i18next` with English & Tamil (தமிழ்) toggle
- **Form Validation**: React Hook Form + Zod
- **Contact Handling**: 
  - **WhatsApp Direct API**: Formats client name, phone, email, service, budget, and plot details into a clean WhatsApp message and opens `https://wa.me/919944351752`
  - **Email Mailto Client**: Formats full project brief into a `mailto:info@thamizhaconstructions.com` link and opens client's default email app (Gmail / Outlook / Apple Mail)
- **Deployment**: Static single-page application (SPA) ready for **Vercel**, **Netlify**, **GitHub Pages**, or **Firebase Hosting**

---

## 📂 Project Structure

```
thamizha-constructions/
├── public/
│   ├── favicon.svg                   # Custom gold & charcoal Gopuram architectural emblem
│   └── images/
│       └── projects/                 # Uploaded architectural photography
│           ├── project-srirangam.jpg # Commercial Development for Mr. Shridhar at Srirangam, Trichy
│           ├── project-temple.jpg    # Sai Baba Temple & Community Centre, Akarapatti
│           ├── media_1791791461797.jpg
│           └── media_1791791461808.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            # Transparent-to-solid glass navbar with EN/Tamil & theme toggles
│   │   │   └── Footer.jsx            # Blueprint styled architectural footer with quick links
│   │   ├── sections/
│   │   │   ├── Hero.jsx              # 3D building scene with live floor-assembly slider & CTAs
│   │   │   ├── AnimatedCounters.jsx  # Experience (14+ yrs), projects (180+), sq.ft (450K+), clients
│   │   │   ├── ServicesOverview.jsx  # 5 services with 3D tilt glass cards & detailed scope modal
│   │   │   ├── ScrollStorySection.jsx# 5 construction lifecycle stages linked to 3D model
│   │   │   ├── FeaturedProjectsSection.jsx # 3D cylinder carousel + filterable project grid
│   │   │   ├── RenovationSection.jsx # Interactive before/after elevation modernization slider
│   │   │   ├── ProcessTimeline.jsx   # 6-step turnkey delivery timeline (Consultation → Handover)
│   │   │   ├── CostEstimatorSection.jsx # Trichy construction cost estimator with live ₹ breakdown
│   │   │   ├── WhyChooseUs.jsx       # 4 pillars: lab-tested materials, on-time penalty, itemized BOQ
│   │   │   ├── ConsultingSection.jsx # Trichy Corporation / DTCP / Vastu & Cauvery soil audits
│   │   │   ├── AboutSection.jsx      # Tamil Dravidian heritage & leadership panel
│   │   │   ├── TestimonialsSection.jsx # Client testimonials slider from Trichy & Tamil Nadu
│   │   │   ├── CtaBanner.jsx         # High-conversion consultation banner with WhatsApp & Email
│   │   │   └── ContactSection.jsx    # Dual WhatsApp & Email enquiry dispatch (No backend required)
│   │   ├── three/
│   │   │   ├── BuildingScene.jsx     # Interactive procedural 3D building with floor assembly & parallax
│   │   │   ├── ProjectCarousel3D.jsx # 3D cylinder carousel with textured project planes & drag
│   │   │   ├── ScrollStoryBuilding.jsx # 3D multi-stage building (Foundation to Handover)
│   │   │   └── CanvasLoader.jsx      # Branded "TC" 3D loading progress indicator
│   │   └── ui/
│   │       ├── TiltCard.jsx          # Spring-physics 3D tilt card with light glare
│   │       ├── BeforeAfterSlider.jsx # Interactive before/after drag comparison slider
│   │       ├── CostEstimator.jsx     # Live ₹ estimation calculation & breakdown bar
│   │       ├── FloatingActions.jsx   # Floating WhatsApp, phone call, email, back to top & reading progress
│   │       ├── LightboxModal.jsx     # Fullscreen project modal with specs & blueprints
│   │       └── ServiceDetailModal.jsx# Service deliverables & scope modal
│   ├── data/
│   │   ├── siteConfig.js             # Centralized address, phone, WhatsApp (9944351752), email, stats
│   │   └── projects.js               # Auto-generated project portfolio data with Trichy locations
│   ├── locales/
│   │   ├── en.json                   # English translations
│   │   └── ta.json                   # Full Tamil (தமிழ்) translations
│   ├── i18n.js                       # react-i18next configuration with localStorage caching
│   ├── index.css                     # Tailwind CSS, architectural grids, Tamil Kolam patterns
│   ├── App.jsx                       # Root application with Lenis smooth scroll
│   └── main.jsx                      # React 18 DOM mount
├── index.html                        # HTML5 with LocalBusiness JSON-LD schema & Google Fonts
├── package.json                      # Pure frontend NPM dependencies and scripts
├── postcss.config.js                 # PostCSS setup
├── tailwind.config.js                # Custom architectural colors, fonts, and dark mode
└── vite.config.js                    # Vite configuration with optimized vendor chunking
```

---

## ⚡ Quick Start & Run Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 3. Build for Production Deployment
```bash
npm run build
```
Generates a static `dist/` directory that can be uploaded directly to **Vercel**, **Netlify**, or any static web host. No server configuration required!

---

## 📱 How Contact Handling Works
1. **Send via WhatsApp (+91 9944351752)**:
   - When the client submits the form or clicks any WhatsApp CTA, a neatly formatted message is generated:
     ```
     *New Construction Enquiry - Thamizha Constructions*
     ----------------------------------------
     👤 Name: Anand Kumar
     📱 Phone: 9944351752
     📧 Email: anand@example.com
     🏗️ Service: Turnkey Building Construction
     💰 Budget: ₹40 Lakhs - ₹75 Lakhs
     📍 Plot & Project Details: 3-floor villa in Srirangam, Trichy
     ```
   - Automatically opens WhatsApp on mobile or WhatsApp Web on desktop.

2. **Send via Email**:
   - Automatically opens client's default email program with pre-filled subject line and structured body text directed to `info@thamizhaconstructions.com`.

3. **Floating Quick Actions**:
   - Fixed buttons on bottom-right for instant WhatsApp chat, phone call, email composition, and scroll back-to-top.
