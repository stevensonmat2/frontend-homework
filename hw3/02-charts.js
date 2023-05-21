const backgroundColors = [];

const renderChart = (names, counts) => {
  const donutChart = document.querySelector('.donut-chart');

  const chart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: names,
      datasets: [
        {
          label: 'My First Dataset',
          data: counts,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const url = 'https://thronesapi.com/api/v2/Characters';

function consolidateMap(map) {
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      for (const otherKey of map.keys()) {
        if (otherKey === key) {
          continue;
        }

        if (compareKeys(key, otherKey)) {
          console.log(key);
          map.set(otherKey, (map.get(otherKey)) + 1);
          map.delete(key);
          break;
        }
      }
    }
  }

  return map;
}

function compareKeys(key1, key2) {
  const minLength = Math.min(key1.length, key2.length);
  const threshold = Math.floor(minLength * 0.8);

  let matches = 0;
  for (let i = 0; i < minLength; i++) {
    if (key1[i] === key2[i]) {
      matches++;
    }
  }

  return matches >= threshold;
}
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    let map = new Map();

    data.forEach((item) => {
      let name = item.lastName;
      if (name === '' || name === 'None') {
        name = 'Unknown';
      }
      if (map.has(name)) {
        map.set(name, map.get(name) + 1);
      } else {
        map.set(name, 1);
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        backgroundColors.push(`rgba(${r}, ${g}, ${b}, 0.5)`);
      }
    });

    map = consolidateMap(map);

    const names = Array.from(map.keys());
    const counts = Array.from(map.values());

    renderChart(names, counts);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
