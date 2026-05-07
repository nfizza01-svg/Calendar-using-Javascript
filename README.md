# 📅 Leap Year Calendar — JavaScript Project

> **"Enter a year to verify and see the calendar."**  
> A simple yet smart interactive calendar that checks leap years and displays February's days dynamically.

🔗 **Live Demo:** [nfizza01-svg.github.io/Calendar-using-Javascript](https://nfizza01-svg.github.io/Calendar-using-Javascript/calendar/index.html)

---

## 📖 About The Project

**Leap Year Calendar** ek interactive JavaScript web app hai jisme user koi bhi year enter karta hai aur yeh tool:

1. ✅ Check karta hai ke woh year **leap year hai ya nahi**
2. 📆 **February ka calendar** dynamically display karta hai — 28 ya 29 din ke saath

Yeh project pure **Vanilla JavaScript** se banaya gaya hai bina kisi library ke, jo JavaScript DOM manipulation aur date logic ki solid understanding dikhata hai.

---

## ✨ Features

- 🔢 **Year Input** — Koi bhi year type karo aur "Check" button dabao
- 🗓️ **Leap Year Detection** — Instantly batata hai year leap hai ya nahi
- 📅 **February Calendar View** — 28 ya 29 din dynamically render hote hain
- ⚡ **Instant Result** — Real-time output with no page reload
- 📱 **Responsive Design** — Mobile aur desktop dono par kaam karta hai

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **HTML5** | Page structure & input form |
| **CSS3** | Styling & layout |
| **JavaScript (Vanilla)** | Leap year logic & dynamic calendar rendering |
| **GitHub Pages** | Free deployment & hosting |

---

## 🧠 Leap Year Logic

```javascript
// A year is a leap year if:
// 1. Divisible by 4
// 2. BUT NOT divisible by 100
// 3. UNLESS also divisible by 400

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
```

Leap year mein February ke **29 din** hote hain, normal year mein **28 din**.

---

## 📁 Project Structure

```
Calendar-using-Javascript/
├── calendar/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling
│   └── script.js       # JavaScript logic
└── README.md
```

---

## 🚀 Getting Started

### Option 1 — Live Website
```
https://nfizza01-svg.github.io/Calendar-using-Javascript/calendar/index.html
```

### Option 2 — Local Setup

```bash
# Repository clone karo
git clone https://github.com/nfizza01-svg/Calendar-using-Javascript.git

# Folder mein jao
cd Calendar-using-Javascript/calendar

# index.html browser mein open karo
start index.html       # Windows
open index.html        # Mac/Linux
```

---

## 🎯 How To Use

1. 🌐 Live demo link open karo
2. 🔢 Input box mein koi bhi **year enter** karo (e.g. `2024`, `1900`, `2000`)
3. ✅ **"Check"** button dabao
4. 📅 **February calendar** neeche display hoga — 28 ya 29 din ke saath
5. Result batayega: **Leap Year ✅** ya **Not a Leap Year ❌**

---

## 📌 Example Results

| Year | Leap Year? | February Days |
|------|-----------|--------------|
| 2024 | ✅ Yes | 29 days |
| 2023 | ❌ No | 28 days |
| 2000 | ✅ Yes | 29 days |
| 1900 | ❌ No | 28 days |

---

## 👤 Author

**nfizza01-svg**
- 🐙 GitHub: [@nfizza01-svg](https://github.com/nfizza01-svg)
- 🌐 Live Project: [Leap Year Calendar](https://nfizza01-svg.github.io/Calendar-using-Javascript/calendar/index.html)

---

## 📄 License

This project is open source and free to use for learning purposes.

---

<p align="center">
  Made with ❤️ using Vanilla JavaScript
</p>
