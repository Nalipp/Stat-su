const convertTime = (milliseconds, format) => {
  let date = new Date(null);
  date.setMilliseconds(milliseconds);
  let baseConverstion = date.toISOString()
  let timeConverted;

  if (format === 'small') {
    if (baseConverstion[12] === '0') {
      return timeConverted = baseConverstion.substr(14, 5);
    } 
  }
  timeConverted = baseConverstion.substr(11, 8);


  return timeConverted;
}

export default convertTime;
