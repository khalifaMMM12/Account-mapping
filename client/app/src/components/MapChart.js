import Chart from 'chart.js/auto';
import { useEffect } from 'react';

function MapChart({ newAccountsData, oldAccountsData }) {
  useEffect(() => {
    const fetchData = async () => { 
      const data = [
        // { year: 2010, newAccounts: newAccountsData[0], oldAccounts: oldAccountsData[0] },
        // { year: 2011, newAccounts: newAccountsData[1], oldAccounts: oldAccountsData[1] },
        // { year: 2012, newAccounts: newAccountsData[2], oldAccounts: oldAccountsData[2] },
        // { year: 2013, newAccounts: newAccountsData[3], oldAccounts: oldAccountsData[3] },
        // { year: 2014, newAccounts: newAccountsData[4], oldAccounts: oldAccountsData[4] },
        // { year: 2015, newAccounts: newAccountsData[5], oldAccounts: oldAccountsData[5] },
        // { year: 2016, newAccounts: newAccountsData[6], oldAccounts: oldAccountsData[6] },
        {
          year: 2023,
          newAccounts: newAccountsData && newAccountsData.length > 100 ? newAccountsData[0] : 0,
          oldAccounts: oldAccountsData && oldAccountsData.length > 2000 ? oldAccountsData[0] : 0,
        }
       
      ];

      const ctx = document.getElementById('AccountChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'New Accounts',
              data: data.map(row => row.newAccounts),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
            {
              label: 'Old Accounts',
              data: data.map(row => row.oldAccounts),
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        },
      });
    };
  
    fetchData();
  }, [newAccountsData, oldAccountsData]);
}

export default MapChart;