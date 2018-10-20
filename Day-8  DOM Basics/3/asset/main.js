const setProperty = (prop, val) => document.body.style.setProperty(prop, val);
const removeProperty = (prop) => document.body.style.removeProperty(prop);

// JS is only used to set custom property
// values. All calculation is in CSS.
function setHandPosition() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hr = date.getHours();

  if (sec === 0) {
    setProperty('--second', 60);
    setTimeout(() => {
      setProperty('--tick-duration', 0);
      setProperty('--second', 0);
    }, 500);
  } else if (sec === 1) {
    removeProperty('--tick-duration');
    setProperty('--second', sec);
  } else {
    setProperty('--second', sec);
  }

  setProperty('--minute', min);
  setProperty('--hour', hr);
}

window.setInterval(() => requestAnimationFrame(setHandPosition), 1000);
setHandPosition();
