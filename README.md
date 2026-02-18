# Alta Vision - Engineering Your Vision into Reality

A modern, premium website for Alta Vision, a product-led software studio designing, building, and scaling reliable digital systems. The site reflects engineering maturity, long-term vision, and credibility.

## 🎯 Brand Identity

- **Primary Color:** Deep Teal (#063A33) - Structural backgrounds and headings
- **Accent Color:** Premium Gold (#D5962B) - CTAs and highlights only (sparingly used)
- **Dark Variant:** Deep Green (#0B2B26) - Text and contrast
- **Background:** Soft Neutral (#F2F2F2) - Clean breathing space

**Design Philosophy:** Premium minimalism. Whitespace > decoration. This is a confident engineering brand, not a flashy startup.

## 🚀 Features

### ✅ Core Features

- **Free Consultation Booking** - Integrated modal with date/time selection
- **Web3Forms Email Service** - Free, reliable email delivery (3000/month)
- **Responsive Design** - Mobile-first with elegant desktop experience
- **Logo Integration** - Alta Vision branding throughout
- **SEO Optimized** - Meta tags, structured data, OpenGraph
- **Performance Optimized** - Fast load times, minimal heavy images
- **Netlify Ready** - Static deployment optimized

### 📄 Homepage Sections

1. **Hero Section** - Two-column with geometric animations + "Book Free Consultation" CTA
2. **Who We Are** - Engineering philosophy and studio identity
3. **Mission/Vision/Principles** - Core values with icon grid
4. **Who We Work With** - Three audience segments (Startups, Growing Businesses, Organizations)
5. **Services** - 2x2 grid of service offerings
6. **Products/Labs** - Featured: INKINGI construction platform
7. **Team Section** - Clean grid of team members
8. **CTA Section** - Full-width conversion moment
9. **Contact Section** - Integrated contact form

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Animation:** Framer Motion 12.34.2
- **Icons:** React Icons 5.5.0
- **Email:** Web3Forms API (free, static-friendly)
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd AlterVisionweb
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Web3Forms Access Key (Free - Sign up at https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**To get Web3Forms Access Key:**
1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for free (no credit card required)
3. Create a new form
4. Copy your access key
5. Paste into `.env.local`

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📄 Project Structure

```
AlterVisionweb/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API
│   │   ├── consultation/route.ts     # Consultation booking API
│   │   └── newsletter/route.ts       # Newsletter subscription API
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky navigation with logo
│   │   ├── Footer.tsx                # Footer with logo and links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero with consultation CTA
│   │   │   ├── WhoWeAreSection.tsx
│   │   │   ├── MissionVisionSection.tsx
│   │   │   ├── WhoWeWorkWithSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── CTASection.tsx        # CTA with consultation modal
│   │   │   ├── ContactSection.tsx
│   │   │   └── ConsultationModal.tsx # Free consultation booking
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button component
│   │       ├── Card.tsx              # Reusable card component
│   │       ├── Badge.tsx             # Status badges
│   │       ├── SectionTitle.tsx      # Consistent section headers
│   │       └── Container.tsx         # Max-width wrapper
│   ├── lib/
│   │   └── email.ts                  # Web3Forms email service
│   ├── globals.css                   # Global styles & CSS variables
│   ├── layout.tsx                    # Root layout with metadata
│   └── page.tsx                      # Homepage
├── public/
│   └── images/
│       ├── logoo.jpeg                # Alta Vision logo
│       └── team/                     # Team photos
├── .env.example                      # Environment variables template
├── tailwind.config.ts                # Tailwind with brand colors
└── next.config.ts                    # Next.js configuration
```

## 🚀 Deployment

### Netlify Deployment (Recommended for Free Hosting)

1. **Connect your repository**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add environment variables**
   - Go to Site settings > Environment variables
   - Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes!

### Build for Production
```bash
npm run build
npm start
```

## ⚙️ Configuration

### Update Contact Information
- Email: `info@altavision.com` (update in Footer, ContactSection)
- Location: Update in Footer
- Social media links: Update in Footer

### Update Team Data
Edit team members in `app/components/sections/TeamSection.tsx`

### Update Product Information
Edit INKINGI details in `app/components/sections/ProductsSection.tsx`

## 🎨 Customization

### Brand Colors
Colors are centralized in `tailwind.config.ts`:
- Primary: `#063A33` (Deep Teal)
- Accent: `#D5962B` (Gold)
- Dark: `#0B2B26` (Dark Green)
- Background: `#F2F2F2` (Soft Neutral)

### Typography
Using Geist Sans and Geist Mono fonts (optimized by Next.js)

## 📊 Performance

- Lighthouse Score Target: 90+
- Mobile-first design
- Image optimization with Next.js Image
- Lazy loading
- Minimal bundle size
- Fast load times

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS enforced (via Netlify)
- Form validation
- CORS protection

## 📞 Support

For questions or issues:
- Email: info@altavision.com
- Website: [Alta Vision](https://altavision.com)

## 📄 License

Copyright © 2026 Alta Vision. All rights reserved.

---

**Built with Next.js 15 + Tailwind CSS v4 + TypeScript + Web3Forms**

*Engineering Your Vision into Reality*
