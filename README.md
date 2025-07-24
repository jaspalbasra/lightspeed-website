# Lightspeed Robotics Construction Website

A modern, engaging website for Lightspeed, a robotics construction company that showcases their innovative approach to building homes using advanced robotics technology.

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **Material UI**: Component library with rich UI elements
- **React Hook Form**: Form management with validation

## Features

- Responsive design that works on all devices
- Engaging animations and transitions using Framer Motion
- Interactive process showcase with timeline
- Dynamic project filtering
- Testimonial carousel
- Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/lightspeed-website.git
cd lightspeed-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                   # Next.js App Router
│   ├── about/             # About page
│   ├── process/           # Process page
│   ├── technology/        # Technology page
│   ├── projects/          # Projects page
│   ├── careers/           # Careers page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── home/              # Home page components
│   ├── ui/                # Reusable UI components
│   └── animations/        # Animation components
└── public/                # Static assets
    └── animations/        # Lottie animation files
```

## Design System

### Colors
- Primary: Deep navy (#0A1128)
- Secondary: Bright gold (#FFD700)
- Tertiary: Teal (#20A39E)
- Supporting: Light gray (#F4F7F5)

### Typography
- Headings: Poppins (bold, 700)
- Body: Inter (regular, 400)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed with ❤️ for Lightspeed Robotics
- Icons provided by Material UI
