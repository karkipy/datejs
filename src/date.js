// assuming the value is date value either time stamp of date object
const englishMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  
  
  const dateMin = (value) => {
    const date = new Date(value);
  
    const getStartingDate = () => {
      date.setDate(1);
      const day = -Math.abs(date.getDay()) + 1;
      date.setDate(day);
      return date;
    };
  
    const getStartingDateTime = () => {
      date.setDate(1);
      const day = -Math.abs(date.getDay()) + 1;
      date.setDate(day);
      return date.getTime();
    };
  
    const getCurrentMonth = () => {
      return englishMonth[date.getMonth()];
    };
  
    const isSame = (check) => {
      const dateObject = new Date(check.getTime());
      return date.getFullYear() === dateObject.getFullYear()
        && date.getMonth() === dateObject.getMonth()
        && date.getDate() === dateObject.getDate();
    };
  
    const isSameMonth = (check) => {
      const dateObject = new Date(check);
      return date.getMonth() === dateObject.getMonth()
        && date.getFullYear() === dateObject.getFullYear();
    };
  
    const isToday = () => {
      const dateObject = new Date();
      return date.getFullYear() === dateObject.getFullYear()
        && date.getMonth() === dateObject.getMonth()
        && date.getDate() === dateObject.getDate();
    };
  
    const getMonth = () => {
      return date.getMonth();
    };
  
    const getYear = () => {
      return date.getFullYear();
    };
  
    const getDate = () => {
      return date.getDate();
    };
  
  
    const setMonth = (month) => {
      return date.setMonth(month);
    };
  
    const setDate = (d) => {
      return date.setDate(d);
    };
  
    const setYear = (year) => {
      date.setYear(year);
    };
  
    const getTime = () => {
      return date.getTime();
    };
  
  
    const formatFnc = (format = 'YYYY-MM-DD') => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const res = format
        .replace('YYYY', year)
        .replace('yyyy', year)
        .replace('MM', enlishMonth[month])
        .replace('DD', date.getDay())
        .replace('mm', month)
        .replace('dd', date);
      return res;
    };

    const diff = (diffDate) => {

    }
  
    return {
      format: formatFnc,
      getTime,
      setYear,
      setMonth,
      setDate,
      getMonth,
      getCurrentMonth,
      getDate,
      isToday,
      isSame,
      isSameMonth,
      getStartingDate,
      getYear,
      getStartingDateTime,
      diff,
    };
  };
  
  
  export default dateMin;
  