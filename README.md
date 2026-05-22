# Revival Interactive - Outback Games Showcase

Professional outback-themed React website for showcasing Revival Interactive games, updates, and community content.

## What's included

- Vite + React website
- Outback / Aussie themed UI
- Revival Interactive branding
- Game showcase cards
- Updates section
- Community section
- All provided image assets included under `public/images/assets/`
- Selected images already wired into the site under `public/images/`

## How to run locally

```bash
npm install
npm run dev
```

Open the local URL Vite gives you, usually:

```txt
http://localhost:5173
```

## Build for production

```bash
npm run build
```

The production files will be created in:

```txt
dist/
```

## Where to change images

The site uses these image paths:

```txt
public/images/revival-logo.png
public/images/revival-banner-main.png
public/images/outback-vehicle-sunset.png
public/images/new-update-banner.png
public/images/outback-legends.png
public/images/community-hub.png
public/images/premium-server.png
```

All original uploaded/provided images are also saved in:

```txt
public/images/assets/
```

You can swap images by replacing the friendly named files above.

## Where to edit games / text

Open:

```txt
src/App.jsx
```

Then edit the `games`, `updates`, and hero text near the top of the file.
