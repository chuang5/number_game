exports.check = function (req, res) {
    console.log('checkanswer: req', req.body);
    res.status(200).json({
        message: 'test'
    })
}