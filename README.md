# PharmacyGuides LLC — Website Revamp

A modern resource hub for industry-bound pharmacists: study guides, industry pivot roadmap, mentorship booking, and MSL/industry resources. Built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

## Features

- **Layout & Navigation** — Responsive nav: Home, Study Guides, Industry Pivot, Mentorship, About. Hero with CTA **"Start Your Industry Journey"**.
- **Industry Roadmap** — Career Path component: 5 steps (Clinical Foundation → Skill Gap Analysis → Networking & Personal Branding → Tailoring the CV → Interview Mastery) with icons.
- **Resource Library** — Search bar + category filters (Clinical Guides, Industry Pivot, Networking, Templates). Grid with title, description, tags, and **Learn More**.
- **Mentorship** — Intake form: Current Role (Student, Retail, Clinical, Other), Primary Goal (Industry Pivot, Board Exams, Residency), "What is your biggest challenge?" — teal/sage palette.
- **Blog** — SEO-optimized post template: high-res header image, Key Takeaways, Related Resources, author bio (Dr. Sarah), meta title/description/og tags. Example: `/blog/retail-pharmacy-to-msl`.
- **About** — Pivot story emphasis, How I Help cards, testimonials placeholder.

## How to view the website (run locally)

1. **Open a terminal** (Terminal app on Mac, or the terminal inside Cursor: **Terminal → New Terminal**).

2. **Go to the project folder:**
   ```bash
   cd ~/Desktop/pharmacyguides-website
   ```

3. **Install dependencies** (only needed the first time):
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to: **http://localhost:5173**

   You should see the PharmacyGuides site (Home, Study Guides, Industry Pivot, Mentorship, About). To stop the server, press **Ctrl+C** in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Next steps (you can do in Cursor)

1. **Calendly (or similar)** — Add your booking link after the mentorship form or in the success message so users can pick a time.
2. **E-commerce** — Connect the Study Guides / Resource Library to Stripe, Gumroad, or your Etsy listings until you migrate.
3. **Newsletter** — Add an email signup (e.g. ConvertKit, Mailchimp) and a simple popup or footer form for "MSL Insight" leads.
4. **Testimonials** — Replace the placeholder on the About page with real quotes and names (with permission).
5. **Blog images** — Add a real high-res image per post for `og:image` (e.g. 1200×630) and set the `image` prop in `BlogPostTemplate`.
6. **Deploy** — Deploy the `dist` folder to Vercel, Netlify, or your host; point your domain (e.g. pharmacyguidesllc.com) to it.

## Push to GitHub

To push this project to a new private GitHub repository called `pharmacyguides-revamp`:

**Option 1: Use the setup script**
```bash
cd ~/Desktop/pharmacyguides-website
chmod +x setup-github.sh
./setup-github.sh
```

Then follow the instructions it prints to create the repo on GitHub and push.

**Option 2: Manual steps**

1. **Initialize git and commit:**
   ```bash
   cd ~/Desktop/pharmacyguides-website
   git init
   git add .
   git commit -m "Initial commit: PharmacyGuides LLC website revamp"
   git branch -M main
   ```

2. **Create the private repo on GitHub:**
   - Go to https://github.com/new
   - Repository name: `pharmacyguides-revamp`
   - Visibility: **Private**
   - **Don't** check "Add a README" (you already have one)
   - Click "Create repository"

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pharmacyguides-revamp.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

**Option 3: Using GitHub CLI (if installed)**
```bash
cd ~/Desktop/pharmacyguides-website
git init
git add .
git commit -m "Initial commit: PharmacyGuides LLC website revamp"
git branch -M main
gh repo create pharmacyguides-revamp --private --source=. --remote=origin --push
```

## Tech stack

- React 18, Vite 5, React Router 6  
- Tailwind CSS 3 (teal/sage palette)  
- react-helmet-async for blog SEO meta tags  

---

© PharmacyGuides, LLC
