import React from 'react'

function DateOfBirth({selectedDay, setSelectedDay, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear}) {
    const Days = [31,28,31,30,31,30,31,31,30,31,30,31]; // Number of days for each month

    const isLeapYear = (year) => {
        year = parseInt(year);
        if (year % 4 !== 0) {
          return false;
        } else if (year % 400 === 0) {
          return true;
        } else if (year % 100 === 0) {
          return false;
        } else {
          return true;
        }
      };
    
      const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        if (isLeapYear(event.target.value)) {
          Days[1] = 29; // Update days in February for leap years
        } else {
          Days[1] = 28; // Reset to 28 for non-leap years
        }
      };
    
      const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        // If the selected month is February and it's a leap year, update days
        if (event.target.value === '2' && isLeapYear(selectedYear)) {
          Days[1] = 29;
        } else {
          Days[1] = 28;
        }
      };
    
      const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
      };
    
      const renderDayOptions = () => {
        const daysArray = Array.from({ length: Days[selectedMonth - 1] }, (_, index) => index + 1);
        return daysArray.map(day => (
          <option key={day} value={day}>{day}</option>
        ));
      };
    
      return (
        <div className='date-of-birth'> 
          <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="month">Month</option>
            {Array.from({ length: 12 }, (_, index) => index + 1).map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select value={selectedDay} onChange={handleDayChange}>
            <option value="day">Day</option>
            {renderDayOptions()}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="year">Year</option>
            {Array.from({ length: new Date().getFullYear() - 1930 + 1 }, (_, index) => 1930 + index).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      );
}

export default DateOfBirth