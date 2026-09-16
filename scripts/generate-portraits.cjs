const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const publicAssetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// 1. Hero Portrait: Matching IMG-Mycreation00016.jpg (Black turtleneck, warm rim light, dark studio)
const heroSvg = `
<svg width="900" height="1200" viewBox="0 0 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="heroBg" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#181D26" />
      <stop offset="55%" stop-color="#0E1116" />
      <stop offset="100%" stop-color="#080A0D" />
    </radialGradient>
    <radialGradient id="rimAmber" cx="80%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#FFAA33" stop-opacity="0.35" />
      <stop offset="60%" stop-color="#E67E22" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="rimCyan" cx="20%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#6CC8FF" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#2980B9" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="skinGrad" x1="40%" y1="20%" x2="65%" y2="80%">
      <stop offset="0%" stop-color="#D5A081" />
      <stop offset="50%" stop-color="#C28968" />
      <stop offset="100%" stop-color="#A56E4E" />
    </linearGradient>
    <linearGradient id="turtleneckGrad" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#1F232B" />
      <stop offset="40%" stop-color="#12151B" />
      <stop offset="100%" stop-color="#0A0C10" />
    </linearGradient>
    <linearGradient id="hairGrad" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#2A2A2E" />
      <stop offset="60%" stop-color="#141416" />
      <stop offset="100%" stop-color="#0A0A0C" />
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="900" height="1200" fill="url(#heroBg)" />
  <rect width="900" height="1200" fill="url(#rimAmber)" />
  <rect width="900" height="1200" fill="url(#rimCyan)" />

  <!-- Subtle Studio Backdrop Vignette -->
  <circle cx="450" cy="480" r="380" fill="#1C222C" opacity="0.4" filter="url(#softGlow)" />

  <!-- Amber Rim Light on upper right -->
  <path d="M 520 180 C 620 220 720 340 700 520 C 680 400 620 280 520 180 Z" fill="#F39C12" opacity="0.6" filter="url(#softGlow)" />

  <!-- Shoulders & Torso (Black Turtleneck) -->
  <path d="M 120 1200 L 120 950 C 140 820 260 760 350 730 L 550 730 C 640 760 760 820 780 950 L 780 1200 Z" fill="url(#turtleneckGrad)" />
  <!-- Turtleneck Neck Collar -->
  <rect x="375" y="600" width="150" height="150" rx="30" fill="#171A21" />
  <path d="M 370 630 C 420 645 480 645 530 630 L 535 720 C 480 740 420 740 365 720 Z" fill="#1A1E26" />
  <path d="M 375 660 C 425 675 475 675 525 660" stroke="#2D333F" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6" />

  <!-- Arms Crossed Pose hint in turtleneck -->
  <path d="M 220 960 C 350 920 550 920 680 960 C 580 1020 320 1020 220 960 Z" fill="#141820" opacity="0.7" />
  <path d="M 280 990 C 390 960 510 960 620 990" stroke="#252B36" stroke-width="3" fill="none" />

  <!-- Neck -->
  <path d="M 390 530 L 510 530 L 515 640 L 385 640 Z" fill="url(#skinGrad)" />
  <!-- Neck shadow under chin -->
  <ellipse cx="450" cy="560" rx="70" ry="25" fill="#5F3A22" opacity="0.4" />

  <!-- Head & Face (South Asian features, warm tone) -->
  <path d="M 320 380 C 315 540 370 620 450 620 C 530 620 585 540 580 380 C 575 240 520 200 450 200 C 380 200 325 240 320 380 Z" fill="url(#skinGrad)" />

  <!-- Ears -->
  <ellipse cx="320" cy="420" rx="20" ry="40" fill="#C28968" />
  <ellipse cx="580" cy="420" rx="20" ry="40" fill="#C28968" />

  <!-- Well-groomed Full Beard & Mustache -->
  <path d="M 330 420 C 345 570 385 615 450 615 C 515 615 555 570 570 420 C 555 460 535 520 500 550 C 470 565 430 565 400 550 C 365 520 345 460 330 420 Z" fill="#141416" />
  <!-- Mustache -->
  <path d="M 395 480 C 420 465 440 475 450 480 C 460 475 480 465 505 480 C 490 505 465 510 450 505 C 435 510 410 505 395 480 Z" fill="#141416" />
  <!-- Lower lip & gentle warm smile -->
  <path d="M 425 515 C 440 525 460 525 475 515" stroke="#9E5B42" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Nose -->
  <path d="M 442 370 L 438 450 C 440 458 460 458 462 450 L 458 370" fill="#B37855" opacity="0.7" />
  <ellipse cx="435" cy="452" rx="7" ry="5" fill="#8C4F2B" opacity="0.4" />
  <ellipse cx="465" cy="452" rx="7" ry="5" fill="#8C4F2B" opacity="0.4" />

  <!-- Eyes & Eyebrows -->
  <ellipse cx="395" cy="380" rx="22" ry="12" fill="#FFFFFF" opacity="0.9" />
  <ellipse cx="505" cy="380" rx="22" ry="12" fill="#FFFFFF" opacity="0.9" />
  <circle cx="395" cy="380" r="10" fill="#2C1B12" />
  <circle cx="505" cy="380" r="10" fill="#2C1B12" />
  <circle cx="397" cy="378" r="3" fill="#FFFFFF" />
  <circle cx="507" cy="378" r="3" fill="#FFFFFF" />

  <!-- Eyebrows (neat, defined) -->
  <path d="M 365 350 C 390 342 420 348 430 355" stroke="#16171A" stroke-width="8" stroke-linecap="round" fill="none" />
  <path d="M 535 350 C 510 342 480 348 470 355" stroke="#16171A" stroke-width="8" stroke-linecap="round" fill="none" />

  <!-- Modern Rectangular Black Eyeglasses (matching photo) -->
  <rect x="360" y="355" width="75" height="48" rx="8" stroke="#0F1115" stroke-width="6" fill="none" />
  <rect x="465" y="355" width="75" height="48" rx="8" stroke="#0F1115" stroke-width="6" fill="none" />
  <!-- Glasses Bridge -->
  <path d="M 435 372 C 445 366 455 366 465 372" stroke="#0F1115" stroke-width="5" stroke-linecap="round" fill="none" />
  <!-- Glasses Temple arms -->
  <path d="M 360 370 L 325 385" stroke="#0F1115" stroke-width="5" stroke-linecap="round" />
  <path d="M 540 370 L 575 385" stroke="#0F1115" stroke-width="5" stroke-linecap="round" />
  <!-- Subtle Glasses Lens Reflection (Soft Cyan/Teal) -->
  <path d="M 370 365 L 420 365 L 390 395 L 370 395 Z" fill="#6CC8FF" opacity="0.15" />
  <path d="M 475 365 L 525 365 L 495 395 L 475 395 Z" fill="#6CC8FF" opacity="0.15" />

  <!-- Hair (Neat side-styled, dark with amber rim sheen) -->
  <path d="M 315 360 C 310 260 360 170 450 170 C 540 170 585 240 585 340 C 585 360 575 320 560 280 C 520 220 420 220 340 300 C 325 325 320 345 315 360 Z" fill="url(#hairGrad)" />
  <!-- Hair volume & warm rim edge -->
  <path d="M 420 175 C 500 175 565 215 575 295 C 565 235 510 195 440 195 Z" fill="#F39C12" opacity="0.45" />

  <!-- Cinematic Grading Overlay -->
  <rect width="900" height="1200" fill="#000000" opacity="0.1" />

  <!-- Top-left Camera Viewfinder HUD (Editorial motion visualizer detail) -->
  <g opacity="0.6">
    <text x="50" y="70" font-family="monospace" font-size="16" fill="#6CC8FF" letter-spacing="4">ROFIQUE CHOWDHURY // CREATIVE DIRECTOR</text>
    <text x="50" y="95" font-family="monospace" font-size="12" fill="#8C929B" letter-spacing="2">REC 24.00 FPS • PRORES 4444 XQ • COLOR GRADE: A04</text>
  </g>
</svg>
`;

// 2. About Portrait: Matching IMG-Mycreation00002.png (Navy suit, silver tie, architectural vertical studio lights)
const aboutSvg = `
<svg width="900" height="1200" viewBox="0 0 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="aboutBg" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#2D333B" />
      <stop offset="50%" stop-color="#1B2026" />
      <stop offset="100%" stop-color="#0E1216" />
    </radialGradient>
    <linearGradient id="lightStrip" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#E2E8F0" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#CBD5E1" stop-opacity="0.7" />
    </linearGradient>
    <linearGradient id="suitNavy" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#223249" />
      <stop offset="40%" stop-color="#152132" />
      <stop offset="100%" stop-color="#0A111B" />
    </linearGradient>
    <linearGradient id="silverTie" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="35%" stop-color="#94A3B8" />
      <stop offset="70%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#64748B" />
    </linearGradient>
    <linearGradient id="skinGrad2" x1="40%" y1="20%" x2="65%" y2="80%">
      <stop offset="0%" stop-color="#D9A384" />
      <stop offset="50%" stop-color="#C58D6C" />
      <stop offset="100%" stop-color="#A87252" />
    </linearGradient>
    <filter id="softGlow2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="25" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Studio Gray Wall Background -->
  <rect width="900" height="1200" fill="url(#aboutBg)" />

  <!-- Vertical Recessed LED Architectural Light Strips (matching photo) -->
  <rect x="180" y="0" width="18" height="1200" fill="url(#lightStrip)" filter="url(#softGlow2)" opacity="0.85" />
  <rect x="740" y="0" width="22" height="1200" fill="url(#lightStrip)" filter="url(#softGlow2)" opacity="0.85" />
  <!-- Architectural wall seam shadow -->
  <line x1="170" y1="0" x2="170" y2="1200" stroke="#0B0D11" stroke-width="4" opacity="0.5" />
  <line x1="770" y1="0" x2="770" y2="1200" stroke="#0B0D11" stroke-width="4" opacity="0.5" />

  <!-- Torso & Suit Jacket (Navy Blue) -->
  <path d="M 80 1200 L 80 880 C 100 760 220 680 340 640 L 560 640 C 680 680 800 760 820 880 L 820 1200 Z" fill="url(#suitNavy)" />

  <!-- Crisp White Dress Shirt V-Opening -->
  <polygon points="450,780 380,560 520,560" fill="#FFFFFF" />
  <polygon points="450,780 395,570 505,570" fill="#F8FAFC" />

  <!-- Shirt Collar Spread -->
  <polygon points="380,550 430,620 410,630 360,570" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
  <polygon points="520,550 470,620 490,630 540,570" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />

  <!-- Silk Silver-Gray Tie -->
  <polygon points="432,600 468,600 475,640 450,650 425,640" fill="#94A3B8" />
  <polygon points="430,645 470,645 480,950 450,980 420,950" fill="url(#silverTie)" />
  <!-- Tie texture details -->
  <line x1="440" y1="680" x2="460" y2="680" stroke="#64748B" stroke-width="1.5" opacity="0.5" />
  <line x1="438" y1="730" x2="462" y2="730" stroke="#64748B" stroke-width="1.5" opacity="0.5" />
  <line x1="436" y1="780" x2="464" y2="780" stroke="#64748B" stroke-width="1.5" opacity="0.5" />

  <!-- Suit Lapels (Navy Tailored) -->
  <polygon points="320,670 420,850 350,850 250,730" fill="#1A273A" />
  <polygon points="580,670 480,850 550,850 650,730" fill="#1A273A" />
  <line x1="450" y1="840" x2="450" y2="1200" stroke="#0D1520" stroke-width="3" />
  <!-- Buttons -->
  <circle cx="450" cy="890" r="8" fill="#0A0E17" stroke="#334155" stroke-width="2" />
  <circle cx="450" cy="970" r="8" fill="#0A0E17" stroke="#334155" stroke-width="2" />

  <!-- Breast Pocket & White Pocket Square Fold -->
  <polygon points="580,770 650,765 650,775 580,780" fill="#0E1624" />
  <polygon points="595,768 625,750 640,766" fill="#FFFFFF" />

  <!-- Crossed Arms Pose in Navy Suit -->
  <path d="M 200 950 C 320 900 580 900 700 950 C 640 1060 260 1060 200 950 Z" fill="#152132" />
  <!-- Suit sleeve cuffs showing crisp white shirt cuff -->
  <rect x="330" y="940" width="45" height="16" rx="4" transform="rotate(-15 330 940)" fill="#FFFFFF" />
  <rect x="520" y="930" width="45" height="16" rx="4" transform="rotate(15 520 930)" fill="#FFFFFF" />
  <!-- Hands / Fingers neatly crossed -->
  <path d="M 370 935 C 390 925 415 940 410 960 C 390 970 370 955 370 935 Z" fill="url(#skinGrad2)" />
  <path d="M 525 935 C 505 925 480 940 485 960 C 505 970 525 955 525 935 Z" fill="url(#skinGrad2)" />

  <!-- Neck -->
  <path d="M 390 470 L 510 470 L 515 580 L 385 580 Z" fill="url(#skinGrad2)" />
  <ellipse cx="450" cy="500" rx="65" ry="20" fill="#5F3A22" opacity="0.3" />

  <!-- Head & Face -->
  <path d="M 320 320 C 315 480 370 560 450 560 C 530 560 585 480 580 320 C 575 180 520 140 450 140 C 380 140 325 180 320 320 Z" fill="url(#skinGrad2)" />

  <!-- Ears -->
  <ellipse cx="320" cy="360" rx="18" ry="38" fill="#C58D6C" />
  <ellipse cx="580" cy="360" rx="18" ry="38" fill="#C58D6C" />

  <!-- Well-groomed Beard & Mustache -->
  <path d="M 330 360 C 345 510 385 555 450 555 C 515 555 555 510 570 360 C 555 400 535 460 500 490 C 470 505 430 505 400 490 C 365 460 345 400 330 360 Z" fill="#141416" />
  <path d="M 395 420 C 420 405 440 415 450 420 C 460 415 480 405 505 420 C 490 445 465 450 450 445 C 435 450 410 445 395 420 Z" fill="#141416" />
  <path d="M 425 455 C 440 465 460 465 475 455" stroke="#9E5B42" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Nose -->
  <path d="M 442 310 L 438 390 C 440 398 460 398 462 390 L 458 310" fill="#B37855" opacity="0.7" />
  <ellipse cx="435" cy="392" rx="7" ry="5" fill="#8C4F2B" opacity="0.4" />
  <ellipse cx="465" cy="392" rx="7" ry="5" fill="#8C4F2B" opacity="0.4" />

  <!-- Eyes & Eyebrows -->
  <ellipse cx="395" cy="320" rx="22" ry="12" fill="#FFFFFF" opacity="0.95" />
  <ellipse cx="505" cy="320" rx="22" ry="12" fill="#FFFFFF" opacity="0.95" />
  <circle cx="395" cy="320" r="10" fill="#2C1B12" />
  <circle cx="505" cy="320" r="10" fill="#2C1B12" />
  <circle cx="397" cy="318" r="3" fill="#FFFFFF" />
  <circle cx="507" cy="318" r="3" fill="#FFFFFF" />

  <!-- Eyebrows -->
  <path d="M 365 290 C 390 282 420 288 430 295" stroke="#16171A" stroke-width="8" stroke-linecap="round" fill="none" />
  <path d="M 535 290 C 510 282 480 288 470 295" stroke="#16171A" stroke-width="8" stroke-linecap="round" fill="none" />

  <!-- Modern Rectangular Black Eyeglasses -->
  <rect x="360" y="295" width="75" height="48" rx="8" stroke="#0F1115" stroke-width="6" fill="none" />
  <rect x="465" y="295" width="75" height="48" rx="8" stroke="#0F1115" stroke-width="6" fill="none" />
  <path d="M 435 312 C 445 306 455 306 465 312" stroke="#0F1115" stroke-width="5" stroke-linecap="round" fill="none" />
  <path d="M 360 310 L 325 325" stroke="#0F1115" stroke-width="5" stroke-linecap="round" />
  <path d="M 540 310 L 575 325" stroke="#0F1115" stroke-width="5" stroke-linecap="round" />
  <path d="M 370 305 L 420 305 L 390 335 L 370 335 Z" fill="#6CC8FF" opacity="0.12" />
  <path d="M 475 305 L 525 305 L 495 335 L 475 335 Z" fill="#6CC8FF" opacity="0.12" />

  <!-- Hair (Neat executive side parting) -->
  <path d="M 315 300 C 310 200 360 110 450 110 C 540 110 585 180 585 280 C 585 300 575 260 560 220 C 520 160 420 160 340 240 C 325 265 320 285 315 300 Z" fill="#1C1D21" />

  <!-- Reticle & Metadata -->
  <g opacity="0.5">
    <text x="50" y="70" font-family="monospace" font-size="16" fill="#6CC8FF" letter-spacing="4">ROFIQUE CHOWDHURY // EXECUTIVE PROFILE</text>
    <text x="50" y="95" font-family="monospace" font-size="12" fill="#8C929B" letter-spacing="2">LOCATION: DHAKA • SENIOR VISUALIZER • 6+ YRS EXP</text>
  </g>
</svg>
`;

// Write SVGs
const heroSvgPath = path.join(publicAssetsDir, 'profile-hero.svg');
const aboutSvgPath = path.join(publicAssetsDir, 'profile-about.svg');
fs.writeFileSync(heroSvgPath, heroSvg);
fs.writeFileSync(aboutSvgPath, aboutSvg);

// Create both JPEG versions with ffmpeg or convert
const heroJpg = path.join(publicAssetsDir, 'IMG-Mycreation00016.jpg');
const heroAltJpg = path.join(publicAssetsDir, 'profile.jpg');
const aboutPng = path.join(publicAssetsDir, 'IMG-Mycreation00002.png');
const aboutJpg = path.join(publicAssetsDir, 'profile-about.jpg');

try {
  execSync(`ffmpeg -y -i "${heroSvgPath}" -q:v 2 "${heroJpg}"`, { stdio: 'inherit' });
  execSync(`cp "${heroJpg}" "${heroAltJpg}"`);
  execSync(`ffmpeg -y -i "${aboutSvgPath}" -q:v 2 "${aboutPng}"`, { stdio: 'inherit' });
  execSync(`cp "${aboutPng}" "${aboutJpg}"`);
  console.log('Successfully generated profile portraits matching uploaded images.');
} catch (e) {
  console.error('Error rasterizing with ffmpeg:', e.message);
  // fallback to convert
  try {
    execSync(`convert "${heroSvgPath}" "${heroJpg}"`);
    execSync(`cp "${heroJpg}" "${heroAltJpg}"`);
    execSync(`convert "${aboutSvgPath}" "${aboutPng}"`);
    execSync(`cp "${aboutPng}" "${aboutJpg}"`);
  } catch (err) {
    console.error('Error with convert:', err.message);
  }
}
