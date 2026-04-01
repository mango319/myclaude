const sharp = require('sharp');

async function createGradientBackgrounds() {
  // Dark gradient for title and summary slides
  const darkGradientSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1C2833"/>
        <stop offset="50%" style="stop-color:#2E4053"/>
        <stop offset="100%" style="stop-color:#34495E"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  await sharp(Buffer.from(darkGradientSvg))
    .png()
    .toFile('workspace/dark-gradient-bg.png');

  // Dark gradient for summary slide (simpler)
  const summaryGradientSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1C2833"/>
        <stop offset="100%" style="stop-color:#2E4053"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  await sharp(Buffer.from(summaryGradientSvg))
    .png()
    .toFile('workspace/summary-gradient-bg.png');

  console.log('Gradients created successfully!');
}

createGradientBackgrounds().catch(console.error);
