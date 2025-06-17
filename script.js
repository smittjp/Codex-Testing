const railLines = {
  "Yamanote Line": [
    "Tokyo", "Kanda", "Akihabara", "Ueno", "Ikebukuro",
    "Shinjuku", "Shibuya", "Shinagawa", "Tamachi"
  ],
  "Chuo Line (Rapid)": [
    "Tokyo", "Kanda", "Akihabara", "Ochanomizu", "Yotsuya",
    "Shinjuku", "Nakano", "Mitaka"
  ],
  "Tokaido Shinkansen": [
    "Tokyo", "Shinagawa", "Shin-Yokohama", "Nagoya",
    "Kyoto", "Shin-Osaka"
  ],
  "Osaka Loop Line": [
    "Osaka", "Kyobashi", "Osakajo-koen", "Tennoji",
    "Nishikujo", "Fukushima", "Osaka"
  ]
};

const stationDirections = {
  "Tokyo": "Exit the central gate and you'll spot a Family Mart right beside the taxi stand.",
  "Kanda": "Walk north toward the bus stop and cross the street for your famichiki fix.",
  "Akihabara": "Take the Electric Town exit and follow the neon green sign.",
  "Ueno": "Head to the park side exit, then turn left at the panda statue.",
  "Ikebukuro": "Leave from the east exit and stroll two minutes toward Sunshine City.",
  "Shinjuku": "Use the south exit and look for the store under the big video screen.",
  "Shibuya": "Scramble across the crossing and you'll see Family Mart by the tall building.",
  "Shinagawa": "Go out the konan exit and walk straight until the second traffic light.",
  "Tamachi": "Take the west exit and turn right at the first corner.",
  "Ochanomizu": "Exit toward the bridge and you'll find a store next to the bookstore.",
  "Yotsuya": "Leave from the akasaka gate and walk downhill for one block.",
  "Nakano": "Go out the north exit and it's beside the arcade entrance.",
  "Mitaka": "Head to the south entrance and it's opposite the bus terminal.",
  "Shin-Yokohama": "Exit the shinkansen gates and go down the escalator on your left.",
  "Nagoya": "Take the sakura-dori exit and turn right at the big clock.",
  "Kyoto": "Leave from the hachijo side and cross the street toward Kyoto Tower.",
  "Shin-Osaka": "Exit the central gate, Family Mart is next to the souvenir shop.",
  "Osaka": "Use the central exit and walk toward the ferris wheel.",
  "Kyobashi": "Exit on the Keihan side and turn left at the first street.",
  "Osakajo-koen": "Head toward the castle and it's by the bicycle parking.",
  "Tennoji": "Leave from the north exit and walk past the zoo entrance.",
  "Nishikujo": "Take the east exit and cross the small bridge.",
  "Fukushima": "Exit the platform stairs and turn right at the main road."
};

const lineSelect = document.getElementById('lineSelect');
const stationSelect = document.getElementById('stationSelect');
const directionsDiv = document.getElementById('directions');
const beepSound = new Audio('FamilyMartChime.mp3');


for (const line of Object.keys(railLines)) {
  const opt = document.createElement('option');
  opt.value = line;
  opt.textContent = line;
  lineSelect.appendChild(opt);
}

lineSelect.addEventListener('change', () => {
  const stations = railLines[lineSelect.value] || [];
  stationSelect.innerHTML = '<option value="">--Choose a station--</option>';
  stationSelect.disabled = stations.length === 0;
  stations.forEach(station => {
    const opt = document.createElement('option');
    opt.value = station;
    opt.textContent = station;
    stationSelect.appendChild(opt);
  });
  directionsDiv.textContent = '';
});

stationSelect.addEventListener('change', () => {
  const station = stationSelect.value;
  directionsDiv.textContent = stationDirections[station] || '';
  if (stationDirections[station]) {
    playSound();
  }
});

function playSound() {
  try {
    beepSound.currentTime = 0;
    const playPromise = beepSound.play();
    if (playPromise !== undefined) {
      playPromise.catch(e => console.error(e));
    }
  } catch (e) {
    console.error(e);
  }
}

// Randomize famichiki positions
const famichikis = document.querySelectorAll('.famichiki');
famichikis.forEach(f => {
  f.style.left = Math.random() * 100 + 'vw';
  f.style.top = Math.random() * 100 + 'vh';
});
