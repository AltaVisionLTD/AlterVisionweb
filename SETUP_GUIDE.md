# 🚀 Alta Vision Website - Setup & Deployment Guide

Complete guide to setting up and deploying the Alta Vision website on Netlify (free hosting).

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- A Netlify account (free)
- A Web3Forms account (free - no credit card required)

## 🛠️ Initial Setup

### 1. Install Dependencies

```bash
cd AlterVisionweb
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Web3Forms access key:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
```

#### Getting Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account (no credit card required)
3. Click "Create New Form"
4. Copy your Access Key
5. Paste it into your `.env.local` file

**Benefits of Web3Forms:**
- ✅ Free forever: 3000 submissions/month
- ✅ No backend needed
- ✅ Works perfectly on static hosting (Netlify, Vercel)
- ✅ Instant setup - no server configuration

### 3. Test Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

**Test the following:**
- ✅ Logo displays correctly
- ✅ All colors match brand (Deep Teal #063A33, Gold #D5962B)
- ✅ "Book Free Consultation" button in Hero opens modal
- ✅ Consultation modal submits successfully
- ✅ Contact form works
- ✅ All navigation links work
- ✅ Mobile responsive design

## 🚀 Deploying to Netlify

### Step 1: Push to Git Repository

```bash
git init
git add .
git commit -m "Initial Alta Vision website"
git branch -M main
git remote add origin <your-git-repo-url>
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18+

### Step 3: Add Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your_access_key
4. Save

### Step 4: Deploy

Click "Deploy site" and wait ~2-3 minutes. Your site will be live!

### Step 5: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## ✅ Post-Deployment Checklist

Test your live site:

- [ ] Homepage loads correctly
- [ ] Logo displays properly
- [ ] All sections render correctly
- [ ] Consultation booking works (test with your email)
- [ ] Contact form works
- [ ] Forms send emails successfully
- [ ] Mobile view looks good
- [ ] All links work
- [ ] Colors match brand guidelines
- [ ] No console errors

## 🎨 Customization Guide

### Update Content

1. **Team Members:** Edit `app/components/sections/TeamSection.tsx`
2. **Services:** Edit `app/components/sections/ServicesSection.tsx`
3. **Products:** Edit `app/components/sections/ProductsSection.tsx`
4. **Contact Info:** Edit `app/components/Footer.tsx`

### Update Brand Colors

Colors are in `tailwind.config.ts`:

```typescript
colors: {
  teal: {
    DEFAULT: '#063A33',  // Primary brand color
    dark: '#0B2B26',     // Dark variant
  },
  gold: {
    DEFAULT: '#D5962B',  // Accent color
  },
  neutral: {
    white: '#F2F2F2',    // Background
    grey: '#E6E8E7',     // Secondary background
    dark: '#1A1A1A',     // Text
  },
}
```

### Update Logo

Replace `/public/images/logoo.jpeg` with your logo:
- Recommended size: 500x200px
- Format: PNG or JPG
- Transparent background recommended

## 🔧 Troubleshooting

### Forms Not Sending

**Problem:** Consultation or contact form submissions fail

**Solution:**
1. Verify `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set in Netlify environment variables
2. Check Web3Forms dashboard to confirm form exists
3. Check browser console for errors
4. Verify email isn't in spam folder

### Build Fails on Netlify

**Problem:** Deployment fails during build

**Solution:**
```bash
# Test build locally first
npm run build

# If successful locally but fails on Netlify:
# 1. Check Node version matches (18+)
# 2. Clear build cache in Netlify
# 3. Redeploy
```

### Images Not Loading

**Problem:** Logo or images show broken

**Solution:**
1. Verify images exist in `/public/images/`
2. Check file names match exactly (case-sensitive)
3. Use Next.js `<Image>` component for optimization

### Styling Issues

**Problem:** Colors or layout look wrong

**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Verify Tailwind classes are correct
3. Check `tailwind.config.ts` colors match brand

## 📞 Support

For technical issues or questions:
- **Email:** info@altavision.com
- **Documentation:** Check README.md for detailed info

## 🎉 Success!

Your Alta Vision website is now live! The site includes:

✅ Free consultation booking system
✅ Contact form with email notifications
✅ Newsletter signup
✅ Responsive design
✅ SEO optimized
✅ Fast loading times
✅ Professional brand identity

**Next Steps:**
1. Share your site URL with your team
2. Update social media links in Footer
3. Add real team photos
4. Create content for INKINGI product section
5. Monitor form submissions through Web3Forms dashboard

---

*Engineering Your Vision into Reality* 🚀
