const date = new Date();
const month = date.toLocaleString('en-GB', { month: 'short' });

document.body.classList.add(month.toLowerCase());
