# Afnan Mart – React E-Commerce Application

Afnan Mart is a **modern React-based e-commerce web application** that demonstrates real-world shopping cart functionality, global state management, product filtering, authentication flow, and a polished user interface.

The project is built with a focus on **clean architecture, reusable components, and practical business logic**, making it suitable for learning, portfolio showcase, and real-world frontend practice.

---
## Live Demo

**Website:** https://afnan-mart.vercel.app/  
**GitHub Repository:** https://github.com/IAmAfnan/E-COMMERCE-WEBSITE-React

## Screenshots

### Home Page
<img width="1920" height="1020" alt="Screenshot 2025-12-18 161316" src="https://github.com/user-attachments/assets/62aa0fe3-4989-4f8a-ba9b-5980dc8d5c17" />

### Sign In Page

<img width="1920" height="1080" alt="Screenshot (1318)" src="https://github.com/user-attachments/assets/d0a888a4-4455-4ae9-a438-35d202911452" />

### Explore Product Section

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d524bace-5f5e-46ce-a805-b30775640497" />

### Filtering Product Based on Category or Price

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0722f39b-03e8-41bf-afbf-fc91fdedd0cb" />

### Add To Cart Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/62f713eb-189b-4128-b21a-1e306d87a258" />

### View Product Details Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a8bd1512-24de-452a-b40b-59301e901001" />

### Why Choose Afnan Mart Section

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f25261f3-46ed-4257-842c-5d712997132d" />

### Footer Section 

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3bff0f93-559b-49b2-b507-c62e72e962be" />


## Features

### Product Management
- Product listing with **image, name, price, category, and stock**
- Product details page with **description and quantity selector**
- **Stock-aware purchasing** to prevent over-ordering

### Shopping Cart
- Add products to cart
- Increase and decrease product quantity
- Remove items from cart
- **Automatic total price calculation**
- **Per-item subtotal calculation**
- Cart sidebar with smooth animations

### Authentication
- User **Sign Up and Sign In**
- Session persistence using **LocalStorage**
- Per-user cart data handling
- Logout functionality

### Filtering and Navigation
- **Category-based filtering**
- **Price range filtering**
- Responsive product grid
- Smooth routing with **React Router DOM**

### Persistence and Checkout
- Cart data stored in **LocalStorage**
- Checkout functionality with stock update
- Order success confirmation page
- **Toast notifications** for user feedback

---

## Tech Stack

- **Frontend:** ReactJS (Vite)
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** React Icons, Font Awesome
- **Notifications:** React Toastify
- **Storage:** Browser LocalStorage
- **Animations:** Framer Motion

---
## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── EndFooter.jsx
│   ├── Sidebar.jsx
│   ├── Hero.jsx
│   ├── Product.jsx
│   ├── CartItem.jsx
│   ├── CategoryFilter.jsx
│   ├── PriceFilter.jsx
│   ├── ContactSection.jsx
│   ├── AboutAfnanMart.jsx
│   └── ScrollToTop.jsx
│
├── contexts/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── ProductContext.jsx
│   └── SidebarContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── Signin.jsx
│   ├── Signup.jsx
│   └── OrderSuccess.jsx
│
├── img/
│   ├── bghero.png
│   └── logo.png
│
├── App.jsx
├── main.jsx
└── index.css
```

##  Getting Started

###  Clone the Repository
```bash
git clone https://github.com/IAmAfnan/E-COMMERCE-WEBSITE-React.git
cd E-COMMERCE-WEBSITE-React
```

###  Install Dependencies
```bash
npm install
```

###  Run in Development Mode
```bash
npm run dev
```

###  Build for Production 
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

##  Application Flow

- User visits the **Home Page**
- Browses products using **Category** and **Price Filters**
- Opens the **Product Details** page
- Adds items to the **Cart**
- Updates quantity or removes products
- **Signs up** or **Signs in**
- Proceeds to **Checkout**
- Views the **Order Success** confirmation page

---

##  UI & UX Highlights

-  Dark-themed modern interface  
-  Smooth transitions and hover effects  
-  Responsive layout for desktop and mobile  
-  Intuitive cart and checkout experience  
  

---

##  Author

**Afnan**  
Aspiring Developer & React Enthusiast

 Email: `iamafnan0@gmail.com`  
 🔗 LinkedIn: [Afnan](https://www.linkedin.com/in/muhammad-afnan15)

---

## 🚀 Deploying to Vercel

Follow this step-by-step guide to deploy Afnan Mart on Vercel. No prior deployment experience needed.

### 1. Prerequisites

- A [GitHub](https://github.com/) account (free).
- A [Vercel](https://vercel.com/) account (free tier available).
- Node.js 18+ and npm installed on your machine.

### 2. Prepare the Project

Ensure the project builds successfully on your machine:

```bash
npm install      # Install dependencies
npm run build    # Should produce a dist/ folder with zero warnings
npm run lint     # Should pass with zero errors
```

### 3. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new).
2. Enter a repository name (e.g., `afnan-mart`).
3. Choose **Public** (required for free Vercel deployments).
4. Check **"Add a README file"**.
5. Click **Create repository**.

### 4. Push the Code to GitHub

```bash
# Navigate to your project folder
cd /path/to/afnan-mart

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Afnan Mart e-commerce"

# Link to your GitHub repo (replace <your-username> with your actual GitHub username)
git remote add origin https://github.com/<your-username>/afnan-mart.git

# Push to GitHub
git push -u origin main
```

> **Note:** If your default branch is `master` instead of `main`, replace `main` with `master` in the commands above.

### 5. Import the Project into Vercel

1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"New Project"**.
3. Select the `afnan-mart` repository you just pushed.
4. Click **"Import"**.

### 6. Select the Framework Preset

Vercel should auto-detect **Vite**. If prompted:
- **Framework Preset:** Select `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 7. Add Environment Variables (If Needed)

This project uses **localStorage** for all data (no external API), so no environment variables are required. Skip this step.

### 8. Deploy the Project

1. Click **"Deploy"**.
2. Wait 1–2 minutes for the build to complete.
3. Vercel will show a preview URL (e.g., `https://afnan-mart-git-main-yourusername.vercel.app`).

### 9. (Optional) Connect a Custom Domain

1. In your Vercel dashboard, select your project.
2. Go to **Settings → Domains**.
3. Enter your custom domain (e.g., `afnan-mart.com`) and click **Add**.
4. Follow the DNS instructions (add a CNAME or A record at your domain registrar).
5. Once the DNS propagates, Vercel will issue an SSL certificate automatically.

### 10. Redeploying After Future Updates

Vercel automatically redeploys on every push to the `main` (or connected) branch:

```bash
git add .
git commit -m "Updated product catalog"
git push
```

### Common Deployment Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `Build failed` | Outdated `node_modules` or lockfile | Delete `node_modules`, run `npm install`, commit `package-lock.json` |
| `404 Not Found` | Wrong output directory | Ensure **Output Directory** is set to `dist` |
| `Command not found` | Missing install command | Set **Install Command** to `npm install` |
| Page shows blank screen | Wrong framework preset | Select **Vite** as the preset |
| CORS / fetch errors | `/API/products.json` not found | Ensure `public/API/products.json` is committed to GitHub |

### How to Verify the Deployment

1. Visit your deployment URL (e.g., `https://afnan-mart.vercel.app`).
2. Confirm the page title shows **Afnan Mart** in the browser tab.
3. Browse the hero section, product grid, and filters.
4. Sign up or sign in, add an item to the cart, and complete checkout.
5. Confirm the order success page displays correctly.

---
