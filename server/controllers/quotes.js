var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

// create the schema
var QuoteSchema = new mongoose.Schema({
        name: String,
        quote: String
    })
    // register the schema as a model
var Quote = mongoose.model('Quote', QuoteSchema);

module.exports = {
    show: function(req, res) {
        Quote.find({}, function(err, quotes) {
            res.render('main', { quotes: quotes });
        })
    },
    create: function(req, res) {
        var quote = new Quote({ name: req.body.name, quote: req.body.quote });
        quote.save(function(err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/main');
            }
        })
    }
}