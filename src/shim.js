// Required to run the Snapshot tests using enzyme-to-json/serializer in React 16

global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};

window.cancelAnimationFrame = window.clearTimeout
window.requestAnimationFrame = (cb) => window.setTimeout(cb, 1000 / 60)
