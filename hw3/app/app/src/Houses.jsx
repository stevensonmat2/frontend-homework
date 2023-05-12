import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Houses(props) {
  const { title } = props;
  const { characters } = props;
  const backgroundColors = [];
  let map = new Map();

  characters.forEach((item) => {
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
      backgroundColors.push(`rgba(${r}, ${g}, ${b}, 0.5)`)
    }
  });

  function consolidateMap(map) {
    for (let key of map.keys()) {
      if (map.get(key) === 1) {
        for (let otherKey of map.keys()) {
          if (otherKey === key) {
            continue;
          }

          if (compareKeys(key, otherKey)) {
            console.log(key)
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

  map = consolidateMap(map);
  const names = Array.from(map.keys());
  const counts = Array.from(map.values());

  const data = {
    labels: names,
    datasets: [
      {
        label: 'House count',
        data: counts,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-2'>
      <h1 className='text-center'>{title}</h1>
      <div>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default Houses;