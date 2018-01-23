const media = {
  mmss: (milliseconds) => {
    let date = new Date(null);
    date.setMilliseconds(milliseconds);
    let baseConverstion = date.toISOString();

    if (baseConverstion[12] === '0') {
      return baseConverstion.substr(14, 5);
    }
    return baseConverstion.substr(11, 8);
  },
  hhmmss: (milliseconds) => {
    let date = new Date(null);
    date.setMilliseconds(milliseconds);
    let baseConverstion = date.toISOString();

    return baseConverstion.substr(11, 8);
  },
  hours: (mil) => {
    let sec = mil * 0.001;
    let min = sec * 0.0166667;
    let hour = min * 0.0166667;
    return Math.floor(hour);
  },
}

export default media;

