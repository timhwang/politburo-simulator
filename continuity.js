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
