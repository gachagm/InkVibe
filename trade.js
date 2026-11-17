
/* =====================================
   TRADING SYSTEM
===================================== */

let selectedTradeCard = null;

/* =====================================
   RENDER PLAYER COLLECTION
===================================== */

function renderYourCards() {

  const container = document.getElementById("yourCards");

  if (!container) return;

  const entries = Object.entries(state.collection);

  if (entries.length === 0) {

    container.innerHTML = `
      <p>You don't own any cards yet.</p>
    `;

    return;
  }

  container.innerHTML = entries.map(([id, count]) => {

    const card = getCardById(id);

    if (!card) return "";

    return `
      <div
        class="card ${selectedTradeCard === id ? "selected" : ""}"
        onclick="selectTradeCard('${id}')"
      >

        <strong>${card.name}</strong>

        <p>${card.rarity.toUpperCase()}</p>

        <p>⚡ Power: ${card.power}</p>

        <p>Owned: x${count}</p>

      </div>
    `;

  }).join("");

}

/* =====================================
   SELECT CARD FOR TRADING
===================================== */

function selectTradeCard(cardId) {

  const card = getCardById(cardId);

  if (!card || !state.collection[cardId]) return;

  selectedTradeCard = cardId;

  const info = document.getElementById("selectedInfo");

  if (info) {
    info.textContent = "Selected: " + card.name;
  }

  renderYourCards();

}

/* =====================================
   GENERATE TRADE CODE
===================================== */

function generateTradeCode() {

  if (!selectedTradeCard) {

    alert("Please select a card first!");

    return;
  }

  const card = getCardById(selectedTradeCard);

  if (!card) {

    alert("Invalid card!");

    return;
  }

  const data = {

    cardId: selectedTradeCard,

    time: Date.now()

  };

  const code = btoa(JSON.stringify(data));

  const input = document.getElementById("tradeCode");

  input.value = code;

  alert("Trade Code successfully generated!");

}

/* =====================================
   COPY TRADE CODE
===================================== */

function copyTradeCode() {

  const input = document.getElementById("tradeCode");

  if (!input || !input.value) {

    alert("Generate a Trade Code first!");

    return;
  }

  if (navigator.clipboard && window.isSecureContext) {

    navigator.clipboard.writeText(input.value)
      .then(() => {
        alert("Trade Code copied!");
      })
      .catch(() => {
        input.select();
        alert("Please copy the selected code manually.");
      });

  } else {

    input.select();
    alert("Please copy the selected code manually.");

  }

}

/* =====================================
   REDEEM TRADE CODE
===================================== */

function redeemCode() {

  const input = document.getElementById("redeemInput");

  const code = input.value.trim();

  if (!code) {

    alert("Please enter a Trade Code!");

    return;
  }

  try {

    const decoded = atob(code);

    const data = JSON.parse(decoded);

    const cardId = data.cardId;

    const card = getCardById(cardId);

    // Check if the card exists
    if (!card) {

      alert("Invalid Trade Code! Card not found.");

      return;
    }

    // Check the code timestamp
    if (
      typeof data.time !== "number" ||
      data.time > Date.now() ||
      Date.now() - data.time > 24 * 60 * 60 * 1000
    ) {

      alert("This Trade Code has expired or is invalid!");

      return;
    }

    // Add the received card
    state.collection[cardId] =
      (state.collection[cardId] || 0) + 1;

    saveGame();

    renderYourCards();

    // Refresh the main game if it is available
    if (typeof renderAll === "function") {
      renderAll();
    }

    alert("🎉 You received: " + card.name);

    input.value = "";

  } catch (error) {

    alert("Invalid Trade Code!");

  }

}

/* =====================================
   INITIALIZE TRADING
===================================== */

renderYourCards();
