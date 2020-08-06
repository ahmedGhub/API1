const bodyParser = require("body-parser");

exports.getFeed = (req, res, next) => {
    res.status(200).json({ "Author": "AHmed Gawish" });
}


exports.postfeed = (req, res, next) => {
    let author = req.body.Author;
    let age = req.body.Age;

    res.json({
        "Author": author,
        "Age": age,
        "current time stamp": Date().toString()
    })

}