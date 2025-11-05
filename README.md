# Element Nashville Vanderbilt West End - Extended Stay Landing Page

A professional marketing landing page for Element by Marriott in Nashville, Tennessee, designed to attract project workers and extended-stay guests in the West End and Vanderbilt area.

## Overview

This landing page targets three key customer segments:

- **Construction Professionals** - Working on extended projects in Nashville
- **Tech Professionals** - Relocating for positions in Nashville
- **Corporate Trainers** - Making recurring visits to the region

## Features

- **Cost Savings Calculator** - Shows $750/month savings with detailed breakdown
- **Professional Lifestyle Images** - Relatable imagery for each customer type
- **Amenities Showcase** - Full kitchen, valet parking, on-site laundry, rooftop pool, digital check-in
- **Location Information** - Proximity to Vanderbilt, HCA Healthcare, and downtown Nashville
- **Responsive Design** - Mobile-friendly and optimized for all devices
- **Element Branding** - Matches official Marriott Element brand colors and style

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:

```shell
git clone <your-repo-url>
cd Element_Nashville_Landing
```

2. Install dependencies:

```shell
pnpm install
# or
npm install
```

3. Start the development server:

```shell
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```shell
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
Element_Nashville_Landing/
├── src/
│   ├── assets/           # Images (hotel photos, lifestyle images)
│   ├── components/       # Reusable UI components
│   ├── App.jsx          # Main landing page component
│   ├── App.css          # Styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Customization

### Update Booking Link

Find the "Book Now" button in `src/App.jsx` and update the Marriott booking URL if needed.

### Update Contact Information

Update phone numbers and email addresses in the contact sections throughout `src/App.jsx`.

### Modify Savings Calculations

The savings breakdown is in the "Cost Savings Section" of `src/App.jsx`. Adjust the numbers based on your local market research.

## Key Sections

1. **Hero Section** - Eye-catching header with call-to-action
2. **Special Offer Banner** - 15% discount for extended stays
3. **Why Element** - Four key value propositions
4. **Room Showcase** - Photo gallery of studio rooms
5. **Cost Savings** - Detailed breakdown of monthly savings
6. **Amenities Grid** - 8 key amenities with icons
7. **Location Section** - Address and proximity information
8. **Use Cases** - Three customer personas with lifestyle images
9. **Marriott Trust** - Brand credibility section
10. **Business Access** - Marriott Bonvoy Business Access program
11. **Booking Section** - Call-to-action with contact options
12. **FAQ** - Common questions from project workers

## Brand Colors

- Primary (Teal): `#006B7D`
- Accent (Orange): `#FF6B35`
- Text: Gray scale

## Hotel Information

- **Address**: 4 City Boulevard, Nashville, Tennessee 37209
- **Phone**: (615) 320-8400
- **Brand**: Element by Marriott
- **Property Type**: Extended-stay hotel

## Images

All hotel images are located in `src/assets/` and include:

- Exterior shots (twilight, day, and night views)
- Studio room layouts
- Kitchen details
- Lobby and common areas
- Rooftop pool and fitness center

Lifestyle images for customer personas are also included.

## License

This project was created for Element Nashville Vanderbilt West End marketing purposes.

## Support

For questions or issues, contact the property management team at (615) 320-8400.
