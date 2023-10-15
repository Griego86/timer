const alarmClock = function (input) {
  input = process.argv.slice(2);
  input = input.sort((a, b) => a - b);

  for (let item of input) {
    if (typeof item === 'number') {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, item * 1000);
    }
  }
};

alarmClock();