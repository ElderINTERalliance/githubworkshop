const jetpack = require("fs-jetpack"),
      express = require("express"),
      app = express(),
      port = 3000,
      bodyparser = require('body-parser')


//Allow loading of files from the public directory
app.use(express.static('public'))
//Load /public/index.html
app.get('/', (req, res) => res.sendFile(__dirname+'/public/index.html'))
//Log on successful launch
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//jetpack.read('settings.json', 'json');
//jetpack.write('settings.json', JSON.stringify(settings));

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));

app.post('/profile', function (req, res, next) {
    console.log(req.body.response)
    //jetpack.write('test.json', JSON.stringify(req.body));
    res.status(201).json(req.body.response);
  })
