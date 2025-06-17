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

const selectEl = document.getElementById('lineSelect');
const stationsList = document.getElementById('stationsList');

// Populate dropdown
for (const line of Object.keys(railLines)) {
  const opt = document.createElement('option');
  opt.value = line;
  opt.textContent = line;
  selectEl.appendChild(opt);
}

selectEl.addEventListener('change', () => {
  stationsList.innerHTML = '';
  const stations = railLines[selectEl.value] || [];
  stations.forEach(station => {
    const li = document.createElement('li');
    li.textContent = station;
    stationsList.appendChild(li);
  });
});
