const jetpack = require("fs-jetpack"), //NOTE: remove if not used
      express = require("express"),
      app = express(),
      port = 3000,
      requiredir = require('require-dir'),
      levels = requiredir('./levels')

//Allow loading of files from the public directory
app.use(express.static(__dirname+'public'))
app.get("/json", (req, res) => {
    res.json(levels);
})
//Load /public/index.html
app.get('/', (req, res) => res.sendFile(__dirname+'/public/index.html'))
//Log on successful launch
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
