module.exports={
    index: function (req,res,next) {
          res.render('index.twig');
    },

    index2: function (req,res,next) {
          res.render('index2.twig');
    }
};