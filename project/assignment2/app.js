const express = require('express');
const app = express();
const port = 4000;

// Endpoint 1: Text Response
app.get('/textmessage', (req, res) => {
  res.send('lorem ipsum.');
});

// Endpoint 2: JSON Response
app.get('/jsonmessage', (req, res) => {
    const jsonData = {
        message: 'lorem ipsum.',
        timestamp: new Date()
      };
      res.json(jsonData);
    });

// Endpoint 3: HTML Response
app.get('/htmlmessage', (req, res) => {
    const htmlcont = `
    <html>
    <body>
    <p>lorem ipsum.</p>
    </body>
    </html>`;
    res.send(htmlcont);
});


// Endpoint 4: Info
app.get('/info', (req, res) => {
    const aika = new Date().toLocaleTimeString();
    const htmlcont = `
    <html>
    <body>
    <h1>hello user</h1>
    <p>received at: ${aika}</p>
    </body>
    </html> `;
    res.send(htmlcont);
});



// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});