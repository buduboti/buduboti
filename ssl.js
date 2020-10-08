const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('ssl', { dotfiles: 'allow' } ));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${ PORT }`);
})
