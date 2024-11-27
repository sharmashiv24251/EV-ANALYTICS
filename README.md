# EV Analytics Dashboard

## Overview

This is a Next.js-based web application for visualizing and analyzing Electric Vehicle (EV) data using React, Tailwind CSS, and Shad CN UI. The application provides interactive data visualizations including Scatter Plot, Parallel Coordinates, and Heatmap charts.

## Technologies Used

- **Frontend Framework**: Next.js (React 19)
- **Styling**: Tailwind CSS
- **UI Components**: Shad CN UI
- **Data Visualization**: D3.js (planned)
- **Language**: TypeScript

## Features

- Dashboard with multiple data visualizations
- Responsive grid layout
- Multiple chart types:
  - Scatter Plot
  - Parallel Coordinates
  - Heatmap
- Data filtering capabilities
- Performance metrics for Electric Vehicles

## Project Structure

```
/
├── app/
│   ├── page.tsx           # Main dashboard page
│   └── chart/
│       └── [type]/
│           └── page.tsx   # Dynamic chart page
├── components/
│   ├── Chart.tsx          # Main chart rendering component
│   ├── HomeChartCard.tsx  # Chart container component
│   ├── HomeDataCard.tsx   # Data summary card component
│   ├── Heatmap.tsx        # Heatmap visualization
│   ├── ScatterPlot.tsx    # Scatter plot visualization
│   └── Parallel.tsx       # Parallel coordinates visualization
├── lib/
│   └── utils.ts           # Utility functions
├── data.ts                # Mock EV data
└── types.ts               # TypeScript type definitions
```

## Data Types

### EVData

```typescript
type EVData = {
  vehicle_id: "EV001" | "EV002" | "EV003" | "EV004" | "EV005";
  distance_traveled: number;
  charging_time: number;
  average_speed: number;
  region: "North" | "East" | "West" | "South";
  date: string;
};
```

### Filters

```typescript
type Filters = {
  vehicle_id?: "EV001" | "EV002" | "EV003" | "EV004" | "EV005";
  region?: "North" | "East" | "West" | "South";
  date?: string;
};
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   npm run start
   ```

## Available Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint

## Planned Improvements

- Complete D3.js chart implementations
- Enhanced data filtering
- More interactive visualizations
- Additional performance metrics
- Error handling and loading states

## Known Limitations

- Current charts are placeholders
- Limited mock data
- D3.js integration is incomplete

## Dependencies

Key dependencies include:

- Next.js 15
- React 19
- Tailwind CSS
- Shad CN UI
- D3.js
- TypeScript
