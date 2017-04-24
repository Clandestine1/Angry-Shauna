var express = require('express');
var router = express.Router();
const angryMe = require('../data/angry_birds');



// Get angry birds page
router.get('/', function(req, res, next) {
  res.render('angry-birds', {
      angryMe: angryMe
  });
});


// GETS Angry Birds page. 
/*router.get('/', function(req, res, next) {
  res.render('angry-birds');
});*/

router.get('/angry-birds', function(req, res, next) {
  res.render('angry-birds/1','angry-birds/2','angry-birds/3','angry-birds/4',
  	'angry-birds/5','angry-birds/6','angry-birds/8','angry-birds/9',
  	'angry-birds/10','angry-birds/11','angry-birds/12','angry-birds/13',
  	'angry-birds/14','angry-birds/15');
});

module.exports = router;




