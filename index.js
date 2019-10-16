const jetpack = require("fs-jetpack"), //NOTE: remove if not used
      express = require("express"),
      app = express(),
      port = process.env.PORT || 3000,
      requiredir = require('require-dir'),
      levels = requiredir('./levels'),
      bp = require('body-parser')

//We need to use body parser to parse the request:
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
//Allow loading of files from the public directory:
app.use(express.static('public'));
//Load /public/index.html:
app.get('/', (req, res) => res.sendFile(__dirname+'/public/index.html'))
//Send level as json:
app.post("/json", (req, res) => {
    var level = req.body.level;
    console.log(level+" requested");
    res.json(levels[level]);
})
//Log on successful launch:
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
