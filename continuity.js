// ============================================================
// CROSS-SCENARIO CONTINUITY SYSTEM
// Tracks key decisions from earlier Congresses and unlocks
// bonus choices in later scenarios when they appear.
// ============================================================

const continuityTriggers = {
  // Key: a tag assigned when a specific type of choice is made
  // Value: the conditions and bonus choice it unlocks later

  'backed_brest_litovsk': {
    description: 'Supported the Treaty of Brest-Litovsk',
    appliesTo: [10, 11, 12], // Congress numbers where bonus choice appears
    bonusChoice: {
      text: 'Invoke your early loyalty to Lenin\'s pragmatism — remind the Congress you supported Brest-Litovsk when others wavered.',
      loyalty: 8, cunning: 5, reputation: 3, survival: 0.92,
      response: 'Your record of supporting Lenin\'s tough but correct decision lends weight to your words. Old Bolsheviks nod — they remember who stood firm.'
    }
  },

  'supported_trotsky_military': {
    description: 'Backed Trotsky\'s military specialists',
    appliesTo: [10, 11, 12],
    bonusChoice: {
      text: 'Point to the Red Army\'s victories — your support for military specialists helped win the Civil War.',
      loyalty: 3, cunning: 5, reputation: 8, survival: 0.85,
      response: 'Your military credentials are strong. But associating with Trotsky\'s name is becoming increasingly risky as the succession struggle intensifies.'
    }
  },

  'supported_nep': {
    description: 'Enthusiastically backed the NEP',
    appliesTo: [12, 13, 14, 15],
    bonusChoice: {
      text: 'Defend the NEP\'s achievements using your firsthand experience implementing it — you\'ve seen what works.',
      loyalty: -3, cunning: 8, reputation: 5, survival: 0.80,
      response: 'Your practical NEP experience gives you authority. But as Stalin turns against the NEP, defending it becomes a mark of "Right deviation."'
    }
  },

  'backed_faction_ban': {
    description: 'Supported the ban on party factions',
    appliesTo: [12, 13, 14, 15, 16],
    bonusChoice: {
      text: 'Remind waverers that YOU supported the faction ban from the beginning — use it against opposition voices.',
      loyalty: 10, cunning: 8, reputation: -5, survival: 0.93,
      response: 'You wield the faction ban like a weapon. Anyone who disagrees with the leadership can be accused of "factionalism." Your early support gives you credibility to make the charge.'
    }
  },

  'cultivated_stalin': {
    description: 'Built early relationship with Stalin',
    appliesTo: [13, 14, 15, 16, 17],
    bonusChoice: {
      text: 'Call on your long-standing relationship with Stalin — you were one of his earliest supporters in the apparatus.',
      loyalty: 12, cunning: 5, reputation: -3, survival: 0.90,
      response: 'Stalin remembers loyalty. Your early support when others underestimated him gives you a measure of protection — for now. But Stalin\'s memory cuts both ways.'
    }
  },

  'suppressed_testament': {
    description: 'Helped suppress Lenin\'s Testament',
    appliesTo: [14, 15, 16, 17],
    bonusChoice: {
      text: 'Quietly remind senior colleagues that you helped keep the Testament hidden — you are bound together by that shared secret.',
      loyalty: 5, cunning: 12, reputation: -8, survival: 0.88,
      response: 'The shared complicity of burying Lenin\'s Testament binds you to the inner circle. You are trusted because you know too much to be let go — and too compromised to rebel.'
    }
  },

  'praised_collectivization': {
    description: 'Championed collectivization',
    appliesTo: [17, 18],
    bonusChoice: {
      text: 'Present yourself as a proven veteran of the collectivization campaign — your hands are dirty, but you delivered results.',
      loyalty: 8, cunning: 5, reputation: -5, survival: 0.85,
      response: 'Your track record implementing collectivization makes you valuable. But those who carried out brutal policies also carry targets on their backs when accountability comes.'
    }
  },

  'survived_silence': {
    description: 'Kept the lowest possible profile during terror',
    appliesTo: [19, 20],
    bonusChoice: {
      text: 'Your years of careful silence have made you invisible to accusers — leverage your clean record in the new era.',
      loyalty: 0, cunning: 10, reputation: 8, survival: 0.92,
      response: 'While others carry the stain of denunciations and show trials, your record is remarkably clean. In the post-Stalin thaw, having no blood on your hands is a rare advantage.'
    }
  },

  'embraced_destalinization': {
    description: 'Fully embraced de-Stalinization',
    appliesTo: [21, 22, 23],
    bonusChoice: {
      text: 'Cite your early and consistent support for de-Stalinization — you were on the right side of history before it was safe.',
      loyalty: 5, cunning: 5, reputation: 10, survival: 0.88,
      response: 'Your reformist credentials are established. Khrushchev appreciates those who supported the Secret Speech. But reform creates enemies among the complicit old guard.'
    }
  },

  'built_network_brezhnev': {
    description: 'Built patronage networks in Brezhnev era',
    appliesTo: [24, 25, 26],
    bonusChoice: {
      text: 'Activate your patronage network — call in favors from the officials you\'ve placed across the party apparatus.',
      loyalty: 5, cunning: 10, reputation: 0, survival: 0.93,
      response: 'Your network of loyal subordinates rallies to protect you. In the Brezhnev era, personal connections matter more than ideology. Your investments pay dividends.'
    }
  },

  'aligned_andropov': {
    description: 'Supported Andropov\'s anti-corruption drive',
    appliesTo: [27, 28],
    bonusChoice: {
      text: 'Invoke your early support for reform and anti-corruption — you backed change before Gorbachev made it policy.',
      loyalty: 3, cunning: 8, reputation: 10, survival: 0.90,
      response: 'Your reform credentials predate perestroika. Gorbachev\'s team sees you as a genuine ally, not an opportunistic convert. This authenticity provides real protection.'
    }
  },

  'betrayed_allies': {
    description: 'Betrayed multiple political allies',
    appliesTo: [15, 16, 17, 18, 19, 25, 26],
    bonusChoice: {
      text: 'Your reputation as someone who betrays allies paradoxically makes you useful — no one suspects you of genuine loyalty to the accused.',
      loyalty: 5, cunning: 8, reputation: -10, survival: 0.87,
      response: 'Your treacherous reputation is a double-edged sword. The leadership trusts that you will always prioritize self-preservation over solidarity. They use you as an attack dog.'
    }
  },

  'war_preparation_focus': {
    description: 'Focused on military-industrial preparation',
    appliesTo: [19, 20, 21],
    bonusChoice: {
      text: 'Your wartime military-industrial work gives you unique authority — invoke your contribution to the victory over fascism.',
      loyalty: 8, cunning: 3, reputation: 12, survival: 0.92,
      response: 'The Great Patriotic War is the USSR\'s sacred narrative. Your wartime service record is unimpeachable. Veterans of the war effort carry a special authority that transcends faction.'
    }
  },

  'cautious_reformer': {
    description: 'Advocated managed reform under Khrushchev',
    appliesTo: [23, 24, 25, 26, 27],
    bonusChoice: {
      text: 'Propose gradual, careful modernization — you\'ve always advocated reform within the system, not against it.',
      loyalty: 5, cunning: 10, reputation: 5, survival: 0.90,
      response: 'Your long record of careful reformism makes you a bridge between conservatives and radicals. Both sides see you as someone they can work with — a valuable position in times of change.'
    }
  },

  'economic_expertise': {
    description: 'Built reputation as economic technocrat',
    appliesTo: [14, 15, 16, 21, 22, 24, 25, 27, 28],
    bonusChoice: {
      text: 'Present detailed economic data to cut through ideological posturing — your expertise is needed regardless of who leads.',
      loyalty: 0, cunning: 8, reputation: 8, survival: 0.90,
      response: 'Numbers don\'t lie, even when politicians do. Your economic expertise makes you indispensable across leadership changes. Technocrats survive when ideologues fall.'
    }
  },

  'walked_out_with_yeltsin': {
    description: 'Left the Party with Yeltsin',
    appliesTo: [], // Terminal — no future congresses
    bonusChoice: null
  },

  // ============================================================
  // WAVE 2 — 15 additional continuity triggers
  // ============================================================

  'denounced_colleagues': {
    description: 'Actively denounced fellow party members',
    appliesTo: [18, 19, 20, 21, 22],
    bonusChoice: {
      text: 'Your record of denunciations proves your vigilance — remind the Congress you rooted out enemies when others hesitated.',
      loyalty: 10, cunning: 3, reputation: -12, survival: 0.82,
      response: 'Your denunciations are on file. In Stalin\'s era this proves loyalty, but survivors and their families have long memories. When the wind changes, the denouncers become the denounced.'
    }
  },

  'protected_minorities': {
    description: 'Defended Jewish or minority colleagues during persecution campaigns',
    appliesTo: [19, 20, 21, 22, 23],
    bonusChoice: {
      text: 'Persecuted intellectuals remember your quiet protection — their gratitude now translates into influential support.',
      loyalty: -3, cunning: 5, reputation: 12, survival: 0.88,
      response: 'The people you shielded during the anti-cosmopolitan campaigns have not forgotten. In the thaw, moral courage is finally rewarded — the intelligentsia rallies behind those with clean hands.'
    }
  },

  'advocated_consumer_goods': {
    description: 'Pushed for consumer goods over heavy industry',
    appliesTo: [22, 23, 24, 25, 26, 27, 28],
    bonusChoice: {
      text: 'Cite your long record of fighting for ordinary citizens\' living standards — the people\'s needs must come first.',
      loyalty: -2, cunning: 5, reputation: 10, survival: 0.87,
      response: 'Your consistent advocacy for consumer welfare gives you populist credentials that resonate across eras. As the system struggles to deliver, your pragmatism looks prophetic.'
    }
  },

  'built_regional_base': {
    description: 'Cultivated a provincial or republican power base',
    appliesTo: [19, 20, 21, 22, 23, 24, 25],
    bonusChoice: {
      text: 'Mobilize your regional political machine — your provincial allies rally to defend you from Moscow intrigues.',
      loyalty: 3, cunning: 10, reputation: 3, survival: 0.91,
      response: 'Distance from Moscow proved wise. Your regional network operates like a state within a state, providing political cover that pure Kremlin insiders lack. Khrushchev and Brezhnev both rose this way.'
    }
  },

  'documented_truth': {
    description: 'Wrote honest reports about famine or policy failures',
    appliesTo: [19, 20, 21, 22, 23, 24],
    bonusChoice: {
      text: 'Your confidential reports told the truth when others lied — invoke your record of honest assessment.',
      loyalty: -5, cunning: 8, reputation: 10, survival: 0.85,
      response: 'Truth-tellers were rare and endangered under Stalin. But the archives remember, and when new leaders need honest advisors, your reputation for integrity becomes invaluable.'
    }
  },

  'championed_science': {
    description: 'Supported real science over ideological pseudoscience',
    appliesTo: [21, 22, 23, 24, 25, 26, 27, 28],
    bonusChoice: {
      text: 'Your defense of genuine science over Lysenkoist fraud gives you credibility with the technical intelligentsia.',
      loyalty: -3, cunning: 8, reputation: 8, survival: 0.88,
      response: 'As the Soviet Union increasingly depends on scientific achievement — nuclear, space, computing — those who defended real science against charlatans earn lasting respect from the expert class.'
    }
  },

  'pursued_foreign_ties': {
    description: 'Advocated technology transfer and foreign relations',
    appliesTo: [22, 23, 24, 25, 26, 27, 28],
    bonusChoice: {
      text: 'Your international contacts and knowledge of Western technology make you indispensable in the era of détente.',
      loyalty: 0, cunning: 10, reputation: 5, survival: 0.89,
      response: 'While ideologues debated doctrine, you built bridges. Your foreign contacts and understanding of the outside world make you a rare asset as the USSR engages with global realities.'
    }
  },

  'supported_nationality_rights': {
    description: 'Defended national autonomy and self-determination',
    appliesTo: [27, 28],
    bonusChoice: {
      text: 'As the republics demand sovereignty, your long record of respecting national rights makes you a trusted mediator.',
      loyalty: -5, cunning: 5, reputation: 15, survival: 0.85,
      response: 'The nationality question tears the Union apart, but your history of defending autonomy makes you credible to both sides. In the final crisis, trust is the rarest currency of all.'
    }
  },

  'hardline_enforcer': {
    description: 'Enthusiastically enforced purges and party discipline',
    appliesTo: [18, 19, 20, 21],
    bonusChoice: {
      text: 'Your fearsome reputation as an enforcer makes even potential accusers think twice — they know you will fight back ruthlessly.',
      loyalty: 8, cunning: 5, reputation: -10, survival: 0.83,
      response: 'Fear is its own protection. Those who carried out the purges with enthusiasm are themselves feared — and fear keeps rivals at bay. But when the system demands accountability, enforcers are first against the wall.'
    }
  },

  'nuclear_program_supporter': {
    description: 'Backed the atomic weapons and space programs',
    appliesTo: [20, 21, 22, 23, 24],
    bonusChoice: {
      text: 'Invoke your role in building the USSR\'s nuclear and space capabilities — these achievements are beyond political reproach.',
      loyalty: 5, cunning: 3, reputation: 12, survival: 0.92,
      response: 'Sputnik, the bomb, Gagarin — the Soviet Union\'s greatest prestige achievements. Your association with these programs gives you a patriotic shield that transcends factional politics.'
    }
  },

  'criticized_bureaucracy': {
    description: 'Spoke against bureaucratic bloat and inefficiency',
    appliesTo: [22, 23, 24, 25, 26, 27, 28],
    bonusChoice: {
      text: 'Your anti-bureaucratic credentials appeal to every new leader who promises reform — you were fighting the machine before it was fashionable.',
      loyalty: 0, cunning: 8, reputation: 8, survival: 0.88,
      response: 'Every Soviet leader from Khrushchev to Gorbachev promised to cut the bureaucracy. Your consistent criticism of administrative bloat makes you a natural ally for reformers across generations.'
    }
  },

  'cultural_hardliner': {
    description: 'Championed socialist realism and cultural orthodoxy',
    appliesTo: [20, 21, 22, 23],
    bonusChoice: {
      text: 'Rally cultural conservatives who see de-Stalinization as a threat to socialist values — position yourself as defender of tradition.',
      loyalty: 8, cunning: 5, reputation: -5, survival: 0.84,
      response: 'The cultural establishment — writers\' unions, editors, censors — depends on orthodoxy for their jobs. Your cultural hardline stance gives you a ready-made constituency, but reformers mark you as an obstacle.'
    }
  },

  'military_hawk': {
    description: 'Consistently pushed for military spending and strength',
    appliesTo: [21, 22, 23, 24, 25, 26],
    bonusChoice: {
      text: 'The defense establishment backs you as one of their own — generals and marshals vouch for your patriotic credentials.',
      loyalty: 5, cunning: 3, reputation: 5, survival: 0.90,
      response: 'The Soviet military-industrial complex is the most powerful institution in the state. Having the generals in your corner provides formidable protection, though it costs you with reformers.'
    }
  },

  'supported_detente': {
    description: 'Backed peaceful coexistence and arms control',
    appliesTo: [25, 26, 27, 28],
    bonusChoice: {
      text: 'Your record supporting détente and arms control makes you credible in the era of disarmament — Gorbachev needs experienced hands.',
      loyalty: 0, cunning: 8, reputation: 10, survival: 0.89,
      response: 'The arms race bankrupted the Soviet economy. Your early advocacy for diplomatic solutions now looks prescient. In the final years, those who understood the outside world are essential.'
    }
  },

  'master_bureaucrat': {
    description: 'Built deep institutional expertise across party agencies',
    appliesTo: [23, 24, 25, 26, 27, 28],
    bonusChoice: {
      text: 'You know where every lever of power is and how to pull it — your institutional knowledge makes you impossible to replace.',
      loyalty: 3, cunning: 12, reputation: 0, survival: 0.92,
      response: 'Leaders come and go, but the apparatus endures. Your encyclopedic knowledge of how the system actually functions — who controls what, which committees matter — makes you the ultimate insider survivor.'
    }
  }
};

// Maps choice keywords/patterns to continuity tags
// This is checked against choice.text after each decision
const choiceTagRules = [
  { pattern: /support.*lenin|accept.*humiliating peace|brest.?litovsk/i, tag: 'backed_brest_litovsk' },
  { pattern: /support.*trotsky.*military|military specialist/i, tag: 'supported_trotsky_military' },
  { pattern: /support.*nep|enthusiastically.*nep|new economic policy/i, tag: 'supported_nep' },
  { pattern: /ban on factions|faction ban/i, tag: 'backed_faction_ban' },
  { pattern: /cultivate.*stalin|relationship.*stalin|close.*stalin|support.*stalin/i, tag: 'cultivated_stalin' },
  { pattern: /suppress.*testament|suppressing.*testament/i, tag: 'suppressed_testament' },
  { pattern: /celebrat.*collectivization|praise.*collectivization|fiery.*collectiviz/i, tag: 'praised_collectivization' },
  { pattern: /lowest.*profile|keep.*invisible|say nothing/i, tag: 'survived_silence' },
  { pattern: /embrace.*de.?staliniz|fully.*de.?staliniz|investigation.*stalin/i, tag: 'embraced_destalinization' },
  { pattern: /patronage network|building.*network|your own.*network/i, tag: 'built_network_brezhnev' },
  { pattern: /andropov.*anti.?corruption|align.*andropov|support.*andropov/i, tag: 'aligned_andropov' },
  { pattern: /war preparation|military readiness|tank production|defense capabilit/i, tag: 'war_preparation_focus' },
  { pattern: /cautious.*reform|managed reform|careful.*modern|steady.*achievable/i, tag: 'cautious_reformer' },
  { pattern: /production statistics|economic.*management|industrial.*achieve|economic data|factory output/i, tag: 'economic_expertise' },
  { pattern: /walk out with yeltsin|follow yeltsin/i, tag: 'walked_out_with_yeltsin' },
  // Wave 2 tag rules
  { pattern: /denounce.*colleague|inform.*nkvd|report.*disloyal|name.*conspirator|accuse.*treachery/i, tag: 'denounced_colleagues' },
  { pattern: /protect.*jewish|defend.*minority|shield.*cosmopolitan|help.*persecuted|quietly.*transfer/i, tag: 'protected_minorities' },
  { pattern: /consumer goods|living standards|butter.*guns|housing.*workers|light industry/i, tag: 'advocated_consumer_goods' },
  { pattern: /provincial.*position|regional.*power|republican.*posting|local.*machine|build.*base.*outside/i, tag: 'built_regional_base' },
  { pattern: /honest report|true.*conditions|document.*famine|accurate.*casualties|real.*harvest/i, tag: 'documented_truth' },
  { pattern: /real science|genuine.*research|oppose.*lysenko|genetics.*must|reject.*pseudo/i, tag: 'championed_science' },
  { pattern: /foreign.*technology|western.*method|technology transfer|international.*cooperat|trade.*agreement/i, tag: 'pursued_foreign_ties' },
  { pattern: /national.*autonomy|republic.*rights|self.?determination|national.*language|cultural.*autonomy/i, tag: 'supported_nationality_rights' },
  { pattern: /root out.*enem|enforce.*discipline|unmask.*wrecker|intensify.*vigilance|crush.*opposition/i, tag: 'hardline_enforcer' },
  { pattern: /nuclear.*program|atomic.*weapon|space.*program|rocket.*development|missile.*capability/i, tag: 'nuclear_program_supporter' },
  { pattern: /cut.*bureaucracy|streamline.*apparat|reduce.*paperwork|bloated.*administration|too many.*officials/i, tag: 'criticized_bureaucracy' },
  { pattern: /socialist realism|ideological.*purity.*art|censor.*bourgeois|cultural.*discipline|party.*control.*art/i, tag: 'cultural_hardliner' },
  { pattern: /increase.*military|defense.*spending|army.*strength|more.*tanks|military.*budget/i, tag: 'military_hawk' },
  { pattern: /peaceful.*coexistence|arms.*control|d[eé]tente|reduce.*tension|nuclear.*disarmament/i, tag: 'supported_detente' },
  { pattern: /institutional.*knowledge|committee.*expertise|apparatus.*experience|procedural.*master|know.*every.*department/i, tag: 'master_bureaucrat' },
];

// Call after each choice to assign tags
function tagChoice(choiceText) {
  const newTags = [];
  for (const rule of choiceTagRules) {
    if (rule.pattern.test(choiceText)) {
      newTags.push(rule.tag);
    }
  }
  return newTags;
}

// Call to get bonus choices available for a given congress
function getContinuityBonuses(congressNum, earnedTags) {
  const bonuses = [];
  for (const tag of earnedTags) {
    const trigger = continuityTriggers[tag];
    if (trigger && trigger.appliesTo.includes(congressNum) && trigger.bonusChoice) {
      bonuses.push({
        ...trigger.bonusChoice,
        tag: tag,
        origin: trigger.description
      });
    }
  }
  // Return at most 1 bonus choice to keep UI clean
  if (bonuses.length > 0) {
    return [bonuses[Math.floor(Math.random() * bonuses.length)]];
  }
  return [];
}
