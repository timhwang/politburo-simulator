// ============================================================
// PIXEL ART ENGINE - SimCity 2000 aesthetic
// ============================================================

// Color palettes per era
const PALETTES = {
  civil_war: { sky:'#4a3060', bg:'#2a1a0a', building:'#6b4030', accent:'#c44', ground:'#3a2a15', smoke:'#555', flag:'#c41e1e', window:'#ffa' },
  nep: { sky:'#5a5080', bg:'#3a2a15', building:'#7a6050', accent:'#d4a', ground:'#4a3a20', smoke:'#666', flag:'#c41e1e', window:'#ffc' },
  succession: { sky:'#3a3050', bg:'#2a1a10', building:'#6a5040', accent:'#a44', ground:'#3a2a15', smoke:'#555', flag:'#c41e1e', window:'#fe8' },
  stalin: { sky:'#2a2040', bg:'#1a0a05', building:'#5a4030', accent:'#811', ground:'#2a1a10', smoke:'#444', flag:'#c41e1e', window:'#cc6' },
  terror: { sky:'#1a1020', bg:'#0a0505', building:'#4a3020', accent:'#600', ground:'#1a0a05', smoke:'#333', flag:'#900', window:'#a84' },
  postwar: { sky:'#3a4060', bg:'#2a2a30', building:'#6a6a70', accent:'#88a', ground:'#3a3a35', smoke:'#555', flag:'#c41e1e', window:'#ffa' },
  thaw: { sky:'#5a6a8a', bg:'#3a4050', building:'#8a8a90', accent:'#68a', ground:'#4a4a40', smoke:'#777', flag:'#c41e1e', window:'#ffc' },
  khrushchev: { sky:'#6a7a9a', bg:'#4a5060', building:'#9a9aa0', accent:'#6a8', ground:'#5a5a50', smoke:'#888', flag:'#c41e1e', window:'#ffe' },
  brezhnev: { sky:'#5a6070', bg:'#3a3a40', building:'#7a7a80', accent:'#778', ground:'#4a4a45', smoke:'#666', flag:'#c41e1e', window:'#dd8' },
  stagnation: { sky:'#4a5060', bg:'#2a2a30', building:'#6a6a70', accent:'#667', ground:'#3a3a35', smoke:'#555', flag:'#c41e1e', window:'#cc6' },
  perestroika: { sky:'#7a8aaa', bg:'#5a6070', building:'#aaaaB0', accent:'#8ac', ground:'#6a6a60', smoke:'#999', flag:'#c41e1e', window:'#ffd' },
  collapse: { sky:'#8a8a8a', bg:'#5a5a5a', building:'#9a9a9a', accent:'#aaa', ground:'#6a6a6a', smoke:'#bbb', flag:'#888', window:'#ee8' }
};

const ERA_MAP = {
  7:'civil_war',8:'civil_war',9:'civil_war',10:'nep',11:'nep',12:'succession',13:'succession',
  14:'succession',15:'stalin',16:'stalin',17:'terror',18:'terror',19:'postwar',20:'thaw',
  21:'khrushchev',22:'khrushchev',23:'brezhnev',24:'brezhnev',25:'stagnation',26:'stagnation',
  27:'perestroika',28:'collapse'
};

// Scene definitions - what to draw for each Congress
const SCENES = {
  7: { // 1918 - Civil War beginning, Brest-Litovsk
    elements: ['kremlin_small', 'barricade', 'soldiers', 'smoke_plumes', 'red_flag', 'train'],
    label: 'Petrograd, 1918'
  },
  8: { // 1919 - Civil War raging
    elements: ['battlefield', 'cavalry', 'armored_train', 'smoke_plumes', 'red_flag', 'ruins'],
    label: 'The Front, 1919'
  },
  9: { // 1920 - Civil War winding down
    elements: ['factory', 'workers', 'red_flag', 'train', 'soldiers', 'telegraph'],
    label: 'War Communism, 1920'
  },
  10: { // 1921 - Kronstadt, NEP
    elements: ['fortress', 'ships', 'ice_field', 'soldiers', 'smoke_plumes', 'red_flag'],
    label: 'Kronstadt, 1921'
  },
  11: { // 1922 - Lenin declining
    elements: ['kremlin', 'market_stalls', 'nepmen', 'red_flag', 'car'],
    label: 'Moscow, 1922'
  },
  12: { // 1923 - Triumvirate vs Trotsky
    elements: ['kremlin', 'meeting_hall', 'figures_arguing', 'red_flag', 'document'],
    label: 'The Kremlin, 1923'
  },
  13: { // 1924 - Lenin dead
    elements: ['mausoleum', 'crowd', 'red_flag', 'snow', 'mourners'],
    label: 'Red Square, 1924'
  },
  14: { // 1925 - Stalin vs Zinoviev
    elements: ['congress_hall', 'podium', 'delegates', 'red_banner', 'factions'],
    label: 'Party Congress, 1925'
  },
  15: { // 1927 - United Opposition expelled
    elements: ['kremlin', 'marchers', 'police', 'banners_torn', 'red_flag'],
    label: 'Moscow, 1927'
  },
  16: { // 1930 - Collectivization
    elements: ['village', 'tractors', 'grain_silo', 'peasants', 'smoke_plumes', 'red_flag'],
    label: 'Collective Farm, 1930'
  },
  17: { // 1934 - Congress of Victors
    elements: ['grand_hall', 'stalin_portrait', 'delegates_many', 'red_banners', 'chandeliers'],
    label: 'Congress of Victors, 1934'
  },
  18: { // 1939 - Post-Terror
    elements: ['kremlin_dark', 'nkvd_building', 'empty_chairs', 'red_flag', 'searchlight'],
    label: 'Moscow, 1939'
  },
  19: { // 1952 - Aging Stalin
    elements: ['kremlin_winter', 'stalin_portrait', 'guards', 'snow', 'dark_cars'],
    label: 'The Kremlin, 1952'
  },
  20: { // 1956 - Secret Speech
    elements: ['congress_hall', 'podium_speaker', 'shocked_delegates', 'document', 'red_banner'],
    label: 'The Secret Speech, 1956'
  },
  21: { // 1959 - Khrushchev consolidating
    elements: ['rocket', 'factory_modern', 'corn_field', 'khrushchev_figure', 'red_flag'],
    label: 'The Space Age, 1959'
  },
  22: { // 1961 - De-Stalinization
    elements: ['mausoleum', 'workers_removing', 'crowd', 'rocket', 'red_flag'],
    label: 'Red Square, 1961'
  },
  23: { // 1966 - Brezhnev era begins
    elements: ['kremlin', 'limousines', 'suited_figures', 'red_flag', 'tv_antenna'],
    label: 'Moscow, 1966'
  },
  24: { // 1971 - Détente
    elements: ['kremlin', 'white_house', 'handshake', 'missiles', 'red_flag'],
    label: 'Détente, 1971'
  },
  25: { // 1976 - Stagnation
    elements: ['apartment_blocks', 'queue', 'medals', 'old_leader', 'red_flag'],
    label: 'Era of Stagnation, 1976'
  },
  26: { // 1981 - Afghanistan
    elements: ['mountains', 'helicopter', 'tanks', 'soldiers', 'red_flag'],
    label: 'Afghanistan, 1981'
  },
  27: { // 1986 - Perestroika
    elements: ['kremlin', 'nuclear_plant', 'protesters', 'newspapers', 'red_flag'],
    label: 'Perestroika, 1986'
  },
  28: { // 1990 - Collapse
    elements: ['berlin_wall_broken', 'crowd_celebrating', 'falling_flag', 'hammer_sickle_cracking'],
    label: 'The End, 1990'
  }
};

// ============================================================
// DRAWING PRIMITIVES (pixel-scaled)
// ============================================================
function drawPixelRect(ctx, x, y, w, h, color, px) {
  ctx.fillStyle = color;
  // Snap to pixel grid
  x = Math.floor(x/px)*px;
  y = Math.floor(y/px)*px;
  w = Math.floor(w/px)*px;
  h = Math.floor(h/px)*px;
  ctx.fillRect(x, y, w, h);
}

function drawPixelLine(ctx, x1, y1, x2, y2, color, px) {
  ctx.fillStyle = color;
  const dx = Math.abs(x2-x1), dy = Math.abs(y2-y1);
  const sx = x1<x2?px:-px, sy = y1<y2?px:-px;
  let err = dx-dy;
  while(true) {
    ctx.fillRect(Math.floor(x1/px)*px, Math.floor(y1/px)*px, px, px);
    if(Math.abs(x1-x2)<px && Math.abs(y1-y2)<px) break;
    const e2=2*err;
    if(e2>-dy){err-=dy;x1+=sx;}
    if(e2<dx){err+=dx;y1+=sy;}
  }
}

function drawTriangle(ctx, x, y, w, h, color, px) {
  ctx.fillStyle = color;
  for(let row=0; row<h; row+=px) {
    const rowWidth = Math.floor(w * (row/h) / px)*px;
    const startX = x + Math.floor((w-rowWidth)/2/px)*px;
    ctx.fillRect(startX, y+row, rowWidth||px, px);
  }
}

// ============================================================
// BUILDING BLOCKS
// ============================================================
function drawKremlinTower(ctx, x, y, pal, px, size) {
  const s = size || 1;
  // Base
  drawPixelRect(ctx, x, y-20*s, 16*px*s, 20*px*s, pal.building, px);
  // Upper section
  drawPixelRect(ctx, x+2*px*s, y-35*s, 12*px*s, 15*px*s, pal.building, px);
  // Spire
  drawPixelRect(ctx, x+6*px*s, y-50*s, 4*px*s, 15*px*s, pal.building, px);
  // Star on top
  drawPixelRect(ctx, x+6*px*s, y-54*s, 4*px*s, 4*px*s, pal.flag, px);
  // Windows
  for(let i=0;i<3;i++) {
    drawPixelRect(ctx, x+(2+i*4)*px*s, y-16*s, 2*px*s, 3*px*s, pal.window, px);
  }
  // Crenellations
  for(let i=0;i<4;i++) {
    drawPixelRect(ctx, x+i*4*px*s, y-24*s, 2*px*s, 4*px*s, pal.building, px);
  }
}

function drawKremlinWall(ctx, x, y, width, pal, px) {
  drawPixelRect(ctx, x, y-12, width, 12, pal.building, px);
  // Crenellations
  for(let i=0; i<width; i+=px*4) {
    drawPixelRect(ctx, x+i, y-16, px*2, 4, pal.building, px);
  }
}

function drawBuilding(ctx, x, y, w, h, pal, px, style) {
  drawPixelRect(ctx, x, y-h, w, h, pal.building, px);
  // Windows
  const winRows = Math.floor(h/(px*5));
  const winCols = Math.floor(w/(px*5));
  for(let r=0; r<winRows; r++) {
    for(let c=0; c<winCols; c++) {
      const lit = Math.random()>0.3;
      drawPixelRect(ctx, x+(c*5+2)*px, y-h+(r*5+2)*px, px*2, px*2, lit?pal.window:'#222', px);
    }
  }
  // Roof
  if(style==='soviet') {
    drawPixelRect(ctx, x-px, y-h-px*2, w+px*2, px*2, '#555', px);
  }
}

function drawSovietBuilding(ctx, x, y, w, h, pal, px) {
  // Stalinist architecture style
  drawPixelRect(ctx, x, y-h, w, h, pal.building, px);
  // Columns
  for(let i=0;i<w;i+=px*6) {
    drawPixelRect(ctx, x+i, y-h, px, h, '#555', px);
  }
  // Windows
  const winRows = Math.floor(h/(px*6));
  const winCols = Math.floor(w/(px*6));
  for(let r=0;r<winRows;r++) {
    for(let c=0;c<winCols;c++) {
      drawPixelRect(ctx, x+(c*6+2)*px, y-h+(r*6+2)*px, px*3, px*3, pal.window, px);
    }
  }
  // Star or emblem on top
  drawPixelRect(ctx, x+Math.floor(w/2)-px, y-h-px*4, px*3, px*3, pal.flag, px);
}

function drawRedFlag(ctx, x, y, pal, px, size) {
  const s = size||1;
  // Pole
  drawPixelRect(ctx, x, y-20*s, px, 20*px*s, '#888', px);
  // Flag
  const wave = Math.floor(Math.random()*3);
  drawPixelRect(ctx, x+px, y-20*s, 8*px*s, 5*px*s, pal.flag, px);
  // Hammer & sickle (simplified)
  drawPixelRect(ctx, x+3*px*s, y-18*s, px*s, 3*px*s, '#ffd700', px);
  drawPixelRect(ctx, x+4*px*s, y-17*s, px*s, px*s, '#ffd700', px);
}

function drawSmoke(ctx, x, y, pal, px) {
  const puffs = 3+Math.floor(Math.random()*3);
  for(let i=0;i<puffs;i++) {
    const ox = Math.floor(Math.random()*20/px)*px;
    const oy = Math.floor(Math.random()*15/px)*px;
    const size = (2+Math.floor(Math.random()*3))*px;
    ctx.fillStyle = pal.smoke;
    ctx.globalAlpha = 0.4+Math.random()*0.3;
    ctx.fillRect(x+ox, y-oy, size, size);
  }
  ctx.globalAlpha = 1;
}

function drawFigure(ctx, x, y, color, px, hat) {
  // Head
  drawPixelRect(ctx, x+px, y-8*px, 2*px, 2*px, '#dba', px);
  // Hat
  if(hat==='ushanka') {
    drawPixelRect(ctx, x, y-10*px, 4*px, 2*px, '#543', px);
  } else if(hat==='cap') {
    drawPixelRect(ctx, x, y-10*px, 4*px, px, color, px);
  } else if(hat==='officer') {
    drawPixelRect(ctx, x, y-10*px, 4*px, px, '#4a4', px);
    drawPixelRect(ctx, x+px, y-11*px, 2*px, px, '#4a4', px);
  }
  // Body
  drawPixelRect(ctx, x, y-6*px, 4*px, 4*px, color, px);
  // Legs
  drawPixelRect(ctx, x, y-2*px, px*2, 2*px, '#333', px);
  drawPixelRect(ctx, x+2*px, y-2*px, px*2, 2*px, '#333', px);
}

function drawTank(ctx, x, y, pal, px) {
  // Treads
  drawPixelRect(ctx, x, y-3*px, 18*px, 3*px, '#454', px);
  // Hull
  drawPixelRect(ctx, x+2*px, y-7*px, 14*px, 4*px, '#565', px);
  // Turret
  drawPixelRect(ctx, x+6*px, y-10*px, 6*px, 3*px, '#565', px);
  // Gun
  drawPixelRect(ctx, x+12*px, y-9*px, 6*px, px, '#454', px);
  // Star
  drawPixelRect(ctx, x+8*px, y-9*px, 2*px, px, pal.flag, px);
}

function drawTrain(ctx, x, y, pal, px) {
  // Engine
  drawPixelRect(ctx, x, y-8*px, 12*px, 6*px, '#444', px);
  drawPixelRect(ctx, x+12*px, y-6*px, 4*px, 4*px, '#555', px);
  // Smokestack
  drawPixelRect(ctx, x+2*px, y-12*px, 3*px, 4*px, '#444', px);
  // Wheels
  drawPixelRect(ctx, x+px, y-2*px, 2*px, 2*px, '#333', px);
  drawPixelRect(ctx, x+6*px, y-2*px, 2*px, 2*px, '#333', px);
  drawPixelRect(ctx, x+11*px, y-2*px, 2*px, 2*px, '#333', px);
  // Red star
  drawPixelRect(ctx, x+4*px, y-6*px, 2*px, 2*px, pal.flag, px);
  // Track
  drawPixelRect(ctx, x-4*px, y, 24*px, px, '#666', px);
}

function drawHelicopter(ctx, x, y, pal, px) {
  // Body
  drawPixelRect(ctx, x+4*px, y, 10*px, 4*px, '#565', px);
  // Tail
  drawPixelRect(ctx, x, y+px, 4*px, 2*px, '#454', px);
  drawPixelRect(ctx, x, y-px, 2*px, 2*px, '#454', px);
  // Rotor
  drawPixelRect(ctx, x+2*px, y-2*px, 14*px, px, '#888', px);
  // Cockpit
  drawPixelRect(ctx, x+12*px, y+px, 3*px, 2*px, '#8af', px);
  // Star
  drawPixelRect(ctx, x+8*px, y+px, 2*px, 2*px, pal.flag, px);
}

function drawMountains(ctx, width, groundY, pal, px) {
  const peaks = [{x:60,h:80},{x:180,h:100},{x:320,h:70},{x:450,h:90},{x:580,h:75},{x:700,h:85}];
  for(const p of peaks) {
    for(let row=0;row<p.h;row+=px) {
      const w=Math.floor((p.h-row)*1.2/px)*px;
      ctx.fillStyle = row<p.h*0.3?'#fff':row<p.h*0.5?'#aaa':'#667';
      ctx.fillRect(p.x-w/2, groundY-p.h+row, w, px);
    }
  }
}

function drawApartmentBlock(ctx, x, y, pal, px) {
  const w=30*px, h=40*px;
  drawPixelRect(ctx, x, y-h, w, h, '#888', px);
  for(let r=0;r<8;r++) {
    for(let c=0;c<6;c++) {
      const lit=Math.random()>0.4;
      drawPixelRect(ctx, x+(c*5+1)*px, y-h+(r*5+1)*px, 3*px, 3*px, lit?pal.window:'#444', px);
    }
  }
}

function drawQueue(ctx, x, y, pal, px) {
  for(let i=0;i<8;i++) {
    drawFigure(ctx, x+i*6*px, y, '#555', px, 'ushanka');
  }
}

// ============================================================
// SCENE COMPOSER
// ============================================================
function renderCongressScene(canvasIdOrEl, congressNum) {
  const canvas = typeof canvasIdOrEl === 'string' ? document.getElementById(canvasIdOrEl) : canvasIdOrEl;
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const px = 3; // pixel size for SimCity 2000 feel

  const eraKey = ERA_MAP[congressNum] || 'brezhnev';
  const pal = PALETTES[eraKey];
  const scene = SCENES[congressNum];

  // Disable smoothing for crisp pixels
  ctx.imageSmoothingEnabled = false;

  // Sky gradient (dithered)
  for(let y=0; y<H*0.6; y+=px) {
    const t = y/(H*0.6);
    ctx.fillStyle = pal.sky;
    ctx.globalAlpha = 1-t*0.3;
    ctx.fillRect(0, y, W, px);
  }
  ctx.globalAlpha = 1;

  const groundY = Math.floor(H*0.75/px)*px;

  // Ground
  drawPixelRect(ctx, 0, groundY, W, H-groundY, pal.ground, px);

  // Draw scene based on congress number
  switch(congressNum) {
    case 7: // Petrograd 1918 - barricades and revolution
      drawKremlinTower(ctx, 50, groundY, pal, px, 1.5);
      drawKremlinWall(ctx, 20, groundY, 120, pal, px);
      drawTrain(ctx, 300, groundY, pal, px);
      for(let i=0;i<4;i++) drawFigure(ctx, 170+i*20, groundY, '#644', px, 'cap');
      // Barricade
      drawPixelRect(ctx, 450, groundY-15, 60, 15, '#543', px);
      drawPixelRect(ctx, 460, groundY-20, 40, 5, '#654', px);
      for(let i=0;i<3;i++) drawFigure(ctx, 520+i*18, groundY, '#544', px, 'ushanka');
      drawRedFlag(ctx, 480, groundY-20, pal, px);
      drawSmoke(ctx, 350, groundY-30, pal, px);
      drawSmoke(ctx, 600, groundY-20, pal, px);
      break;

    case 8: // Civil War battlefield
      drawPixelRect(ctx, 0, groundY-5, W, 5, '#432', px); // Trench line
      drawTank(ctx, 100, groundY, pal, px);
      for(let i=0;i<6;i++) drawFigure(ctx, 250+i*18, groundY, '#644', px, i<3?'cap':'ushanka');
      // Armored train
      drawTrain(ctx, 450, groundY, pal, px);
      drawPixelRect(ctx, 450, groundY-14*px, 12*px, 6*px, '#555', px);
      drawSmoke(ctx, 150, groundY-40, pal, px);
      drawSmoke(ctx, 500, groundY-50, pal, px);
      drawSmoke(ctx, 300, groundY-30, pal, px);
      drawRedFlag(ctx, 380, groundY, pal, px);
      break;

    case 9: // War Communism - factories
      drawBuilding(ctx, 50, groundY, 80, 60, pal, px);
      drawPixelRect(ctx, 90, groundY-80, 12, 20, '#666', px); // smokestack
      drawSmoke(ctx, 85, groundY-90, pal, px);
      drawBuilding(ctx, 200, groundY, 60, 45, pal, px);
      drawTrain(ctx, 350, groundY, pal, px);
      for(let i=0;i<5;i++) drawFigure(ctx, 450+i*16, groundY, '#655', px, 'cap');
      drawRedFlag(ctx, 140, groundY-60, pal, px);
      drawPixelRect(ctx, 550, groundY-30, 40, 30, pal.building, px); // telegraph office
      drawPixelRect(ctx, 560, groundY-50, px*2, 20, '#888', px); // telegraph pole
      break;

    case 10: // Kronstadt - fortress on ice
      // Ice field
      drawPixelRect(ctx, 0, groundY, W, H-groundY, '#aabbc8', px);
      for(let i=0;i<W;i+=px*8) {
        drawPixelRect(ctx, i, groundY+Math.floor(Math.random()*10/px)*px, px*4, px, '#cdd', px);
      }
      // Fortress
      drawPixelRect(ctx, 250, groundY-50, 120, 50, '#667', px);
      drawPixelRect(ctx, 260, groundY-65, 20, 15, '#778', px);
      drawPixelRect(ctx, 340, groundY-65, 20, 15, '#778', px);
      // Ships
      drawPixelRect(ctx, 80, groundY-8, 50, 8, '#445', px);
      drawPixelRect(ctx, 90, groundY-18, 8, 10, '#445', px);
      drawPixelRect(ctx, 550, groundY-8, 40, 8, '#445', px);
      // Soldiers on ice
      for(let i=0;i<6;i++) drawFigure(ctx, 420+i*18, groundY, '#644', px, 'ushanka');
      drawSmoke(ctx, 280, groundY-60, pal, px);
      drawRedFlag(ctx, 310, groundY-65, pal, px);
      break;

    case 11: // NEP Moscow - markets
      drawKremlinTower(ctx, 30, groundY, pal, px);
      drawKremlinWall(ctx, 0, groundY, 100, pal, px);
      // Market stalls
      for(let i=0;i<3;i++) {
        drawPixelRect(ctx, 180+i*80, groundY-18, 40, 18, '#876', px);
        drawPixelRect(ctx, 175+i*80, groundY-24, 50, 6, '#987', px);
      }
      // NEPmen
      for(let i=0;i<5;i++) drawFigure(ctx, 200+i*50, groundY, '#665', px, i%2?'cap':'ushanka');
      // Car
      drawPixelRect(ctx, 520, groundY-8, 30, 8, '#333', px);
      drawPixelRect(ctx, 525, groundY-14, 20, 6, '#333', px);
      drawPixelRect(ctx, 520, groundY-2, 5, 4, '#222', px);
      drawPixelRect(ctx, 545, groundY-2, 5, 4, '#222', px);
      drawRedFlag(ctx, 60, groundY-40, pal, px);
      break;

    case 12: // Kremlin meeting - factional struggle
      // Hall interior
      drawPixelRect(ctx, 0, 0, W, H, '#3a2520', px);
      drawPixelRect(ctx, 0, groundY, W, H-groundY, '#4a3020', px);
      // Long table
      drawPixelRect(ctx, 100, groundY-10, 500, 10, '#654', px);
      // Figures around table
      for(let i=0;i<8;i++) {
        drawFigure(ctx, 120+i*55, groundY-10, i<3?'#544':'#455', px, 'cap');
      }
      // Portraits on wall
      drawPixelRect(ctx, 300, 30, 40, 50, '#876', px);
      drawPixelRect(ctx, 298, 28, 44, 4, '#987', px);
      // Red banners
      drawPixelRect(ctx, 50, 20, 15, 80, pal.flag, px);
      drawPixelRect(ctx, 640, 20, 15, 80, pal.flag, px);
      // Chandelier
      drawPixelRect(ctx, 330, 10, 40, px*2, '#aa8', px);
      for(let i=0;i<5;i++) drawPixelRect(ctx, 334+i*7, 10, px, 15, '#aa8', px);
      break;

    case 13: // Red Square - Lenin's funeral
      // Mausoleum
      drawPixelRect(ctx, 280, groundY-30, 80, 30, '#833', px);
      drawPixelRect(ctx, 290, groundY-40, 60, 10, '#844', px);
      drawPixelRect(ctx, 300, groundY-46, 40, 6, '#855', px);
      drawPixelRect(ctx, 310, groundY-24, 20, 6, '#222', px); // entrance
      // Crowd
      for(let i=0;i<20;i++) {
        const cx=50+i*32, cy=groundY;
        drawFigure(ctx, cx, cy, '#444', px, 'ushanka');
      }
      // Snow
      for(let i=0;i<40;i++) {
        ctx.fillStyle='#fff';
        ctx.globalAlpha=0.5;
        ctx.fillRect(Math.floor(Math.random()*W/px)*px, Math.floor(Math.random()*H/px)*px, px, px);
      }
      ctx.globalAlpha=1;
      // Kremlin wall behind
      drawKremlinWall(ctx, 0, groundY-50, W, pal, px);
      drawKremlinTower(ctx, 100, groundY-50, pal, px);
      drawRedFlag(ctx, 320, groundY-46, pal, px, 0.7);
      break;

    case 14: // Congress hall - factions
      drawPixelRect(ctx, 0, 0, W, H, '#3a2a20', px);
      // Podium
      drawPixelRect(ctx, 300, groundY-30, 80, 30, '#654', px);
      drawRedFlag(ctx, 340, groundY-30, pal, px);
      // Delegates in rows
      for(let r=0;r<3;r++) {
        for(let i=0;i<12;i++) {
          drawFigure(ctx, 80+i*48, groundY+r*12, r===0?'#544':'#455', px, 'cap');
        }
      }
      // Banner
      drawPixelRect(ctx, 200, 20, 300, 30, pal.flag, px);
      break;

    case 15: // Opposition crushed - street scene
      drawKremlinTower(ctx, 30, groundY, pal, px);
      drawKremlinWall(ctx, 0, groundY, 120, pal, px);
      // Marchers being dispersed
      for(let i=0;i<4;i++) drawFigure(ctx, 200+i*25, groundY, '#544', px, 'cap');
      // Police/GPU
      for(let i=0;i<3;i++) drawFigure(ctx, 400+i*20, groundY, '#343', px, 'officer');
      // Torn banners on ground
      drawPixelRect(ctx, 300, groundY-3, 30, 3, '#833', px);
      drawPixelRect(ctx, 350, groundY-2, 20, 2, '#833', px);
      drawRedFlag(ctx, 500, groundY, pal, px);
      drawBuilding(ctx, 550, groundY, 70, 50, pal, px);
      break;

    case 16: // Collectivization - village with tractors
      // Grain silo
      drawPixelRect(ctx, 50, groundY-50, 30, 50, '#876', px);
      drawPixelRect(ctx, 45, groundY-55, 40, 5, '#987', px);
      // Village houses
      drawPixelRect(ctx, 150, groundY-20, 30, 20, '#765', px);
      drawPixelRect(ctx, 145, groundY-28, 40, 8, '#654', px); // roof
      drawPixelRect(ctx, 250, groundY-20, 30, 20, '#765', px);
      drawPixelRect(ctx, 245, groundY-28, 40, 8, '#654', px);
      // Tractor
      drawPixelRect(ctx, 380, groundY-12, 25, 10, '#a64', px);
      drawPixelRect(ctx, 370, groundY-4, 8, 6, '#333', px);
      drawPixelRect(ctx, 400, groundY-4, 8, 6, '#333', px);
      // Peasants
      for(let i=0;i<5;i++) drawFigure(ctx, 450+i*20, groundY, '#654', px, 'ushanka');
      drawSmoke(ctx, 200, groundY-30, pal, px);
      // Fields
      for(let i=0;i<W;i+=px*6) {
        drawPixelRect(ctx, i, groundY+px*3, px*3, px, '#5a4', px);
      }
      drawRedFlag(ctx, 550, groundY, pal, px);
      break;

    case 17: // Congress of Victors - grand hall
      drawPixelRect(ctx, 0, 0, W, H, '#4a3020', px);
      drawPixelRect(ctx, 0, groundY, W, H-groundY, '#5a4030', px);
      // Grand stage
      drawPixelRect(ctx, 250, groundY-50, 200, 50, '#654', px);
      // Stalin portrait (large)
      drawPixelRect(ctx, 310, groundY-120, 60, 70, '#876', px);
      drawPixelRect(ctx, 308, groundY-122, 64, 4, '#987', px);
      drawPixelRect(ctx, 325, groundY-110, 30, 30, '#dba', px); // face
      drawPixelRect(ctx, 325, groundY-115, 30, 5, '#444', px); // hair
      // Red banners flanking
      drawPixelRect(ctx, 200, groundY-130, 20, 120, pal.flag, px);
      drawPixelRect(ctx, 480, groundY-130, 20, 120, pal.flag, px);
      // Delegates
      for(let r=0;r<2;r++) {
        for(let i=0;i<14;i++) {
          drawFigure(ctx, 40+i*45, groundY+15+r*15, '#554', px, 'cap');
        }
      }
      // Chandeliers
      for(let i=0;i<3;i++) {
        drawPixelRect(ctx, 150+i*200, 10, 30, px, '#aa8', px);
        for(let j=0;j<4;j++) drawPixelRect(ctx, 153+i*200+j*8, 10, px, 10, '#aa8', px);
      }
      break;

    case 18: // Post-Terror Moscow - dark, empty
      drawKremlinTower(ctx, 30, groundY, pal, px, 1.5);
      drawKremlinWall(ctx, 0, groundY, 150, pal, px);
      // Lubyanka (NKVD building)
      drawSovietBuilding(ctx, 400, groundY, 120, 70, pal, px);
      drawPixelRect(ctx, 440, groundY-75, 40, 5, pal.flag, px);
      // Empty chairs (symbolizing purged)
      for(let i=0;i<5;i++) {
        drawPixelRect(ctx, 200+i*30, groundY-6, 10, 6, '#543', px);
        drawPixelRect(ctx, 200+i*30, groundY-12, 10, 2, '#543', px);
      }
      // Searchlight beam
      ctx.fillStyle='#ffa';
      ctx.globalAlpha=0.08;
      for(let i=0;i<60;i+=px) {
        ctx.fillRect(420+i, groundY-70-i*1.5, px*3, px*3);
      }
      ctx.globalAlpha=1;
      // Dark cars
      drawPixelRect(ctx, 560, groundY-8, 30, 8, '#222', px);
      drawPixelRect(ctx, 565, groundY-14, 20, 6, '#222', px);
      drawRedFlag(ctx, 80, groundY-50, pal, px);
      break;

    case 19: // Kremlin winter 1952 - paranoid Stalin
      // Snow everywhere
      drawPixelRect(ctx, 0, groundY, W, H-groundY, '#ccd', px);
      for(let i=0;i<30;i++) {
        ctx.fillStyle='#fff';ctx.globalAlpha=0.4;
        ctx.fillRect(Math.floor(Math.random()*W/px)*px, Math.floor(Math.random()*H/px)*px, px, px);
      }
      ctx.globalAlpha=1;
      drawKremlinTower(ctx, 200, groundY, pal, px, 2);
      drawKremlinWall(ctx, 100, groundY, 300, pal, px);
      // Stalin portrait
      drawPixelRect(ctx, 500, groundY-60, 40, 50, '#876', px);
      drawPixelRect(ctx, 510, groundY-50, 20, 20, '#dba', px);
      drawPixelRect(ctx, 510, groundY-55, 20, 5, '#444', px);
      // Guards
      for(let i=0;i<3;i++) drawFigure(ctx, 450+i*30, groundY, '#343', px, 'officer');
      // Black cars
      drawPixelRect(ctx, 50, groundY-8, 30, 8, '#222', px);
      drawPixelRect(ctx, 55, groundY-14, 20, 6, '#222', px);
      drawRedFlag(ctx, 350, groundY-40, pal, px);
      break;

    case 20: // Secret Speech - congress hall, shocked faces
      drawPixelRect(ctx, 0, 0, W, H, '#4a4050', px);
      // Podium with speaker
      drawPixelRect(ctx, 310, groundY-35, 60, 35, '#654', px);
      drawFigure(ctx, 330, groundY-35, '#555', px, 'cap');
      // Document on podium
      drawPixelRect(ctx, 335, groundY-40, 8, 10, '#fff', px);
      // Shocked delegates
      for(let r=0;r<3;r++) {
        for(let i=0;i<12;i++) {
          drawFigure(ctx, 40+i*50, groundY+r*15, '#555', px, 'cap');
        }
      }
      // Red banner
      drawPixelRect(ctx, 250, 15, 200, 25, pal.flag, px);
      // Spotlight on podium
      ctx.fillStyle='#ffa';ctx.globalAlpha=0.06;
      drawPixelRect(ctx, 290, 0, 100, groundY, '#ffa', px);
      ctx.globalAlpha=1;
      break;

    case 21: // Space Age 1959 - rocket and progress
      // Rocket
      drawPixelRect(ctx, 80, groundY-90, 16, 60, '#ccc', px);
      drawPixelRect(ctx, 83, groundY-100, 10, 10, '#ccc', px);
      drawTriangle(ctx, 83, groundY-115, 10, 15, '#c44', px);
      drawPixelRect(ctx, 74, groundY-30, 8, 15, '#aaa', px); // fin
      drawPixelRect(ctx, 94, groundY-30, 8, 15, '#aaa', px); // fin
      drawSmoke(ctx, 70, groundY-10, {smoke:'#fff'}, px);
      // Modern factory
      drawBuilding(ctx, 250, groundY, 100, 50, pal, px, 'soviet');
      drawPixelRect(ctx, 310, groundY-70, 12, 20, '#777', px);
      drawSmoke(ctx, 305, groundY-80, pal, px);
      // Corn field
      for(let i=0;i<10;i++) {
        drawPixelRect(ctx, 430+i*12, groundY-12-Math.floor(Math.random()*8), px*2, 12+Math.floor(Math.random()*5), '#5a3', px);
        drawPixelRect(ctx, 432+i*12, groundY-16-Math.floor(Math.random()*8), px*3, px*2, '#8b4', px);
      }
      drawFigure(ctx, 580, groundY, '#665', px, 'cap');
      drawRedFlag(ctx, 200, groundY, pal, px);
      break;

    case 22: // De-Stalinization - removing Stalin from mausoleum
      // Mausoleum
      drawPixelRect(ctx, 280, groundY-30, 80, 30, '#833', px);
      drawPixelRect(ctx, 290, groundY-40, 60, 10, '#844', px);
      // Workers removing
      for(let i=0;i<3;i++) drawFigure(ctx, 290+i*20, groundY-30, '#665', px, 'cap');
      // Carrying coffin
      drawPixelRect(ctx, 370, groundY-12, 30, 8, '#543', px);
      // Crowd watching
      for(let i=0;i<10;i++) drawFigure(ctx, 50+i*35, groundY, '#555', px, 'ushanka');
      // Rocket in background
      drawPixelRect(ctx, 600, groundY-60, 10, 40, '#ccc', px);
      drawTriangle(ctx, 600, groundY-70, 10, 10, '#c44', px);
      drawKremlinWall(ctx, 0, groundY-50, W, pal, px);
      drawRedFlag(ctx, 500, groundY, pal, px);
      break;

    case 23: // Brezhnev era - limousines at Kremlin
      drawKremlinTower(ctx, 150, groundY, pal, px, 1.5);
      drawKremlinWall(ctx, 50, groundY, 250, pal, px);
      // Limousines
      for(let i=0;i<3;i++) {
        const cx=350+i*80;
        drawPixelRect(ctx, cx, groundY-8, 40, 8, '#222', px);
        drawPixelRect(ctx, cx+5, groundY-14, 30, 6, '#222', px);
        drawPixelRect(ctx, cx+8, groundY-12, 10, 3, '#88a', px); // windshield
        drawPixelRect(ctx, cx, groundY-2, 6, 4, '#111', px);
        drawPixelRect(ctx, cx+34, groundY-2, 6, 4, '#111', px);
      }
      // Suited figures
      for(let i=0;i<4;i++) drawFigure(ctx, 330+i*40, groundY, '#333', px, 'cap');
      // TV antenna
      drawPixelRect(ctx, 620, groundY-50, px, 50, '#888', px);
      drawPixelRect(ctx, 610, groundY-50, 22, px, '#888', px);
      drawRedFlag(ctx, 200, groundY-50, pal, px);
      break;

    case 24: // Détente - handshake scene
      // Kremlin side
      drawKremlinTower(ctx, 50, groundY, pal, px);
      drawKremlinWall(ctx, 0, groundY, 120, pal, px);
      // White House side (simplified)
      drawBuilding(ctx, 550, groundY, 80, 40, {building:'#ddd',window:'#88a'}, px);
      drawPixelRect(ctx, 570, groundY-50, 40, 10, '#ddd', px); // dome base
      drawPixelRect(ctx, 580, groundY-58, 20, 8, '#ddd', px);
      // Handshake figures in center
      drawFigure(ctx, 300, groundY, '#555', px, 'cap');
      drawFigure(ctx, 330, groundY, '#335', px, 'cap');
      // Missiles in background
      drawPixelRect(ctx, 180, groundY-50, 6, 30, '#777', px);
      drawPixelRect(ctx, 200, groundY-45, 6, 25, '#777', px);
      drawPixelRect(ctx, 440, groundY-50, 6, 30, '#777', px);
      drawRedFlag(ctx, 130, groundY-30, pal, px);
      break;

    case 25: // Stagnation - apartment blocks and queues
      drawApartmentBlock(ctx, 30, groundY, pal, px);
      drawApartmentBlock(ctx, 200, groundY, pal, px);
      drawApartmentBlock(ctx, 370, groundY, pal, px);
      // Queue
      drawQueue(ctx, 490, groundY, pal, px);
      // Store front
      drawPixelRect(ctx, 480, groundY-15, 50, 15, '#665', px);
      drawPixelRect(ctx, 485, groundY-10, 10, 8, pal.window, px);
      // Old leader figure with medals
      drawFigure(ctx, 560, groundY-30, '#444', px, 'cap');
      drawPixelRect(ctx, 561, groundY-36, 2, 2, '#fd0', px);
      drawPixelRect(ctx, 564, groundY-36, 2, 2, '#fd0', px);
      drawRedFlag(ctx, 600, groundY, pal, px);
      break;

    case 26: // Afghanistan - mountains and helicopters
      drawMountains(ctx, W, groundY, pal, px);
      drawHelicopter(ctx, 200, 40, pal, px);
      drawHelicopter(ctx, 400, 60, pal, px);
      drawTank(ctx, 100, groundY, pal, px);
      drawTank(ctx, 350, groundY, pal, px);
      for(let i=0;i<5;i++) drawFigure(ctx, 500+i*20, groundY, '#565', px, 'officer');
      drawRedFlag(ctx, 600, groundY, pal, px);
      drawSmoke(ctx, 250, groundY-20, pal, px);
      break;

    case 27: // Perestroika - Kremlin + nuclear plant + newspapers
      drawKremlinTower(ctx, 30, groundY, pal, px);
      drawKremlinWall(ctx, 0, groundY, 100, pal, px);
      // Nuclear plant (Chernobyl reference)
      drawPixelRect(ctx, 250, groundY-40, 40, 40, '#889', px);
      drawPixelRect(ctx, 260, groundY-55, 20, 15, '#99a', px);
      drawSmoke(ctx, 255, groundY-60, {smoke:'#aa5'}, px); // yellow-tinged smoke
      // Newspapers/glasnost
      for(let i=0;i<3;i++) {
        drawPixelRect(ctx, 400+i*40, groundY-8, 20, 12, '#eed', px);
        drawPixelRect(ctx, 402+i*40, groundY-5, 16, px, '#333', px);
        drawPixelRect(ctx, 402+i*40, groundY-2, 12, px, '#333', px);
      }
      // Protesters
      for(let i=0;i<6;i++) drawFigure(ctx, 500+i*20, groundY, '#667', px, i%2?'cap':'ushanka');
      // Signs
      drawPixelRect(ctx, 520, groundY-18, 15, 8, '#eed', px);
      drawPixelRect(ctx, 550, groundY-18, 15, 8, '#eed', px);
      drawRedFlag(ctx, 150, groundY, pal, px);
      break;

    case 28: // Collapse - Berlin Wall broken, flag falling
      // Broken wall
      for(let i=0;i<8;i++) {
        const h = i>=3&&i<=5 ? 5+Math.floor(Math.random()*10) : 30+Math.floor(Math.random()*10);
        drawPixelRect(ctx, 150+i*25, groundY-h, 20, h, '#999', px);
      }
      // Rubble in gap
      for(let i=0;i<5;i++) {
        drawPixelRect(ctx, 220+i*10, groundY-3-Math.floor(Math.random()*5), 8, 5, '#888', px);
      }
      // Celebrating crowd
      for(let i=0;i<12;i++) drawFigure(ctx, 30+i*30, groundY, '#667', px, i%3?'cap':'ushanka');
      // Falling hammer & sickle / cracking emblem
      drawPixelRect(ctx, 500, groundY-40, 40, 40, pal.flag, px);
      // Crack through it
      drawPixelLine(ctx, 500, groundY-40, 540, groundY, '#222', px);
      drawPixelLine(ctx, 520, groundY-40, 510, groundY, '#222', px);
      // Falling flag
      drawPixelRect(ctx, 560, groundY-30, 20, 25, '#c44', px);
      ctx.save();
      ctx.translate(570, groundY-30);
      ctx.rotate(0.5);
      drawPixelRect(ctx, 0, 0, px, 30, '#888', px);
      ctx.restore();
      break;

    default:
      drawKremlinTower(ctx, 300, groundY, pal, px, 1.5);
      drawRedFlag(ctx, 380, groundY, pal, px);
  }

  // Scene label
  if(scene && scene.label) {
    ctx.fillStyle = '#000';
    ctx.globalAlpha = 0.6;
    drawPixelRect(ctx, 0, H-18, W, 18, '#000', 1);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#d4c5a9';
    ctx.font = '11px "Special Elite", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(scene.label, W/2, H-5);
  }
}

// ============================================================
// CHARACTER PORTRAIT GENERATOR
// ============================================================
const PORTRAIT_COLORS = {
  Russian: { skin:'#dba888', hair:'#654321', uniform:'#4a5530' },
  Jewish: { skin:'#d4a878', hair:'#3a2810', uniform:'#4a5530' },
  Georgian: { skin:'#c89868', hair:'#1a1008', uniform:'#4a5530' },
  Ukrainian: { skin:'#dba888', hair:'#765432', uniform:'#4a5530' },
  Latvian: { skin:'#e0b898', hair:'#8a6a4a', uniform:'#4a5530' },
  Polish: { skin:'#e0b898', hair:'#654321', uniform:'#4a5530' },
  Armenian: { skin:'#c89868', hair:'#1a1008', uniform:'#4a5530' },
  Belorussian: { skin:'#dba888', hair:'#876543', uniform:'#4a5530' },
  Finnish: { skin:'#e8c8a8', hair:'#aa8866', uniform:'#4a5530' },
  Uzbek: { skin:'#c08858', hair:'#1a1008', uniform:'#4a5530' },
  Kazakh: { skin:'#b88050', hair:'#1a1008', uniform:'#4a5530' },
  Azerbaijani: { skin:'#c89868', hair:'#1a1008', uniform:'#4a5530' }
};

function renderPortrait(canvasIdOrEl, member) {
  const canvas = typeof canvasIdOrEl === 'string' ? document.getElementById(canvasIdOrEl) : canvasIdOrEl;
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const px = 3;

  ctx.imageSmoothingEnabled = false;

  const colors = PORTRAIT_COLORS[member.nat] || PORTRAIT_COLORS.Russian;

  // Background
  ctx.fillStyle = '#2a1a0a';
  ctx.fillRect(0, 0, W, H);

  // Decorative border
  drawPixelRect(ctx, 0, 0, W, px, '#8b0000', px);
  drawPixelRect(ctx, 0, H-px, W, px, '#8b0000', px);
  drawPixelRect(ctx, 0, 0, px, H, '#8b0000', px);
  drawPixelRect(ctx, W-px, 0, px, H, '#8b0000', px);

  const cx = Math.floor(W/2);
  const cy = Math.floor(H*0.45);

  // Shoulders/uniform
  drawPixelRect(ctx, cx-18, cy+12, 36, 25, colors.uniform, px);
  // Collar
  drawPixelRect(ctx, cx-12, cy+12, 24, 6, '#3a4520', px);
  // Lapels
  drawPixelRect(ctx, cx-15, cy+12, 6, 15, '#3a4520', px);
  drawPixelRect(ctx, cx+9, cy+12, 6, 15, '#3a4520', px);

  // Neck
  drawPixelRect(ctx, cx-6, cy+6, 12, 9, colors.skin, px);

  // Head
  drawPixelRect(ctx, cx-12, cy-15, 24, 24, colors.skin, px);

  // Hair - varies by seed from name
  const seed = member.n.charCodeAt(0) + member.n.charCodeAt(member.n.length-1);
  const hairStyle = seed % 4;
  switch(hairStyle) {
    case 0: // Full hair
      drawPixelRect(ctx, cx-12, cy-18, 24, 9, colors.hair, px);
      drawPixelRect(ctx, cx-15, cy-15, 3, 12, colors.hair, px);
      drawPixelRect(ctx, cx+12, cy-15, 3, 12, colors.hair, px);
      break;
    case 1: // Balding
      drawPixelRect(ctx, cx-12, cy-18, 24, 6, colors.hair, px);
      drawPixelRect(ctx, cx-15, cy-12, 3, 9, colors.hair, px);
      drawPixelRect(ctx, cx+12, cy-12, 3, 9, colors.hair, px);
      break;
    case 2: // Mustache + hair
      drawPixelRect(ctx, cx-12, cy-18, 24, 9, colors.hair, px);
      drawPixelRect(ctx, cx-6, cy+3, 12, 3, colors.hair, px); // mustache
      break;
    case 3: // Beard + hair
      drawPixelRect(ctx, cx-12, cy-18, 24, 9, colors.hair, px);
      drawPixelRect(ctx, cx-6, cy+3, 12, 3, colors.hair, px); // mustache
      drawPixelRect(ctx, cx-9, cy+6, 18, 6, colors.hair, px); // beard
      break;
  }

  // Eyes
  drawPixelRect(ctx, cx-6, cy-6, 3, 3, '#222', px);
  drawPixelRect(ctx, cx+3, cy-6, 3, 3, '#222', px);

  // Nose
  drawPixelRect(ctx, cx-px, cy-px, 3, 3, '#c09070', px);

  // Mouth
  drawPixelRect(ctx, cx-3, cy+3, 6, px, '#a07060', px);

  // Ears
  drawPixelRect(ctx, cx-15, cy-6, 3, 6, colors.skin, px);
  drawPixelRect(ctx, cx+12, cy-6, 3, 6, colors.skin, px);

  // Medals/decorations for those who survived long
  const tenure = member.s.reduce((acc,st)=>acc+(st.b-st.a),0);
  if(tenure > 15) {
    drawPixelRect(ctx, cx-12, cy+18, 3, 3, '#ffd700', px);
    drawPixelRect(ctx, cx-8, cy+18, 3, 3, '#ffd700', px);
  }
  if(tenure > 25) {
    drawPixelRect(ctx, cx-4, cy+18, 3, 3, '#ffd700', px);
  }

  // Fate indicator - subtle
  if(member.fate === 'E') {
    // Red X in corner
    drawPixelRect(ctx, W-12, 6, 6, px, '#c41e1e', px);
    drawPixelRect(ctx, W-12, 6+3, 6, px, '#c41e1e', px);
  }
}
