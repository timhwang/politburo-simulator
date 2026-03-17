const dossierEvents = {

  'Civil War': [
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Telegram: White Army Sympathizer',
      text: 'Cheka agents have intercepted a coded telegram from your regional supply commissar to a known White officer in Omsk. The message references grain shipment routes and garrison strengths. Your commissar has been a loyal worker for months.',
      choices: [
        {
          text: 'Have the commissar arrested and interrogated immediately',
          loyalty: 2,
          cunning: 0,
          reputation: 1,
          survival: 0.85,
          response: 'The commissar is dragged from his bed at dawn. Under interrogation he insists the telegram was forged by a rival. The Cheka is satisfied with your vigilance, but you have lost a competent administrator.'
        },
        {
          text: 'Feed false information through the commissar to mislead the Whites',
          loyalty: 0,
          cunning: 3,
          reputation: 0,
          survival: 0.7,
          response: 'You plant false troop movements and supply routes. Weeks later, a White detachment walks into an ambush based on your disinformation. The Cheka praises your cunning, though some wonder how you knew about the channel.'
        },
        {
          text: 'Quietly warn the commissar and give him a chance to explain',
          loyalty: -1,
          cunning: 1,
          reputation: -1,
          survival: 0.5,
          response: 'The commissar turns pale and flees that night, confirming his guilt. You report his disappearance, but questions linger about why you did not act sooner. A Cheka investigator takes note of the delay.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Anonymous Denunciation: Hoarding Military Supplies',
      text: 'An unsigned letter has arrived at the local Cheka office accusing you of diverting Red Army boots and ammunition to your home village. The handwriting is disguised, but the letter contains specific details only someone in your department would know.',
      choices: [
        {
          text: 'Demand a full investigation to clear your name publicly',
          loyalty: 1,
          cunning: -1,
          reputation: 2,
          survival: 0.75,
          response: 'The investigation finds no evidence of wrongdoing and you are publicly exonerated. However, the investigator now has detailed knowledge of your department\'s operations, and the anonymous accuser remains at large.'
        },
        {
          text: 'Quietly investigate who wrote the letter before it spreads further',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'You narrow down the author to your assistant, who harbors resentment over a promotion. You reassign him to a dangerous front-line position. The letter is forgotten, and you have one fewer rival.'
        },
        {
          text: 'Write your own denunciation of a rival to divert attention',
          loyalty: -1,
          cunning: 2,
          reputation: -1,
          survival: 0.65,
          response: 'Your counter-denunciation triggers a cascade of accusations in the department. In the chaos, the original letter about you is buried. But the atmosphere of mutual suspicion you have created may yet consume you too.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Old Friend Among the Mensheviks',
      text: 'A letter arrives through unofficial channels from a childhood friend who joined the Mensheviks. He writes that he is starving in Petrograd and begs you to send food or help him escape abroad. Possessing this letter alone could be dangerous.',
      choices: [
        {
          text: 'Burn the letter and pretend it never arrived',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.85,
          response: 'You watch the paper curl and blacken in the stove. Your friend\'s fate is unknown to you, but your hands are clean. The courier who delivered the letter, however, knows it existed.'
        },
        {
          text: 'Turn the letter over to the Cheka as proof of your loyalty',
          loyalty: 3,
          cunning: 0,
          reputation: -1,
          survival: 0.9,
          response: 'The Cheka commends your revolutionary discipline. Your friend is arrested within the week. Some old comrades hear of what you did and look at you differently now, but the Party sees a reliable man.'
        },
        {
          text: 'Secretly arrange to send food through a trusted intermediary',
          loyalty: -2,
          cunning: 1,
          reputation: 1,
          survival: 0.45,
          response: 'You manage to send a small package. Your friend survives another month. But the intermediary is later arrested for smuggling, and your name appears in his confiscated notebook. An anxious wait begins.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'Cheka Report: Desertion in Your Regiment',
      text: 'A Cheka political commissar has filed a report stating that desertion rates in the units under your jurisdiction have tripled. The report suggests "insufficient revolutionary discipline" and hints at deliberate sabotage by command staff.',
      choices: [
        {
          text: 'Order decimation — execute every tenth deserter as an example',
          loyalty: 2,
          cunning: -1,
          reputation: -2,
          survival: 0.8,
          response: 'The executions restore order through terror. Desertion drops immediately, but the surviving soldiers regard you with pure hatred. Trotsky himself sends a note approving your "iron will," though local peasants whisper your name as a curse.'
        },
        {
          text: 'Blame the political commissar for failing to maintain morale',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'You write a counter-report arguing the commissar\'s heavy-handedness caused the desertions. The commissar is reassigned, but his allies in the Cheka remember the slight. You have made an enemy in a dangerous institution.'
        },
        {
          text: 'Request additional supplies and rations to address root causes',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.6,
          response: 'Your request is seen as soft-headed by some in Moscow, but the soldiers appreciate the effort. Rations arrive slowly and partially. The Cheka report remains in your file, a potential weapon for future enemies.'
        }
      ]
    }
  ],

  'NEP': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: NEPman Bribing Party Officials',
      text: 'A confidential memorandum from the Workers\' and Peasants\' Inspectorate reveals that a prominent NEPman in your district has been paying regular bribes to three local Party secretaries. One of them is your close political ally.',
      choices: [
        {
          text: 'Expose all three secretaries and the NEPman publicly',
          loyalty: 1,
          cunning: 0,
          reputation: 3,
          survival: 0.7,
          response: 'The public trial becomes a sensation. You are praised as incorruptible, but you have lost your most reliable ally and the other two secretaries\' friends now work against you. The NEPman\'s business contacts spread rumors about your own finances.'
        },
        {
          text: 'Warn your ally privately and let him cover his tracks',
          loyalty: -1,
          cunning: 2,
          reputation: -1,
          survival: 0.75,
          response: 'Your ally quietly returns the money and distances himself from the NEPman. The other two secretaries are eventually exposed without your involvement. Your ally owes you deeply, but if the warning is ever discovered, you are complicit.'
        },
        {
          text: 'Use the information as leverage over all three secretaries',
          loyalty: -1,
          cunning: 3,
          reputation: 0,
          survival: 0.65,
          response: 'You now have three Party secretaries who will vote however you wish. The power is intoxicating but fragile — any of them might decide that denouncing you is safer than remaining under your thumb.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Émigré Plot Against Soviet Trade Mission',
      text: 'GPU agents abroad have uncovered a White émigré plot to assassinate members of a Soviet trade delegation in Berlin. One of the targeted diplomats is a personal friend who helped you during the Civil War. The report is marked "for limited circulation."',
      choices: [
        {
          text: 'Pass the intelligence through proper channels only',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.85,
          response: 'The GPU handles the matter. The plot is disrupted, your friend is safe, and your adherence to protocol is noted. But the information arrived slowly through bureaucratic channels, and one minor diplomat was wounded before the threat was neutralized.'
        },
        {
          text: 'Secretly warn your friend directly through a private channel',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your friend takes precautions and is unharmed. But the GPU wonders how the diplomat knew to change his routine before the official warning arrived. An internal investigation begins that may eventually trace back to you.'
        },
        {
          text: 'Use the crisis to argue for expanding your department\'s intelligence role',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.8,
          response: 'You draft a proposal citing this near-catastrophe as evidence that intelligence sharing is too slow. Your department gains a small but significant expansion in authority. Some GPU officers resent your encroachment on their territory.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Anonymous Denunciation: Trotskyist Sympathies',
      text: 'A typed letter has been delivered to the Central Control Commission accusing you of privately expressing sympathy for Trotsky\'s position on industrialization. The letter quotes specific phrases you used at a private dinner two weeks ago.',
      choices: [
        {
          text: 'Publish a lengthy article attacking Trotsky\'s positions',
          loyalty: 2,
          cunning: 1,
          reputation: 1,
          survival: 0.8,
          response: 'Your article is praised by the Stalin faction. The accusation quietly disappears from the Control Commission\'s files. But the informer at your dinner table remains unidentified, and you must now be more careful about what you say in private.'
        },
        {
          text: 'Investigate who attended the dinner to find the informer',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'Through careful deduction, you identify the informer as the wife of a colleague, who reports to an ambitious Central Committee member. You now know who is watching you, which is valuable — but acting on this knowledge is dangerous.'
        },
        {
          text: 'Request a formal hearing to confront the accusation head-on',
          loyalty: 1,
          cunning: -1,
          reputation: 2,
          survival: 0.6,
          response: 'The Control Commission holds a perfunctory hearing. You deliver an impassioned defense of your loyalty. The commission clears you, but the very existence of the hearing is now in your record, a mark that may resurface years hence.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Colleague Proposes Anti-Stalin Bloc',
      text: 'A senior Party member you have known since 1917 sends you a carefully worded letter suggesting that "like-minded comrades" should coordinate to oppose Stalin\'s growing personal power at the next Party Congress. He asks for your "thoughts on the matter."',
      choices: [
        {
          text: 'Report the letter to Stalin\'s secretariat immediately',
          loyalty: 3,
          cunning: 1,
          reputation: -2,
          survival: 0.85,
          response: 'Stalin\'s office thanks you personally. Your old comrade is summoned for a "conversation" and demoted to a provincial post. Word spreads through Old Bolshevik circles that you cannot be trusted with confidence. Stalin, however, now considers you reliable.'
        },
        {
          text: 'Write a vague reply neither committing nor refusing',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'Your ambiguous response keeps all options open. If the bloc succeeds, you can claim sympathy; if it fails, your letter commits you to nothing. The problem is that your colleague may show your reply to others, and ambiguity can be interpreted many ways.'
        },
        {
          text: 'Burn the letter and distance yourself from the colleague socially',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'You destroy the evidence and begin declining your colleague\'s invitations. He notices the coldness and wonders if you have betrayed him. You have not — but neither have you warned him that his letters may be monitored.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'GPU Report: Religious Activity Among Factory Workers',
      text: 'The GPU reports that workers in a major factory under your jurisdiction are secretly attending Orthodox church services and that a priest is conducting clandestine baptisms. The report warns this "ideological contamination" reflects poorly on local Party leadership.',
      choices: [
        {
          text: 'Order a crackdown — arrest the priest and discipline the workers',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.8,
          response: 'The priest is arrested and several workers are expelled from their union. Production drops as resentful workers slow their pace. Moscow approves of your ideological firmness but notes the decline in output with displeasure.'
        },
        {
          text: 'Increase atheist propaganda but take no direct action',
          loyalty: 0,
          cunning: 1,
          reputation: 1,
          survival: 0.75,
          response: 'You organize lectures and distribute pamphlets. The church attendance continues but more discreetly. The GPU is unsatisfied with your "soft" approach, but the workers continue producing at acceptable levels.'
        },
        {
          text: 'Bury the report and claim the situation has already been resolved',
          loyalty: -1,
          cunning: 2,
          reputation: 0,
          survival: 0.55,
          response: 'Your falsified follow-up report closes the matter temporarily. The workers are grateful for being left alone. But the GPU maintains its own sources, and if they discover your deception, the consequences will be severe.'
        }
      ]
    }
  ],

  'Succession': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Lenin\'s Hidden Testament Addendum',
      text: 'A trusted clerk in the Central Committee archives whispers that an additional page of Lenin\'s Testament exists — one even more damning of Stalin than the known document. The clerk offers to show you the page in exchange for a favor.',
      choices: [
        {
          text: 'See the document and keep the knowledge to yourself',
          loyalty: -1,
          cunning: 3,
          reputation: 0,
          survival: 0.65,
          response: 'The addendum is devastating — Lenin explicitly calls for Stalin\'s removal. You memorize its contents and return it. This is extraordinarily dangerous knowledge. If Stalin learns you have seen it, nothing will save you. But in the right moment, it could be a weapon.'
        },
        {
          text: 'Inform Stalin\'s secretariat about the clerk\'s offer',
          loyalty: 3,
          cunning: 0,
          reputation: -1,
          survival: 0.85,
          response: 'The clerk disappears within days. Stalin\'s people are pleased with your report. You have proven your loyalty, but you will never know if the document was real or a test — and you will always wonder what it said.'
        },
        {
          text: 'Decline the offer but do not report the clerk',
          loyalty: 0,
          cunning: 0,
          reputation: 1,
          survival: 0.7,
          response: 'You walk away from dangerous knowledge. The clerk offers the same deal to someone else. Months later, rumors circulate about the addendum, and you wonder whether you missed a crucial opportunity or avoided a fatal trap.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'GPU Surveillance Report: Zinoviev\'s Private Meetings',
      text: 'GPU surveillance records land on your desk showing that Zinoviev has been holding secret evening meetings with mid-level Party officials. The transcripts are fragmentary but suggest he is building a faction to challenge Stalin at the upcoming Congress.',
      choices: [
        {
          text: 'Deliver the report directly to Stalin',
          loyalty: 3,
          cunning: 1,
          reputation: 0,
          survival: 0.85,
          response: 'Stalin reads the transcripts with cold interest. He thanks you and files the information for later use. You have positioned yourself as a loyal informant, but Zinoviev still has powerful friends, and if the wind changes, they will remember who helped destroy him.'
        },
        {
          text: 'Approach Zinoviev and offer to join his faction',
          loyalty: -3,
          cunning: 1,
          reputation: 0,
          survival: 0.35,
          response: 'Zinoviev is suspicious but welcomes your support. You now have a foot in the opposition camp. If Zinoviev\'s challenge succeeds, you will be rewarded. If it fails — and the GPU already knows about the meetings — your fate is sealed.'
        },
        {
          text: 'Sit on the report and wait to see which side gains strength',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'You file the report in your personal safe and watch events unfold. Eventually Stalin crushes Zinoviev anyway. The report is never missed, but you have gained nothing from it either. At least you have made no new enemies.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Krupskaya\'s Appeal',
      text: 'Lenin\'s widow, Nadezhda Krupskaya, sends you a personal letter asking you to support the publication of Lenin\'s full Testament at the Congress. She writes with obvious anguish about how "Ilyich\'s final wishes are being suppressed."',
      choices: [
        {
          text: 'Speak in favor of publishing the Testament at the Congress',
          loyalty: -2,
          cunning: -1,
          reputation: 3,
          survival: 0.35,
          response: 'Your speech causes a sensation. Many delegates are moved, but Stalin\'s apparatus swiftly mobilizes against you. The Testament is suppressed anyway, and you are marked as an unreliable element. Krupskaya thanks you privately, but her gratitude offers no protection.'
        },
        {
          text: 'Visit Krupskaya privately and advise her to be cautious',
          loyalty: 0,
          cunning: 1,
          reputation: 1,
          survival: 0.75,
          response: 'You counsel patience without making promises. Krupskaya is disappointed but appreciates your honesty. You have maintained a relationship with Lenin\'s legacy without openly challenging Stalin. A delicate balance, but a precarious one.'
        },
        {
          text: 'Show the letter to Molotov to prove your transparency to Stalin\'s circle',
          loyalty: 2,
          cunning: 1,
          reputation: -2,
          survival: 0.8,
          response: 'Molotov nods approvingly and passes word to Stalin. Krupskaya is warned to be more careful in her correspondence. Old Bolsheviks who learn of your betrayal of Lenin\'s widow regard you with contempt, but the men with real power now trust you more.'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Telegram: Trotsky Coordinating with Kamenev',
      text: 'An intercepted telegram reveals that Trotsky and Kamenev, despite their public disagreements, have been secretly coordinating positions on economic policy. The telegram suggests they plan to present a united front against Stalin\'s agricultural program.',
      choices: [
        {
          text: 'Leak the telegram to the Party press to discredit both men',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'The revelation of Trotsky-Kamenev collusion is a political bombshell. Both men are forced into defensive positions. Stalin is pleased by the exposure, and your role in it earns you credit. But you have made two powerful enemies simultaneously.'
        },
        {
          text: 'Use the information privately to extract concessions from Kamenev',
          loyalty: -1,
          cunning: 3,
          reputation: 0,
          survival: 0.6,
          response: 'Kamenev, terrified of exposure, agrees to support your position on several key committee votes. You have gained a temporary puppet, but blackmail is a double-edged weapon — Kamenev may decide that destroying you is safer than complying.'
        },
        {
          text: 'Destroy the telegram and let events take their natural course',
          loyalty: 0,
          cunning: 0,
          reputation: 0,
          survival: 0.75,
          response: 'The Trotsky-Kamenev alliance forms and collapses on its own, as their egos and disagreements are too great. You have neither helped nor hindered anyone. In this period of upheaval, neutrality feels like safety but earns you no friends.'
        }
      ]
    }
  ],

  'Stalin consolidating': [
    {
      type: 'nkvd_report',
      title: 'OGPU Report: Your Deputy\'s Opposition Ties',
      text: 'The OGPU has compiled a file on your deputy showing he attended secret meetings of the "Left Opposition" in 1926-27. He recanted at the time, but the file notes he has been seen dining with former oppositionists. The OGPU asks for your "assessment."',
      choices: [
        {
          text: 'Denounce your deputy and demand his removal',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.85,
          response: 'Your deputy is expelled from the Party and exiled to Kazakhstan. You lose a competent administrator and a friend, but the OGPU is satisfied. His replacement, hand-picked by the OGPU, watches you as much as he works for you.'
        },
        {
          text: 'Vouch for your deputy\'s loyalty and current political reliability',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.5,
          response: 'You write a strong defense of your deputy\'s rehabilitation. The OGPU accepts it for now. But by vouching for him, you have tied your fate to his. If he is ever arrested, your letter of support will be exhibit one in your own file.'
        },
        {
          text: 'Suggest your deputy be transferred to a less sensitive post as a compromise',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'The transfer is approved. Your deputy suspects your involvement but cannot prove it. You have removed the liability without appearing ruthless. The OGPU notes your pragmatism approvingly.'
        }
      ]
    },
    {
      type: 'confession',
      title: 'Confession: Prisoner Names You as Sympathizer',
      text: 'During interrogation, a former Trade Union official has named you as someone who "expressed understanding" for the Right Deviation. The confession is likely coerced, but the OGPU interrogator has included your name in his report to Yagoda.',
      choices: [
        {
          text: 'Demand an immediate meeting with Yagoda to refute the accusation',
          loyalty: 1,
          cunning: 0,
          reputation: 1,
          survival: 0.65,
          response: 'Yagoda listens politely and assures you the mention will be removed from the report. Whether it actually is, you have no way of knowing. You have, however, alerted the OGPU chief to your anxiety, which some would consider a mistake.'
        },
        {
          text: 'Write to Stalin directly, reaffirming your total loyalty to his line',
          loyalty: 3,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'Stalin\'s secretariat acknowledges your letter. The mention in the prisoner\'s confession is quietly buried. You have bypassed the OGPU and gone straight to the top, which protects you for now but may irritate Yagoda.'
        },
        {
          text: 'Provide your own counter-confession naming the prisoner as a known liar',
          loyalty: 1,
          cunning: 2,
          reputation: -1,
          survival: 0.75,
          response: 'You compile a dossier on the prisoner\'s history of fabrication and personal grudges. The interrogator accepts your counter-evidence and strikes your name. But you have now demonstrated a detailed knowledge of the prisoner\'s background that raises its own questions.'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: True Grain Procurement Figures',
      text: 'A statistician in Gosplan has passed you the real grain procurement numbers, which are catastrophically below the official targets. The official figures published in Pravda are pure fabrication. Possessing these numbers is itself dangerous.',
      choices: [
        {
          text: 'Destroy the memo and repeat the official figures in all your reports',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'You burn the real numbers and parrot the lies. When the inevitable famine arrives, you will bear some responsibility — but so will everyone else. The statistician is later arrested for "wrecking." You do not intervene.'
        },
        {
          text: 'Quietly use the real figures to prepare your region for shortages',
          loyalty: -1,
          cunning: 2,
          reputation: 1,
          survival: 0.6,
          response: 'You discreetly adjust local food distribution plans without revealing why. Your region weathers the coming crisis slightly better than neighbors. Some colleagues wonder how you knew to prepare, and the OGPU wonders too.'
        },
        {
          text: 'Present the real figures at a closed Politburo session',
          loyalty: -2,
          cunning: -1,
          reputation: 3,
          survival: 0.3,
          response: 'The room goes silent. Stalin stares at you for a long moment. You have told the truth to power, and power does not appreciate it. The figures are declared "wreckers\' propaganda" and you are removed from your agricultural responsibilities. A dangerous precedent has been set.'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Telegram: Foreign Journalist\'s Questions',
      text: 'An intercepted telegram shows a British journalist in Moscow has been asking questions about you specifically — your background, your policy positions, your relationship with Stalin. The journalist works for a paper sympathetic to the Labour Party.',
      choices: [
        {
          text: 'Report the journalist\'s inquiries and request his expulsion',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.85,
          response: 'The journalist is expelled within days. The NKVD commends your vigilance. But you never learn why a foreign journalist was interested in you specifically, or who was feeding him information about your activities.'
        },
        {
          text: 'Arrange a controlled interview to shape your international image',
          loyalty: -1,
          cunning: 2,
          reputation: 2,
          survival: 0.5,
          response: 'The interview goes well and you receive favorable coverage abroad. But Stalin does not appreciate Soviet officials cultivating independent foreign reputations. Molotov mentions the article to you with a thin smile that contains a warning.'
        },
        {
          text: 'Investigate who has been providing the journalist with information',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.75,
          response: 'You discover that a secretary in your own office has been meeting with the journalist at a café. Whether she is naive or a spy is unclear. You have her transferred and the leak is plugged, but the episode has exposed a vulnerability.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Your Wife\'s Bourgeois Origins',
      text: 'A formal denunciation has been filed noting that your wife\'s father was a minor industrialist before the Revolution. The letter demands that you be investigated for "concealing class-alien family connections" and suggests your wife be expelled from the Party.',
      choices: [
        {
          text: 'Publicly renounce your wife\'s family background at a Party meeting',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.8,
          response: 'Your self-criticism is accepted. Your wife is humiliated but retains her Party card. Your children will carry this stain in their biographies forever. The denouncer is satisfied, but your family life becomes cold and bitter.'
        },
        {
          text: 'Find compromising material on the denouncer and counter-attack',
          loyalty: 0,
          cunning: 3,
          reputation: 0,
          survival: 0.65,
          response: 'You discover the denouncer\'s own brother served in Kolchak\'s army. Your mutual destruction is assured if either presses the attack. An uneasy truce develops — but such truces in Stalin\'s Russia are always temporary.'
        },
        {
          text: 'Ask a senior patron to intervene and quash the denunciation quietly',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'Your patron makes the denunciation disappear, but now you owe a significant favor. In Soviet politics, debts of this kind are always collected, and the price is never known in advance.'
        }
      ]
    }
  ],

  'Collectivization': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Famine Death Toll in Your Region',
      text: 'A trusted local official sends you a secret memorandum with the real death toll from famine in the districts under your authority. The number is staggering — ten times the figure in your official reports to Moscow. The official begs you to do something.',
      choices: [
        {
          text: 'Destroy the memo and maintain the official figures',
          loyalty: 2,
          cunning: 1,
          reputation: -2,
          survival: 0.85,
          response: 'You feed the memo to the fire and continue reporting acceptable numbers. Thousands more will die while Moscow believes the situation is under control. You sleep poorly, but you sleep in your own bed, which is more than many can say.'
        },
        {
          text: 'Send a carefully worded private letter to Moscow requesting emergency grain',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.6,
          response: 'Your letter hints at difficulties without revealing the true scale. Some additional grain is diverted to your region, saving perhaps a few hundred lives. Moscow notes your "pessimistic tendencies" but takes no immediate action against you.'
        },
        {
          text: 'Share the real figures with foreign journalists to force Moscow to act',
          loyalty: -3,
          cunning: -1,
          reputation: 2,
          survival: 0.1,
          response: 'The story reaches the Western press and causes an international scandal. Moscow is furious. The OGPU arrests you within days for "anti-Soviet propaganda." You have told the truth, and the truth has destroyed you. Some lives may be saved by the international attention.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'OGPU Report: Kulak Resistance Network',
      text: 'The OGPU reports that a network of former kulaks is organizing armed resistance to collectivization in your district. They have hidden grain and weapons. The report names a village elder you know to be a decent man who simply wants to feed his family.',
      choices: [
        {
          text: 'Order a full military operation to crush the resistance',
          loyalty: 2,
          cunning: 0,
          reputation: -2,
          survival: 0.85,
          response: 'Red Army troops and OGPU detachments sweep through the villages. The elder and dozens of others are arrested or killed. The grain is confiscated. The district meets its quota, and the dead are filed under "class enemies eliminated."'
        },
        {
          text: 'Negotiate secretly with the elder for voluntary surrender of some grain',
          loyalty: -2,
          cunning: 2,
          reputation: 1,
          survival: 0.45,
          response: 'The elder agrees to surrender half the hidden grain in exchange for his village being left alone. You report the grain as "discovered through OGPU operations." If anyone ever learns you negotiated with kulaks, your career — and life — are over.'
        },
        {
          text: 'Downplay the report and claim the resistance is already collapsing',
          loyalty: -1,
          cunning: 1,
          reputation: 0,
          survival: 0.55,
          response: 'Your reassuring report buys time, but the resistance grows bolder. When Moscow sends its own inspectors and finds an armed uprising, your earlier report is compared unfavorably with reality. An investigation into your "criminal negligence" begins.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Comrade Begs You to Stop the Madness',
      text: 'An old revolutionary comrade stationed in Ukraine writes a harrowing letter describing children dying in the streets, cannibalism in villages, and Party officials who have gone mad. He begs you to speak to Stalin, to "make him see what his policy is doing."',
      choices: [
        {
          text: 'Bring the letter to Stalin, framing it as concerning but loyal',
          loyalty: 1,
          cunning: 1,
          reputation: 0,
          survival: 0.7,
          response: 'Stalin reads the letter and says quietly: "Your comrade exaggerates. There are difficulties, but the kulaks are to blame." Your friend is transferred to a less sensitive post. Stalin appreciates that you brought it to him rather than spreading it.'
        },
        {
          text: 'Write back urging your comrade to be silent for his own safety',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'Your warning arrives too late — your friend has already written similar letters to others. He is arrested a month later. Your reply, mercifully, is not found among his possessions. But the memory of his words haunts you.'
        },
        {
          text: 'Circulate the letter among sympathetic Politburo members',
          loyalty: -2,
          cunning: -1,
          reputation: 2,
          survival: 0.2,
          response: 'The letter passes through three hands before reaching someone who reports it to the OGPU. The trail leads back to you. Your comrade is arrested, and you are called before the Central Control Commission. The walls are closing in.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Local Official Protecting Kulaks',
      text: 'A young Communist zealot has filed a denunciation against the district chairman, claiming he classified genuine kulaks as "middle peasants" to protect them from deportation. You know the chairman — he did this to prevent families with small children from being sent to Siberia in winter.',
      choices: [
        {
          text: 'Support the denunciation and have the chairman replaced',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.85,
          response: 'The chairman is arrested and the families are reclassified and deported. The zealot is promoted. You have sacrificed a decent man to maintain your position. The new chairman enforces collectivization with brutal efficiency.'
        },
        {
          text: 'Quietly reclassify the families yourself to make the issue disappear',
          loyalty: -1,
          cunning: 2,
          reputation: 0,
          survival: 0.6,
          response: 'You adjust the paperwork so the classifications appear correct. The chairman is saved and the families remain. But the zealot is suspicious and may file a second denunciation — this time naming you as an accomplice.'
        },
        {
          text: 'Promote the zealot to a distant post to remove him from the situation',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'The zealot is flattered by his "promotion" to a remote district. The chairman is safe for now. But zealots have long memories and short tempers, and the distant post gives him new people to denounce — including, perhaps, your allies there.'
        }
      ]
    }
  ],

  'Pre-Terror': [
    {
      type: 'nkvd_report',
      title: 'NKVD Report: Suspicious Contacts in Your Office',
      text: 'The NKVD has placed your office under surveillance following the Kirov assassination. A report notes that your secretary received two phone calls from the apartment of a recently arrested "Zinovievite." Your secretary insists they were wrong numbers.',
      choices: [
        {
          text: 'Dismiss your secretary immediately and report her to the NKVD',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.8,
          response: 'Your secretary is taken for interrogation. Under pressure, she "confesses" to passing information to the Zinoviev center. You know the confession is false, but your decisive action has demonstrated your vigilance to the NKVD. Another innocent person is consumed.'
        },
        {
          text: 'Conduct your own quiet investigation before taking action',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.65,
          response: 'You discover the calls were indeed wrong numbers — the arrested man\'s old phone number was reassigned to a grocery store. But while you were investigating, the NKVD noted your hesitation. In these times, hesitation looks like complicity.'
        },
        {
          text: 'Vouch for your secretary and challenge the NKVD\'s methods',
          loyalty: -2,
          cunning: -1,
          reputation: 2,
          survival: 0.35,
          response: 'Your defense of the secretary is noted as "obstructing security operations." The NKVD officer handling the case adds your name to a list of people showing "insufficient vigilance." In the atmosphere after Kirov\'s murder, this list is growing very long.'
        }
      ]
    },
    {
      type: 'confession',
      title: 'Confession: Old Bolshevik Names Entire Circle',
      text: 'A respected Old Bolshevik, broken after weeks of interrogation, has signed a confession naming thirty people as members of a "terrorist conspiracy," including you. The investigator brings you the confession and watches your reaction carefully.',
      choices: [
        {
          text: 'Express outrage and immediately denounce the confessor as a liar',
          loyalty: 1,
          cunning: 0,
          reputation: 0,
          survival: 0.7,
          response: 'Your anger seems genuine enough. The investigator notes your reaction and moves on to the next name on the list. But the confession remains in the file. Confessions have a way of resurfacing when needed, regardless of how they were obtained.'
        },
        {
          text: 'Calmly provide a detailed alibi for every accusation in the confession',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.75,
          response: 'Your methodical, precise refutation impresses the investigator with its thoroughness. Each accusation is matched with documented proof of your whereabouts. The investigator strikes your name — for now. But your very preparedness raises questions: why did you have alibis so readily available?'
        },
        {
          text: 'Offer to help the NKVD investigate the others named in the confession',
          loyalty: 2,
          cunning: 2,
          reputation: -2,
          survival: 0.8,
          response: 'You become an informal collaborator, providing "assessments" of the other twenty-nine names. Your eagerness to help condemn others saves your skin. The NKVD values your cooperation, but everyone who survives this wave will know you helped the executioners.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: German Military Attaché\'s Interest',
      text: 'An NKVD intelligence report reveals that the German military attaché in Moscow has been gathering information about Soviet military commanders, specifically those with ties to Tukhachevsky. Your name appears on a list the German compiled of "potentially approachable" Soviet officials.',
      choices: [
        {
          text: 'Report yourself to the NKVD immediately and request protective surveillance',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'Your preemptive self-report is seen as a sign of loyalty. The NKVD places you under "protective observation," which means they watch you constantly. You are safe from the German accusation but now live under a microscope.'
        },
        {
          text: 'Investigate why the German considers you "approachable"',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.6,
          response: 'You discover that you once attended a diplomatic reception where you spoke with the attaché about German philosophy. This innocent conversation has been transformed into evidence of potential treason. In this climate, any foreign contact is suspicious.'
        },
        {
          text: 'Use this information to denounce Tukhachevsky\'s circle before they can denounce you',
          loyalty: 1,
          cunning: 2,
          reputation: -2,
          survival: 0.7,
          response: 'Your denunciation of the military commanders contributes to the growing case against Tukhachevsky. You have helped destroy the Red Army\'s best officers, but you have also ensured that when the list of "approachable" officials is investigated, you will be seen as the one who exposed it.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Bukharin\'s Last Appeal',
      text: 'A letter reaches you through a chain of intermediaries, written in Bukharin\'s unmistakable style. He writes that he knows he will be arrested soon and begs Party members to "remember that I loved the Revolution" and to preserve his theoretical manuscripts.',
      choices: [
        {
          text: 'Turn the letter over to the NKVD as evidence of Bukharin\'s conspiracy network',
          loyalty: 3,
          cunning: 0,
          reputation: -2,
          survival: 0.85,
          response: 'The NKVD traces the chain of intermediaries. Several are arrested. Bukharin\'s letter becomes evidence at his trial. Your loyalty is beyond question, and the intermediaries who brought you the letter will never forgive you — but they will not be in a position to act on their anger.'
        },
        {
          text: 'Hide the letter and the manuscripts somewhere safe',
          loyalty: -2,
          cunning: 1,
          reputation: 2,
          survival: 0.3,
          response: 'You conceal the documents in the false bottom of a bookcase. It is an act of extraordinary courage and extraordinary foolishness. If they are found during a search, nothing will save you. But if they survive, a piece of Bolshevik intellectual history is preserved.'
        },
        {
          text: 'Burn the letter and tell no one it ever existed',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'The letter burns quickly. Bukharin\'s words disappear. You have protected yourself without actively harming anyone. But the intermediaries know the letter reached you, and they may wonder what you did with it.'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: NKVD Arrest Quotas for Your District',
      text: 'A leaked internal NKVD document reaches you showing that your district has been assigned a quota: 350 arrests in the "first category" (execution) and 1,200 in the "second category" (labor camps). The operation begins next month.',
      choices: [
        {
          text: 'Cooperate fully and help compile the lists of names',
          loyalty: 2,
          cunning: 0,
          reputation: -3,
          survival: 0.8,
          response: 'You work with the local NKVD to fill the quotas. Former kulaks, priests, petty criminals, and personal enemies of local officials fill the lists. The quota is met on schedule. You have become an efficient instrument of mass terror, and you will carry these names forever.'
        },
        {
          text: 'Request that the quotas for your district be reduced, citing labor needs',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.65,
          response: 'You argue that arresting so many workers will cripple local industry. Moscow agrees to a modest reduction. You have saved perhaps a hundred lives through bureaucratic maneuvering. The NKVD officer notes your "softness" but accepts the revised numbers.'
        },
        {
          text: 'Warn specific people you know are on the preliminary lists',
          loyalty: -2,
          cunning: 1,
          reputation: 2,
          survival: 0.25,
          response: 'You manage to warn a dozen people, some of whom flee to remote areas. When the NKVD notices the unusual number of absences, an investigation begins. The trail may or may not lead to you, but the terror of waiting is itself a kind of punishment.'
        }
      ]
    }
  ],

  'Post-Terror': [
    {
      type: 'nkvd_report',
      title: 'NKVD Report: Beria Investigating Previous Terror Excesses',
      text: 'With Yezhov\'s fall and Beria\'s ascent, the NKVD is now investigating "excesses" committed during the Great Terror. A report crosses your desk noting that several officials in your department were arrested on evidence you helped compile. Beria\'s people want to know if the cases were "properly founded."',
      choices: [
        {
          text: 'Insist that all arrests were justified and the evidence was sound',
          loyalty: 1,
          cunning: 0,
          reputation: -1,
          survival: 0.7,
          response: 'Your defense of the old cases puts you at odds with Beria\'s narrative that Yezhov\'s people fabricated evidence. If the political wind blows toward "rehabilitation," you will be exposed as a defender of false accusations. But for now, consistency is a form of defense.'
        },
        {
          text: 'Blame Yezhov\'s local operatives for pressuring you into compliance',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'You paint yourself as a reluctant participant who was coerced by Yezhov\'s thugs. Beria\'s investigators find this narrative convenient — they need living scapegoats below Yezhov\'s level. Your former NKVD contacts are sacrificed, and you survive as a "victim of Yezhov\'s excesses."'
        },
        {
          text: 'Advocate for rehabilitation of those you know were innocent',
          loyalty: -1,
          cunning: 0,
          reputation: 3,
          survival: 0.55,
          response: 'You push for the release of several people you know were falsely accused. Some are freed and are pathetically grateful. But your advocacy draws attention to your own role in the original arrests, and Beria files this information for potential future use.'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: War Preparations and Industrial Deficiencies',
      text: 'A classified military-industrial report reveals that Soviet tank production is far behind schedule and that many existing tanks have critical mechanical defects. With war in Europe spreading, the implications are terrifying. The report is marked for Politburo eyes only.',
      choices: [
        {
          text: 'Present the findings at the next Politburo meeting and demand action',
          loyalty: 0,
          cunning: 0,
          reputation: 2,
          survival: 0.55,
          response: 'Stalin listens with visible irritation. "Who prepared this defeatist report?" he asks. The meeting ends with orders to accelerate production but no acknowledgment of the quality problems. You have been associated with bad news, which is never safe.'
        },
        {
          text: 'Quietly redirect resources to fix the defects in your industrial sector',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.75,
          response: 'Without drawing attention, you prioritize quality control in the factories under your authority. When war comes, tanks from your sector will perform marginally better. But the overall problem remains catastrophic, and your quiet fix addresses only a fraction of it.'
        },
        {
          text: 'File the report without comment and let others take responsibility',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.8,
          response: 'The report enters the bureaucratic machinery and is diluted through layers of reassuring commentary. By the time it reaches Stalin, the alarming conclusions have been softened to near-meaninglessness. You are safe, and the Red Army remains unprepared.'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Telegram: Molotov-Ribbentrop Secret Protocol Details',
      text: 'You receive intelligence indicating that details of the secret protocols of the Molotov-Ribbentrop Pact — the division of Eastern Europe — have leaked to British intelligence. If this becomes public, the Soviet Union\'s moral authority among Western leftists will collapse.',
      choices: [
        {
          text: 'Report the leak and suggest a disinformation campaign',
          loyalty: 2,
          cunning: 2,
          reputation: 0,
          survival: 0.85,
          response: 'You propose planting false documents to muddy the waters. Molotov approves your plan. The disinformation buys time, though the truth will eventually emerge. Your initiative has marked you as a resourceful operator in foreign affairs.'
        },
        {
          text: 'Investigate the source of the leak within the Soviet apparatus',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'Your investigation points to a translator in the Foreign Ministry. The NKVD takes over and the translator disappears. You have solved the problem but also gained dangerous knowledge about the Pact\'s secret terms, which very few are supposed to know.'
        },
        {
          text: 'Suggest preparing public opinion for the eventual revelation',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.5,
          response: 'Your suggestion that the Soviet public should be gradually prepared for the truth is met with cold stares. "There is no truth here to prepare for," Molotov says flatly. Your suggestion has been interpreted as disloyalty to the official fiction.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Colleague Accused of Defeatism',
      text: 'A colleague in the military planning committee has been denounced for "defeatist talk" after privately suggesting that the Red Army is not ready to fight Germany. You know his assessment is entirely correct. The denouncer is an incompetent careerist.',
      choices: [
        {
          text: 'Stay silent and let the denunciation proceed',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'Your colleague is removed from the planning committee and sent to a minor post. The careerist takes his place and produces optimistic reports that please Stalin. When the Germans invade, the absence of honest military planners will be felt in blood.'
        },
        {
          text: 'Defend your colleague\'s analysis using classified readiness data',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.4,
          response: 'Your defense is passionate and well-documented. It is also politically suicidal. Both you and your colleague are now branded as "panic-mongers." The classified data you cited is reclassified as "defeatist fabrication." Truth has become treason.'
        },
        {
          text: 'Privately discredit the denouncer to protect your colleague indirectly',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.75,
          response: 'You quietly spread information about the denouncer\'s incompetence and questionable background. His credibility suffers, and the denunciation loses force. Your colleague survives, though he is watched more carefully. The denouncer suspects your involvement.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Relative in the Camps Begs for Intervention',
      text: 'A letter smuggled from a labor camp reaches you from your wife\'s brother, who was arrested during the Terror. He describes horrific conditions and begs you to petition for his release, now that "Yezhov\'s excesses" are being corrected.',
      choices: [
        {
          text: 'Petition Beria\'s office for a case review citing new NKVD policy',
          loyalty: 0,
          cunning: 1,
          reputation: 1,
          survival: 0.65,
          response: 'Beria\'s office agrees to review the case. After months of waiting, your brother-in-law is quietly released and exiled to a provincial city. He is broken and aged beyond his years. Your wife weeps with relief, and you have demonstrated that the system can show mercy — when someone with connections asks.'
        },
        {
          text: 'Ignore the letter — any connection to a prisoner is dangerous',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'You tell your wife there is nothing you can do. She does not believe you and the silence between you grows. Your brother-in-law dies of typhus the following winter. You learn of it months later from another released prisoner.'
        },
        {
          text: 'Send money and supplies through unofficial channels',
          loyalty: -1,
          cunning: 0,
          reputation: 1,
          survival: 0.6,
          response: 'The package reaches the camp and buys your brother-in-law better rations for a few months. The camp administration notices the package and reports the irregularity. An NKVD file is opened noting your "contact with convicted enemies." Your wife\'s gratitude is the only reward.'
        }
      ]
    }
  ],

  'Late Stalin': [
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Western Spy in the Central Committee',
      text: 'An MGB report claims that a Western intelligence agency has recruited an agent within the Central Committee apparatus. The report is vague — based on intercepted radio signals — but suggests the spy has access to Politburo minutes. Suspicion falls on several officials, including you.',
      choices: [
        {
          text: 'Volunteer to lead the internal investigation yourself',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'By leading the investigation, you control its direction. You steer suspicion toward a rival whose removal would benefit you. The MGB is grateful for your cooperation, though Abakumov notes that the fox is guarding the henhouse.'
        },
        {
          text: 'Provide the MGB with detailed records of your own activities to clear yourself',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.65,
          response: 'Your transparent cooperation removes you from the suspect list, but the MGB now has a comprehensive record of your daily activities, contacts, and habits. This information, in the wrong hands, could be weaponized against you at any time.'
        },
        {
          text: 'Suggest the report itself may be Western disinformation designed to cause paranoia',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.55,
          response: 'Your analysis is intellectually sound but politically dangerous. Questioning MGB intelligence is close to questioning the MGB itself. The suggestion is filed away, and you are marked as someone who "minimizes the spy threat."'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: Stalin\'s Declining Health',
      text: 'A physician you trust whispers that Stalin\'s health is deteriorating rapidly — high blood pressure, memory lapses, paranoid episodes worse than usual. The doctor is terrified and asks your advice on whether to report this through official channels.',
      choices: [
        {
          text: 'Advise the doctor to say nothing and forget he told you',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'The doctor remains silent. Stalin\'s health continues to decline without proper treatment. You carry this dangerous knowledge alone, unable to act on it, unable to share it. When Stalin finally collapses, you will be better prepared than most — if you survive until then.'
        },
        {
          text: 'Quietly inform Malenkov, who is positioning himself for the succession',
          loyalty: -1,
          cunning: 3,
          reputation: 0,
          survival: 0.65,
          response: 'Malenkov receives the information with studied calm and thanks you. You have invested in a potential successor, but if Stalin recovers or learns of the leak, both you and Malenkov will face the wrath of a paranoid dictator who now knows his inner circle is plotting.'
        },
        {
          text: 'Report the doctor\'s concerns through Beria\'s medical channels',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.5,
          response: 'Beria receives the information and immediately has the doctor transferred. The Doctors\' Plot atmosphere makes any medical discussion around Stalin radioactive. Beria files the information and watches you more carefully — you now know too much about Stalin\'s vulnerability.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Jewish Colleague Linked to "Cosmopolitanism"',
      text: 'During the anti-cosmopolitan campaign, a denunciation arrives accusing your Jewish colleague of maintaining secret ties to relatives in Israel and of "rootless cosmopolitan attitudes." Your colleague is a decorated war veteran and a dedicated Communist.',
      choices: [
        {
          text: 'Defend your colleague by citing his war record and party loyalty',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.4,
          response: 'Your defense is noted but brushed aside. "War records do not erase Zionist connections," the investigator says. Your colleague is demoted anyway, and your defense of him places you under scrutiny. In the current campaign, defending Jews is itself suspicious.'
        },
        {
          text: 'Remain silent and let the campaign take its course',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'Your colleague is removed from his position and eventually arrested during the Doctors\' Plot hysteria. You attended his arrest without protest, just as dozens of others did. The guilt is shared so widely it almost disappears — almost.'
        },
        {
          text: 'Quietly help your colleague prepare to be transferred to a less visible post',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'You arrange a transfer to an obscure industrial post in the Urals before the denunciation is fully processed. Your colleague survives the campaign in provincial obscurity. He understands what you did and writes you a letter of thanks that you immediately burn.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'MGB Report: Leningrad Affair Connections',
      text: 'The MGB is expanding the Leningrad Affair investigation. A report notes that you attended a conference in Leningrad in 1948 organized by Voznesensky, now arrested. The MGB asks you to provide a "detailed account" of your interactions at the conference.',
      choices: [
        {
          text: 'Provide a minimal, factual account emphasizing the conference was routine',
          loyalty: 1,
          cunning: 1,
          reputation: 0,
          survival: 0.7,
          response: 'Your careful statement describes a boring economic conference with no political content. The MGB accepts it, though the investigator circles several names you mentioned and asks follow-up questions that suggest the net is still widening.'
        },
        {
          text: 'Add incriminating details about other attendees to deflect attention',
          loyalty: 1,
          cunning: 2,
          reputation: -2,
          survival: 0.8,
          response: 'Your "enhanced" account provides the MGB with new leads, drawing investigators away from you and toward others. Two more officials are arrested based partly on your testimony. You are safe, but the Leningrad Affair grows larger with each new confession.'
        },
        {
          text: 'Refuse to provide the account, citing that the conference was officially sanctioned',
          loyalty: -1,
          cunning: -1,
          reputation: 1,
          survival: 0.35,
          response: 'Your refusal is unprecedented and infuriating to the MGB. "Official sanction at the time does not mean the events were not criminal," the investigator explains coldly. Your name moves up on the list of people requiring "further attention."'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Communication: Beria\'s Private Network',
      text: 'Through a trusted source, you learn that Beria has been building a private intelligence network parallel to the official MGB, answering only to him. The network includes agents in every Politburo member\'s household staff.',
      choices: [
        {
          text: 'Report Beria\'s parallel network to Stalin through a trusted intermediary',
          loyalty: 1,
          cunning: 1,
          reputation: 0,
          survival: 0.5,
          response: 'The information reaches Stalin, who is already suspicious of Beria. But Stalin is suspicious of everyone, and your intermediary may be compromised. If Beria traces the leak to you before Stalin acts, you will not survive the week.'
        },
        {
          text: 'Keep the information to yourself as insurance against Beria',
          loyalty: 0,
          cunning: 3,
          reputation: 0,
          survival: 0.7,
          response: 'Knowledge of Beria\'s network is a powerful card, but one that can only be played once. You note the details and wait. After Stalin dies, this information will become either your greatest asset or your death warrant, depending on who wins the succession struggle.'
        },
        {
          text: 'Approach Beria directly and offer to cooperate with his network',
          loyalty: -1,
          cunning: 1,
          reputation: -1,
          survival: 0.6,
          response: 'Beria receives your offer with reptilian calm. He neither confirms nor denies the network\'s existence, but from that day forward, you receive subtle favors. You are now in Beria\'s pocket, which is a warm place — until it is not.'
        }
      ]
    }
  ],

  'Thaw': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Khrushchev\'s Planned Denouncement of Stalin',
      text: 'Weeks before the Twentieth Congress, a trusted ally whispers that Khrushchev is preparing a secret speech denouncing Stalin\'s crimes. The details are explosive — the Terror, the military purges, the deportation of nations. You must decide your position before the speech is delivered.',
      choices: [
        {
          text: 'Position yourself as an early supporter of de-Stalinization',
          loyalty: 1,
          cunning: 2,
          reputation: 2,
          survival: 0.8,
          response: 'When the secret speech is delivered, you are already prepared with statements supporting the new line. Khrushchev notes your quick alignment with approval. But former Stalinists who now fear exposure remember that you moved suspiciously fast.'
        },
        {
          text: 'Wait for the speech and then gauge the reaction before committing',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'You sit through the speech with a carefully neutral expression while delegates weep and gasp around you. Your delayed reaction is neither praised nor condemned. You have sacrificed the advantage of early positioning for the safety of caution.'
        },
        {
          text: 'Warn former Stalinist allies to prepare their defenses',
          loyalty: -1,
          cunning: 1,
          reputation: -1,
          survival: 0.6,
          response: 'Your warnings allow several old-guard officials to prepare self-critical statements in advance. They are grateful, but Khrushchev\'s people wonder how so many Stalinists were ready with their recantations. Someone is suspected of leaking, and the circle of suspects is small.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Gulag Survivor Asks for Rehabilitation',
      text: 'A letter arrives from a former colleague who spent fifteen years in the Gulag. He writes with painful dignity, asking you to support his formal rehabilitation. You know he was innocent — and you know your silence in 1937 contributed to his arrest.',
      choices: [
        {
          text: 'Champion his rehabilitation case actively and publicly',
          loyalty: 0,
          cunning: 0,
          reputation: 3,
          survival: 0.7,
          response: 'Your public advocacy helps secure his rehabilitation. He returns to Moscow as a gaunt shadow of the man you knew. The rehabilitation commission notes your "courageous support," but also notes that you were in a position to help in 1937 and did not.'
        },
        {
          text: 'Support the rehabilitation quietly through bureaucratic channels',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.85,
          response: 'You file the necessary paperwork and make quiet phone calls. The rehabilitation proceeds without your name being prominently attached. Your former colleague is freed and restored, but he knows you helped only when it was safe to do so.'
        },
        {
          text: 'Ignore the letter — too many of your past actions might be exposed',
          loyalty: 0,
          cunning: 1,
          reputation: -2,
          survival: 0.8,
          response: 'You burn the letter as you have burned so many before. Your former colleague is eventually rehabilitated without your help. When he returns, he learns of your silence and joins those who quietly despise the apparatchiks who survived by abandoning their friends.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'KGB Report: Anti-Soviet Sentiments in Satellite States',
      text: 'A KGB report details growing unrest in Hungary and Poland. Workers and intellectuals are demanding reforms inspired by Khrushchev\'s secret speech. The report warns that the situation may require "decisive action" to prevent the collapse of socialist governments.',
      choices: [
        {
          text: 'Advocate for military intervention to maintain order',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.8,
          response: 'Your hawkish position aligns with the eventual decision to send tanks into Budapest. The intervention succeeds militarily but produces international condemnation. You are seen as a reliable hardliner, which has its uses in Kremlin politics.'
        },
        {
          text: 'Propose political reforms in satellite states to defuse tensions',
          loyalty: -1,
          cunning: 1,
          reputation: 2,
          survival: 0.6,
          response: 'Your reform proposals are seen as dangerously naive by the military establishment. When Hungary erupts into revolution, hardliners point to your position as the kind of weakness that encouraged the uprising. The Thaw has its limits, and you have found them.'
        },
        {
          text: 'Recommend a mixed approach — reforms in Poland, firmness in Hungary',
          loyalty: 1,
          cunning: 2,
          reputation: 1,
          survival: 0.75,
          response: 'Your nuanced position proves prescient — Poland is managed with political concessions while Hungary requires force. Khrushchev notes your balanced judgment, and you emerge with a reputation for pragmatic thinking in foreign affairs.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Writer Publishing Anti-Soviet Manuscript Abroad',
      text: 'The KGB reports that a prominent Soviet writer has secretly sent a manuscript to a Western publisher. The book describes life in the Gulag in devastating detail. The writer is well-known and internationally respected. The KGB asks for a political assessment before acting.',
      choices: [
        {
          text: 'Recommend the writer be allowed to publish under controlled conditions',
          loyalty: -1,
          cunning: 1,
          reputation: 2,
          survival: 0.55,
          response: 'Your recommendation is rejected. The KGB and cultural hardliners are horrified by the suggestion. The writer is harassed and eventually expelled. Your advocacy for cultural freedom is noted by both reformers and conservatives — the former with gratitude, the latter with suspicion.'
        },
        {
          text: 'Support the KGB\'s recommendation to suppress the manuscript',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.85,
          response: 'The manuscript is suppressed within the Soviet Union, though copies circulate abroad. The writer is stripped of his position. You have maintained your standing with the security services, at the cost of being associated with cultural repression during a period of supposed liberalization.'
        },
        {
          text: 'Suggest privately negotiating with the writer to modify the most damaging passages',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.7,
          response: 'You arrange a secret meeting with the writer. He agrees to some modifications in exchange for domestic publication. The compromise satisfies no one completely, but it prevents an international scandal. The KGB is suspicious of your contacts with the writer.'
        }
      ]
    }
  ],

  'Khrushchev': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Khrushchev\'s Agricultural Fantasies',
      text: 'An agricultural ministry report, suppressed before publication, shows that Khrushchev\'s Virgin Lands campaign is producing disastrous soil erosion and that his corn-planting obsession has wasted millions of hectares. The real harvest figures are a fraction of the announced totals.',
      choices: [
        {
          text: 'Present the data to Khrushchev privately, framing it as correctable problems',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.65,
          response: 'Khrushchev listens impatiently and then explodes in anger. "Defeatists and saboteurs!" he shouts, blaming local officials. He does not blame you for bringing the news, but he does not thank you either. The agricultural disaster continues.'
        },
        {
          text: 'Share the report with Brezhnev and other Khrushchev critics',
          loyalty: -2,
          cunning: 3,
          reputation: 0,
          survival: 0.7,
          response: 'Brezhnev receives the data with great interest. This kind of ammunition will be useful when the time comes to move against Khrushchev. You have joined the conspiracy — quietly, deniably, but irrevocably. If the plot fails, you will fall with the plotters.'
        },
        {
          text: 'File the report and continue supporting Khrushchev\'s agricultural line publicly',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.75,
          response: 'You give speeches praising the Virgin Lands and the corn program. Khrushchev is pleased. The soil continues to erode, and when the harvest fails spectacularly, your public support for the program will be on record — but so will everyone else\'s.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Cuban Missile Crisis Deliberations',
      text: 'During the Cuban crisis, you receive intelligence that American strategic forces have been placed on DEFCON 2 — one step below nuclear war. Khrushchev is vacillating between escalation and withdrawal. Several Presidium members are urging different courses of action.',
      choices: [
        {
          text: 'Advocate strongly for withdrawing the missiles to prevent nuclear war',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.7,
          response: 'Your voice joins those urging retreat. The missiles are withdrawn, the world survives, but Khrushchev is humiliated. Hawks in the military remember your "defeatism" and hardliners note your willingness to back down before American pressure.'
        },
        {
          text: 'Support Khrushchev\'s position, whatever it currently is',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.75,
          response: 'You echo Khrushchev\'s shifting positions with practiced agility. When he decides to withdraw, you praise his statesmanship. When he blusters, you applaud his firmness. Your flexibility is noted by colleagues who are deciding whether Khrushchev should remain in power.'
        },
        {
          text: 'Privately compile a record of the decision-making for future leverage',
          loyalty: 0,
          cunning: 3,
          reputation: 0,
          survival: 0.8,
          response: 'You keep detailed notes of who said what during the crisis. This record becomes invaluable political ammunition — evidence of who panicked, who was reckless, who was wise. After Khrushchev\'s fall, this record will help you navigate the new order.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Military Commander\'s Complaint About Khrushchev\'s Cuts',
      text: 'A senior military commander writes to you privately, furious about Khrushchev\'s decision to slash conventional forces in favor of nuclear weapons. He claims the military is being "gutted" and asks you to raise the issue in the Presidium.',
      choices: [
        {
          text: 'Raise the military\'s concerns in the Presidium, supporting larger conventional forces',
          loyalty: -1,
          cunning: 0,
          reputation: 1,
          survival: 0.55,
          response: 'Khrushchev dismisses your intervention as "militarist thinking." The military is grateful for your support, but Khrushchev is annoyed. You have gained powerful friends in the armed forces and a powerful enemy in the General Secretary.'
        },
        {
          text: 'Show the letter to Khrushchev as evidence of military insubordination',
          loyalty: 2,
          cunning: 0,
          reputation: -2,
          survival: 0.75,
          response: 'Khrushchev is furious at the commander\'s presumption and orders his dismissal. You have proven your loyalty to the General Secretary but made a mortal enemy of the military establishment. Generals have long memories and many friends.'
        },
        {
          text: 'Acknowledge the commander\'s concerns privately while taking no official action',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'You write a sympathetic but noncommittal reply. The commander is not satisfied but appreciates that you listened. You have maintained relationships with both the military and Khrushchev without committing to either side in this dispute.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'KGB Report: Plotting Against Khrushchev',
      text: 'A KGB contact you trust tells you off the record that Brezhnev, Suslov, and Shelepin are organizing to remove Khrushchev at the next Central Committee plenum. The plot is well advanced. Your contact asks which side you intend to support.',
      choices: [
        {
          text: 'Join the conspiracy against Khrushchev',
          loyalty: -2,
          cunning: 2,
          reputation: 0,
          survival: 0.75,
          response: 'You attend a secret meeting at Brezhnev\'s dacha. The plotters welcome your support. When Khrushchev is removed, you are rewarded with a promotion. But conspirators are never fully trusted — those who betray one leader can betray another.'
        },
        {
          text: 'Warn Khrushchev about the conspiracy',
          loyalty: 3,
          cunning: 0,
          reputation: 1,
          survival: 0.35,
          response: 'Khrushchev is initially dismissive but then alarmed. However, the conspiracy is too widespread to stop. When Khrushchev falls anyway, the plotters know you tried to save him. Your career under the new leadership begins under a very dark cloud.'
        },
        {
          text: 'Stay neutral and wait to see which side wins before committing',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.7,
          response: 'You claim illness and miss several key meetings. When Khrushchev falls, you congratulate Brezhnev with appropriate enthusiasm. The plotters note that you did not help them, but also that you did not oppose them. You are tolerated but not rewarded.'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Communication: Sino-Soviet Split Intelligence',
      text: 'An intercepted communication reveals that Mao is privately telling other Communist leaders that Khrushchev is a "revisionist fool" and that China is preparing to develop nuclear weapons independently. The split between the two Communist giants is becoming irreparable.',
      choices: [
        {
          text: 'Advocate for a diplomatic initiative to repair relations with China',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your proposal for reconciliation is rejected by Khrushchev, who sees Mao as ungrateful and dangerous. Suslov accuses you of "capitulating to Chinese chauvinism." The Sino-Soviet split widens, and your advocacy for engagement is filed alongside other failed initiatives.'
        },
        {
          text: 'Use the intelligence to argue for accelerating Soviet nuclear superiority',
          loyalty: 1,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'Your hawkish analysis plays well with the military-industrial complex. Resources are directed toward maintaining nuclear superiority over both the West and China. You are seen as a clear-headed analyst of the new geopolitical reality.'
        },
        {
          text: 'Propose covert operations to slow China\'s nuclear program',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.7,
          response: 'Your proposal for sabotage operations against Chinese nuclear facilities is considered seriously at the highest levels. The KGB begins planning, though the operations are never fully implemented. You have demonstrated a willingness to think boldly about the Chinese threat.'
        }
      ]
    }
  ],

  'Brezhnev': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Prague Spring Assessment',
      text: 'An internal report from the Soviet embassy in Prague warns that Dubcek\'s reforms are spiraling beyond control and that Czechoslovakia may leave the Warsaw Pact. The report recommends immediate military intervention. A minority opinion attached argues that reforms can be contained politically.',
      choices: [
        {
          text: 'Support immediate military intervention',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.85,
          response: 'Your hawkish stance aligns with the eventual decision to invade. The "Brezhnev Doctrine" is established — limited sovereignty for socialist states. You are seen as a reliable defender of the socialist camp, though Western media condemns the invasion and some Eastern European allies harbor deep resentment.'
        },
        {
          text: 'Argue for political pressure and negotiation before military action',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your moderate stance is overruled by the hawks. When the tanks roll into Prague, your earlier hesitation is remembered. Brezhnev\'s inner circle categorizes you as "unreliable on questions of socialist defense." The label sticks.'
        },
        {
          text: 'Propose sending Dubcek an ultimatum with a strict deadline',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'Your compromise gives the appearance of diplomacy while setting conditions Dubcek cannot meet. When the deadline passes, the invasion proceeds with the veneer of legitimacy. You have provided useful political cover for a decision that was already made.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Dissident\'s Manuscript Circulating in Samizdat',
      text: 'The KGB reports that a dissident scientist has written a manifesto calling for democratization and convergence with the West. The manuscript is spreading through samizdat networks. The KGB recommends arrest, but the scientist is internationally famous and arrest would cause a diplomatic incident.',
      choices: [
        {
          text: 'Recommend internal exile rather than arrest to minimize international attention',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'Your recommendation for a less dramatic punishment is adopted. The scientist is stripped of his privileges and sent to a closed city. The West protests but less than it would have over an arrest. You have demonstrated the art of repression with a lighter touch.'
        },
        {
          text: 'Argue that the dissident should be allowed to emigrate',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your suggestion is rejected as "surrendering to Western pressure." The KGB considers your position suspiciously liberal. Suslov gives you a lecture on ideological vigilance that feels more like a warning than advice.'
        },
        {
          text: 'Organize a public campaign of "spontaneous" denunciation by fellow scientists',
          loyalty: 2,
          cunning: 2,
          reputation: -1,
          survival: 0.85,
          response: 'You arrange for colleagues to write letters condemning the dissident. The orchestrated campaign provides domestic cover while the KGB handles enforcement. Your talent for combining propaganda with coercion is noted approvingly by the Central Committee apparatus.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Détente Secrets',
      text: 'You receive a classified briefing on the ongoing SALT negotiations. The report reveals that Soviet missile numbers have been deliberately misrepresented to the Americans, and that several "civilian" space facilities are actually military installations. The Americans may already suspect.',
      choices: [
        {
          text: 'Support maintaining the deception as essential to national security',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.85,
          response: 'Your support for the ongoing deception aligns with military-industrial interests. Détente continues based on mutual fictions. When the deceptions eventually unravel, you will share responsibility, but so will the entire leadership.'
        },
        {
          text: 'Argue for more honest negotiations to build sustainable agreements',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.5,
          response: 'Your argument for transparency is mocked as naive. The Defense Minister asks whether you are "working for Kissinger." Your reputation as a serious defense thinker takes a severe blow, though the Foreign Ministry\'s reformist wing respects your position.'
        },
        {
          text: 'Propose using the deception as a bargaining chip in negotiations',
          loyalty: 0,
          cunning: 3,
          reputation: 1,
          survival: 0.75,
          response: 'Your suggestion to gradually reveal the deception in exchange for American concessions shows sophisticated strategic thinking. Gromyko is impressed and includes elements of your proposal in the negotiating strategy. You have gained a powerful ally in the Foreign Ministry.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Old Comrade Warns of Economic Stagnation',
      text: 'A senior economist and old friend writes to you privately warning that the Soviet economy is entering a systemic crisis. Industrial growth is slowing, technology is falling behind the West, and consumer goods shortages are breeding cynicism. He encloses charts that make grim reading.',
      choices: [
        {
          text: 'Propose an economic reform program based on the analysis',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.5,
          response: 'Your reform proposals are received with suspicion. Brezhnev has no appetite for economic experiments after Khrushchev\'s destabilizing reforms. Kosygin once tried something similar and was quietly sidelined. Your proposals join a growing pile of unread reform documents.'
        },
        {
          text: 'Share the analysis selectively with reform-minded officials',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.75,
          response: 'A small circle of officials begins meeting informally to discuss economic modernization. Your salon attracts bright young technocrats like Andropov\'s protégés. The discussions are stimulating but politically dangerous if perceived as a faction.'
        },
        {
          text: 'Acknowledge the problems privately but maintain the official optimistic line',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'You thank your friend for the analysis and lock it in your personal safe. Publicly, you continue praising "developed socialism." The disconnect between private knowledge and public statements is corrosive, but it is a corrosion shared by the entire leadership.'
        }
      ]
    }
  ],

  'Stagnation': [
    {
      type: 'nkvd_report',
      title: 'KGB Report: Corruption Network in Your Ministry',
      text: 'The KGB has uncovered an extensive corruption network in your ministry. Officials are embezzling construction funds, accepting bribes from Georgian fruit traders, and selling state property. Several of your direct subordinates are implicated. The report is sent to you "for action."',
      choices: [
        {
          text: 'Launch a thorough anti-corruption campaign in your ministry',
          loyalty: 0,
          cunning: 0,
          reputation: 2,
          survival: 0.6,
          response: 'Your cleanup operation exposes dozens of corrupt officials. The ministry is in chaos for months. Brezhnev\'s office calls to suggest that "stability" is more important than "excessive vigilance." The message is clear: you have gone too far.'
        },
        {
          text: 'Sacrifice a few minor officials while protecting the key players',
          loyalty: 0,
          cunning: 3,
          reputation: 0,
          survival: 0.85,
          response: 'You stage a carefully managed purge. A few scapegoats are arrested, the KGB receives their report, and the real corruption network continues under tighter security. Your subordinates are grateful and more careful. Business as usual resumes.'
        },
        {
          text: 'Report the matter to Brezhnev\'s office and let them decide the scope',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'Brezhnev\'s office quietly buries the report. The corruption continues. You have demonstrated loyalty to the system of mutual protection that keeps the entire elite afloat. The KGB investigator who compiled the report is transferred to a provincial office.'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: Afghanistan Intervention Assessment',
      text: 'A classified military assessment warns that the situation in Afghanistan is deteriorating rapidly and that the Afghan communist government may collapse without direct Soviet military support. The assessment recommends a "limited intervention" but warns of the risks of a prolonged guerrilla war.',
      choices: [
        {
          text: 'Support the intervention, arguing that socialist solidarity demands it',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.8,
          response: 'Your support adds to the chorus calling for action. Soviet troops enter Afghanistan. The "limited intervention" becomes a ten-year war. Your early support is on record, and as casualties mount, that record becomes increasingly uncomfortable.'
        },
        {
          text: 'Oppose the intervention, citing the risks of a prolonged guerrilla war',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your opposition is overruled by the majority. When the war drags on for years, your prescience is remembered by some — but the leadership that ignored your advice is still in power and does not appreciate being reminded of their mistake.'
        },
        {
          text: 'Abstain from the decision, claiming insufficient expertise on Afghan affairs',
          loyalty: 0,
          cunning: 1,
          reputation: -1,
          survival: 0.75,
          response: 'Your abstention is noted as cowardice by both hawks and doves. In Soviet politics, failing to take a position is itself a position — one that suggests you lack the conviction to lead. But at least you cannot be blamed for the outcome.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: KGB Chairman\'s Confidential Assessment',
      text: 'Andropov sends you a private letter — unusual for the KGB chairman — sharing his assessment that the Soviet system requires "serious renovation" to survive. He asks whether you would support reform measures if he were in a position to implement them. The letter is handwritten, deniable.',
      choices: [
        {
          text: 'Write back expressing cautious support for gradual reforms',
          loyalty: 0,
          cunning: 1,
          reputation: 1,
          survival: 0.75,
          response: 'Andropov files your reply in his personal archive. When he becomes General Secretary, you are among the first to be consulted on reform measures. Your early alignment with Andropov has positioned you well — if he lives long enough to implement his program.'
        },
        {
          text: 'Show the letter to Brezhnev\'s chief of staff as proof of Andropov\'s ambition',
          loyalty: 2,
          cunning: 1,
          reputation: -1,
          survival: 0.65,
          response: 'Brezhnev\'s staff is alarmed by Andropov\'s initiative but reluctant to act against the powerful KGB chairman. The information is filed but not acted upon. If Andropov ever learns of your betrayal, the KGB\'s resources will be turned against you.'
        },
        {
          text: 'Reply ambiguously, neither supporting nor rejecting the idea',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'Your careful non-reply preserves options without creating obligations. Andropov is disappointed but understands political caution. You remain on his list of potential allies, though not at the top. In the succession struggle to come, your position is flexible.'
        }
      ]
    },
    {
      type: 'intercepted_telegram',
      title: 'Intercepted Communication: Polish Solidarity Movement',
      text: 'An intercepted communication shows that the Polish Solidarity movement is receiving substantial covert funding from Western sources, including the CIA and the Vatican. The movement is growing far beyond what the Polish communist government can control.',
      choices: [
        {
          text: 'Advocate for martial law in Poland to crush Solidarity',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.8,
          response: 'Your hardline position contributes to the decision to pressure General Jaruzelski into declaring martial law. Solidarity is driven underground but not destroyed. The West imposes sanctions, and the Polish crisis becomes a running wound for the Soviet bloc.'
        },
        {
          text: 'Propose covert counter-measures to disrupt Western funding channels',
          loyalty: 1,
          cunning: 2,
          reputation: 0,
          survival: 0.85,
          response: 'Your proposal for sophisticated counter-intelligence operations is implemented with mixed results. Some funding channels are disrupted, but the movement\'s momentum is driven by genuine popular anger that no amount of intelligence work can suppress.'
        },
        {
          text: 'Suggest allowing limited trade union reforms to co-opt the movement',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.55,
          response: 'Your reformist suggestion is rejected with contempt by the hardliners. "Today you give them trade unions, tomorrow they want elections," Suslov lectures. Your position marks you as unreliable on the critical question of bloc solidarity.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: General\'s Son Involved in Black Market',
      text: 'An anonymous tip reveals that the son of a powerful military general — a man with Politburo connections — is running a black market operation importing Western electronics. The KGB investigation could embarrass some of the most powerful families in the Soviet elite.',
      choices: [
        {
          text: 'Push for a full investigation regardless of who is embarrassed',
          loyalty: 0,
          cunning: -1,
          reputation: 2,
          survival: 0.45,
          response: 'Your insistence on pursuing the case makes you deeply unpopular with the military and political elite. The general uses his connections to block the investigation, and your reputation for "making trouble" follows you through the corridors of power.'
        },
        {
          text: 'Quietly warn the general and give him time to control his son',
          loyalty: 0,
          cunning: 2,
          reputation: -1,
          survival: 0.8,
          response: 'The general is furious but grateful. He reins in his son and the black market operation is quietly shut down. You have gained a powerful ally who owes you a personal debt. The corruption is hidden, but the system of mutual protection grows stronger.'
        },
        {
          text: 'Use the information to secure the general\'s support for your policy initiatives',
          loyalty: -1,
          cunning: 3,
          reputation: -1,
          survival: 0.7,
          response: 'The general, faced with the threat of exposure, becomes your reluctant supporter on several key votes. The leverage is effective but dangerous — blackmail creates enemies who bide their time, waiting for the moment when the balance of power shifts.'
        }
      ]
    }
  ],

  'Late Brezhnev': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: Brezhnev\'s Incapacitation',
      text: 'A classified medical report reveals that Brezhnev is barely functional — addicted to sleeping pills, unable to concentrate for more than minutes, and increasingly dependent on his personal staff for even basic decisions. The country is effectively being run by a committee of aides.',
      choices: [
        {
          text: 'Begin quietly building alliances for the post-Brezhnev succession',
          loyalty: -1,
          cunning: 3,
          reputation: 0,
          survival: 0.75,
          response: 'You reach out to Andropov, Chernenko, and their respective factions, positioning yourself as a bridge between competing camps. When Brezhnev finally dies, you will be well-positioned regardless of who succeeds him — if none of them see you as a threat first.'
        },
        {
          text: 'Maintain absolute loyalty to Brezhnev and his staff to the bitter end',
          loyalty: 3,
          cunning: 0,
          reputation: 0,
          survival: 0.7,
          response: 'You remain visibly loyal to the dying regime. Brezhnev\'s staff appreciates your steadfastness. But when the end comes, the new leadership will view you as a relic of the old order. Your loyalty to a dead man buys no favors from his successor.'
        },
        {
          text: 'Propose a formal mechanism for transferring power during the leader\'s incapacity',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.4,
          response: 'Your proposal is viewed as a barely disguised attempt to push Brezhnev aside. "The General Secretary is in excellent health," Chernenko says pointedly. The system has no mechanism for removing an incapacitated leader peacefully, and nobody wants to create one while they might be next in line.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Reagan\'s Strategic Defense Initiative',
      text: 'A KGB analysis of Reagan\'s recently announced Strategic Defense Initiative concludes that while the technology is likely decades away, the American intent to neutralize Soviet nuclear deterrence poses an existential threat. The military is demanding a massive response program.',
      choices: [
        {
          text: 'Support a crash program to develop Soviet countermeasures',
          loyalty: 2,
          cunning: 0,
          reputation: 0,
          survival: 0.8,
          response: 'Billions of rubles are diverted to military research. The already struggling economy is further strained. The military is grateful for your support, but the consumer sector suffers even more, and popular discontent deepens in ways that are not yet visible.'
        },
        {
          text: 'Argue that SDI is a bluff designed to bankrupt the Soviet Union',
          loyalty: -1,
          cunning: 2,
          reputation: 1,
          survival: 0.6,
          response: 'Your analysis proves remarkably prescient, but it is not what the military wants to hear. The hawks dismiss your assessment as "wishful thinking." Years later, when the SDI proves to be largely vaporware, your foresight will be acknowledged — too late to matter.'
        },
        {
          text: 'Propose asymmetric responses that are cheaper than matching SDI directly',
          loyalty: 1,
          cunning: 2,
          reputation: 1,
          survival: 0.75,
          response: 'Your proposal for cheaper countermeasures — decoy warheads, submarine-launched missiles, cyber warfare — gains traction with the pragmatic faction. Andropov sees merit in your thinking. You have demonstrated the ability to think strategically without bankrupting the state.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'KGB Report: Nationality Tensions in the Republics',
      text: 'A classified KGB survey reports growing nationalist sentiment in the Baltic republics, Ukraine, and the Caucasus. Local Party officials are quietly accommodating nationalist demands to maintain order. The report warns of "centrifugal tendencies" that could threaten the Union itself.',
      choices: [
        {
          text: 'Recommend a crackdown on nationalist elements across all republics',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.75,
          response: 'Your hardline recommendation is partially implemented, but the crackdowns only drive nationalism underground and radicalize moderate voices. The KGB reports that your recommended measures have made the situation worse in several regions. The nationalities problem festers.'
        },
        {
          text: 'Propose limited cultural concessions to defuse tensions',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.6,
          response: 'Your proposal for allowing more native-language education and cultural expression is seen as dangerous by the centralists. "First language, then sovereignty," warns a Politburo colleague. Your willingness to accommodate nationalism marks you as soft on the Union\'s territorial integrity.'
        },
        {
          text: 'Recommend studying the situation further before acting',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.8,
          response: 'Another commission is formed, another study is ordered. By the time the study is complete, the situation has evolved beyond its recommendations. The bureaucratic reflex to study rather than act is the stagnation era\'s defining response to every crisis.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Dissident\'s Wife Pleads for Husband\'s Release',
      text: 'The wife of a imprisoned dissident — a former colleague from university — writes a desperate letter. Her husband is dying of kidney disease in the camps. She asks you to intervene, knowing you have the influence to arrange a medical transfer.',
      choices: [
        {
          text: 'Arrange a quiet medical transfer through back channels',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.65,
          response: 'The transfer is arranged through a sympathetic camp doctor. Your former colleague receives treatment and survives. His wife weeps with gratitude. The KGB notes the transfer and files a query, but in the chaos of the late Brezhnev era, it is not followed up.'
        },
        {
          text: 'Ignore the letter — any contact with dissidents is dangerous',
          loyalty: 1,
          cunning: 1,
          reputation: -1,
          survival: 0.85,
          response: 'You file the letter in your private archive and do nothing. Three months later, you learn that your former colleague died in the camp hospital. His wife publishes a memoir abroad that does not name you but describes the silence of old friends who could have helped.'
        },
        {
          text: 'Forward the letter to the relevant authorities as evidence of your transparency',
          loyalty: 2,
          cunning: 0,
          reputation: -2,
          survival: 0.8,
          response: 'The authorities note your cooperation. The wife is warned against further contact with Party officials. Your former colleague receives no medical transfer. You have protected yourself at the cost of any remaining connection to your pre-political life.'
        }
      ]
    }
  ],

  'Perestroika': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: True State of the Soviet Economy',
      text: 'A comprehensive economic analysis commissioned by Gorbachev\'s team reveals that the Soviet economy is not merely stagnating but actively contracting. Without radical reform, the state will be unable to fund basic services within five years. The report recommends market mechanisms that would have been heresy a decade ago.',
      choices: [
        {
          text: 'Become a vocal champion of radical economic reform',
          loyalty: 0,
          cunning: 1,
          reputation: 2,
          survival: 0.7,
          response: 'Your public support for market reforms earns praise from Gorbachev\'s circle and hatred from conservative elements. As the reforms cause short-term chaos — empty shelves, inflation, unemployment — you become a target for those who blame the reformers for destroying the old system.'
        },
        {
          text: 'Support moderate reforms while maintaining relationships with conservatives',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'Your centrist position satisfies no one completely but alienates no one fatally. As the political landscape fragments, your ability to talk to both reformers and hardliners becomes a valuable skill. But centrism is a dangerous position when the center is collapsing.'
        },
        {
          text: 'Oppose the reforms as destabilizing and premature',
          loyalty: 1,
          cunning: 0,
          reputation: -1,
          survival: 0.65,
          response: 'Your opposition to reform aligns you with Ligachev and the conservative faction. As Gorbachev\'s authority grows, your position becomes increasingly marginal. But you maintain a base among those who fear that reform means the end of everything they have built.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Eastern European Regimes Crumbling',
      text: 'KGB reports from Budapest, Warsaw, and East Berlin paint a picture of rapid collapse. The Hungarian border is opening, Polish elections have swept Solidarity to power, and East German citizens are fleeing by the thousands. The question is no longer whether the satellite states will change, but whether the Soviet Union will intervene.',
      choices: [
        {
          text: 'Argue that non-intervention will lead to the collapse of the entire bloc',
          loyalty: 1,
          cunning: 0,
          reputation: -1,
          survival: 0.6,
          response: 'Your argument for intervention echoes the Brezhnev Doctrine, but Gorbachev has explicitly rejected it. Your hawkish stance marks you as a reactionary in the eyes of the reform leadership. When the Berlin Wall falls, your warnings about bloc collapse prove correct but politically irrelevant.'
        },
        {
          text: 'Support Gorbachev\'s policy of non-intervention and self-determination',
          loyalty: -1,
          cunning: 1,
          reputation: 2,
          survival: 0.75,
          response: 'Your support for letting Eastern Europe go its own way aligns with Gorbachev\'s new thinking. Western leaders note your progressive stance. But as the dominoes fall faster than anyone predicted, you begin to wonder if the same forces will soon reach Moscow.'
        },
        {
          text: 'Propose managed transitions to maintain Soviet influence without military force',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.8,
          response: 'Your proposal for "guided democratization" in the satellite states sounds reasonable in theory but is overtaken by events. The revolutions move faster than any managed transition can accommodate. History is happening faster than policy can respond.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Colleague Accused of Profiting from Cooperatives',
      text: 'Under Gorbachev\'s cooperative law, a Politburo colleague has allegedly used his position to establish profitable cooperative businesses run by his relatives. The denunciation comes from a journalist emboldened by glasnost. The accusation is almost certainly true.',
      choices: [
        {
          text: 'Support a public investigation in the spirit of glasnost',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.65,
          response: 'The investigation reveals extensive corruption. Your colleague is forced to resign. The press hails the accountability, but the nomenklatura is alarmed. If one of them can be brought down by journalists, none of them are safe. Your support for transparency is noted with fear by your peers.'
        },
        {
          text: 'Warn your colleague privately and suggest he divest before the story breaks',
          loyalty: 0,
          cunning: 2,
          reputation: -1,
          survival: 0.8,
          response: 'Your colleague moves quickly to transfer his assets. When the investigation comes, the evidence is thin. The journalist is frustrated, and the story fades. You have protected a corrupt colleague and preserved the elite\'s mutual protection system.'
        },
        {
          text: 'Use the situation to push for stricter conflict-of-interest rules',
          loyalty: 0,
          cunning: 1,
          reputation: 1,
          survival: 0.75,
          response: 'Your proposal for new ethics rules sounds progressive but is designed with enough loopholes to protect the nomenklatura while appearing responsive. The rules are passed and largely ignored. You receive credit for reform without actually threatening anyone\'s interests.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Baltic Republic Leader Warns of Independence Movement',
      text: 'The First Secretary of a Baltic republic writes to you confidentially that the independence movement has grown beyond the Party\'s ability to control. He warns that any attempt at repression will only accelerate the process. He asks whether Moscow will use force if independence is declared.',
      choices: [
        {
          text: 'Reassure him that Moscow will negotiate, not use force',
          loyalty: -2,
          cunning: 0,
          reputation: 1,
          survival: 0.6,
          response: 'Your reassurance emboldens the Baltic leader to accommodate nationalist demands. When independence movements surge across all three Baltic republics, Moscow blames officials who failed to maintain control — including those who gave reassurances of non-intervention.'
        },
        {
          text: 'Warn him that force remains an option and he must maintain order',
          loyalty: 2,
          cunning: 0,
          reputation: -1,
          survival: 0.7,
          response: 'Your warning is delivered but rings hollow — everyone knows the Soviet military is bogged down in Afghanistan and the political will for internal repression is gone. The Baltic leader reads between the lines and continues accommodating the independence movement.'
        },
        {
          text: 'Advise him to prepare for a negotiated transition that preserves Soviet interests',
          loyalty: 0,
          cunning: 2,
          reputation: 1,
          survival: 0.75,
          response: 'Your pragmatic advice helps shape a relatively orderly independence process. Economic ties and military base agreements are negotiated rather than imposed. The outcome is still independence, but with less chaos than might have been. Some call this wisdom; others call it surrender.'
        }
      ]
    },
    {
      type: 'nkvd_report',
      title: 'KGB Report: Hardliners Planning Emergency Action',
      text: 'A KGB contact warns you that a group of hardliners — including the KGB chairman, the Defense Minister, and several senior Party officials — are discussing the possibility of declaring a state of emergency to reverse Gorbachev\'s reforms. They have not yet set a date.',
      choices: [
        {
          text: 'Warn Gorbachev immediately about the conspiracy',
          loyalty: -1,
          cunning: 0,
          reputation: 2,
          survival: 0.6,
          response: 'Gorbachev listens and then, characteristically, does nothing decisive. He believes he can manage the hardliners through persuasion. Your warning is appreciated but not acted upon. When the coup eventually comes, Gorbachev is caught unprepared despite having been warned.'
        },
        {
          text: 'Approach the conspirators and offer conditional support',
          loyalty: 1,
          cunning: 2,
          reputation: -1,
          survival: 0.55,
          response: 'The conspirators welcome your interest but are suspicious of your motives. You are given vague assurances about a role in the post-coup government. If the coup succeeds, you will be rewarded. If it fails — and coups in the age of live television are unpredictable — you will fall with the plotters.'
        },
        {
          text: 'Keep the information to yourself and prepare for any outcome',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.8,
          response: 'You prepare contingency plans for both a successful coup and its failure. You draft statements supporting whichever side wins. When the crisis finally comes, you will be ready to align with the victors. It is not heroic, but it is the survival instinct that has kept you alive this long.'
        }
      ]
    }
  ],

  'Collapse': [
    {
      type: 'secret_memo',
      title: 'Secret Memo: August Coup Committee\'s Plans',
      text: 'Hours before the August coup is launched, you receive the full operational plan. Gorbachev will be isolated at his dacha in Crimea. Tanks will secure Moscow. A State Committee for the State of Emergency will assume power. You are asked to sign a declaration of support.',
      choices: [
        {
          text: 'Sign the declaration and support the coup',
          loyalty: 2,
          cunning: -1,
          reputation: -2,
          survival: 0.3,
          response: 'You sign. For three days, it seems the coup might succeed. But Yeltsin rallies resistance, the military wavers, and the plotters lose their nerve. Your signature on the declaration becomes evidence. As the coup collapses, your political career collapses with it.'
        },
        {
          text: 'Refuse to sign and join the democratic resistance at the White House',
          loyalty: -2,
          cunning: 0,
          reputation: 3,
          survival: 0.7,
          response: 'You stand with Yeltsin on the tank. It is the bravest thing you have done in decades of careful political maneuvering. When the coup fails, you are celebrated as a democrat. The irony of your long career of compromises ending with a moment of genuine courage is not lost on you.'
        },
        {
          text: 'Claim illness and disappear until the outcome is clear',
          loyalty: 0,
          cunning: 2,
          reputation: -1,
          survival: 0.75,
          response: 'You check into a sanatorium with a convenient "heart condition." For three days you watch events on television. When the coup fails, you emerge and congratulate the democrats. Everyone knows what you did, but in the chaos of the moment, no one has time to call you a coward.'
        }
      ]
    },
    {
      type: 'intelligence_report',
      title: 'Intelligence Report: Yeltsin\'s Secret Negotiations with Republic Leaders',
      text: 'Intelligence sources reveal that Yeltsin is secretly negotiating with the leaders of Ukraine and Belarus to dissolve the Soviet Union entirely and replace it with a loose Commonwealth. Gorbachev knows nothing. The meeting is planned for a hunting lodge near Minsk.',
      choices: [
        {
          text: 'Inform Gorbachev and urge him to prevent the meeting',
          loyalty: 1,
          cunning: 0,
          reputation: 1,
          survival: 0.5,
          response: 'Gorbachev is stunned but powerless. He has no military force willing to act, no political base left to mobilize. The Belovezha meeting proceeds, and three men dissolve a superpower over vodka and venison. Your loyalty to the Soviet Union is admirable but futile.'
        },
        {
          text: 'Contact Yeltsin\'s team and negotiate a role for yourself in the new order',
          loyalty: -2,
          cunning: 3,
          reputation: -1,
          survival: 0.8,
          response: 'Yeltsin\'s people are happy to have a senior Soviet official jump ship. You are promised a position in the new Russian government. The transition from Soviet apparatchik to Russian democrat is seamless, if shameless. You will not be the last to make this journey.'
        },
        {
          text: 'Do nothing — the Soviet Union is already dead in everything but name',
          loyalty: 0,
          cunning: 1,
          reputation: 0,
          survival: 0.7,
          response: 'You watch the end of the Soviet Union from your office, surrounded by portraits of leaders whose system you served for decades. The red flag comes down from the Kremlin on December 25th. You feel neither relief nor grief — only the exhaustion of a survivor who has outlasted the thing he survived.'
        }
      ]
    },
    {
      type: 'private_letter',
      title: 'Private Letter: Former KGB Officer Offers Kompromат Archives',
      text: 'A former KGB officer contacts you with an extraordinary offer: he has smuggled out files containing compromising material on dozens of senior officials — both communist and democratic. He offers to sell you the archive for hard currency, warning that others are also bidding.',
      choices: [
        {
          text: 'Buy the archive and use it to protect yourself in the new order',
          loyalty: 0,
          cunning: 3,
          reputation: -1,
          survival: 0.7,
          response: 'You pay in dollars obtained through newly legal currency exchanges. The archive is a goldmine of blackmail material. In the chaos of the new Russia, where former communists are reinventing themselves as capitalists, this information is power. But possessing it makes you a target for everyone named in the files.'
        },
        {
          text: 'Report the officer to the authorities — whichever authorities still exist',
          loyalty: 1,
          cunning: 0,
          reputation: 1,
          survival: 0.6,
          response: 'You report the offer, but in the chaos of the Soviet collapse, no functioning authority exists to investigate. The officer sells the files to someone else. Months later, compromising material begins appearing in the new Russian press, and you wonder whose hands the files ended up in.'
        },
        {
          text: 'Decline but suggest the files be donated to a historical archive',
          loyalty: 0,
          cunning: 0,
          reputation: 2,
          survival: 0.55,
          response: 'The officer laughs at your suggestion. He sells the files to a consortium of new Russian businessmen — oligarchs in the making. The historical record is lost to private interests. Your principled stance has preserved your conscience but achieved nothing else.'
        }
      ]
    },
    {
      type: 'denunciation',
      title: 'Denunciation: Calls to Put Former Party Leaders on Trial',
      text: 'Democratic activists are publicly demanding a "Nuremberg-style" trial for Communist Party leaders. Your name appears on a list of officials who should be prosecuted for "crimes against the Soviet people." The new Russian prosecutor is considering whether to act.',
      choices: [
        {
          text: 'Cooperate with investigators and provide testimony about the Soviet system',
          loyalty: -1,
          cunning: 1,
          reputation: 1,
          survival: 0.7,
          response: 'Your cooperation provides valuable historical testimony. The prosecutor is impressed by your candor. Ultimately, no trials are held — Russia lacks the political will for a reckoning with its past. Your testimony joins the archives, a confession that no one will read for decades.'
        },
        {
          text: 'Hire lawyers and fight the accusations through the new legal system',
          loyalty: 0,
          cunning: 2,
          reputation: 0,
          survival: 0.75,
          response: 'Your legal defense argues that you operated within the system\'s laws as they existed at the time. The case stalls in the chaotic new courts. Eventually, other scandals push the demand for Communist-era trials out of the headlines. You survive through procedural delay, as you have survived everything else.'
        },
        {
          text: 'Flee abroad with whatever resources you can liquidate',
          loyalty: -1,
          cunning: 1,
          reputation: -2,
          survival: 0.65,
          response: 'You convert your assets to hard currency and arrange residence in a European country. You join the growing community of Soviet émigrés — former officials, intelligence agents, and party functionaries reinventing themselves abroad. The motherland you spent your life serving becomes a memory viewed through the window of a comfortable exile.'
        }
      ]
    },
    {
      type: 'secret_memo',
      title: 'Secret Memo: Nuclear Weapons Security During the Transition',
      text: 'A classified military report warns that the dissolution of the Soviet Union has created dangerous gaps in nuclear weapons security. Warheads in Ukraine, Belarus, and Kazakhstan are under the nominal control of new governments that may not have secure command structures. Some weapons may be unaccounted for.',
      choices: [
        {
          text: 'Work with Western counterparts to secure the nuclear arsenal',
          loyalty: -1,
          cunning: 1,
          reputation: 2,
          survival: 0.8,
          response: 'You become part of the Nunn-Lugar cooperative threat reduction framework. Working with Americans to secure Soviet nuclear weapons would have been treason a year ago; now it is statesmanship. The weapons are secured, the world is marginally safer, and you have found a purpose in the wreckage of everything you built.'
        },
        {
          text: 'Ensure the weapons remain under Russian control exclusively',
          loyalty: 2,
          cunning: 1,
          reputation: 0,
          survival: 0.7,
          response: 'You push for rapid consolidation of nuclear weapons on Russian territory. The process is completed, though not without anxious moments. Russian nationalists approve of your determination to maintain Russia\'s nuclear status. The world holds its breath until the last warhead is accounted for.'
        },
        {
          text: 'Use your knowledge of the nuclear infrastructure as political leverage',
          loyalty: 0,
          cunning: 2,
          reputation: -1,
          survival: 0.6,
          response: 'Your expertise in nuclear security makes you indispensable to whichever government emerges from the chaos. You trade this expertise for political protection and a comfortable position. It is the final expression of the survival instinct that has defined your entire career — information as the ultimate currency of power.'
        }
      ]
    }
  ]

};
