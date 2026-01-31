const express = require('express');
const app = express();

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello to WinXP (VM01) from Xubuntu (VM02) Microservice!. The server is hosted by Harshita Gaur.' });
});

app.listen(3000, () => {
  console.log('Microservice running on port 3000 of VM02, hosted by Harshita Gaur');
});