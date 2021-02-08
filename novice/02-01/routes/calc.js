var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('calc', {title : 'Calculator', nama : 'Kadek' });
});

router.get('/lvlup', function(req, res, next) {
  res.render('calclvlup', {title : 'Calculator with Bakcend'});
});

router.post('/', function(req, res, next) {

  var var1 = parseInt(req.body.var1)
  var var2 = parseInt(req.body.var2)
  var result = 0;
  var aritmatika = parseInt(req.body.aritmatika)

  switch (aritmatika) {
    case 0:
        result = 'Pilih Operasi'
        break;
    case 1:
        result = var1+var2;
        break;
    case 2:
        result = var1-var2;
        break;
    case 3: 
        result = var1*var2;
        break;
    case 4: 
        if(var2==0){
            result = 'Undivided';
        } else {
            result = var1/var2;
        }
  }


  res.render('calclvlup', {title : 'Calculator with Bakcend', result : result});
});

module.exports = router;

