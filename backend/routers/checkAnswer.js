
exports.check = function (req, res) {
    console.log('checkanswer: req', req.body);
    var answer = req.body.answer
    console.log(answer[2], parseInt(req.body.d2))
    if (answer[0] == parseInt(req.body.d1) & answer[1] == parseInt(req.body.d2)
        & answer[2] == parseInt(req.body.d3) & answer[3] == parseInt(req.body.d4)) {
        res.status(200).json({
            message: 'true'
        })
    } else {
        res.status(200).json({
            message: 'false'
        })
    }

}