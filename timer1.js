let delay = process.argv.slice(2);

const setTimer = (delay) => {
  delay.sort((a, b) => a - b);
  for (let num of delay) {
    if (Number(num)) {
      setTimeout(function () {
        process.stdout.write('\x07');
      }, num);
    }
  }
};

setTimer(delay);