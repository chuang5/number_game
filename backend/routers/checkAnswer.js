var answer = require('./startAGame');

exports.check = function (req, res) {
    console.log('checkanswer: req', req.body);
    console.log(answer.answer.a1, parseInt(req.body.d1))
    if (answer.answer.a1 === parseInt(req.body.d1)) {
        res.status(200).json({
            message: 'true'
        })
    } else {
        res.status(200).json({
            message: 'false'
        })
    }

}