import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <div style={{ paddingTop: '45px' }}>Cycle Status</div>

      <div className="timeline">
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.machine_status === 1 ? 'yellow' : 'green'}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Data;
