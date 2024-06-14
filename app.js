const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const Contact = require('./models/contact');
const Dance = require('./models/dance');
const Trial = require('./models/trial');
const bodyParser = require('body-parser');



app.use('/static', express.static('static'));  // For serving static files
app.use(express.urlencoded())


app.set('view engine', 'pug');   //Set the template engine as pug
app.set('views', path.join(__dirname, 'templates'));  //Set the templates


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});


app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});


app.post('/contact', (req, res) => {
    const data = req.body;
    const enquiry = new Contact(data); 

    enquiry.save()
        .then(() => {
            res.status(200).render('home.pug');
            console.log('Successfully saved');
        })
        .catch((error) => {
            res.status(400);
            console.log('Error in saving: ' + error.message);
        })
});  


app.get('/about', (req, res) => {
    res.status(200).render('about.pug');
});


app.get('/styles', async (req, res) => {
  try {
      const dances = await Dance.find();
      console.log(dances);
      res.render('styles', { dances });
  } catch (error) {
    res.status(500).send('Error fetching dance styles');
  }
});


app.get('/trial', (req, res) => {
    res.status(200).render('trial.pug');
});


app.post('/trial', (req, res) => {
    const data = req.body;
    const trial = new Trial(data); 

    trial.save()
        .then(() => {
            res.status(200).render('home.pug');
            console.log('Successfully saved');
        })
        .catch((error) => {
            res.status(400);
            console.log('Error in saving: ' + error.message);
        })
});  


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});
