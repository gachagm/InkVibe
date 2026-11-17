
// ==========================================
// INKVIBE - MYSTIC EDITION
// Main Game Script
// ==========================================
function pixelArt(id) {
  return `https://api.dicebear.com/10.x/pixel-art/svg?seed=InkVibe-${encodeURIComponent(id)}`;
}

const CARD_POOL = [

  // 🌑 ORIGINAL CARDS - COMMON
  {
    id: "shadow_cat",
    name: "Shadow Cat",
    rarity: "common",
    power: 6,
    quote: "A whisper in the dark.",
    image: pixelArt("shadow_cat")
  },
  {
    id: "ink_sprite",
    name: "Ink Sprite",
    rarity: "common",
    power: 7,
    quote: "Tiny, but never harmless.",
    image: pixelArt("ink_sprite")
  },
  {
    id: "dark_fox",
    name: "Dark Fox",
    rarity: "common",
    power: 8,
    quote: "Eyes like midnight glass.",
    image: pixelArt("dark_fox")
  },
  {
    id: "void_moth",
    name: "Void Moth",
    rarity: "common",
    power: 12,
    quote: "Drawn to forgotten light.",
    image: pixelArt("void_moth")
  },
  {
    id: "moon_hound",
    name: "Moon Hound",
    rarity: "common",
    power: 13,
    quote: "Tracks silver dreams.",
    image: pixelArt("moon_hound")
  },
  {
    id: "glass_raven",
    name: "Glass Raven",
    rarity: "common",
    power: 14,
    quote: "Its wings reflect secrets.",
    image: pixelArt("glass_raven")
  },

  // 🌑 ORIGINAL CARDS - RARE
  {
    id: "ink_angel",
    name: "Ink Angel",
    rarity: "rare",
    power: 19,
    quote: "A blessing written in shadow.",
    image: pixelArt("ink_angel")
  },
  {
    id: "abyss_kitsune",
    name: "Abyss Kitsune",
    rarity: "rare",
    power: 21,
    quote: "Nine lies, one truth.",
    image: pixelArt("abyss_kitsune")
  },
  {
    id: "crown_wisp",
    name: "Crown Wisp",
    rarity: "rare",
    power: 22,
    quote: "Royalty made of smoke.",
    image: pixelArt("crown_wisp")
  },
  {
    id: "celestial_leviathan",
    name: "Celestial Leviathan",
    rarity: "rare",
    power: 30,
    quote: "The sky bends around it.",
    image: pixelArt("celestial_leviathan")
  },
  {
    id: "ink_empress",
    name: "Ink Empress",
    rarity: "rare",
    power: 32,
    quote: "She writes fate in gold.",
    image: pixelArt("ink_empress")
  },

  // 🤖 MECHA SEASON - EPIC
  {
    id: "boss1",
    name: "Boss #1 ULtra Mech",
    rarity: "epic",
    power: 45,
    quote: "Laser combined with metal.",
    image: pixelArt("boss1")
  },
  {
    id: "pulse-striker-mk2",
    name: "Pulse Striker MK-II",
    rarity: "epic",
    power: 42,
    quote: "Rhythmic blasts shatter steel.",
    image: pixelArt("pulse-striker-mk2")
  },
  {
    id: "neon-gear-phantom",
    name: "Neon Gear Phantom",
    rarity: "epic",
    power: 44,
    quote: "Glows before it strikes.",
    image: pixelArt("neon-gear-phantom")
  },
  {
    id: "circuit-breaker-x",
    name: "Circuit Breaker X",
    rarity: "epic",
    power: 46,
    quote: "Overloads every system.",
    image: pixelArt("circuit-breaker-x")
  },
  {
    id: "bassline-crusher",
    name: "Bassline Crusher",
    rarity: "epic",
    power: 43,
    quote: "Feel the drop... then destruction.",
    image: pixelArt("bassline-crusher")
  },
  {
    id: "cyber-pulse-titan",
    name: "Cyber Pulse Titan",
    rarity: "epic",
    power: 47,
    quote: "Energy flows, enemies fall.",
    image: pixelArt("cyber-pulse-titan")
  },
  {
    id: "echo-drone-zx",
    name: "Echo Drone ZX",
    rarity: "epic",
    power: 41,
    quote: "Every sound is a weapon.",
    image: pixelArt("echo-drone-zx")
  },
  {
    id: "voltage-raptor",
    name: "Voltage Raptor",
    rarity: "epic",
    power: 45,
    quote: "Strikes faster than lightning.",
    image: pixelArt("voltage-raptor")
  },
  {
    id: "synthwave-guardian",
    name: "Synthwave Guardian",
    rarity: "epic",
    power: 48,
    quote: "Protects the grid at all costs.",
    image: pixelArt("synthwave-guardian")
  },
  {
    id: "mecha-pulse-reaver",
    name: "Mecha Pulse Reaver",
    rarity: "epic",
    power: 44,
    quote: "Harvests energy from chaos.",
    image: pixelArt("mecha-pulse-reaver")
  },
  {
    id: "quantum-beat-enforcer",
    name: "Quantum Beat Enforcer",
    rarity: "epic",
    power: 49,
    quote: "Time bends to its rhythm.",
    image: pixelArt("quantum-beat-enforcer")
  },

  // 🤖 MECHA SEASON - LEGENDARY
  {
    id: "omega-bass-overlord",
    name: "Omega Bass Overlord",
    rarity: "legendary",
    power: 60,
    quote: "The final drop ends all.",
    image: pixelArt("omega-bass-overlord")
  },
  {
    id: "hyperion-mech-prime",
    name: "Hyperion Mech Prime",
    rarity: "legendary",
    power: 62,
    quote: "Engineered for domination.",
    image: pixelArt("hyperion-mech-prime")
  },
  {
    id: "neural-sync-destroyer",
    name: "Neural Sync Destroyer",
    rarity: "legendary",
    power: 59,
    quote: "Mind and machine unite.",
    image: pixelArt("neural-sync-destroyer")
  },
  {
    id: "galactic-pulse-emperor",
    name: "Galactic Pulse Emperor",
    rarity: "legendary",
    power: 65,
    quote: "Rules beyond the stars.",
    image: pixelArt("galactic-pulse-emperor")
  },
  {
    id: "void-frequency-titan",
    name: "Void Frequency Titan",
    rarity: "legendary",
    power: 63,
    quote: "Silence becomes annihilation.",
    image: pixelArt("void-frequency-titan")
  },
  {
    id: "chrono-beat-colossus",
    name: "Chrono Beat Colossus",
    rarity: "legendary",
    power: 61,
    quote: "Controls the tempo of time.",
    image: pixelArt("chrono-beat-colossus")
  },
  {
    id: "electro-nexus-sovereign",
    name: "Electro Nexus Sovereign",
    rarity: "legendary",
    power: 64,
    quote: "All power flows through it.",
    image: pixelArt("electro-nexus-sovereign")
  },
  {
    id: "cyberstorm-apex",
    name: "Cyberstorm Apex",
    rarity: "legendary",
    power: 66,
    quote: "Storm of circuits unleashed.",
    image: pixelArt("cyberstorm-apex")
  },
  {
    id: "singularity-soundbreaker",
    name: "Singularity Soundbreaker",
    rarity: "legendary",
    power: 68,
    quote: "One note. Total collapse.",
    image: pixelArt("singularity-soundbreaker")
  },
  {
    id: "infinity-mech-warlord",
    name: "Infinity Mech Warlord",
    rarity: "legendary",
    power: 70,
    quote: "Endless power, endless war.",
    image: pixelArt("infinity-mech-warlord")
  },

  // ❄️ SNOW THEME - COMMON
  {
    id: "snow_bunny",
    name: "Snow Bunny",
    rarity: "common",
    power: 3,
    quote: "Small paws in fresh snow.",
    image: pixelArt("snow_bunny")
  },
  {
    id: "ice_mouse",
    name: "Ice Mouse",
    rarity: "common",
    power: 4,
    quote: "Hides beneath frozen leaves.",
    image: pixelArt("ice_mouse")
  },
  {
    id: "frost_fox",
    name: "Frost Fox",
    rarity: "common",
    power: 5,
    quote: "Silent steps through the snow.",
    image: pixelArt("frost_fox")
  },
  {
    id: "snow_owl",
    name: "Snow Owl",
    rarity: "common",
    power: 6,
    quote: "Watches the frozen forest.",
    image: pixelArt("snow_owl")
  },
  {
    id: "frozen_wolf",
    name: "Frozen Wolf",
    rarity: "common",
    power: 7,
    quote: "A lonely howl in winter.",
    image: pixelArt("frozen_wolf")
  },
  {
    id: "ice_penguin",
    name: "Ice Penguin",
    rarity: "common",
    power: 8,
    quote: "Slides faster than the wind.",
    image: pixelArt("ice_penguin")
  },
  {
    id: "snow_deer",
    name: "Snow Deer",
    rarity: "common",
    power: 9,
    quote: "Graceful as falling snow.",
    image: pixelArt("snow_deer")
  },

  // ❄️ SNOW THEME - RARE
  {
    id: "ice_phoenix",
    name: "Ice Phoenix",
    rarity: "rare",
    power: 12,
    quote: "Rises from frozen ashes.",
    image: pixelArt("ice_phoenix")
  },
  {
    id: "frost_knight",
    name: "Frost Knight",
    rarity: "rare",
    power: 14,
    quote: "Defender of the frozen kingdom.",
    image: pixelArt("frost_knight")
  },
  {
    id: "glacier_dragon",
    name: "Glacier Dragon",
    rarity: "rare",
    power: 16,
    quote: "Its breath freezes mountains.",
    image: pixelArt("glacier_dragon")
  },
  {
    id: "snow_spirit",
    name: "Snow Spirit",
    rarity: "rare",
    power: 11,
    quote: "A soul made of winter.",
    image: pixelArt("snow_spirit")
  },
  {
    id: "crystal_wolf",
    name: "Crystal Wolf",
    rarity: "rare",
    power: 17,
    quote: "Born inside an ancient glacier.",
    image: pixelArt("crystal_wolf")
  },

  // ❄️ SNOW THEME - EPIC
  {
    id: "blizzard_golem",
    name: "Blizzard Golem",
    rarity: "epic",
    power: 23,
    quote: "A giant awakened by the storm.",
    image: pixelArt("blizzard_golem")
  },
  {
    id: "frostbite_reaper",
    name: "Frostbite Reaper",
    rarity: "epic",
    power: 25,
    quote: "Winter follows wherever it walks.",
    image: pixelArt("frostbite_reaper")
  },
  {
    id: "arctic_mech",
    name: "Arctic Mech",
    rarity: "epic",
    power: 27,
    quote: "Built to survive eternal winter.",
    image: pixelArt("arctic_mech")
  },
  {
    id: "ice_storm_titan",
    name: "Ice Storm Titan",
    rarity: "epic",
    power: 29,
    quote: "Commands the frozen skies.",
    image: pixelArt("ice_storm_titan")
  },

  // ❄️ SNOW THEME - LEGENDARY
  {
    id: "absolute_zero_dragon",
    name: "Absolute Zero Dragon",
    rarity: "legendary",
    power: 38,
    quote: "The temperature of nothingness.",
    image: pixelArt("absolute_zero_dragon")
  },
  {
    id: "eternal_frost_emperor",
    name: "Eternal Frost Emperor",
    rarity: "legendary",
    power: 42,
    quote: "Rules the kingdom of endless snow.",
    image: pixelArt("eternal_frost_emperor")
  },
  {
    id: "glacial_overlord",
    name: "Glacial Overlord",
    rarity: "legendary",
    power: 45,
    quote: "Even mountains bow to winter.",
    image: pixelArt("glacial_overlord")
  },

  // ❄️ MORE SNOW CARDS - COMMON
  {
    id: "frost_squirrel",
    name: "Frost Squirrel",
    rarity: "common",
    power: 3,
    quote: "Hides nuts beneath the ice.",
    image: pixelArt("frost_squirrel")
  },
  {
    id: "snow_kitten",
    name: "Snow Kitten",
    rarity: "common",
    power: 4,
    quote: "Paws leave tiny frozen prints.",
    image: pixelArt("snow_kitten")
  },
  {
    id: "ice_frog",
    name: "Ice Frog",
    rarity: "common",
    power: 4,
    quote: "Sleeps beneath frozen ponds.",
    image: pixelArt("ice_frog")
  },
  {
    id: "winter_hamster",
    name: "Winter Hamster",
    rarity: "common",
    power: 5,
    quote: "A tiny ball of snow.",
    image: pixelArt("winter_hamster")
  },
  {
    id: "frozen_bat",
    name: "Frozen Bat",
    rarity: "common",
    power: 5,
    quote: "Flies through icy caves.",
    image: pixelArt("frozen_bat")
  },
  {
    id: "snow_pup",
    name: "Snow Pup",
    rarity: "common",
    power: 6,
    quote: "Still learning to howl.",
    image: pixelArt("snow_pup")
  },
  {
    id: "ice_seal",
    name: "Ice Seal",
    rarity: "common",
    power: 6,
    quote: "Slides across frozen lakes.",
    image: pixelArt("ice_seal")
  },
  {
    id: "frost_rabbit",
    name: "Frost Rabbit",
    rarity: "common",
    power: 7,
    quote: "Faster than falling snow.",
    image: pixelArt("frost_rabbit")
  },
  {
    id: "snow_crow",
    name: "Snow Crow",
    rarity: "common",
    power: 8,
    quote: "Collects shiny ice crystals.",
    image: pixelArt("snow_crow")
  },
  {
    id: "tiny_snow_golem",
    name: "Tiny Snow Golem",
    rarity: "common",
    power: 9,
    quote: "Small body, cold heart.",
    image: pixelArt("tiny_snow_golem")
  },

  // ❄️ MORE SNOW CARDS - RARE
  {
    id: "frost_panther",
    name: "Frost Panther",
    rarity: "rare",
    power: 11,
    quote: "Hunts silently in blizzards.",
    image: pixelArt("frost_panther")
  },
  {
    id: "ice_samurai",
    name: "Ice Samurai",
    rarity: "rare",
    power: 13,
    quote: "Master of the frozen blade.",
    image: pixelArt("ice_samurai")
  },
  {
    id: "arctic_fox_spirit",
    name: "Arctic Fox Spirit",
    rarity: "rare",
    power: 14,
    quote: "A mysterious winter guardian.",
    image: pixelArt("arctic_fox_spirit")
  },
  {
    id: "frozen_griffin",
    name: "Frozen Griffin",
    rarity: "rare",
    power: 15,
    quote: "Wings covered in crystal frost.",
    image: pixelArt("frozen_griffin")
  },
  {
    id: "snow_leopard",
    name: "Snow Leopard",
    rarity: "rare",
    power: 16,
    quote: "King of the snowy mountains.",
    image: pixelArt("snow_leopard")
  },
  {
    id: "ice_jellyfish",
    name: "Ice Jellyfish",
    rarity: "rare",
    power: 12,
    quote: "Glows beneath frozen waters.",
    image: pixelArt("ice_jellyfish")
  },
  {
    id: "glacier_guardian",
    name: "Glacier Guardian",
    rarity: "rare",
    power: 18,
    quote: "Protects the ancient ice.",
    image: pixelArt("glacier_guardian")
  },
  {
    id: "frost_witch",
    name: "Frost Witch",
    rarity: "rare",
    power: 19,
    quote: "Whispers spells into snowflakes.",
    image: pixelArt("frost_witch")
  },

  // ❄️ MORE SNOW CARDS - EPIC
  {
    id: "blizzard_phantom",
    name: "Blizzard Phantom",
    rarity: "epic",
    power: 22,
    quote: "Appears inside the white storm.",
    image: pixelArt("blizzard_phantom")
  },
  {
    id: "frozen_mech_guardian",
    name: "Frozen Mech Guardian",
    rarity: "epic",
    power: 24,
    quote: "Powered by ancient ice.",
    image: pixelArt("frozen_mech_guardian")
  },
  {
    id: "crystal_ice_dragon",
    name: "Crystal Ice Dragon",
    rarity: "epic",
    power: 26,
    quote: "Its scales shine like diamonds.",
    image: pixelArt("crystal_ice_dragon")
  },
  {
    id: "arctic_storm_beast",
    name: "Arctic Storm Beast",
    rarity: "epic",
    power: 28,
    quote: "Brings winter wherever it goes.",
    image: pixelArt("arctic_storm_beast")
  },
  {
    id: "frost_crowned_king",
    name: "Frost Crowned King",
    rarity: "epic",
    power: 30,
    quote: "The ruler of frozen valleys.",
    image: pixelArt("frost_crowned_king")
  },

  // ❄️ MORE SNOW CARDS - LEGENDARY
  {
    id: "polar_star_dragon",
    name: "Polar Star Dragon",
    rarity: "legendary",
    power: 35,
    quote: "Born beneath the northern lights.",
    image: pixelArt("polar_star_dragon")
  },
  {
    id: "eternal_blizzard",
    name: "Eternal Blizzard",
    rarity: "legendary",
    power: 37,
    quote: "A storm that never ends.",
    image: pixelArt("eternal_blizzard")
  },
  {
    id: "frost_galaxy_emperor",
    name: "Frost Galaxy Emperor",
    rarity: "legendary",
    power: 40,
    quote: "Commands the stars of winter.",
    image: pixelArt("frost_galaxy_emperor")
  },
  {
    id: "absolute_frost_titan",
    name: "Absolute Frost Titan",
    rarity: "legendary",
    power: 43,
    quote: "The strongest force of winter.",
    image: pixelArt("absolute_frost_titan")
  },
  {
    id: "snowfall_ancient",
    name: "Snowfall Ancient",
    rarity: "legendary",
    power: 32,
    quote: "Older than the first snowfall.",
    image: pixelArt("snowfall_ancient")
  },
  {
    id: "winter_void_king",
    name: "Winter Void King",
    rarity: "legendary",
    power: 44,
    quote: "Darkness trapped inside ice.",
    image: pixelArt("winter_void_king")
  },
  {
    id: "crystal_universe_dragon",
    name: "Crystal Universe Dragon",
    rarity: "legendary",
    power: 46,
    quote: "An entire frozen universe within.",
    image: pixelArt("crystal_universe_dragon")
  }

];



// ==========================================
// GAME SETTINGS
// ==========================================

const RARITY_WEIGHTS = [
  { rarity: "common", chance: 55 },
  { rarity: "rare", chance: 28 },
  { rarity: "epic", chance: 13 },
  { rarity: "legendary", chance: 4 }
];

const RARITY_LABELS = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary"
};

const RARITY_COLORS = {
  common: "rarity-common",
  rare: "rarity-rare",
  epic: "rarity-epic",
  legendary: "rarity-legendary"
};

const STARTER_INK = 15;
const DRAW_COST = 5;
const DAILY_REWARD = 15;
const WIN_REWARD = 7;
const LOSE_REWARD = -10;
const PRESENT = 1000;

let lastFightTime = 0;


// ==========================================
// GAME STATE
// ==========================================

let state = {
  ink: STARTER_INK,
  collection: {},
  selectedCardId: null,
  lastPullId: null,
  lastDaily: null,
  username: "NewInker"
};


// ==========================================
// SAVE AND LOAD
// ==========================================

function saveGame() {
  localStorage.setItem("inkvibe_save", JSON.stringify(state));
}

function loadGame() {
  const save = localStorage.getItem("inkvibe_save");

  if (save) {
    try {
      const loaded = JSON.parse(save);

      state = {
        ink: loaded.ink ?? STARTER_INK,
        collection: loaded.collection ?? {},
        selectedCardId: loaded.selectedCardId ?? null,
        lastPullId: loaded.lastPullId ?? null,
        lastDaily: loaded.lastDaily ?? null,
        username: loaded.username ?? "NewInker"
      };

    } catch (error) {
      console.warn("Save corrupted, resetting.");
      saveGame();
    }
  } else {
    saveGame();
  }

  const username = localStorage.getItem("inkvibe_user");

  if (username) {
    state.username = username;
  }
}


// ==========================================
// CARD FUNCTIONS
// ==========================================

function getCardById(id) {
  return CARD_POOL.find(card => card.id === id);
}

function getCollectionSize() {
  return Object.values(state.collection)
    .reduce((sum, count) => sum + count, 0);
}

function addCard(cardId) {
  state.collection[cardId] =
    (state.collection[cardId] || 0) + 1;
}


// ==========================================
// RANDOM CARD SYSTEM
// ==========================================

function rarityRoll() {
  const roll = Math.random() * 100;
  let cumulative = 0;

  for (const tier of RARITY_WEIGHTS) {
    cumulative += tier.chance;

    if (roll <= cumulative) {
      return tier.rarity;
    }
  }

  return "common";
}

function randomCardByRarity(rarity) {
  const pool = CARD_POOL.filter(
    card => card.rarity === rarity
  );

  if (pool.length === 0) {
    return CARD_POOL[
      Math.floor(Math.random() * CARD_POOL.length)
    ];
  }

  return pool[
    Math.floor(Math.random() * pool.length)
  ];
}


// ==========================================
// TEXT HELPERS
// ==========================================

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}


// ==========================================
// PIXEL ART IMAGE SYSTEM
// ==========================================

function cardImageHTML(card) {
  if (!card.image) {
    return `
      <div class="card-art-placeholder">
        🎴
      </div>
    `;
  }

  return `
    <div class="card-art">
      <img
        src="${card.image}"
        alt="${card.name}"
        loading="lazy"
        onerror="this.parentElement.innerHTML='🎴'"
      >
    </div>
  `;
}


// ==========================================
// CARD HTML
// ==========================================

function cardHTML(
  card,
  count = null,
  selected = false,
  compact = false
) {
  return `
    <div class="${compact ? "battle-card" : "collection-card"}
      ${RARITY_COLORS[card.rarity]}
      ${selected ? "selected" : ""}">

      ${cardImageHTML(card)}

      <div class="card-topline">

        <span class="card-rarity-pill">
          ${RARITY_LABELS[card.rarity]}
        </span>

        ${
          count !== null
            ? `<span class="card-count-pill">x${count}</span>`
            : ""
        }

        <span class="card-power-pill">
          ⚡ ${card.power}
        </span>

      </div>

      <div class="card-bottom">
        <div class="card-name">${card.name}</div>
        <div class="card-sub">${card.quote}</div>
      </div>

    </div>
  `;
}


// ==========================================
// TOP STATS
// ==========================================

function renderTopStats() {
  setText("inkCount", state.ink);

  setText(
    "collectionCount",
    getCollectionSize()
  );

  const selectedCard = state.selectedCardId
    ? getCardById(state.selectedCardId)
    : null;

  setText(
    "selectedCardName",
    selectedCard ? selectedCard.name : "None"
  );
}


// ==========================================
// LAST PULL
// ==========================================

function renderLastPull() {
  const container = document.getElementById("lastPullCard");
  const reveal = document.getElementById("drawReveal");

  if (!container || !reveal) return;

  const lastCard = state.lastPullId
    ? getCardById(state.lastPullId)
    : null;

  if (!lastCard) {
    container.className = "featured-card placeholder-card";

    container.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">???</span>
        <span class="featured-rarity">Unknown</span>
      </div>
    `;

    reveal.className = "draw-reveal placeholder-card";

    reveal.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">No Pull Yet</span>
        <span class="featured-rarity">Draw to reveal</span>
      </div>
    `;

    setText("pullName", "—");
    setText("pullRarity", "—");
    setText("pullPower", "—");
    setText("pullOwned", "—");

    return;
  }

  container.className =
    `featured-card ${RARITY_COLORS[lastCard.rarity]}`;

  reveal.className =
    `draw-reveal ${RARITY_COLORS[lastCard.rarity]}`;

  container.innerHTML = `
    ${cardImageHTML(lastCard)}

    <div class="featured-card-inner">
      <span class="featured-name">${lastCard.name}</span>
      <span class="featured-rarity">
        ${RARITY_LABELS[lastCard.rarity]}
      </span>
    </div>
  `;

  reveal.innerHTML = `
    ${cardImageHTML(lastCard)}

    <div class="featured-card-inner">
      <span class="featured-name">${lastCard.name}</span>
      <span class="featured-rarity">${lastCard.quote}</span>
    </div>
  `;

  setText("pullName", lastCard.name);
  setText("pullRarity", RARITY_LABELS[lastCard.rarity]);
  setText("pullPower", lastCard.power);
  setText("pullOwned", state.collection[lastCard.id] || 1);
}


// ==========================================
// COLLECTION
// ==========================================

function renderCollection() {
  const grid = document.getElementById("collectionGrid");

  if (!grid) return;

  const ownedCards = Object.entries(state.collection)
    .map(([id, count]) => ({
      card: getCardById(id),
      count
    }))
    .filter(entry => entry.card)
    .sort((a, b) => {
      const rarityOrder = {
        legendary: 4,
        epic: 3,
        rare: 2,
        common: 1
      };

      return (
        rarityOrder[b.card.rarity] -
        rarityOrder[a.card.rarity] ||
        b.card.power - a.card.power
      );
    });

  if (ownedCards.length === 0) {
    grid.innerHTML = `
      <div class="collection-empty glass">
        No cards yet. Draw your first cards!
      </div>
    `;
    return;
  }

  grid.innerHTML = ownedCards.map(({ card, count }) => `
    <div
      onclick="selectCard('${card.id}')"
      class="collection-item">

      ${cardHTML(
        card,
        count,
        state.selectedCardId === card.id
      )}

    </div>
  `).join("");
}


// ==========================================
// SELECTED FIGHT CARD
// ==========================================

function renderSelectedFightCard() {
  const element = document.getElementById("selectedFightCard");

  if (!element) return;

  const card = state.selectedCardId
    ? getCardById(state.selectedCardId)
    : null;

  if (!card) {
    element.className =
      "battle-card placeholder-card small-card";

    element.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">No Card Selected</span>
        <span class="featured-rarity">
          Choose from Collection
        </span>
      </div>
    `;

    return;
  }

  element.className =
    `battle-card small-card ${RARITY_COLORS[card.rarity]}`;

  element.innerHTML = `
    ${cardImageHTML(card)}

    <div class="card-topline">
      <span class="card-rarity-pill">
        ${RARITY_LABELS[card.rarity]}
      </span>

      <span class="card-power-pill">
        ⚡ ${card.power}
      </span>
    </div>

    <div class="card-bottom">
      <div class="card-name">${card.name}</div>
      <div class="card-sub">${card.quote}</div>
    </div>
  `;
}


// ==========================================
// SELECT CARD
// ==========================================

function selectCard(cardId) {
  if (!state.collection[cardId]) return;

  state.selectedCardId = cardId;

  saveGame();
  renderAll();
}


// ==========================================
// DAILY REWARD
// ==========================================

function claimDaily() {
  const today = new Date().toDateString();

  if (state.lastDaily === today) {
    alert("You have already claimed your Daily Reward today!");
    return;
  }

  state.lastDaily = today;
  state.ink += DAILY_REWARD;

  saveGame();
  renderAll();

  alert(`🎁 Daily Reward claimed! +${DAILY_REWARD} Ink`);
}


// ==========================================
// DRAW SYSTEM
// ==========================================

function drawCard() {
  if (state.ink < DRAW_COST) {
    alert("Not enough Ink!");
    return;
  }

  const rarity = rarityRoll();
  const card = randomCardByRarity(rarity);

  if (!card) {
    alert("No cards available!");
    return;
  }

  state.ink -= DRAW_COST;

  addCard(card.id);

  state.lastPullId = card.id;

  if (
    !state.selectedCardId ||
    !getCardById(state.selectedCardId)
  ) {
    state.selectedCardId = card.id;
  }

  saveGame();

  const reveal = document.getElementById("drawReveal");

  if (reveal) {
    reveal.className = "draw-reveal placeholder-card";

    reveal.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">...</span>
        <span class="featured-rarity">Revealing...</span>
      </div>
    `;
  }

  setTimeout(() => {
    renderAll();

    const updatedReveal = document.getElementById("drawReveal");

    if (updatedReveal) {
      updatedReveal.classList.add("card-flip");
      updatedReveal.classList.add(
        `rarity-glow-${card.rarity}`
      );
    }
  }, 300);
}


// ==========================================
// PRESENT
// ==========================================

function getPresent() {
  state.ink += PRESENT;

  saveGame();
  renderAll();
}


// ==========================================
// ENEMY SYSTEM
// ==========================================

function randomEnemy() {
  const enemyBase = ENEMY_POOL[
    Math.floor(Math.random() * ENEMY_POOL.length)
  ];

  const power =
    Math.floor(
      Math.random() *
      (enemyBase.power[1] - enemyBase.power[0] + 1)
    ) + enemyBase.power[0];

  return {
    name: enemyBase.name,
    power
  };
}


function renderEnemy(enemy) {
  const element = document.getElementById("enemyCard");

  if (!element) return;

  element.className = "battle-card enemy-card small-card";

  element.innerHTML = `
    <div class="featured-card-inner">
      <span class="card-rarity-pill">Enemy</span>
      <span class="card-power-pill">⚡ ${enemy.power}</span>

      <div class="card-name">${enemy.name}</div>

      <div class="card-sub">
        A hostile force from the Ink.
      </div>
    </div>
  `;
}


// ==========================================
// FIGHT SYSTEM
// ==========================================

function fight() {
  const resultElement = document.getElementById("fightResult");

  const now = Date.now();

  if (now - lastFightTime < 10000) {
    if (resultElement) {
      resultElement.textContent = "Wait a moment before fighting again!";
    }

    return;
  }

  if (!state.selectedCardId) {
    alert("Select a card from your collection first!");
    return;
  }

  const playerCard = getCardById(state.selectedCardId);

  if (!playerCard) {
    alert("Your selected card could not be found!");
    return;
  }

  lastFightTime = now;

  const enemy = randomEnemy();

  renderEnemy(enemy);

  const playerRoll =
    playerCard.power + Math.floor(Math.random() * 8);

  const enemyRoll =
    enemy.power + Math.floor(Math.random() * 8);

  if (!resultElement) return;

  if (playerRoll >= enemyRoll) {
    state.ink += WIN_REWARD;

    resultElement.textContent =
      `🏆 ${playerCard.name} defeated ${enemy.name}! ` +
      `(+${WIN_REWARD} Ink) [${playerRoll} vs ${enemyRoll}]`;

  } else {
    state.ink += LOSE_REWARD;

    resultElement.textContent =
      `💀 ${playerCard.name} lost against ${enemy.name}! ` +
      `(${LOSE_REWARD} Ink) [${playerRoll} vs ${enemyRoll}]`;
  }

  state.ink = Math.max(0, state.ink);

  saveGame();
  renderAll();
}


// ==========================================
// RENDER ALL
// ==========================================

function renderLoginName() {
  const username = localStorage.getItem("inkvibe_user");

  if (username) {
    state.username = username;
  }
}

function renderAll() {
  renderLoginName();
  renderTopStats();
  renderLastPull();
  renderCollection();
  renderSelectedFightCard();

  saveGame();
}


// ==========================================
// START GAME
// ==========================================

loadGame();
renderAll();
