const sharp = require('sharp');

async function createGradients() {
    // Cover gradient (slide 1)
    const coverSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
        <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1E40AF"/>
                <stop offset="100%" style="stop-color:#3B82F6"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`;
    await sharp(Buffer.from(coverSvg)).png().toFile('workspace/cover-gradient.png');

    // Slogan gradient (slide 20)
    const sloganSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="100">
        <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1E40AF"/>
                <stop offset="100%" style="stop-color:#3B82F6"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`;
    await sharp(Buffer.from(sloganSvg)).png().toFile('workspace/slogan-gradient.png');

    // Conclusion gradient (slide 30)
    const conclusionSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
        <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1E40AF"/>
                <stop offset="100%" style="stop-color:#3B82F6"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`;
    await sharp(Buffer.from(conclusionSvg)).png().toFile('workspace/conclusion-gradient.png');

    console.log('Gradients created successfully');
}

createGradients().catch(console.error);
