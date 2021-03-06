const arr = [
    1801,
    1324,
    1924,
    1848,
    1735,
    1721,
    1948,
    1667,
    1832,
    1773,
    1972,
    1777,
    1866,
    1850,
    1786,
    1617,
    1806,
    1923,
    789,
    1645,
    1530,
    1989,
    1720,
    1681,
    1807,
    1716,
    1935,
    1944,
    1878,
    1859,
    1602,
    1154,
    1824,
    1993,
    1952,
    1849,
    1695,
    523,
    1845,
    1879,
    1744,
    1374,
    1567,
    1725,
    1986,
    2006,
    1739,
    1751,
    1709,
    1800,
    2008,
    1715,
    1728,
    1677,
    1388,
    1815,
    1750,
    1827,
    1737,
    1819,
    1916,
    1909,
    1726,
    1753,
    1899,
    1981,
    1558,
    1852,
    1762,
    551,
    1881,
    1891,
    1957,
    1976,
    1383,
    1847,
    1968,
    1736,
    1828,
    1851,
    1975,
    1794,
    1785,
    1837,
    1979,
    1798,
    1789,
    1534,
    1877,
    1724,
    1843,
    1812,
    1743,
    1951,
    1900,
    1887,
    1766,
    1991,
    1839,
    1700,
    1858,
    1864,
    2004,
    1870,
    1985,
    1919,
    1466,
    1754,
    1964,
    946,
    1907,
    1942,
    1911,
    321,
    1930,
    1854,
    1644,
    1757,
    1719,
    1741,
    1853,
    1706,
    1659,
    1945,
    1821,
    1950,
    1761,
    1838,
    1770,
    1927,
    1447,
    1803,
    2000,
    2010,
    1765,
    1691,
    1742,
    1936,
    1929,
    1902,
    1539,
    1816,
    1553,
    1982,
    1813,
    1896,
    1772,
    267,
    1829,
    1912,
    1787,
    1782,
    1763,
    1461,
    1883,
    1894,
    2005,
    1758,
    1717,
    1749,
    1733,
    1775,
    1767,
    1705,
    1959,
    1903,
    1880,
    2003,
    1544,
    1732,
    1833,
    1926,
    1980,
    1946,
    1978,
    1710,
    1831,
    1906,
    1922,
    1861,
    1694,
    1875,
    307,
    1920,
    1934,
    1966,
    1804,
    1799,
    1548,
    1871,
    1769,
    1997,
    1639,
    1830,
    917,
    1797,
    1672,
    1921,
    1965,
    1662,
  ]
  
  // Break it up into smaller understable chunks
  const arr2 = [
    1721,
    979,
    366,
    299,
    675,
    1456,
  ]
  
  const addTwo = (arr, answer) => {
    /**
     * Solution 1
     */
    /* for (let x in arr) {
      for (let y in arr) {
        // console.log(arr[x], arr[y], arr[x] + arr[y])
        for (let z in arr) {
          if (arr[x] + arr[y] + arr[z] === answer) {
            console.log(arr[x], arr[y], arr[z], arr[x] + arr[y] + arr[z])
            return arr[x] * arr[y]
          }
        }
    
      }
    } */
    
    /**
     * Solution 2
     */
    // const sum = arr.reduce((acc, cur) => {
    //   console.log({acc, cur})
    //   for (let x of arr) {
    //     console.log(x, cur, x + cur)
    //     return x + cur === answer ? x * cur : acc;
    //   }
    // });
    
    // return sum
    
    const names = ['bob', 'paul', 'henk', 'gerard'];
    const bobPerson = names[0];
    const paulPerson = names[1];
    
    const [bpers, ppers, ...restNames] = names;
    const greet = `${bpers} is afriend of ${ppers}`;
    console.log(greet);
    console.log(restNames) // ['henk', 'gerard']
    
    /**
     * Solution 3
     */
    const sum2 = arr.filter(nr => arr.find(arrItem => arrItem + nr === answer));
    
    // this is Destructering pattern
    const [frNr, scNr] = sum2;
    
    // return sum[0] * sum[1];
    return frNr * scNr;
  }
  
  console.log(addTwo(arr2, 2020));
  