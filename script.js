const rect = d3.select('rect');
const addBtn = document.getElementById('addEvent');

const timeStampClosure = () => {
  rect.on('mousemove.timestamp', event => {
    console.log('time stamp mouse move..', event);
  });
};

const focusLineClosure = () => {
  rect.on('mousemove.focusline', event => {
    console.log('focus line mouse move...', event);
  });
};

addBtn.addEventListener('click', () => {
  focusLineClosure();
});

timeStampClosure();
