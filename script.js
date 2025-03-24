
const palaceData = {
    1: [1927, 1936, 1945, 1954, 1963, 1972, 1981, 1990, 1999, 2008],
    2: [1926, 1935, 1944, 1953, 1962, 1971, 1980, 1989, 1998, 2007],
    3: [1925, 1934, 1943, 1952, 1961, 1970, 1979, 1988, 1997, 2006],
    4: [1924, 1933, 1942, 1951, 1960, 1969, 1978, 1987, 1996, 2005],
    5: [1923, 1932, 1941, 1950, 1959, 1968, 1977, 1986, 1995, 2004],
    6: [1922, 1931, 1940, 1949, 1958, 1967, 1976, 1985, 1994, 2003],
    7: [1921, 1930, 1939, 1948, 1957, 1966, 1975, 1984, 1993, 2002, 2011],
    8: [1920, 1929, 1938, 1947, 1956, 1965, 1974, 1983, 1992, 2001, 2010],
    9: [1937, 1946, 1955, 1964, 1973, 1982, 1991, 2000, 2009]
  };
  
  const dateRanges = [
    { start: "02-04", end: "03-05" },
    { start: "03-06", end: "04-04" },
    { start: "04-05", end: "05-04" },
    { start: "05-05", end: "06-05" },
    { start: "06-06", end: "07-06" },
    { start: "07-07", end: "08-06" },
    { start: "08-07", end: "09-07" },
    { start: "09-08", end: "10-07" },
    { start: "10-08", end: "11-06" },
    { start: "11-07", end: "12-06" },
    { start: "12-07", end: "01-04" },
    { start: "01-05", end: "02-03" }
  ];
  
  const destinyCodeMap = {
    1: [
      "1-8-7", "1-7-8", "1-6-9", "1-5-1", "1-4-2", "1-3-3", "1-2-4", "1-1-5", "1-9-6",
      "1-8-7", "1-7-8", "1-6-9"
    ],
    2: [
      "2-2-5", "2-1-6", "2-9-7", "2-8-3", "2-7-9", "2-6-5", "2-5-2", "2-4-3", "2-3-4",
      "2-2-5", "2-1-6", "2-9-7"
    ],
    3: [
      "3-5-3", "3-4-4", "3-3-5", "3-2-6", "3-1-7", "3-9-8", "3-8-9", "3-7-1", "3-6-2",
      "3-5-3", "3-4-4", "3-3-5"
    ],
    4: [
      "4-8-1", "4-7-2", "4-6-3", "4-5-4", "4-4-5", "4-3-6", "4-2-7", "4-1-8", "4-9-9",
      "4-8-1", "4-7-2", "4-6-3"
    ],
    5: [
      "5-2-8", "5-1-9", "5-9-1", "5-8-2", "5-7-3", "5-6-4", "5-5-5", "5-4-6", "5-3-7",
      "5-2-8", "5-1-9", "5-9-1"
    ],
    6: [
      "6-5-6", "6-4-7", "6-3-8", "6-2-9", "6-1-1", "6-9-2", "6-8-3", "6-7-4", "6-6-5",
      "6-5-6", "6-4-7", "6-3-8"
    ],
    7: [
      "7-8-4", "7-7-5", "7-6-6", "7-5-7", "7-4-8", "7-3-9", "7-2-1", "7-1-2", "7-9-3",
      "7-8-4", "7-7-5", "7-6-6"
    ],
    8: [
      "8-2-2", "8-1-3", "8-9-4", "8-8-5", "8-7-6", "8-6-7", "8-5-8", "8-4-9", "8-3-1",
      "8-2-2", "8-1-3", "8-9-4"
    ],
    9: [
        "9-5-9", "9-4-1", "9-3-2", "9-2-3", "9-1-4", "9-9-5", "9-8-6", "9-7-7", "9-6-8",
        "9-5-9", "9-4-1", "9-3-2"
      ]
    };
    
    const palaceDescriptions = {
      1: "The Palace of Wisdom and Leadership",
      2: "The Palace of Relationships and Partnership",
      3: "The Palace of Creativity and Joy",
      4: "The Palace of Foundation and Security",
      5: "The Palace of Change and Freedom",
      6: "The Palace of Responsibility and Service",
      7: "The Palace of Spirituality and Analysis",
      8: "The Palace of Power and Abundance",
      9: "The Palace of Completion and Universal Love"
    };
    
    const destinyCodeRules = {
      secondDigit: {
        1: "Path of Leadership",
        2: "Path of Harmony",
        3: "Path of Expression",
        4: "Path of Stability",
        5: "Path of Freedom",
        6: "Path of Responsibility",
        7: "Path of Wisdom",
        8: "Path of Power",
        9: "Path of Completion"
      },
      thirdDigit: {
        1: "Inner Drive of Initiative",
        2: "Inner Drive of Cooperation",
        3: "Inner Drive of Creativity",
        4: "Inner Drive of Order",
        5: "Inner Drive of Adventure",
        6: "Inner Drive of Balance",
        7: "Inner Drive of Analysis",
        8: "Inner Drive of Achievement",
        9: "Inner Drive of Universal Love"
      }
    };
    
    let currentPalace = null;
    
    function isDateInRange(date, rangeStart, rangeEnd) {
      const currentDate = new Date(2000, date.getMonth(), date.getDate());
      const start = new Date(2000, 
        parseInt(rangeStart.split('-')[0]) - 1,
        parseInt(rangeStart.split('-')[1]));
      let end = new Date(2000,
        parseInt(rangeEnd.split('-')[0]) - 1,
        parseInt(rangeEnd.split('-')[1]));
        
      // Handle year wrap
      if (rangeEnd.split('-')[0] < rangeStart.split('-')[0]) {
        end.setFullYear(2001);
      }
      
      return currentDate >= start && currentDate <= end;
    }
    
    function getDateRangeIndex(birthDate) {
      for (let i = 0; i < dateRanges.length; i++) {
        if (isDateInRange(birthDate, dateRanges[i].start, dateRanges[i].end)) {
          return i;
        }
      }
      return 0;
    }
    
    function calculatePalace() {
      let birthYear = parseInt(document.getElementById('birthYear').value);
      const birthDate = new Date(document.getElementById('birthDate').value);
      const resultSection = document.getElementById('result');
      const palaceNumber = document.querySelector('.palace-number');
      const palaceDescription = document.querySelector('.palace-description');
    
      if (!birthYear || !birthDate) {
        alert('Please enter valid birth details');
        return;
      }
    
      // Adjust year if date is before February 3rd
      if (birthDate.getMonth() === 0 || // January
          (birthDate.getMonth() === 1 && birthDate.getDate() <= 3)) { // Feb 1-3
        birthYear = birthYear - 1;
      }
    
      if (birthYear < 1920 || birthYear > 2011) {
        alert('Please enter a year between 1920 and 2011');
        return;
      }
    
      let userPalace = null;
      for (const [palace, years] of Object.entries(palaceData)) {
        if (years.includes(birthYear)) {
          userPalace = parseInt(palace);
          break;
        }
      }
    
      if (userPalace) {
        currentPalace = userPalace;
        resultSection.classList.remove('hidden');
        setTimeout(() => resultSection.classList.add('show'), 100);
        
        palaceNumber.textContent = userPalace;
        palaceDescription.textContent = palaceDescriptions[userPalace];
      } else {
        alert('No palace found for the given year. Please try another year.');
      }
    }
    
    function proceedToStep2() {
      if (!currentPalace) return;
    
      const birthDate = new Date(document.getElementById('birthDate').value);
      const dateIndex = getDateRangeIndex(birthDate);
      const destinyCode = destinyCodeMap[currentPalace][dateIndex];
      const [palace, second, third] = destinyCode.split('-');
    
      // Update steps indicator
      document.querySelectorAll('.step').forEach((step, index) => {
        if (index === 1) step.classList.add('active');
      });
    
      // Hide step 1 and show step 2
      document.getElementById('step1').classList.add('hidden');
      document.getElementById('step2').classList.remove('hidden');
    
      // Display the full code
      document.querySelector('.code-segment.palace').textContent = palace;
      document.querySelector('.code-segment.second').textContent = second;
  document.querySelector('.code-segment.third').textContent = third;

  // Display explanation
  const explanation = `Your Destiny Code ${palace}-${second}-${third} represents:
    \n• Palace ${palace}: ${palaceDescriptions[palace]}
    \n• ${destinyCodeRules.secondDigit[second]}
    \n• ${destinyCodeRules.thirdDigit[third]}`;
  
  document.querySelector('.explanation-text').textContent = explanation;
}

// Add input validation
document.getElementById('birthYear').addEventListener('input', function(e) {
  const value = parseInt(e.target.value);
  const birthDate = document.getElementById('birthDate').value;
  
  if (!value) return;
  
  let adjustedYear = value;
  if (birthDate) {
    const date = new Date(birthDate);
    if (date.getMonth() === 0 || (date.getMonth() === 1 && date.getDate() <= 3)) {
      adjustedYear = value - 1;
    }
  }
  
  if (adjustedYear < 1920 || adjustedYear > 2011) {
    e.target.setCustomValidity('Please enter a year between 1920 and 2011');
  } else {
    e.target.setCustomValidity('');
  }
});

document.getElementById('birthDate').addEventListener('change', function() {
  // Trigger year validation when date changes
  const yearInput = document.getElementById('birthYear');
  const event = new Event('input');
  yearInput.dispatchEvent(event);
});
