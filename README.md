# 🍺 BeerApp

Welcome to **BeerApp**, your go-to platform for exploring, adding, and managing your favorite beers!

---

## 🚀 What is BeerApp?

BeerApp is a modern web application built to manage and showcase beers. You can:
- **Add New Beers**: Include details like name, brewery, style, ABV (Alcohol By Volume), IBU (International Bitterness Units), and more.
- **Explore Beer Collections**: Browse through craft, seasonal, and international beer options.
- **Interact with Comments**: View and engage with comments from other beer enthusiasts.
- **Responsive Design**: Enjoy a sleek and user-friendly interface across all devices.

---

## 🛠️ Tools and Technologies

🧾 Form Handling
I used React Hook Form to help structure and manage the form more efficiently.

✅ Schema Validation
For validation, I went with Zod, which ensures all data is correctly formatted when creating or updating a beer. It gives me confidence that everything submitted is valid.

🌀 Carousel
I implemented Swiper to create a smooth carousel for displaying user comments. It’s set up with autoplay to cycle through multiple reviews seamlessly.

🔄 Data Fetching & Caching
React Query handles all my API requests. It keeps the data fresh and up-to-date, and I can easily trigger updates from anywhere using mutation keys.

📦 Global State
I used Zustand to manage a global state of the created beers. This allows me to access them from any part of the app without passing props around.

🎨 Styling
Styling was done with Tailwind CSS, which helped me build the UI quickly and easily without writing tons of custom CSS.

---

## 🛠️ How to Run the Project

1. Install dependencies:
   ```bash
   pnpm install
