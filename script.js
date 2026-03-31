const CARD_POOL = [
  { id: "shadow_cat", name: "Shadow Cat", rarity: "common", power: 6, quote: "A whisper in the dark." },
  { id: "ink_sprite", name: "Ink Sprite", rarity: "common", power: 7, quote: "Tiny, but never harmless." },
  { id: "dark_fox", name: "Dark Fox", rarity: "common", power: 8, quote: "Eyes like midnight glass." },
  { id: "void_moth", name: "Void Moth", rarity: "rare", power: 12, quote: "Drawn to forgotten light." },
  { id: "moon_hound", name: "Moon Hound", rarity: "rare", power: 13, quote: "Tracks silver dreams." },
  { id: "glass_raven", name: "Glass Raven", rarity: "rare", power: 14, quote: "Its wings reflect secrets." },
  { id: "ink_angel", name: "Ink Angel", rarity: "epic", power: 19, quote: "A blessing written in shadow." },
  { id: "abyss_kitsune", name: "Abyss Kitsune", rarity: "epic", power: 21, quote: "Nine lies, one truth." },
  { id: "crown_wisp", name: "Crown Wisp", rarity: "epic", power: 22, quote: "Royalty made of smoke." },
  { id: "celestial_leviathan", name: "Celestial Leviathan", rarity: "legendary", power: 30, quote: "The sky bends around it." },
  { id: "ink_empress", name: "Ink Empress", rarity: "legendary", power: 32, quote: "She writes fate in gold." }
];

const ENEMY_POOL = [
  { name: "Shadow Spawn", power: [5, 10] },
  { name: "Cursed Echo", power: [8, 14] },
  { name: "Night Stalker", power: [12, 18] },
  { name: "Void Reaper", power: [18, 24] },
  { name: "Ink Tyrant", power: [24, 30] }
];

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
const DAILY_REWARD = 12;
const WIN_REWARD = 7;
const LOSE_REWARD = 2;

let state = {
  ink: STARTER_INK,
  collection: {},
  selectedCardId: null,
  lastPullId: null,
  lastDaily: null,
  username: "Gast"
};

function saveGame() {
  localStorage.setItem("inkvibe_save", JSON.stringify(state));
}

function loadGame() {
  const save = localStorage.getItem("inkvibe_save");
  if (save) {
    try {
      state = JSON.parse(save);
    } catch (e) {
      console.warn("Save corrupted, resetting.");
      saveGame();
    }
  } else {
    saveGame();
  }

  const username = localStorage.getItem("inkvibe_user");
  if (username) state.username = username;
}

function getCardById(id) {
  return CARD_POOL.find(card => card.id === id);
}

function getCollectionSize() {
  return Object.values(state.collection).reduce((sum, count) => sum + count, 0);
}

function rarityRoll() {
  const roll = Math.random() * 100;
  let cumulative = 0;

  for (const tier of RARITY_WEIGHTS) {
    cumulative += tier.chance;
    if (roll <= cumulative) return tier.rarity;
  }
  return "common";
}

function randomCardByRarity(rarity) {
  const pool = CARD_POOL.filter(card => card.rarity === rarity);
  return pool[Math.floor(Math.random() * pool.length)];
}

function addCard(cardId) {
  state.collection[cardId] = (state.collection[cardId] || 0) + 1;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderTopStats() {
  setText("inkCount", state.ink);
  setText("collectionCount", getCollectionSize());
  setText("selectedCardName", state.selectedCardId ? getCardById(state.selectedCardId).name : "None");
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

function renderLastPull() {
  const container = document.getElementById("lastPullCard");
  const reveal = document.getElementById("drawReveal");
  const lastCard = state.lastPullId ? getCardById(state.lastPullId) : null;

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

  container.className = `featured-card ${RARITY_COLORS[lastCard.rarity]}`;
  reveal.className = `draw-reveal ${RARITY_COLORS[lastCard.rarity]}`;

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

function renderCollection() {
  const grid = document.getElementById("collectionGrid");
  if (!grid) return;

  const ownedCards = Object.entries(state.collection)
    .map(([id, count]) => ({ card: getCardById(id), count }))
    .sort((a, b) => {
      const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 };
      return rarityOrder[b.card.rarity] - rarityOrder[a.card.rarity] || b.card.power - a.card.power;
    });

  if (ownedCards.length === 0) {
    grid.innerHTML = `
      <div class="collection-empty glass" style="padding:24px;border-radius:22px;">
        Noch keine Karten. Zieh erstmal deine ersten mystischen Pulls.
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

function renderSelectedFightCard() {
  const el = document.getElementById("selectedFightCard");
  if (!el) return;

  if (!state.selectedCardId) {
    el.className = "battle-card placeholder-card small-card";
    el.innerHTML = `
      <div class="featured-card-inner">
        <span class="featured-name">No Card Selected</span>
        <span class="featured-rarity">Choose from Collection</span>
      </div>
    `;
    return;
  }

  const card = getCardById(state.selectedCardId);
  el.className = `battle-card small-card ${RARITY_COLORS[card.rarity]}`;
  el.innerHTML = `
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

function renderLoginName() {
  const user = localStorage.getItem("inkvibe_user");
  if (user) state.username = user;
}

function renderAll() {
  renderLoginName();
  renderTopStats();
  renderLastPull();
  renderCollection();
  renderSelectedFightCard();
  saveGame();
}

function claimDaily() {
  const today = new Date().toDateString();

  if (state.lastDaily === today) {
    alert("Du hast deinen Daily Reward heute schon abgeholt.");
    return;
  }

  state.lastDaily = today;
  state.ink += DAILY_REWARD;
  saveGame();
  renderAll();
  alert(`🎁 Daily Reward erhalten! +${DAILY_REWARD} Ink`);
}

function drawCard() {
  if (state.ink < DRAW_COST) {
    alert("Nicht genug Ink!");
    return;
  }

  state.ink -= DRAW_COST;

  const rarity = rarityRoll();
  const card = randomCardByRarity(rarity);

  addCard(card.id);
  state.lastPullId = card.id;

  if (!state.selectedCardId) {
    state.selectedCardId = card.id;
  }

  saveGame();
  renderAll();
}

function selectCard(cardId) {
  state.selectedCardId = cardId;
  saveGame();
  renderAll();
}

function randomEnemy() {
  const enemyBase = ENEMY_POOL[Math.floor(Math.random() * ENEMY_POOL.length)];
  const power = Math.floor(Math.random() * (enemyBase.power[1] - enemyBase.power[0] + 1)) + enemyBase.power[0];
  return { name: enemyBase.name, power };
}

function renderEnemy(enemy) {
  const el = document.getElementById("enemyCard");
  if (!el) return;

  el.innerHTML = `
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

function fight() {
  if (!state.selectedCardId) {
    alert("Wähle zuerst eine Karte aus deiner Collection.");
    return;
  }

  const playerCard = getCardById(state.selectedCardId);
  const enemy = randomEnemy();

  renderEnemy(enemy);

  const playerRoll = playerCard.power + Math.floor(Math.random() * 8);
  const enemyRoll = enemy.power + Math.floor(Math.random() * 8);

  const resultEl = document.getElementById("fightResult");

  if (playerRoll >= enemyRoll) {
    state.ink += WIN_REWARD;
    resultEl.textContent = `🏆 ${playerCard.name} besiegt ${enemy.name}! (+${WIN_REWARD} Ink) [${playerRoll} vs ${enemyRoll}]`;
  } else {
    state.ink += LOSE_REWARD;
    resultEl.textContent = `💀 ${playerCard.name} verliert gegen ${enemy.name}... (+${LOSE_REWARD} Trost-Ink) [${playerRoll} vs ${enemyRoll}]`;
  }

  saveGame();
  renderTopStats();
}

loadGame();
renderAll();
