exports.start = function (req, res) {
    var arr = [];
    for(var i = 0; i < 4; i++){
        var rand = Math.floor(Math.random() * 10);
        while(arr.includes(rand)){
            rand = Math.floor(Math.random() * 10);
        }
        arr.push(rand);
    }
    
    console.log(arr)
    res.status(200).json({
        answer: arr
    })
}
