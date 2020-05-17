var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //apoorva
  res.render('index', { title: 'Calculator' });
});

router.post('/cal', calculator)

function calculator(req, res) {
  var q;

  if (typeof (req.body.a) != "number" ){
      res.status(400)
      res.json({ error: 'Please enter valid a' })
  }
  else if (typeof (req.body.b) != "number" ) {
      res.status(400)
      res.json({ error: 'Please enter valid b' })
  }
  else {
      switch (req.body.operator) {
          case '+':
              q = req.body.a + req.body.b;
              break;
          case '-':
              q = req.body.a - req.body.b;
              break;
          case '*':
              q = req.body.a * req.body.b;
              break;
          case '/':
              q = req.body.a / req.body.b;
              break;
          default:
              res.status(400)
              res.json({ error: 'Invalid operator' })
              break;
      }

      res.json({ result: q })
  }
} 

module.exports = router;
