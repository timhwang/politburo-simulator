import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const MODEL = "gpt-image-1";
const BADGE_DIR = "images/badges";
const STYLE = "Square achievement badge icon in the style of Crusader Kings 2 achievements. Dark metallic frame with ornate border, like a medieval heraldic shield or medallion. Rich dark background with subtle texture. Central symbolic icon rendered in a detailed painterly style with gold/bronze/silver metallic accents. 128x128 pixel square format. No text whatsoever in the image.";

const badges = [
  // Survival tier
  { file: "survivor-of-soviet-century.png", prompt: `${STYLE} A golden hammer and sickle laurel wreath with a red star at the top, symbolizing ultimate survival across an entire era. Glowing golden light.` },
  { file: "old-guard.png", prompt: `${STYLE} An aged but sturdy oak tree with red leaves, roots deep in the ground, symbolizing endurance and longevity in power.` },
  { file: "old-bolshevik.png", prompt: `${STYLE} A weathered red star medal with a hammer and sickle, slightly tarnished but still gleaming, on a dark red ribbon.` },
  { file: "entrenched.png", prompt: `${STYLE} Iron roots growing into stone, symbolizing someone who has dug in and cannot be easily removed from their position.` },
  { file: "flash-in-the-pan.png", prompt: `${STYLE} A single candle flame being snuffed out by fingers, with wisps of smoke. Brief and extinguished.` },

  // Stat achievements - Loyalty
  { file: "fanatical-devotion.png", prompt: `${STYLE} A blindfolded figure kneeling before a blazing red star, arms raised in worship. Fanatical religious devotion to ideology.` },
  { file: "true-believer.png", prompt: `${STYLE} A clenched fist holding a red flag aloft, with flames behind it. Absolute conviction and loyalty.` },

  // Stat achievements - Cunning
  { file: "kremlin-grandmaster.png", prompt: `${STYLE} A chess king piece made of dark iron, sitting on a chessboard with fallen pieces around it. Master strategist.` },
  { file: "master-intriguer.png", prompt: `${STYLE} A spider at the center of an intricate web, with dewdrops that look like tiny eyes. Political manipulation.` },

  // Stat achievements - Reputation
  { file: "legend-of-revolution.png", prompt: `${STYLE} A marble bust on a pedestal with golden laurel wreath and rays of light emanating outward. Legendary status.` },
  { file: "peoples-hero.png", prompt: `${STYLE} A raised worker's fist surrounded by smaller hands reaching upward, with a red banner behind. Popular acclaim.` },

  // Multi-stat
  { file: "complete-apparatchik.png", prompt: `${STYLE} A perfectly balanced scale with a red star, sword, and book on its three arms, all in equilibrium. The perfect politician.` },
  { file: "double-agent.png", prompt: `${STYLE} A face half in shadow, half in light, with one eye visible. A mask held to the side. Deception and duplicity.` },
  { file: "honest-servant.png", prompt: `${STYLE} A simple wooden desk with a single lamp and neat papers, a modest worker's medal pinned to a plain coat. Humble integrity.` },

  // Extreme stats
  { file: "enemy-of-the-people.png", prompt: `${STYLE} A mugshot-style portrait behind prison bars, with a red 'X' stamped across. Marked for destruction by the state.` },
  { file: "political-nonentity.png", prompt: `${STYLE} An empty chair at a long table, with a name plate face-down. A ghost-like silhouette fading away. Insignificance.` },

  // Betrayal
  { file: "architect-of-purges.png", prompt: `${STYLE} A bloody quill pen crossing names off a long list, with a dark inkwell shaped like a skull. Systematic betrayal.` },
  { file: "judas-of-presidium.png", prompt: `${STYLE} A hand offering a handshake while the other hand holds a hidden dagger behind the back. Treachery.` },
  { file: "loyal-comrade.png", prompt: `${STYLE} Two clasped hands in a firm handshake with a red ribbon binding them together. Unbreakable loyalty to allies.` },

  // Alliance
  { file: "master-of-networks.png", prompt: `${STYLE} An intricate web of golden threads connecting multiple red stars, forming a constellation pattern. Political networking mastery.` },
  { file: "network-builder.png", prompt: `${STYLE} Several interlocking gears of different sizes, all turning together smoothly. Building connections.` },
  { file: "lone-wolf.png", prompt: `${STYLE} A single wolf silhouette on a snow-covered hill under a cold moon. Solitary survival without allies.` },

  // Risk-taking
  { file: "revolutionary-daredevil.png", prompt: `${STYLE} A figure walking a tightrope over flames, balanced perfectly with arms outstretched. Extreme risk-taking.` },
  { file: "gambler.png", prompt: `${STYLE} A pair of dice mid-roll, one showing a hammer and the other a sickle, with cards fanned behind. Political gambling.` },
  { file: "the-cautious.png", prompt: `${STYLE} A tortoise with a small fortress built on its shell, moving slowly but safely. Careful, methodical survival.` },

  // Crisis & Dossier
  { file: "unbreakable.png", prompt: `${STYLE} An anvil with lightning bolts striking it from above but the anvil remains unscathed. Indestructible will.` },
  { file: "crisis-veteran.png", prompt: `${STYLE} A battered but unbroken shield with multiple sword marks and dents. Weathered many storms.` },
  { file: "spymaster.png", prompt: `${STYLE} An eye peering through a keyhole, with classified file folders visible in the background. Intelligence mastery.` },
  { file: "dossier-survivor.png", prompt: `${STYLE} A sealed envelope with a broken red wax seal, papers partially visible inside. Surviving secret intelligence.` },

  // Continuity
  { file: "thread-of-history.png", prompt: `${STYLE} A long red thread weaving through a series of historical documents and newspapers spanning decades. Lasting consequences.` },
  { file: "long-memory.png", prompt: `${STYLE} An elephant silhouette with a red star for an eye, standing on a stack of old files. Nothing is forgotten.` },
  { file: "the-turncoat.png", prompt: `${STYLE} A coat with one half red and one half white, split down the middle, with a chameleon perched on the collar. Political shape-shifting.` },
  { file: "alpha-and-omega.png", prompt: `${STYLE} Greek alpha and omega symbols intertwined with a hammer and sickle, one in revolutionary red and one in fading gray. Beginning and end.` },

  // Historical
  { file: "survived-the-terror.png", prompt: `${STYLE} A dark prison door with a narrow beam of light coming through, and footprints leading away from it. Escaping the purges.` },
  { file: "witnessed-the-fall.png", prompt: `${STYLE} A crumbling Soviet hammer and sickle emblem breaking apart, with pieces falling like a shattered statue. The end of an empire.` },
  { file: "eternal-commissar.png", prompt: `${STYLE} An hourglass with red sand, the top chamber showing 1918 and the bottom 1990. Infinite endurance through time.` },

  // Faction
  { file: "ultra-left.png", prompt: `${STYLE} A clenched iron fist smashing through a factory wall, with gears and machinery visible. Extreme economic leftism.` },
  { file: "left-deviationist.png", prompt: `${STYLE} A red flag planted firmly on a pile of broken chains and factory smokestacks. Committed leftist economic position.` },
  { file: "closet-capitalist.png", prompt: `${STYLE} A top hat hidden inside a Soviet ushanka hat, with gold coins visible underneath. Secret market advocate.` },
  { file: "right-deviationist.png", prompt: `${STYLE} A balanced scale with a small factory on one side and gold coins on the other. Market forces within socialism.` },
  { file: "iron-fist.png", prompt: `${STYLE} An armored iron gauntlet clenched into a fist, with lightning crackling around it. Extreme hardliner stance.` },
  { file: "radical-reformer.png", prompt: `${STYLE} A dove carrying an olive branch flying over the Kremlin walls, with spring flowers blooming below. Peace and reform.` },

  // Mode achievements
  { file: "blind-survivor.png", prompt: `${STYLE} A blindfolded figure navigating a dark maze filled with traps, one hand outstretched. Surviving without information.` },
  { file: "instinct.png", prompt: `${STYLE} A glowing third eye on a dark forehead, with shadowy political figures in the background. Pure political intuition.` },
  { file: "speed-survivor.png", prompt: `${STYLE} A stopwatch with a red star face, hands spinning rapidly, with a blurred Kremlin behind. Speed and decisiveness.` },
];

async function generateBadge(badge) {
  const outPath = path.join(BADGE_DIR, badge.file);
  if (fs.existsSync(outPath)) {
    console.log(`  SKIP ${badge.file} (exists)`);
    return;
  }

  console.log(`  Generating ${badge.file}...`);
  try {
    const response = await openai.images.generate({
      model: MODEL,
      prompt: badge.prompt,
      n: 1,
      size: "1024x1024",
      quality: "low"
    });

    const imageUrl = response.data[0].url || response.data[0].b64_json;

    if (response.data[0].b64_json) {
      const buffer = Buffer.from(response.data[0].b64_json, 'base64');
      fs.writeFileSync(outPath, buffer);
    } else if (imageUrl) {
      const res = await fetch(imageUrl);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outPath, buffer);
    }

    console.log(`  ✓ ${badge.file}`);
  } catch (err) {
    console.error(`  ✗ ${badge.file}: ${err.message}`);
  }
}

async function main() {
  if (!fs.existsSync(BADGE_DIR)) fs.mkdirSync(BADGE_DIR, { recursive: true });

  console.log(`Generating ${badges.length} achievement badges...`);

  // Process in batches of 3 to avoid rate limits
  for (let i = 0; i < badges.length; i += 3) {
    const batch = badges.slice(i, i + 3);
    await Promise.all(batch.map(b => generateBadge(b)));
    console.log(`  Progress: ${Math.min(i + 3, badges.length)}/${badges.length}`);
  }

  console.log("Done!");
}

main();
