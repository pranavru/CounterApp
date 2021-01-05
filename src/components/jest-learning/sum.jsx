/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const data = require('../../data.json');

const sum = (a, b) => a + b;
function mockFetchData() {
  window.setTimeout(async () => {
    const response = await fetch(data);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  }, 5000);
}

module.exports = {
  sum, mockFetchData,
};
