exports.normalCheck = function (req, res) {
    console.log('checkanswer: req', req.body);
    var answer = req.body.answer;
    var guess = req.body.guess;
    
    
    if (answer[0] == guess[0] & answer[1] == guess[1]
        & answer[2] == guess[2] & answer[3] == guess[3]) {
        res.status(200).json({
            result: 'true'
        })
    } else {
        var A = 0, B = 0;
        for(var i = 0; i < 4; i++){
            if(guess[i] == answer[i]){
                A++;
            }else if(answer.includes(guess[i])){
                B++;
            }
        }
        var str = A + "A" + B + "B";
        res.status(200).json({
            guess: guess,
            result: str
        })
    }
}

exports.easyCheck = function (req, res) {
    console.log('checkanswer: req', req.body);
    var answer = req.body.answer;
    var guess = req.body.guess;
    
    
    if (answer[0] == guess[0] & answer[1] == guess[1]
        & answer[2] == guess[2] & answer[3] == guess[3]) {
        res.status(200).json({
            result: 'true'
        })
    } else {
        var A = 0, B = 0;
        for(var i = 0; i < 4; i++){
            if(guess[i] == answer[i]){
                A++;
            }else if(answer.includes(guess[i])){
                B++;
            }
        }
        var str = A + "A" + B + "B";
        res.status(200).json({
            guess: guess,
            result: str
        })
    }
}