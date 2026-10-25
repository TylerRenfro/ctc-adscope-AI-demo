# AdScope - Intelligent Ad Campaign Management

AdScope is a smart ad campaign management platform that automatically optimizes your Google Ads campaigns based on weather conditions, time of day, device type, and network speed to maximize your ROI.

## 🚀 Features

- **Weather-Based Optimization**: Automatically adjust campaign budgets based on real-time weather conditions
- **Time & Season Intelligence**: Optimize campaigns based on time of day, day of week, and seasonal trends
- **Device-Aware Targeting**: Detect user devices and adjust campaigns accordingly
- **Network Speed Adaptation**: Adjust ad delivery based on user connection speed
- **Automated Campaign Control**: Enable, pause, and modify campaigns automatically
- **Real-Time Analytics**: Get instant insights with AI-powered recommendations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js (planned)
- **Database**: PostgreSQL with Prisma (planned)
- **APIs**: Google Ads API, Weather API

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AdScope
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
└── components/
    ├── header.tsx        # Navigation header
    ├── hero.tsx          # Hero section
    ├── features.tsx      # Features section
    ├── how-it-works.tsx  # How it works section
    ├── cta.tsx           # Call to action section
    └── footer.tsx        # Footer
```

## 🚧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
  
---

Built with ❤️ using Next.js and Tailwind CSS
