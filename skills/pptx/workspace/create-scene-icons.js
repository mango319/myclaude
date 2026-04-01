const sharp = require('sharp');

async function createIconSvg(name, svgContent, filename) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" fill="${svgContent.fill}">
    ${svgContent.path}
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(filename);

  console.log(`Created: ${filename}`);
}

const icons = {
  supermarket: {
    fill: "#E67E22",
    path: `<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>`
  },
  cafe: {
    fill: "#E67E22",
    path: `<path d="M18.5 4h-13C4.12 4 3 5.12 3 6.5v9C3 16.88 4.12 18 5.5 18h13c1.38 0 2.5-1.12 2.5-2.5v-9c0-1.38-1.12-2.5-2.5-2.5zm0 11h-13v-9h13v9z"/>`
  },
  logistics: {
    fill: "#E67E22",
    path: `<path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`
  },
  factory: {
    fill: "#E67E22",
    path: `<path d="M22 22H2V11l5-4v3h6V7l5 4v11zm-6 0v-5h-6v5H4v-6.7l4-3.2v3.4h4v-3.4l4 3.2V22h-4z"/>`
  },
  medical: {
    fill: "#2E4053",
    path: `<path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>`
  },
  warehouse: {
    fill: "#2E4053",
    path: `<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>`
  },
  home: {
    fill: "#E67E22",
    path: `<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`
  },
  document: {
    fill: "#2E4053",
    path: `<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>`
  },
  retail: {
    fill: "#E67E22",
    path: `<path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"/>`
  },
  shipping: {
    fill: "#E67E22",
    path: `<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>`
  }
};

async function createAllIcons() {
  for (const [name, icon] of Object.entries(icons)) {
    await createIconSvg(name, icon, `workspace/icons/${name}.png`);
  }
  console.log('All icons created successfully!');
}

createAllIcons().catch(console.error);
