const messages = [
  "David",
  "Ana",
  "Nicolay",
  "Diego",
  "Laura",
  "Juana"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg }