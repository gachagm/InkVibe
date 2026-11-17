
const CARD_POOL = [
  { id: "shadow_cat", name: "Shadow Cat", rarity: "common", power: 6, quote: "A whisper in the dark." },
  { id: "ink_sprite", name: "Ink Sprite", rarity: "common", power: 7, quote: "Tiny, but never harmless." },
  { id: "dark_fox", name: "Dark Fox", rarity: "common", power: 8, quote: "Eyes like midnight glass." },
  { id: "void_moth", name: "Void Moth", rarity: "common", power: 12, quote: "Drawn to forgotten light." },
  { id: "moon_hound", name: "Moon Hound", rarity: "common", power: 13, quote: "Tracks silver dreams." },
  { id: "glass_raven", name: "Glass Raven", rarity: "common", power: 14, quote: "Its wings reflect secrets." },
  { id: "ink_angel", name: "Ink Angel", rarity: "rare", power: 19, quote: "A blessing written in shadow." },
  { id: "abyss_kitsune", name: "Abyss Kitsune", rarity: "rare", power: 21, quote: "Nine lies, one truth." },
  { id: "crown_wisp", name: "Crown Wisp", rarity: "rare", power: 22, quote: "Royalty made of smoke." },
  { id: "celestial_leviathan", name: "Celestial Leviathan", rarity: "rare", power: 30, quote: "The sky bends around it." },
  { id: "ink_empress", name: "Ink Empress", rarity: "rare", power: 32, quote: "She writes fate in gold." },
  { id: "boss1", name: "Boss #1 ULtra Mech", rarity: "epic", power: 45, quote: "Laser combined with metal." },

  { id: "pulse-striker-mk2", name: "Pulse Striker MK-II", rarity: "epic", power: 42, quote: "Rhythmic blasts shatter steel." },
  { id: "neon-gear-phantom", name: "Neon Gear Phantom", rarity: "epic", power: 44, quote: "Glows before it strikes." },
  { id: "circuit-breaker-x", name: "Circuit Breaker X", rarity: "epic", power: 46, quote: "Overloads every system." },
  { id: "bassline-crusher", name: "Bassline Crusher", rarity: "epic", power: 43, quote: "Feel the drop... then destruction." },
  { id: "cyber-pulse-titan", name: "Cyber Pulse Titan", rarity: "epic", power: 47, quote: "Energy flows, enemies fall." },
  { id: "echo-drone-zx", name: "Echo Drone ZX", rarity: "epic", power: 41, quote: "Every sound is a weapon." },
  { id: "voltage-raptor", name: "Voltage Raptor", rarity: "epic", power: 45, quote: "Strikes faster than lightning." },
  { id: "synthwave-guardian", name: "Synthwave Guardian", rarity: "epic", power: 48, quote: "Protects the grid at all costs." },
  { id: "mecha-pulse-reaver", name: "Mecha Pulse Reaver", rarity: "epic", power: 44, quote: "Harvests energy from chaos." },
  { id: "quantum-beat-enforcer", name: "Quantum Beat Enforcer", rarity: "epic", power: 49, quote: "Time bends to its rhythm." },

  { id: "omega-bass-overlord", name: "Omega Bass Overlord", rarity: "legendary", power: 60, quote: "The final drop ends all." },
  { id: "hyperion-mech-prime", name: "Hyperion Mech Prime", rarity: "legendary", power: 62, quote: "Engineered for domination." },
  { id: "neural-sync-destroyer", name: "Neural Sync Destroyer", rarity: "legendary", power: 59, quote: "Mind and machine unite." },
  { id: "galactic-pulse-emperor", name: "Galactic Pulse Emperor", rarity: "legendary", power: 65, quote: "Rules beyond the stars." },
  { id: "void-frequency-titan", name: "Void Frequency Titan", rarity: "legendary", power: 63, quote: "Silence becomes annihilation." },
  { id: "chrono-beat-colossus", name: "Chrono Beat Colossus", rarity: "legendary", power: 61, quote: "Controls the tempo of time." },
  { id: "electro-nexus-sovereign", name: "Electro Nexus Sovereign", rarity: "legendary", power: 64, quote: "All power flows through it." },
  { id: "cyberstorm-apex", name: "Cyberstorm Apex", rarity: "legendary", power: 66, quote: "Storm of circuits unleashed." },
  { id: "singularity-soundbreaker", name: "Singularity Soundbreaker", rarity: "legendary", power: 68, quote: "One note. Total collapse." },
  { id: "infinity-mech-warlord", name: "Infinity Mech Warlord", rarity: "legendary", power: 70, quote: "Endless power, endless war." },

  // ❄️ SNOW THEME - COMMON
  { id: "snow_bunny", name: "Snow Bunny", rarity: "common", power: 3, quote: "Small paws in fresh snow." },
  { id: "ice_mouse", name: "Ice Mouse", rarity: "common", power: 4, quote: "Hides beneath frozen leaves." },
  { id: "frost_fox", name: "Frost Fox", rarity: "common", power: 5, quote: "Silent steps through the snow." },
  { id: "snow_owl", name: "Snow Owl", rarity: "common", power: 6, quote: "Watches the frozen forest." },
  { id: "frozen_wolf", name: "Frozen Wolf", rarity: "common", power: 7, quote: "A lonely howl in winter." },
  { id: "ice_penguin", name: "Ice Penguin", rarity: "common", power: 8, quote: "Slides faster than the wind." },
  { id: "snow_deer", name: "Snow Deer", rarity: "common", power: 9, quote: "Graceful as falling snow." },

  // ❄️ SNOW THEME - RARE
  { id: "ice_phoenix", name: "Ice Phoenix", rarity: "rare", power: 12, quote: "Rises from frozen ashes." },
  { id: "frost_knight", name: "Frost Knight", rarity: "rare", power: 14, quote: "Defender of the frozen kingdom." },
  { id: "glacier_dragon", name: "Glacier Dragon", rarity: "rare", power: 16, quote: "Its breath freezes mountains." },
  { id: "snow_spirit", name: "Snow Spirit", rarity: "rare", power: 11, quote: "A soul made of winter." },
  { id: "crystal_wolf", name: "Crystal Wolf", rarity: "rare", power: 17, quote: "Born inside an ancient glacier." },

  // ❄️ SNOW THEME - EPIC
  { id: "blizzard_golem", name: "Blizzard Golem", rarity: "epic", power: 23, quote: "A giant awakened by the storm." },
  { id: "frostbite_reaper", name: "Frostbite Reaper", rarity: "epic", power: 25, quote: "Winter follows wherever it walks." },
  { id: "arctic_mech", name: "Arctic Mech", rarity: "epic", power: 27, quote: "Built to survive eternal winter." },
  { id: "ice_storm_titan", name: "Ice Storm Titan", rarity: "epic", power: 29, quote: "Commands the frozen skies." },

  // ❄️ SNOW THEME - LEGENDARY
  { id: "absolute_zero_dragon", name: "Absolute Zero Dragon", rarity: "legendary", power: 38, quote: "The temperature of nothingness." },
  { id: "eternal_frost_emperor", name: "Eternal Frost Emperor", rarity: "legendary", power: 42, quote: "Rules the kingdom of endless snow." },
  { id: "glacial_overlord", name: "Glacial Overlord", rarity: "legendary", power: 45, quote: "Even mountains bow to winter." },
  
  // ❄️ MORE SNOW CARDS - COMMON
  { id: "frost_squirrel", name: "Frost Squirrel", rarity: "common", power: 3, quote: "Hides nuts beneath the ice." },
  { id: "snow_kitten", name: "Snow Kitten", rarity: "common", power: 4, quote: "Paws leave tiny frozen prints." },
  { id: "ice_frog", name: "Ice Frog", rarity: "common", power: 4, quote: "Sleeps beneath frozen ponds." },
  { id: "winter_hamster", name: "Winter Hamster", rarity: "common", power: 5, quote: "A tiny ball of snow." },
  { id: "frozen_bat", name: "Frozen Bat", rarity: "common", power: 5, quote: "Flies through icy caves." },
  { id: "snow_pup", name: "Snow Pup", rarity: "common", power: 6, quote: "Still learning to howl." },
  { id: "ice_seal", name: "Ice Seal", rarity: "common", power: 6, quote: "Slides across frozen lakes." },
  { id: "frost_rabbit", name: "Frost Rabbit", rarity: "common", power: 7, quote: "Faster than falling snow." },
  { id: "snow_crow", name: "Snow Crow", rarity: "common", power: 8, quote: "Collects shiny ice crystals." },
  { id: "tiny_snow_golem", name: "Tiny Snow Golem", rarity: "common", power: 9, quote: "Small body, cold heart." },

  // ❄️ MORE SNOW CARDS - RARE
  { id: "frost_panther", name: "Frost Panther", rarity: "rare", power: 11, quote: "Hunts silently in blizzards." },
  { id: "ice_samurai", name: "Ice Samurai", rarity: "rare", power: 13, quote: "Master of the frozen blade." },
  { id: "arctic_fox_spirit", name: "Arctic Fox Spirit", rarity: "rare", power: 14, quote: "A mysterious winter guardian." },
  { id: "frozen_griffin", name: "Frozen Griffin", rarity: "rare", power: 15, quote: "Wings covered in crystal frost." },
  { id: "snow_leopard", name: "Snow Leopard", rarity: "rare", power: 16, quote: "King of the snowy mountains." },
  { id: "ice_jellyfish", name: "Ice Jellyfish", rarity: "rare", power: 12, quote: "Glows beneath frozen waters." },
  { id: "glacier_guardian", name: "Glacier Guardian", rarity: "rare", power: 18, quote: "Protects the ancient ice." },
  { id: "frost_witch", name: "Frost Witch", rarity: "rare", power: 19, quote: "Whispers spells into snowflakes." },

  // ❄️ MORE SNOW CARDS - EPIC
  { id: "blizzard_phantom", name: "Blizzard Phantom", rarity: "epic", power: 22, quote: "Appears inside the white storm." },
  { id: "frozen_mech_guardian", name: "Frozen Mech Guardian", rarity: "epic", power: 24, quote: "Powered by ancient ice." },
  { id: "crystal_ice_dragon", name: "Crystal Ice Dragon", rarity: "epic", power: 26, quote: "Its scales shine like diamonds." },
  { id: "arctic_storm_beast", name: "Arctic Storm Beast", rarity: "epic", power: 28, quote: "Brings winter wherever it goes." },
  { id: "frost_crowned_king", name: "Frost Crowned King", rarity: "epic", power: 30, quote: "The ruler of frozen valleys." },

  // ❄️ MORE SNOW CARDS - LEGENDARY
  { id: "polar_star_dragon", name: "Polar Star Dragon", rarity: "legendary", power: 35, quote: "Born beneath the northern lights." },
  { id: "eternal_blizzard", name: "Eternal Blizzard", rarity: "legendary", power: 37, quote: "A storm that never ends." },
  { id: "frost_galaxy_emperor", name: "Frost Galaxy Emperor", rarity: "legendary", power: 40, quote: "Commands the stars of winter." },
  { id: "absolute_frost_titan", name: "Absolute Frost Titan", rarity: "legendary", power: 43, quote: "The strongest force of winter." },
  { id: "snowfall_ancient", name: "Snowfall Ancient", rarity: "legendary", power: 32, quote: "Older than the first snowfall." },
  { id: "winter_void_king", name: "Winter Void King", rarity: "legendary", power: 44, quote: "Darkness trapped inside ice." },
  { id: "crystal_universe_dragon", name: "Crystal Universe Dragon", rarity: "legendary", power: 46, quote: "An entire frozen universe within." }

];



const ENEMY_POOL = [
  // Ursprüngliche Gegner
  { name: "Shadow Spawn", power: [5, 10] },
  { name: "Cursed Echo", power: [8, 14] },
  { name: "Night Stalker", power: [12, 18] },
  { name: "Void Reaper", power: [18, 24] },
  { name: "Ink Tyrant", power: [24, 30] },
  { name: "Abyssal Mech Tyrant", power: [30, 42] },
  { name: "Neon Oblivion Reaper", power: [32, 45] },
  { name: "Cyber Doom Colossus", power: [35, 48] },
  { name: "Void Signal Overlord", power: [31, 44] },
  { name: "Glitchcore Devastator", power: [33, 47] },
  { name: "Omega Dread Machine", power: [36, 50] },
  { name: "Quantum Annihilator X", power: [34, 46] },
  { name: "Dark Pulse Executioner", power: [30, 50] },
  { name: "Hyperion Chaos Engine", power: [37, 60] },
  { name: "Singularity Warbringer", power: [38, 70] },

  // ❄️ Schwache Eis-Gegner
  { name: "Frostling", power: [5, 10] },
  { name: "Snow Phantom", power: [8, 14] },
  { name: "Ice Goblin", power: [10, 16] },
  { name: "Frozen Skeleton", power: [12, 18] },
  { name: "Snow Wolf", power: [15, 22] },
  { name: "Frost Spider", power: [18, 24] },
  { name: "Ice Wraith", power: [20, 26] },
  { name: "Glacier Hound", power: [22, 28] },
  { name: "Blizzard Imp", power: [24, 30] },
  { name: "Frozen Revenant", power: [26, 30] },

  // ❄️ Gleichstarke Eis-Gegner
  { name: "Frost Knight", power: [30, 38] },
  { name: "Glacier Berserker", power: [32, 42] },
  { name: "Snowstorm Reaper", power: [34, 44] },
  { name: "Cryo Mech Warrior", power: [35, 46] },
  { name: "Icebound Executioner", power: [36, 48] },
  { name: "Arctic Doom Bringer", power: [38, 50] },
  { name: "Frozen Chaos Beast", power: [32, 48] },
  { name: "Frostbite Overlord", power: [40, 50] },
  { name: "Blizzard Destroyer", power: [37, 49] },
  { name: "Glacial War Machine", power: [40, 50] },

  // ❄️ Stärkere Eis-Gegner
  { name: "Ancient Frost Titan", power: [50, 60] },
  { name: "Absolute Zero Colossus", power: [52, 65] },
  { name: "Cryogenic Nightmare", power: [55, 68] },
  { name: "Eternal Winter Dragon", power: [58, 72] },
  { name: "Frozen Apocalypse King", power: [60, 75] },
  { name: "Glacier Annihilator", power: [62, 76] },
  { name: "Arctic Oblivion God", power: [65, 78] },
  { name: "Omega Frost Emperor", power: [68, 80] },
  { name: "Absolute Blizzard Overlord", power: [70, 85] },
  { name: "Eternal Ice Destroyer", power: [72, 90] }
];


/* =====================================
   RARITY SETTINGS
===================================== */

const RARITY_WEIGHTS = [
  { rarity: "common", chance: 55 },
  { rarity: "rare", chance: 28 },
  { rarity: "epic", chance: 13 },
  { rarity: "legendary", chance: 1 }
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

/* =====================================
   GAME SETTINGS
===================================== */

const STARTER_INK = 15;
const DRAW_COST = 5;
const DAILY_REWARD = 15;
const WIN_REWARD = 7;
const LOSE_REWARD = -10;
const PRESENT = 1000;

let lastFightTime = 0;

let state = {
  ink: STARTER_INK,
  collection: {},
  selectedCardId: null,
  lastPullId: null,
  lastDaily: null,
  username: "NewInker"
};

/* =====================================
   SAVE AND LOAD
===================================== */

function saveGame() {
  localStorage.setItem("inkvibe_save", JSON.stringify(state));
}

function loadGame() {
  const save = localStorage.getItem("inkvibe_save");

  if (save) {
    try {
      state = JSON.parse(save);

      // Make sure all required properties exist
      state.ink ??= STARTER_INK;
      state.collection ??= {};
      state.selectedCardId ??= null;
      state.lastPullId ??= null;
      state.lastDaily ??= null;
      state.username ??= "NewInker";

    } catch (error) {
      console.warn("Save corrupted. Resetting game.");
      state = {
        ink: STARTER_INK,
        collection: {},
        selectedCardId: null,
        lastPullId: null,
        lastDaily: null,
        username: "NewInker"
      };
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

/* =====================================
   CARD FUNCTIONS
===================================== */

function getCardById(id) {
  return CARD_POOL.find(card => card.id === id);
}

function getCollectionSize() {
  return Object.values(state.collection)
    .reduce((sum, count) => sum + count, 0);
}

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
  const pool = CARD_POOL.filter(card => card.rarity === rarity);

  if (pool.length === 0) {
    return CARD_POOL[Math.floor(Math.random() * CARD_POOL.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function addCard(cardId) {
  state.collection[cardId] = (state.collection[cardId] || 0) + 1;
}

/* =====================================
   DISPLAY FUNCTIONS
===================================== */

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function renderTopStats() {
  setText("inkCount", state.ink);
  setText("collectionCount", getCollectionSize());

  const selectedCard = state.selectedCardId
    ? getCardById(state.selectedCardId)
    : null;

  setText(
    "selectedCardName",
    selectedCard ? selectedCard.name : "None"
  );
}

function cardHTML(card, count = null, selected = false, compact = false) {
  return `
    <div class="${compact ? "battle-card" : "collection-card"} ${RARITY_COLORS[card.rarity]} ${selected ? "selected" : ""}">
      <div class="card-topline">
        <span class="card-rarity-pill">${RARITY_LABELS[card.rarity]}</span>
        ${count !== null ? `<span class="card-count-pill">x${count}</span>` : ""}
        <span class="card-power-pill">⚡ ${card.power}</span>
      </div>

      <div class="card-bottom">
        <div class="card-name">${card.name}</div>
        <div class="card-sub">${card.quote}</div>
      </div>
    </div>
  `;
}

/* =====================================
   LAST PULL
===================================== */

function renderLastPull() {
  const container = document.getElementById("lastPullCard");
  const reveal = document.getElementById("drawReveal");

  const lastCard = state.lastPullId
    ? getCardById(state.lastPullId)
    : null;

  if (!container || !reveal) return;

  if (!lastCard) {
    container.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">???</span>
        <span class="featured-rarity">Unknown</span>
      </div>
    `;

    reveal.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">No Pull Yet</span>
        <span class="featured-rarity">Draw to reveal</span>
      </div>
    `;

    return;
  }

  container.className =
    `featured-card ${RARITY_COLORS[lastCard.rarity]}`;

  reveal.className =
    `draw-reveal ${RARITY_COLORS[lastCard.rarity]}`;

  container.innerHTML = `
    <div class="featured-card-inner">
      <span class="featured-name">${lastCard.name}</span>
      <span class="featured-rarity">${RARITY_LABELS[lastCard.rarity]}</span>
    </div>
  `;

  reveal.innerHTML = `
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

/* =====================================
   COLLECTION
===================================== */

function renderCollection() {
  const grid = document.getElementById("collectionGrid");

  if (!grid) return;

  const ownedCards = Object.entries(state.collection)
    .map(([id, count]) => ({
      card: getCardById(id),
      count
    }))
    .filter(item => item.card)
    .sort((a, b) => {
      const rarityOrder = {
        legendary: 4,
        epic: 3,
        rare: 2,
        common: 1
      };

      return rarityOrder[b.card.rarity] - rarityOrder[a.card.rarity]
        || b.card.power - a.card.power;
    });

  if (ownedCards.length === 0) {
    grid.innerHTML = `
      <div class="collection-empty glass" style="padding:24px;border-radius:22px;">
        No cards yet. Draw your first mystical cards!
      </div>
    `;

    return;
  }

  grid.innerHTML = ownedCards.map(({ card, count }) => `
    <div onclick="selectCard('${card.id}')">
      ${cardHTML(card, count, state.selectedCardId === card.id)}
    </div>
  `).join("");
}

/* =====================================
   SELECTED FIGHT CARD
===================================== */

function renderSelectedFightCard() {
  const element = document.getElementById("selectedFightCard");

  if (!element) return;

  if (!state.selectedCardId) {
    element.className = "battle-card placeholder-card small-card";

    element.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">No Card Selected</span>
        <span class="featured-rarity">Choose from Collection</span>
      </div>
    `;

    return;
  }

  const card = getCardById(state.selectedCardId);

  if (!card) return;

  element.className =
    `battle-card small-card ${RARITY_COLORS[card.rarity]}`;

  element.innerHTML = `
    <div class="card-topline">
      <span class="card-rarity-pill">${RARITY_LABELS[card.rarity]}</span>
      <span class="card-power-pill">⚡ ${card.power}</span>
    </div>

    <div class="card-bottom">
      <div class="card-name">${card.name}</div>
      <div class="card-sub">${card.quote}</div>
    </div>
  `;
}

/* =====================================
   USERNAME
===================================== */

function renderLoginName() {
  const user = localStorage.getItem("inkvibe_user");

  if (user) {
    state.username = user;
  }
}

/* =====================================
   RENDER EVERYTHING
===================================== */

function renderAll() {
  renderLoginName();
  renderTopStats();
  renderLastPull();
  renderCollection();
  renderSelectedFightCard();

  saveGame();
}

/* =====================================
   DAILY REWARD
===================================== */

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

/* =====================================
   DRAW CARDS
===================================== */

function drawCard() {
  if (state.ink < DRAW_COST) {
    alert("Not enough Ink!");
    return;
  }

  state.ink -= DRAW_COST;

  const rarity = rarityRoll();
  const card = randomCardByRarity(rarity);

  if (!card) {
    alert("Something went wrong while drawing a card!");
    state.ink += DRAW_COST;
    return;
  }

  addCard(card.id);
  state.lastPullId = card.id;

  if (!state.selectedCardId) {
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

    setTimeout(() => {
      renderAll();

      reveal.classList.add("card-flip");
      reveal.classList.add(`rarity-glow-${card.rarity}`);

    }, 300);
  } else {
    renderAll();
  }
}

/* =====================================
   SELECT CARD
===================================== */

function selectCard(cardId) {
  if (!getCardById(cardId)) return;

  if (!state.collection[cardId]) return;

  state.selectedCardId = cardId;

  saveGame();
  renderAll();
}

/* =====================================
   SPECIAL PRESENT
===================================== */

function getPresent() {
  state.ink += PRESENT;

  saveGame();
  renderAll();

  alert(`🎁 You received ${PRESENT} Ink!`);
}

/* =====================================
   ENEMIES
===================================== */

function randomEnemy() {
  const enemyBase =
    ENEMY_POOL[Math.floor(Math.random() * ENEMY_POOL.length)];

  const power = Math.floor(
    Math.random() * (enemyBase.power[1] - enemyBase.power[0] + 1)
  ) + enemyBase.power[0];

  return {
    name: enemyBase.name,
    power
  };
}

function renderEnemy(enemy) {
  const element = document.getElementById("enemyCard");

  if (!element) return;

  element.innerHTML = `
    <div class="card-topline">
      <span class="card-rarity-pill">Enemy</span>
      <span class="card-power-pill">⚡ ${enemy.power}</span>
    </div>

    <div class="card-bottom">
      <div class="card-name">${enemy.name}</div>
      <div class="card-sub">A hostile force from the Ink.</div>
    </div>
  `;
}

/* =====================================
   FIGHT SYSTEM
===================================== */

function fight() {
  const now = Date.now();
  const resultElement = document.getElementById("fightResult");

  if (now - lastFightTime < 10000) {
    if (resultElement) {
      resultElement.textContent = "Please wait before fighting again!";
    }

    return;
  }

  if (!state.selectedCardId) {
    alert("Please select a card from your Collection first!");
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
      `🏆 ${playerCard.name} defeated ${enemy.name}! (+${WIN_REWARD} Ink) [${playerRoll} vs ${enemyRoll}]`;

  } else {
    state.ink += LOSE_REWARD;

    resultElement.textContent =
      `💀 ${playerCard.name} lost against ${enemy.name}... (${LOSE_REWARD} Ink) [${playerRoll} vs ${enemyRoll}]`;
  }

  // Ink can never go below zero
  state.ink = Math.max(0, state.ink);

  saveGame();
  renderAll();
}

/* =====================================
   START GAME
===================================== */

loadGame();
renderAll();

renderAll();
