const crisisEvents = {
  'Civil War': [
    {
      title: 'ASSASSINATION ATTEMPT!',
      text: 'A Socialist Revolutionary agent has fired two shots at you outside the Mikhelson factory. You are bleeding but conscious. The Cheka is already rounding up suspects by the dozen.',
      choices: [
        { text: 'Demand a massive Red Terror reprisal — execute hundreds of hostages', loyalty: 3, cunning: 0, reputation: 2, survival: 0.85, response: 'The executions begin at dawn. Your name becomes synonymous with revolutionary resolve. Some comrades whisper you have gone too far.' },
        { text: 'Downplay the wound and appear at tomorrow\'s rally bandaged but defiant', loyalty: 1, cunning: 2, reputation: 3, survival: 0.7, response: 'The crowd roars when you take the stage. Your legend grows, but the assassin\'s network remains intact and may strike again.' },
        { text: 'Use the chaos to quietly eliminate a political rival by adding their name to the Cheka arrest list', loyalty: -1, cunning: 3, reputation: 0, survival: 0.75, response: 'Your rival vanishes into Cheka custody. No one questions it amid the hysteria. But their allies will remember.' }
      ]
    },
    {
      title: 'THE EASTERN FRONT HAS COLLAPSED!',
      text: 'Kolchak\'s White forces have broken through near Kazan. The gold reserves of the Republic are at risk. Trotsky is demanding emergency powers and an armored train.',
      choices: [
        { text: 'Support Trotsky\'s emergency command and volunteer to ride the armored train east', loyalty: 2, cunning: 0, reputation: 3, survival: 0.55, response: 'The front stabilizes after weeks of savage fighting. You return a hero — if you survive the typhus sweeping the trenches.' },
        { text: 'Argue that Trotsky is overreacting and propose a defensive consolidation instead', loyalty: 0, cunning: 2, reputation: -1, survival: 0.8, response: 'Your caution is noted. The front holds anyway, but Trotsky never forgives your lack of nerve.' },
        { text: 'Secretly wire a message to the Kazan garrison commander promising promotion if he holds the line', loyalty: -1, cunning: 3, reputation: 1, survival: 0.75, response: 'The commander holds long enough for reinforcements. He credits your message. You now have a loyal officer in the field — and a paper trail.' }
      ]
    },
    {
      title: 'KRONSTADT-STYLE MUTINY BREWING!',
      text: 'Sailors at a key naval base are circulating anti-Bolshevik leaflets demanding free soviets and an end to War Communism. Armed revolt could erupt within days.',
      choices: [
        { text: 'Lead a delegation to negotiate with the sailors personally', loyalty: 1, cunning: 1, reputation: 2, survival: 0.5, response: 'You walk into a hall full of angry armed men. Your rhetoric buys time, but the sailors see through the promises. At least they didn\'t shoot.' },
        { text: 'Order an immediate assault across the ice before the revolt can spread', loyalty: 3, cunning: 0, reputation: 1, survival: 0.7, response: 'Red Army troops charge across the frozen harbor under withering fire. The mutiny is crushed, but hundreds of loyal soldiers die in the assault.' },
        { text: 'Infiltrate the base with Cheka agents to identify and arrest ringleaders overnight', loyalty: 1, cunning: 3, reputation: 0, survival: 0.85, response: 'Twelve ringleaders are dragged from their bunks before dawn. The mutiny collapses without its leaders. The remaining sailors eye each other with suspicion.' }
      ]
    }
  ],

  'NEP': [
    {
      title: 'WORKER UPRISING IN THE PUTILOV FACTORY!',
      text: 'Thousands of workers at the legendary Putilov Works have barricaded the gates and are demanding bread, higher wages, and an end to NEP profiteering. They are singing revolutionary songs — aimed at you.',
      choices: [
        { text: 'Go to the factory gates and address the workers as a fellow proletarian', loyalty: 1, cunning: 1, reputation: 3, survival: 0.5, response: 'The crowd is hostile but lets you speak. Your promises of reform calm the situation temporarily, but you have made commitments you may not be able to keep.' },
        { text: 'Blame Nepmen speculators and announce a crackdown on private traders', loyalty: 2, cunning: 2, reputation: 1, survival: 0.8, response: 'The scapegoating works. Several prominent Nepmen are arrested amid public fanfare. The economy quietly suffers.' },
        { text: 'Seal the district and cut off food supplies until the workers submit', loyalty: 2, cunning: 0, reputation: -2, survival: 0.75, response: 'After three days of hunger, the gates open. The workers file back silently. The foreign press writes unflattering comparisons to the Tsar.' }
      ]
    },
    {
      title: 'FOREIGN SPY RING UNCOVERED!',
      text: 'The GPU has arrested a British intelligence officer in Moscow along with several compromising documents. Some of the documents contain the names of senior Party members who held unauthorized meetings with foreign diplomats.',
      choices: [
        { text: 'Demand a full public trial to expose imperialist meddling', loyalty: 2, cunning: 0, reputation: 2, survival: 0.7, response: 'The trial becomes a sensation. The British government protests furiously. You are celebrated as a defender of the revolution, but the diplomatic fallout is severe.' },
        { text: 'Quietly approach the named Party members and offer silence in exchange for future support', loyalty: -1, cunning: 3, reputation: 0, survival: 0.85, response: 'Three senior members now owe you deeply. The documents disappear into your personal safe. Power is information.' },
        { text: 'Turn the documents over to Stalin\'s secretariat and let him decide', loyalty: 3, cunning: 1, reputation: -1, survival: 0.8, response: 'Stalin is pleased by your deference. He files the names away for future use. You have gained a patron — and lost leverage.' }
      ]
    },
    {
      title: 'ECONOMIC CRISIS — THE SCISSORS ARE OPENING!',
      text: 'The price gap between industrial and agricultural goods has reached a breaking point. Peasants are hoarding grain while factories sit idle. The NEP is on the verge of collapse and factions are blaming each other.',
      choices: [
        { text: 'Side with Bukharin — defend the NEP and urge patience with the peasantry', loyalty: 1, cunning: 1, reputation: 1, survival: 0.75, response: 'Your moderate stance earns respect from the Right Opposition but suspicion from those who want faster industrialization. A dangerous fence to sit on.' },
        { text: 'Side with the Left — demand state intervention and forced grain procurement', loyalty: 2, cunning: 0, reputation: 1, survival: 0.65, response: 'Your radical stance puts you in Trotsky\'s camp, which is not the safest place to be. But your economic analysis impresses some younger members.' },
        { text: 'Propose a compromise plan and maneuver to chair the economic commission yourself', loyalty: 0, cunning: 3, reputation: 2, survival: 0.8, response: 'Your commission produces a report that satisfies no one completely but offends no one fatally. You are now the Party\'s economic expert — a double-edged sword.' }
      ]
    }
  ],

  'Succession': [
    {
      title: 'LENIN\'S SECRET TESTAMENT DISCOVERED!',
      text: 'You have obtained a copy of Lenin\'s final testament, in which he criticizes several current leaders by name. Krupskaya wants it read at the Congress. Stalin wants it buried.',
      choices: [
        { text: 'Support reading the testament at the full Congress', loyalty: -1, cunning: 1, reputation: 3, survival: 0.45, response: 'The testament is read aloud. Stalin turns pale with fury. You have made a powerful enemy but earned the gratitude of his rivals — for now.' },
        { text: 'Bring your copy directly to Stalin and pledge to support suppressing it', loyalty: 3, cunning: 1, reputation: -1, survival: 0.85, response: 'Stalin takes the document and locks it away. He nods at you with cold approval. You are now complicit in burying Lenin\'s final wishes.' },
        { text: 'Leak selective quotes to different factions and watch the chaos', loyalty: -1, cunning: 3, reputation: 1, survival: 0.7, response: 'Rumors fly through the Kremlin corridors. Everyone suspects everyone. In the confusion, you position yourself as a trusted intermediary between factions.' }
      ]
    },
    {
      title: 'MIDNIGHT MEETING AT ZINOVIEV\'S DACHA!',
      text: 'You receive a coded message inviting you to a secret meeting of the United Opposition at Zinoviev\'s country house. Trotsky, Kamenev, and others will be there. The OGPU almost certainly has the dacha under surveillance.',
      choices: [
        { text: 'Attend the meeting and hear what the opposition has to say', loyalty: -2, cunning: 1, reputation: 1, survival: 0.5, response: 'The meeting is passionate but disorganized. You learn the opposition\'s plans. Unfortunately, an OGPU informer was also present. Your attendance has been noted.' },
        { text: 'Decline and immediately report the meeting to the General Secretary', loyalty: 3, cunning: 1, reputation: -1, survival: 0.9, response: 'Stalin rewards loyalty. The attendees are identified and marked for future action. You have chosen your side decisively.' },
        { text: 'Send a trusted associate to attend in your place while you establish an alibi', loyalty: 0, cunning: 3, reputation: 0, survival: 0.8, response: 'Your associate brings back detailed notes. If questioned, you were at the Bolshoi all evening. You now know the opposition\'s plans without the risk of exposure.' }
      ]
    },
    {
      title: 'POISONING RUMOR!',
      text: 'A whispered rumor is spreading through the Kremlin that someone has been slowly poisoning a senior leader\'s food. Suspicion falls on multiple figures. A doctor has been quietly summoned.',
      choices: [
        { text: 'Publicly demand a full medical investigation and toxicology report', loyalty: 0, cunning: 0, reputation: 2, survival: 0.6, response: 'Your demand forces the matter into the open. The investigation finds nothing conclusive, but the suspicion alone damages several careers — possibly including your own for raising the alarm.' },
        { text: 'Quietly start using your own food taster and say nothing', loyalty: 0, cunning: 2, reputation: 0, survival: 0.85, response: 'Paranoia is sometimes wisdom. The rumor dies down on its own, but you notice other Politburo members eyeing their soup with new suspicion.' },
        { text: 'Spread the rumor further, directing suspicion toward a rival', loyalty: -1, cunning: 3, reputation: -1, survival: 0.75, response: 'Your rival is suddenly persona non grata at Kremlin dinners. No one wants to sit near a suspected poisoner. But fabricating such rumors is a dangerous game.' }
      ]
    },
    {
      title: 'STOLEN DOCUMENTS FROM THE SECRETARIAT!',
      text: 'Sensitive Party documents have disappeared from the Central Committee archives. They contain evidence of secret deals, vote-rigging during Party elections, and compromising personal correspondence.',
      choices: [
        { text: 'Volunteer to lead the internal investigation yourself', loyalty: 1, cunning: 2, reputation: 2, survival: 0.7, response: 'You now control what gets found and what stays hidden. The investigation concludes with a minor scapegoat. The real documents remain unaccounted for.' },
        { text: 'Privately offer to buy the documents from whoever has them', loyalty: -1, cunning: 3, reputation: 0, survival: 0.65, response: 'A nervous clerk meets you in Gorky Park. The price is steep, but now you possess the most dangerous blackmail material in the Soviet Union.' },
        { text: 'Report the theft immediately and demand enhanced security for all Party archives', loyalty: 2, cunning: 0, reputation: 1, survival: 0.8, response: 'Your diligence is appreciated but unremarkable. The documents eventually surface in a foreign newspaper. Someone else profited from the theft.' }
      ]
    }
  ],

  'Stalin consolidating': [
    {
      title: 'SURPRISE DENUNCIATION AT THE PLENUM!',
      text: 'In the middle of a routine Central Committee session, a colleague stands and reads a prepared statement accusing you of "rightist deviation" and "insufficient vigilance." The room goes silent. All eyes turn to you.',
      choices: [
        { text: 'Launch an immediate counter-denunciation, accusing your accuser of the same crimes', loyalty: 0, cunning: 2, reputation: 1, survival: 0.6, response: 'The session erupts into shouting. Stalin watches with amusement as two loyal dogs tear at each other. Your counter-attack buys time, but the accusation is now in the record.' },
        { text: 'Perform an abject self-criticism and beg the Party for forgiveness', loyalty: 3, cunning: 0, reputation: -2, survival: 0.75, response: 'Your groveling satisfies the room. Stalin nods approvingly — he values submission. You are humiliated but alive. The taste of bile stays with you.' },
        { text: 'Calmly produce documents showing your accuser\'s own ideological deviations', loyalty: 0, cunning: 3, reputation: 2, survival: 0.55, response: 'Your preparation pays off spectacularly. Your accuser sputters and is removed from the hall. But Stalin makes a mental note about members who keep files on colleagues.' }
      ]
    },
    {
      title: 'MIDNIGHT KNOCK — THE NKVD IS AT YOUR DOOR!',
      text: 'It is 3 AM. Heavy boots in the corridor. A fist pounds on your apartment door. Two NKVD officers stand outside with an unsigned order. Your wife is awake and terrified.',
      choices: [
        { text: 'Open the door calmly and demand to see their authorization papers', loyalty: 0, cunning: 2, reputation: 1, survival: 0.6, response: 'The officers exchange a glance. Their papers are irregular. After a tense standoff, they leave to "verify orders." You have perhaps 48 hours to reach Stalin directly.' },
        { text: 'Telephone Stalin\'s personal line immediately before opening the door', loyalty: 2, cunning: 1, reputation: 0, survival: 0.7, response: 'A long silence on the line. Then Stalin\'s voice: "There must be some mistake, comrade." The officers receive a call and leave. You owe your life to a phone number — and Stalin\'s whim.' },
        { text: 'Escape through the back window and flee to a loyal military commander', loyalty: -2, cunning: 3, reputation: -1, survival: 0.35, response: 'You drop into the courtyard in your nightclothes. The commander shelters you, but fleeing the NKVD makes you look guilty. Your name is already on the morning arrest list.' }
      ]
    },
    {
      title: 'SHOW TRIAL TESTIMONY REQUEST!',
      text: 'The Procurator General has summoned you. He explains that the upcoming trial of "wreckers and saboteurs" requires your testimony confirming that you witnessed the accused plotting against the state. You witnessed no such thing.',
      choices: [
        { text: 'Agree to testify falsely — the Party requires it', loyalty: 3, cunning: 0, reputation: -1, survival: 0.8, response: 'You read your prepared testimony without meeting the defendants\' eyes. The trial proceeds smoothly. You are now bound by complicity to the apparatus of terror.' },
        { text: 'Claim illness and check yourself into the Kremlin hospital to avoid testifying', loyalty: 0, cunning: 3, reputation: 0, survival: 0.7, response: 'The doctors are sympathetic — they know the game. Your "heart condition" buys you two weeks. Someone else gives the testimony. The Procurator remembers your absence.' },
        { text: 'Refuse and insist you cannot testify to events you did not witness', loyalty: -2, cunning: 0, reputation: 3, survival: 0.35, response: 'The Procurator stares at you for a very long time. "I see," he says, making a note. Your integrity is admirable. Your life expectancy has just decreased dramatically.' }
      ]
    }
  ],

  'Collectivization': [
    {
      title: 'FAMINE REPORT FROM UKRAINE!',
      text: 'A trusted subordinate has smuggled you an uncensored report from the Ukrainian countryside. Millions are starving. Villages are empty. The official statistics are lies. You hold the truth in your hands.',
      choices: [
        { text: 'Present the report to Stalin and argue for reduced grain quotas', loyalty: 1, cunning: 0, reputation: 2, survival: 0.4, response: 'Stalin reads the report in silence, then tears it up. "Exaggerations by enemies of the people," he says. You have shown your hand and gained nothing but suspicion.' },
        { text: 'Destroy the report and pretend you never saw it', loyalty: 2, cunning: 1, reputation: -2, survival: 0.85, response: 'The report burns in your fireplace. Millions continue to die. You sleep poorly but you sleep in your own bed, which is more than many can say.' },
        { text: 'Quietly redirect grain supplies from your own district to the worst-affected areas', loyalty: 0, cunning: 2, reputation: 1, survival: 0.6, response: 'Your unauthorized redistribution saves perhaps ten thousand lives. When the discrepancy is noticed, you blame clerical errors. The auditors are suspicious but cannot prove intent.' }
      ]
    },
    {
      title: 'PEASANT REVOLT IN YOUR DISTRICT!',
      text: 'Armed peasants have seized the local Party headquarters and are holding three officials hostage. They have destroyed collective farm equipment and are distributing hoarded grain. Red Army troops are en route.',
      choices: [
        { text: 'Order the troops to storm the building and crush the revolt immediately', loyalty: 3, cunning: 0, reputation: 0, survival: 0.75, response: 'The assault is brutal and swift. The hostages survive, mostly. The village is "pacified." Pravda reports another victory of socialist construction over kulak bandits.' },
        { text: 'Negotiate the hostages\' release and promise a review of grain quotas', loyalty: 0, cunning: 2, reputation: 2, survival: 0.65, response: 'The peasants release the hostages after twelve tense hours. Your promises calm the region temporarily. Moscow is displeased with your softness.' },
        { text: 'Let the revolt burn itself out while evacuating Party members from neighboring villages', loyalty: 1, cunning: 3, reputation: -1, survival: 0.8, response: 'The revolt collapses after a week when food runs out. No martyrs are created. Your restraint is either strategic wisdom or cowardice, depending on who is asked.' }
      ]
    },
    {
      title: 'FACTORY EXPLOSION — SABOTAGE SUSPECTED!',
      text: 'A massive explosion has destroyed a key tractor factory that was ahead of its Five-Year Plan targets. Dozens are dead. The NKVD suspects sabotage by hidden wreckers. The factory director was your ally.',
      choices: [
        { text: 'Defend the factory director and argue it was an industrial accident', loyalty: -1, cunning: 0, reputation: 2, survival: 0.45, response: 'Your defense of the director draws suspicion onto yourself. If it was truly an accident, why are you so eager to prevent an investigation? The NKVD takes notes.' },
        { text: 'Agree that sabotage is likely and cooperate fully with the NKVD investigation', loyalty: 2, cunning: 1, reputation: 0, survival: 0.8, response: 'The investigation finds "wreckers" among the engineering staff. Your former ally the director is arrested. You attend the sentencing and applaud with the others.' },
        { text: 'Seize control of the investigation yourself, citing your expertise with the factory', loyalty: 0, cunning: 3, reputation: 1, survival: 0.7, response: 'By controlling the investigation, you control the narrative. The real cause — shoddy construction materials — is buried. A convenient scapegoat is found among the workers.' }
      ]
    }
  ],

  'Pre-Terror': [
    {
      title: 'A SENIOR COMRADE HAS BEEN SHOT!',
      text: 'A popular Party leader has been assassinated in his office at Smolny. The killer is in custody but the motive is unclear. Stalin has called an emergency session. The atmosphere is one of barely concealed panic.',
      choices: [
        { text: 'Demand an immediate and thorough investigation before any arrests', loyalty: 0, cunning: 1, reputation: 2, survival: 0.45, response: 'Your call for due process is noted — and ignored. Mass arrests begin within hours. Your insistence on investigation marks you as soft on enemies of the people.' },
        { text: 'Call for massive security crackdowns and expanded NKVD powers', loyalty: 3, cunning: 1, reputation: 0, survival: 0.85, response: 'You ride the wave of hysteria. New emergency decrees give the NKVD unprecedented powers. You have helped build the machinery that may one day consume you.' },
        { text: 'Privately investigate whether the assassination was arranged from within the Party', loyalty: -1, cunning: 3, reputation: 1, survival: 0.4, response: 'Your investigation points in disturbing directions. You have learned something that could get you killed. Knowledge is power, but in this case it might be a death sentence.' }
      ]
    },
    {
      title: 'ANONYMOUS DENUNCIATION LETTER!',
      text: 'An anonymous letter accusing you of maintaining secret contacts with exiled Trotskyists has been delivered to the Central Control Commission. The accusations are fabricated, but the letter contains unsettlingly accurate details about your daily routine.',
      choices: [
        { text: 'Demand to address the Central Control Commission and refute every charge', loyalty: 0, cunning: 0, reputation: 2, survival: 0.55, response: 'Your passionate defense convinces most of the commission. But the letter has planted seeds of doubt. Some colleagues now avoid being seen with you.' },
        { text: 'Launch your own investigation to find who wrote the letter', loyalty: -1, cunning: 3, reputation: 1, survival: 0.65, response: 'Your investigation reveals a jealous subordinate. You now have leverage — but pursuing this too aggressively might suggest you have something to hide.' },
        { text: 'Go directly to Stalin, show him the letter, and swear absolute loyalty', loyalty: 3, cunning: 1, reputation: -1, survival: 0.8, response: 'Stalin reads the letter carefully, then places it in his desk. "I know who my loyal comrades are," he says. The matter is dropped, but the letter remains in Stalin\'s files.' }
      ]
    },
    {
      title: 'INTERROGATION REQUEST FROM THE NKVD!',
      text: 'An NKVD investigator has politely requested that you come to Lubyanka for "a brief conversation" about a former colleague who has been arrested. The invitation is technically voluntary. Technically.',
      choices: [
        { text: 'Go to Lubyanka immediately and cooperate fully', loyalty: 2, cunning: 0, reputation: 0, survival: 0.65, response: 'The "brief conversation" lasts six hours. You provide the information they want. Your former colleague\'s fate is sealed by your words. The investigator thanks you warmly.' },
        { text: 'Agree to meet but insist on a neutral location and bring a witness', loyalty: 0, cunning: 2, reputation: 1, survival: 0.7, response: 'The investigator is annoyed but agrees. With a witness present, the questioning is more restrained. You give nothing away, but the NKVD will remember your caution.' },
        { text: 'Have your secretary delay the meeting while you prepare damaging material on the investigator', loyalty: -1, cunning: 3, reputation: 0, survival: 0.75, response: 'By the time you meet, you know the investigator\'s weaknesses. The conversation becomes a careful dance of mutual threat. A temporary standoff — but you\'ve made an enemy in the organs.' }
      ]
    }
  ],

  'Post-Terror': [
    {
      title: 'MASS EXECUTION ORDER ON YOUR DESK!',
      text: 'A list of 346 names has arrived requiring your signature as regional Party secretary. These are quotas — the NKVD needs your authorization to fulfill the plan for "anti-Soviet elements" in your district.',
      choices: [
        { text: 'Sign the order without reading the names', loyalty: 3, cunning: 0, reputation: -2, survival: 0.85, response: 'Your pen moves across the paper. Three hundred and forty-six fates sealed with a stroke. You are a reliable functionary. The quotas are met. You cannot sleep.' },
        { text: 'Review the list and quietly remove names of people you know to be innocent', loyalty: 0, cunning: 2, reputation: 1, survival: 0.6, response: 'You strike eighteen names. The NKVD officer notices but says nothing — for now. Eighteen people will live. The other three hundred and twenty-eight will not.' },
        { text: 'Request a meeting with the NKVD chief to argue that the quotas are excessive', loyalty: -1, cunning: 1, reputation: 2, survival: 0.4, response: 'The NKVD chief listens politely, then telephones Moscow. Within a week, your own name appears on a different kind of list. Quotas are not negotiable.' }
      ]
    },
    {
      title: 'DEMAND FOR FALSE TESTIMONY!',
      text: 'An NKVD interrogator visits your office. A former friend and colleague has been arrested and is refusing to confess. They want you to visit his cell and convince him to sign a confession — or to testify against him yourself.',
      choices: [
        { text: 'Visit the cell and convince your friend to confess for the good of his family', loyalty: 2, cunning: 1, reputation: -1, survival: 0.8, response: 'Your friend stares at you from his cot with hollow eyes. After an hour, he signs. His family is spared the worst. You embrace him knowing you will never see him again.' },
        { text: 'Testify against him yourself to end the matter quickly', loyalty: 3, cunning: 0, reputation: -2, survival: 0.85, response: 'Your testimony is recorded. The trial is perfunctory. Your friend receives ten years without right of correspondence — the euphemism everyone understands. You are thanked for your cooperation.' },
        { text: 'Stall by claiming you have no useful information and need time to remember', loyalty: 0, cunning: 3, reputation: 0, survival: 0.65, response: 'Your delaying tactic buys a few weeks. Another witness is found. Your friend\'s fate is unchanged, but your hands are slightly cleaner. The NKVD marks you as uncooperative.' }
      ]
    },
    {
      title: 'SPY NETWORK EXPOSED IN YOUR DEPARTMENT!',
      text: 'The NKVD has arrested three of your direct subordinates as members of a foreign espionage ring. You appointed all three personally. The implication is clear — you are either a fool or a co-conspirator.',
      choices: [
        { text: 'Immediately write a letter of self-criticism admitting poor judgment in personnel selection', loyalty: 2, cunning: 1, reputation: -1, survival: 0.75, response: 'Your self-criticism is read at the next Party meeting. The humiliation is profound. But your willingness to accept blame deflects the more dangerous accusation of complicity.' },
        { text: 'Claim you were the one who suspected them all along and had been gathering evidence', loyalty: 0, cunning: 3, reputation: 1, survival: 0.6, response: 'You produce a hastily fabricated paper trail. Some believe you. The NKVD is skeptical but cannot disprove your claim. You are now on thin ice with dangerous people.' },
        { text: 'Turn the investigation outward and accuse your own superior of protecting the spies', loyalty: -1, cunning: 2, reputation: 0, survival: 0.5, response: 'Your counter-accusation creates chaos. In the current climate, mud sticks. Your superior is now under investigation too. You have bought time by spreading the fire.' }
      ]
    }
  ],

  'Late Stalin': [
    {
      title: 'THE DOCTORS\' PLOT EXPANDS!',
      text: 'MGB investigators have added new names to the alleged conspiracy of Kremlin doctors plotting to murder Soviet leaders. They are pressing you to confirm that your personal physician — a Jewish doctor — behaved suspiciously during your last examination.',
      choices: [
        { text: 'Confirm the suspicions and denounce your doctor', loyalty: 3, cunning: 0, reputation: -1, survival: 0.8, response: 'Your doctor is arrested that evening. His family is exiled. The MGB is satisfied with your cooperation. You wonder who will treat your actual heart condition now.' },
        { text: 'Claim you haven\'t seen that doctor in months and suggest another physician instead', loyalty: 1, cunning: 3, reputation: 0, survival: 0.75, response: 'Your deflection works. The investigation turns elsewhere. Your doctor is spared — for now. But someone notices that your medical records contradict your claim.' },
        { text: 'Defend your doctor and insist the entire affair is based on fabricated evidence', loyalty: -2, cunning: 0, reputation: 3, survival: 0.35, response: 'The room falls silent. In the current atmosphere, defending Jews is tantamount to treason. Your courage is noted by history, if not by those who can save you.' }
      ]
    },
    {
      title: 'NUCLEAR SECRETS LEAKED!',
      text: 'A physicist working on the Soviet atomic program has defected to the West with classified documents. He attended a reception at your dacha last month. The MGB wants to know every word you exchanged.',
      choices: [
        { text: 'Provide a complete and honest account of the conversation, which was innocent', loyalty: 1, cunning: 0, reputation: 0, survival: 0.6, response: 'Your honest account is scrutinized for hidden meanings. Every innocent comment is twisted into potential code words. Honesty is not always the best policy in Stalin\'s Russia.' },
        { text: 'Claim you barely spoke to the physicist and redirect attention to other guests', loyalty: 1, cunning: 2, reputation: 0, survival: 0.7, response: 'Your minimal account is plausible. Other guests are now under investigation. You have survived by becoming invisible — a useful skill in these times.' },
        { text: 'Preemptively report that the physicist seemed suspicious and you had planned to report him', loyalty: 2, cunning: 3, reputation: 0, survival: 0.8, response: 'Your "planned report" is conveniently timed but the MGB accepts it. You are now a vigilant comrade rather than a suspect. The fiction becomes reality in the files.' }
      ]
    },
    {
      title: 'MIDNIGHT PHONE CALL FROM STALIN!',
      text: 'Your phone rings at 2 AM. It is Stalin himself, speaking slowly. He asks your opinion on a recently deceased colleague — was he truly loyal, or was he secretly working against the Party? This is a test. Every word matters.',
      choices: [
        { text: 'Praise the deceased lavishly and insist on his complete loyalty', loyalty: 1, cunning: 0, reputation: 1, survival: 0.5, response: 'A long pause. "Interesting," Stalin says. "Others have told me different things." The line goes dead. You have either passed or failed the test. Sleep does not come.' },
        { text: 'Express carefully calibrated doubts — not too much, not too little', loyalty: 2, cunning: 3, reputation: 0, survival: 0.8, response: 'You navigate the conversation like a minefield. Stalin grunts approvingly at your measured responses. "You think carefully, comrade. Good." The call ends. You pour yourself a vodka with shaking hands.' },
        { text: 'Condemn the deceased as a traitor and double-dealer you never trusted', loyalty: 2, cunning: 0, reputation: -1, survival: 0.65, response: 'Stalin chuckles. "Everyone is so eager to condemn the dead." Is he pleased or contemptuous? The ambiguity will torture you for weeks. The deceased\'s family is relocated to Kazakhstan.' }
      ]
    },
    {
      title: 'INVITATION TO STALIN\'S DACHA!',
      text: 'You have been summoned to one of Stalin\'s infamous late-night dinner parties. These drunken affairs are where careers are made and ended. Refusal is impossible. Last time, a guest was arrested before dessert.',
      choices: [
        { text: 'Attend and drink heavily to match Stalin\'s expectations', loyalty: 2, cunning: 0, reputation: 1, survival: 0.65, response: 'You drink until the room spins. Stalin makes you dance the gopak. The humiliation is the point. But you survive the evening and are driven home at dawn, still breathing.' },
        { text: 'Attend but secretly pour your drinks into the potted plants', loyalty: 0, cunning: 3, reputation: 0, survival: 0.75, response: 'You maintain the appearance of drunkenness while keeping your wits. You learn much from the loose talk around you. Stalin eyes you occasionally with that unsettling gaze.' },
        { text: 'Attend and use the informal setting to propose a policy initiative to Stalin', loyalty: 1, cunning: 1, reputation: 2, survival: 0.55, response: 'Stalin listens to your proposal between toasts. "Ambitious," he says, in a tone that could mean anything. The other guests exchange nervous glances at your boldness.' }
      ]
    }
  ],

  'Thaw': [
    {
      title: 'REHABILITATION PETITION ON YOUR DESK!',
      text: 'The widow of a man you personally denounced during the Terror is petitioning for his posthumous rehabilitation. She has evidence that his confession was coerced. Your signature is on the original denunciation. The Khrushchev thaw makes this petition dangerous to deny.',
      choices: [
        { text: 'Support the rehabilitation and publicly acknowledge past errors', loyalty: 1, cunning: 0, reputation: 3, survival: 0.7, response: 'Your confession stuns the committee. The widow weeps. You are held up as an example of socialist renewal. But some colleagues now eye you warily — what else might you confess?' },
        { text: 'Quietly support the rehabilitation while burying your own involvement in the files', loyalty: 0, cunning: 3, reputation: 1, survival: 0.85, response: 'The man is rehabilitated. Your name is carefully excised from the relevant documents. The widow gets her justice. You get your peace of mind — such as it is.' },
        { text: 'Block the petition by arguing that reopening old cases destabilizes the Party', loyalty: 2, cunning: 1, reputation: -2, survival: 0.65, response: 'Your conservative stance aligns you with the anti-reform faction. The petition is delayed but not destroyed. The widow writes to Khrushchev directly. The matter is far from over.' }
      ]
    },
    {
      title: 'HUNGARIAN CRISIS — TANKS OR TALKS?',
      text: 'The situation in Budapest has reached a critical point. Armed workers control the streets. The Hungarian Party has collapsed. Khrushchev is torn between intervention and negotiation. Your vote could tip the balance.',
      choices: [
        { text: 'Vote for military intervention — the socialist camp must be preserved', loyalty: 3, cunning: 0, reputation: 0, survival: 0.8, response: 'Soviet tanks roll into Budapest at dawn. The uprising is crushed. World opinion is horrified, but the Warsaw Pact holds. You have blood on your hands and steel in your spine.' },
        { text: 'Argue for a political solution and limited sovereignty for Hungary', loyalty: 0, cunning: 1, reputation: 2, survival: 0.55, response: 'Your moderate position is overruled. The tanks go in anyway. You are remembered as soft by the hardliners and insufficient by the reformers. The worst of both worlds.' },
        { text: 'Abstain from the vote and let others bear the responsibility', loyalty: 0, cunning: 3, reputation: -1, survival: 0.75, response: 'Your abstention is noted. Khrushchev gives you a long look but says nothing. You have avoided committing yourself, which is either wisdom or cowardice depending on tomorrow\'s outcome.' }
      ]
    },
    {
      title: 'THE SECRET SPEECH HAS LEAKED!',
      text: 'Khrushchev\'s secret denunciation of Stalin at the 20th Congress has been leaked to Western intelligence. The full text is being broadcast by Radio Free Europe into every communist country. Panic is spreading through allied parties.',
      choices: [
        { text: 'Propose a bold follow-up: publish the speech officially in Pravda', loyalty: 0, cunning: 1, reputation: 3, survival: 0.5, response: 'Khrushchev is tempted but the Presidium is horrified. Your proposal is voted down, but you are now seen as a radical reformer. That label carries both promise and danger.' },
        { text: 'Organize a damage control campaign for the allied Communist parties', loyalty: 2, cunning: 2, reputation: 1, survival: 0.85, response: 'You draft careful talking points for foreign comrades. The damage is contained but not eliminated. Your diplomatic skill earns you favor with the leadership.' },
        { text: 'Investigate who leaked the speech and make sure the trail leads to a rival', loyalty: -1, cunning: 3, reputation: 0, survival: 0.7, response: 'Your investigation produces a convenient culprit. The real leaker — possibly Khrushchev himself — remains protected. You have demonstrated useful ruthlessness to the right people.' }
      ]
    }
  ],

  'Khrushchev': [
    {
      title: 'CUBAN MISSILE CRISIS — EMERGENCY BRIEFING!',
      text: 'American U-2 photographs have confirmed the discovery of Soviet missiles in Cuba. Kennedy has imposed a naval blockade. The world is closer to nuclear war than ever before. Khrushchev needs counsel — now.',
      choices: [
        { text: 'Advise standing firm — American imperialism must not be allowed to dictate terms', loyalty: 2, cunning: 0, reputation: 1, survival: 0.6, response: 'Your hawkish stance resonates with the military. For thirteen days the world holds its breath. When Khrushchev finally backs down, your advice is quietly forgotten — fortunately.' },
        { text: 'Counsel a secret deal: remove the missiles in exchange for American concessions', loyalty: 1, cunning: 3, reputation: 2, survival: 0.8, response: 'Your back-channel approach forms the basis of the eventual resolution. The missiles come out, the Jupiter missiles in Turkey follow. You helped save the world, though no one will ever know.' },
        { text: 'Propose escalation: send submarines to challenge the blockade', loyalty: 1, cunning: 0, reputation: 0, survival: 0.4, response: 'Your aggressive proposal is briefly considered. Fortunately, cooler heads prevail. Had your advice been followed, you might have helped start the last war in human history.' }
      ]
    },
    {
      title: 'SPACE PROGRAM EMERGENCY!',
      text: 'A cosmonaut launch has gone catastrophically wrong on the pad. The rocket exploded during testing, killing dozens of engineers and technicians including senior designers. The space program is in jeopardy. The Americans must not learn of this failure.',
      choices: [
        { text: 'Order a complete media blackout and classify all details as state secrets', loyalty: 2, cunning: 2, reputation: 0, survival: 0.85, response: 'The disaster vanishes from history. The families of the dead are relocated and silenced. The program recovers in secret. Decades later, the truth will emerge — but not on your watch.' },
        { text: 'Push for an accelerated launch schedule to prove the program is still viable', loyalty: 1, cunning: 0, reputation: 1, survival: 0.55, response: 'The rushed schedule leads to more corners being cut. Another accident is narrowly averted. The cosmonauts are writing letters to their families before each launch.' },
        { text: 'Use the disaster to argue for redirecting resources from space to agriculture', loyalty: 0, cunning: 2, reputation: 1, survival: 0.7, response: 'Your pragmatic argument gains some support. Khrushchev is torn — space victories are propaganda gold. Your proposal is shelved but you are noted as a practical thinker.' }
      ]
    },
    {
      title: 'VIRGIN LANDS AGRICULTURAL CATASTROPHE!',
      text: 'Khrushchev\'s grand Virgin Lands campaign has produced a disastrous harvest. Topsoil is blowing away in dust storms. The grain target will be missed by forty percent. Someone must report the bad news to Nikita Sergeyevich.',
      choices: [
        { text: 'Volunteer to deliver the report personally, presenting solutions alongside the bad news', loyalty: 1, cunning: 1, reputation: 3, survival: 0.6, response: 'Khrushchev\'s face reddens as he reads the figures. But your proposed solutions give him something to seize upon. You are now responsible for fixing the unfixable — but you have his ear.' },
        { text: 'Massage the statistics to soften the blow and blame local officials', loyalty: 2, cunning: 2, reputation: -1, survival: 0.8, response: 'Your doctored report delays the reckoning. Local Party secretaries are scapegoated. The underlying crisis deepens while the leadership remains in comfortable denial.' },
        { text: 'Quietly commission an independent agricultural assessment while saying nothing', loyalty: 0, cunning: 3, reputation: 1, survival: 0.75, response: 'Your secret report documents the full scale of the disaster. It is ammunition — but ammunition is only useful if you know when to fire it and at whom.' }
      ]
    }
  ],

  'Brezhnev': [
    {
      title: 'PRAGUE SPRING — MILITARY ORDER!',
      text: 'Dubcek\'s reforms in Czechoslovakia have gone too far. The Presidium has voted for military intervention. You must sign the order deploying five Warsaw Pact armies into a fraternal socialist country.',
      choices: [
        { text: 'Sign without hesitation and volunteer to coordinate the operation', loyalty: 3, cunning: 0, reputation: 1, survival: 0.85, response: 'Operation Danube proceeds with brutal efficiency. Prague is occupied in hours. Your organizational skills are noted approvingly by the defense establishment. The Brezhnev Doctrine is born.' },
        { text: 'Sign but attach a memo urging minimal casualties and a political settlement', loyalty: 1, cunning: 2, reputation: 1, survival: 0.75, response: 'Your memo is filed and ignored. The tanks roll regardless. But your paper trail shows concern for restraint, which may prove useful in future political winds.' },
        { text: 'Delay signing and request an emergency debate on alternative approaches', loyalty: -1, cunning: 1, reputation: 2, survival: 0.5, response: 'Your hesitation infuriates the hawks. Brezhnev himself telephones to question your reliability. You sign within the hour. Your brief resistance is remembered by both sides.' }
      ]
    },
    {
      title: 'DISSIDENT ESCAPE ATTEMPT!',
      text: 'A prominent dissident writer is attempting to defect through the Finnish border. The KGB has intercepted the plan. If he escapes, it will be a propaganda catastrophe. If he is killed at the border, it will be worse.',
      choices: [
        { text: 'Order the KGB to arrest him before he reaches the border', loyalty: 2, cunning: 1, reputation: 0, survival: 0.8, response: 'The writer is seized fifty kilometers from the border. His unpublished manuscript is confiscated. The West protests but has no martyr. A clean operation.' },
        { text: 'Let him go — a quiet departure is less damaging than a public arrest', loyalty: -1, cunning: 3, reputation: 1, survival: 0.65, response: 'The writer crosses into Finland and holds a press conference. The embarrassment is real but temporary. By letting him go, you\'ve denied the West a persecution narrative.' },
        { text: 'Arrange for the writer to be offered a prestigious cultural position to lure him back', loyalty: 0, cunning: 2, reputation: 2, survival: 0.7, response: 'The carrot works better than the stick. The writer hesitates, then accepts. He returns to a gilded cage. The West loses interest. A masterclass in managing dissent.' }
      ]
    },
    {
      title: 'CORRUPTION INVESTIGATION HITS HOME!',
      text: 'Inspectors from the Party Control Commission have discovered massive embezzlement in a ministry connected to your patronage network. The trail of stolen funds leads uncomfortably close to your office.',
      choices: [
        { text: 'Sacrifice your deputy and cooperate fully with the investigation', loyalty: 1, cunning: 2, reputation: 0, survival: 0.75, response: 'Your deputy takes the fall with surprising dignity. The investigation concludes. You are cleared, but your patronage network is weakened and your remaining allies are nervous.' },
        { text: 'Use your connections to have the investigation reassigned to a friendlier inspector', loyalty: 0, cunning: 3, reputation: -1, survival: 0.8, response: 'The new inspector finds nothing of consequence. The matter is closed. But the original inspector harbors a grudge and the evidence still exists somewhere in the files.' },
        { text: 'Go to Brezhnev directly and ask for his personal protection', loyalty: 2, cunning: 0, reputation: -1, survival: 0.7, response: 'Brezhnev waves his hand dismissively. "These inspectors bother everyone," he says. The investigation evaporates. You now owe the General Secretary a favor — and he always collects.' }
      ]
    }
  ],

  'Stagnation': [
    {
      title: 'NUCLEAR SUBMARINE DISASTER!',
      text: 'A nuclear submarine has suffered a reactor breach in the North Atlantic. Radiation is leaking. The crew is dying. The Americans have detected the incident via satellite. You must decide how to respond before the story breaks internationally.',
      choices: [
        { text: 'Order a full rescue operation and prepare a public statement acknowledging the incident', loyalty: 0, cunning: 1, reputation: 3, survival: 0.6, response: 'The transparency shocks the international community — in a good way. The rescue saves some crew members. Your openness is praised abroad but criticized by hardliners at home as weakness.' },
        { text: 'Deny everything and order the submarine scuttled to destroy evidence', loyalty: 2, cunning: 2, reputation: -1, survival: 0.8, response: 'The submarine sinks to the ocean floor with all hands. The official story is a training exercise accident. The families receive sealed coffins and pensions. The Americans know the truth but cannot prove it.' },
        { text: 'Accept American offers of assistance to demonstrate Soviet-American cooperation', loyalty: -1, cunning: 2, reputation: 2, survival: 0.55, response: 'American ships assist in the rescue. The gesture of cooperation makes headlines. The military establishment is furious that you revealed Soviet naval vulnerabilities to the enemy.' }
      ]
    },
    {
      title: 'GRAIN HARVEST CATASTROPHE!',
      text: 'The grain harvest has fallen short by ninety million tons. The Soviet Union will need to make massive purchases from the West. This will drain hard currency reserves and humiliate the planned economy on the world stage.',
      choices: [
        { text: 'Authorize secret grain purchases through intermediary countries to hide the scale', loyalty: 1, cunning: 3, reputation: 0, survival: 0.8, response: 'Through a web of shell companies and friendly governments, the grain arrives without fanfare. The cost is staggering but the humiliation is avoided. Your financial creativity is noted.' },
        { text: 'Propose a nationwide rationing program and blame Western economic warfare', loyalty: 2, cunning: 1, reputation: 0, survival: 0.7, response: 'The rationing announcement causes quiet panic. Bread lines return for the first time in decades. The propaganda blaming the West convinces some, but empty stomachs are hard to argue with.' },
        { text: 'Argue for agricultural reform and private plots for collective farmers', loyalty: -1, cunning: 1, reputation: 2, survival: 0.5, response: 'Your reform proposal is denounced as revisionism by orthodox members. The idea is filed away. Twenty years from now, someone else will propose the same thing and be called a visionary.' }
      ]
    },
    {
      title: 'HIGH-RANKING DEFECTOR!',
      text: 'A senior KGB officer stationed in London has defected to British intelligence. He knows the names of Soviet agents across Europe, details of Politburo security arrangements, and personally attended three of your private meetings.',
      choices: [
        { text: 'Order an immediate recall of all compromised agents before they can be arrested', loyalty: 2, cunning: 1, reputation: 1, survival: 0.75, response: 'The mass recall tips off Western intelligence that the defector\'s information is accurate. But at least your agents are saved. The intelligence network will take years to rebuild.' },
        { text: 'Deny the defection publicly and claim the officer died in an accident', loyalty: 1, cunning: 2, reputation: 0, survival: 0.7, response: 'The British parade the defector on television. Your denial looks absurd. But the official fiction maintains internal morale and gives legal cover for ongoing operations.' },
        { text: 'Prepare a disinformation campaign to discredit the defector\'s testimony', loyalty: 0, cunning: 3, reputation: 1, survival: 0.8, response: 'Your team fabricates evidence that the defector was a double agent feeding the British false information. The resulting confusion paralyzes Western intelligence analysis for months.' }
      ]
    }
  ],

  'Late Brezhnev': [
    {
      title: 'AFGHANISTAN ESCALATION DEMAND!',
      text: 'The military is requesting a massive troop increase in Afghanistan. Current forces are bogged down. The mujahedeen are receiving American weapons. Brezhnev is too ill to make decisions. The Politburo must decide.',
      choices: [
        { text: 'Support the escalation — we cannot afford to lose a socialist ally', loyalty: 2, cunning: 0, reputation: 0, survival: 0.75, response: 'Twenty thousand more troops deploy to Afghanistan. The body bags continue arriving in zinc coffins. The war grinds on with no end in sight. You have deepened the quagmire.' },
        { text: 'Propose a secret diplomatic back-channel to negotiate with the mujahedeen', loyalty: 0, cunning: 3, reputation: 1, survival: 0.7, response: 'Your diplomatic initiative makes quiet progress until a hardliner leaks it to the military. The talks collapse. But you have established contacts that may prove useful later.' },
        { text: 'Argue for withdrawal and redeployment of resources to domestic priorities', loyalty: -1, cunning: 1, reputation: 2, survival: 0.5, response: 'Your withdrawal proposal is met with stony silence. The generals exchange contemptuous glances. "Defeatism," one mutters. You are right, but being right in the Politburo is sometimes worse than being wrong.' }
      ]
    },
    {
      title: 'SOLIDARITY CRISIS IN POLAND!',
      text: 'The Solidarity trade union in Poland is growing uncontrollably. Ten million members. The Polish Communist Party is paralyzed. Marshal Kulikov is drawing up invasion plans. Warsaw Pact unity hangs in the balance.',
      choices: [
        { text: 'Support a military intervention to restore communist authority in Poland', loyalty: 3, cunning: 0, reputation: -1, survival: 0.7, response: 'Intervention plans are drawn up but the costs are staggering — Poland is not Czechoslovakia. Ultimately Jaruzelski imposes martial law instead. Your hawkish stance is vindicated, barely.' },
        { text: 'Back Jaruzelski\'s plan for internal martial law as a lesser evil', loyalty: 1, cunning: 2, reputation: 1, survival: 0.8, response: 'Polish tanks in Polish streets are better optics than Soviet ones. Martial law succeeds in the short term. Solidarity goes underground but does not die. You have bought time, nothing more.' },
        { text: 'Argue that Solidarity should be co-opted rather than crushed', loyalty: -1, cunning: 3, reputation: 2, survival: 0.55, response: 'Your proposal to negotiate with Solidarity is revolutionary — and terrifying to the old guard. The idea is rejected, but younger Politburo members take note of your flexibility.' }
      ]
    },
    {
      title: 'SUCCESSION PLOT WHISPERS!',
      text: 'Brezhnev is clearly dying. Multiple factions are positioning themselves. You have been approached by two different groups, each claiming to represent the "consensus candidate." Choosing wrong could be fatal.',
      choices: [
        { text: 'Back Andropov and the KGB faction — they have the intelligence apparatus', loyalty: 1, cunning: 2, reputation: 0, survival: 0.8, response: 'Andropov prevails when Brezhnev dies. Your early support is remembered and rewarded with a better office and expanded responsibilities. For now, you have chosen wisely.' },
        { text: 'Support the Chernenko old guard faction to maintain stability', loyalty: 2, cunning: 0, reputation: 0, survival: 0.65, response: 'Chernenko\'s faction is outmaneuvered by Andropov. Your backing of the losing horse is noted. You are not punished but you are quietly sidelined from key decisions.' },
        { text: 'Remain publicly neutral while privately assuring both sides of your support', loyalty: 0, cunning: 3, reputation: -1, survival: 0.75, response: 'Your double game works until both sides compare notes at a private dinner. Your duplicity is exposed. Neither faction fully trusts you now, but neither can afford to eliminate a potential ally.' }
      ]
    }
  ],

  'Perestroika': [
    {
      title: 'NUCLEAR DISASTER — REACTOR MELTDOWN!',
      text: 'A nuclear reactor has exploded in Ukraine. Radiation is spreading across Europe. Local officials are minimizing the danger. Gorbachev wants transparency but the military-industrial complex demands a cover-up. You must advise the General Secretary.',
      choices: [
        { text: 'Advocate for full transparency — evacuate immediately and inform the world', loyalty: 0, cunning: 0, reputation: 3, survival: 0.7, response: 'The truth shocks the world. Hundreds of thousands are evacuated. International aid flows in. Glasnost becomes real in the worst possible way. Your advocacy saves lives but exposes the system\'s rot.' },
        { text: 'Propose a controlled release of information — enough truth to manage the crisis, enough silence to limit panic', loyalty: 1, cunning: 3, reputation: 1, survival: 0.85, response: 'Your measured approach threads the needle. Information is released in stages. The cover-up is partial rather than total. You are credited with pragmatic crisis management.' },
        { text: 'Side with the military and argue that revealing the full scale will cause more harm than the radiation', loyalty: 2, cunning: 1, reputation: -2, survival: 0.6, response: 'The cover-up delays evacuation by critical days. When the truth emerges anyway — detected by Swedish monitoring stations — the credibility of the entire system is shattered.' }
      ]
    },
    {
      title: 'NATIONALIST UPRISING IN THE BALTICS!',
      text: 'Massive peaceful demonstrations are filling the streets of Tallinn, Riga, and Vilnius. Hundreds of thousands are forming human chains and singing forbidden national anthems. The local Party organizations are paralyzed or sympathetic.',
      choices: [
        { text: 'Recommend dialogue with the demonstrators and limited cultural concessions', loyalty: 0, cunning: 1, reputation: 2, survival: 0.7, response: 'Your conciliatory approach calms the immediate crisis but emboldens the independence movements. Each concession leads to greater demands. You have started a process that may be impossible to control.' },
        { text: 'Propose deploying interior ministry troops to disperse the demonstrations', loyalty: 2, cunning: 0, reputation: -2, survival: 0.6, response: 'Troops arrive but the sheer scale of the protests makes dispersal impractical without massive bloodshed. The soldiers are reluctant. Your hardline approach has failed visibly.' },
        { text: 'Channel the nationalist energy toward economic reform within the Soviet framework', loyalty: 1, cunning: 3, reputation: 1, survival: 0.8, response: 'Your creative proposal — Baltic economic autonomy within the Union — temporarily satisfies moderates on both sides. It buys months, perhaps a year. But the fundamental question of sovereignty remains unanswered.' }
      ]
    },
    {
      title: 'ECONOMIC FREEFALL!',
      text: 'Store shelves are empty. The ruble is collapsing. Cooperatives are hoarding goods. Miners are on strike. The budget deficit has reached catastrophic levels. Gorbachev looks to you for solutions.',
      choices: [
        { text: 'Propose radical market reforms — price liberalization and privatization', loyalty: -1, cunning: 1, reputation: 2, survival: 0.55, response: 'Your radical proposal divides the Politburo. Reformers celebrate while hardliners accuse you of destroying socialism. The half-measures that result satisfy no one and fix nothing.' },
        { text: 'Advocate for a return to central planning discipline and state control', loyalty: 2, cunning: 0, reputation: 0, survival: 0.65, response: 'Your conservative prescription appeals to the old guard but horrifies the reformers. Gorbachev is caught between factions. The economy continues its downward spiral regardless of ideology.' },
        { text: 'Propose emergency Western loans and a joint venture program with foreign companies', loyalty: 0, cunning: 3, reputation: 1, survival: 0.75, response: 'Your pragmatic internationalism brings temporary relief. Western money flows in — along with Western conditions. You have bought time but at the cost of sovereignty. The IMF now has a seat at the table.' }
      ]
    },
    {
      title: 'TBILISI MASSACRE AFTERMATH!',
      text: 'Soviet troops have killed twenty peaceful demonstrators in Tbilisi using sharpened shovels and toxic gas. International outrage is mounting. Someone must take responsibility — and everyone is pointing fingers.',
      choices: [
        { text: 'Demand a full investigation and accountability for the military commanders', loyalty: 0, cunning: 1, reputation: 3, survival: 0.6, response: 'Your demand for accountability is principled but makes you enemies in the defense ministry. The investigation is inconclusive. The dead remain dead. Georgia\'s path toward independence accelerates.' },
        { text: 'Blame local commanders and shield the Politburo from responsibility', loyalty: 2, cunning: 2, reputation: -1, survival: 0.8, response: 'Several officers are quietly transferred. The Politburo escapes direct blame. But the Georgian people know the truth, and the cover-up deepens their resolve for independence.' },
        { text: 'Travel to Tbilisi personally to meet with grieving families and local leaders', loyalty: 0, cunning: 1, reputation: 2, survival: 0.5, response: 'Your personal visit is a gesture of extraordinary courage — or foolishness. The families receive you with cold dignity. Your presence calms nothing but history will note you came.' }
      ]
    }
  ],

  'Collapse': [
    {
      title: 'COUP PARTICIPATION DEMANDED!',
      text: 'Hardliners have launched a coup against Gorbachev. Tanks are in Moscow. The State Committee for the Emergency has declared martial law. A general is on the phone demanding you sign a declaration of support. Yeltsin is rallying resistance at the White House. History pivots on the next few hours.',
      choices: [
        { text: 'Sign the declaration and support the Emergency Committee', loyalty: 3, cunning: 0, reputation: -2, survival: 0.4, response: 'You sign your name alongside the coup plotters. For three days it seems like the old order might prevail. Then the coup collapses. Your signature becomes evidence in a criminal proceeding.' },
        { text: 'Refuse to sign and publicly oppose the coup alongside Yeltsin', loyalty: -2, cunning: 0, reputation: 3, survival: 0.6, response: 'You stand on a tank outside the White House and address the crowd. If the coup succeeds, you are a dead man. It does not succeed. You emerge as a hero of Russian democracy — a strange fate for a Politburo member.' },
        { text: 'Claim illness and remain unreachable until the outcome becomes clear', loyalty: 0, cunning: 3, reputation: -1, survival: 0.85, response: 'Your phone is conveniently out of service for seventy-two hours. When you resurface, you express shock at the "criminal conspiracy" and relief at its failure. No one believes you, but no one can prove anything.' }
      ]
    },
    {
      title: 'REPUBLIC DECLARES INDEPENDENCE!',
      text: 'A Soviet republic has declared independence following a popular referendum. The local Party organization has dissolved itself. Military garrisons are surrounded by peaceful crowds. The Union is fragmenting in real time.',
      choices: [
        { text: 'Order the military to enforce federal authority and prevent secession', loyalty: 3, cunning: 0, reputation: -1, survival: 0.5, response: 'Soldiers refuse to fire on crowds that include their own relatives. The order is not carried out. Your authority evaporates along with the Union itself. Force without obedience is nothing.' },
        { text: 'Negotiate a transitional agreement preserving economic ties and military cooperation', loyalty: 0, cunning: 3, reputation: 2, survival: 0.8, response: 'Your pragmatic approach preserves what can be preserved. Economic agreements survive the political rupture. You are one of the few Soviet officials who manages the transition with dignity.' },
        { text: 'Resign your Party position and declare solidarity with the independence movement', loyalty: -3, cunning: 1, reputation: 2, survival: 0.7, response: 'Your dramatic defection makes international headlines. You are welcomed by the new republic as a symbol of change. Your former colleagues brand you a traitor. History will decide which label fits.' }
      ]
    },
    {
      title: 'MILITARY STANDOFF AT THE KREMLIN!',
      text: 'Armed units loyal to different factions are facing each other across Red Square. The KGB Alpha Group has received orders to storm a government building. Junior officers are calling their families. One wrong move could trigger a civil war.',
      choices: [
        { text: 'Personally walk into the standoff zone and order both sides to stand down', loyalty: 0, cunning: 0, reputation: 3, survival: 0.45, response: 'You walk across the cobblestones between two lines of armed men. Time stops. Then, slowly, weapons are lowered. Your personal courage prevents bloodshed. The image is broadcast worldwide.' },
        { text: 'Contact the Alpha Group commander directly and negotiate a withdrawal through back channels', loyalty: 0, cunning: 3, reputation: 1, survival: 0.8, response: 'Your quiet diplomacy defuses the crisis without a shot. The Alpha Group stands down. No one outside a small circle knows how close Moscow came to civil war — or how you prevented it.' },
        { text: 'Flee to the military airfield and evacuate to a secure location', loyalty: -1, cunning: 2, reputation: -2, survival: 0.9, response: 'You are airborne within the hour. From a safe distance, you watch the crisis resolve itself. You are alive, but your political career is over. Those who ran are not forgiven.' }
      ]
    },
    {
      title: 'THE FLAG IS COMING DOWN!',
      text: 'The Soviet flag over the Kremlin is being lowered for the last time. Gorbachev has resigned. The USSR officially ceases to exist at midnight. You stand in your Kremlin office surrounded by seventy years of history about to become artifacts.',
      choices: [
        { text: 'Attend the flag-lowering ceremony and bear witness to the end with dignity', loyalty: 0, cunning: 0, reputation: 3, survival: 0.95, response: 'You stand in the freezing December wind as the red banner descends. Tears freeze on your cheeks. Whatever comes next, you were there at the end. The cameras capture a figure standing alone in the snow.' },
        { text: 'Use your final hours of access to secure classified documents that could ensure your future', loyalty: -1, cunning: 3, reputation: -1, survival: 0.85, response: 'Your briefcase is heavy when you leave the Kremlin for the last time. The documents within contain secrets that powerful people will pay handsomely to keep hidden. Survival takes many forms.' },
        { text: 'Place a call to every former Politburo member you can reach and organize for the future', loyalty: 1, cunning: 2, reputation: 1, survival: 0.8, response: 'Your phone calls plant seeds that will bloom in the new Russia. The old networks survive the old state. Power changes form but the people who hold it remain remarkably familiar.' }
      ]
    }
  ]
};
