const fs = require('fs');

class Create {
    createUser(req, res) {
        let data = getData()
        let randomKey = GenerateRandomID(15);
        if (data.hasOwnProperty(randomKey)) {
            res.render('show-message.ejs', { message: "KEY ALREADY EXISTS!" });
        } else {
            const now = new Date().getTime();
            if (req.body.ttl == '') {
                data[randomKey] = { name: req.body.name, age: req.body.age, ttl: undefined, timeSaved: now }
            } else {
                data[randomKey] = { name: req.body.name, age: req.body.age, ttl: req.body.ttl, timeSaved: now }
            }
            fs.writeFileSync('data.json', JSON.stringify(data, null, 2))
            res.status(200).redirect('/read')
        }
    }
}

class Read {
    readAllData(req, res) {
        let data = getData()
        res.json(data)
    }

    readSpecificData(req, res) {
        let data = getData()
        let key = req.params.key
        const now = new Date().getTime();
        if (data[key] != undefined) {
            if (data[key].ttl == undefined || data[key].ttl == "") {
                res.status(200).json(data[key]);
            } else if (now > (data[key].ttl * 1000 + data[key].timeSaved * 1)) {
                data[key] = null
                delete data[key]
                console.log("Deleted in data")
                fs.writeFileSync('data.json', JSON.stringify(data, null, 2))
                res.status(200).render('show-message.ejs', { message: "KEY IS EXPIRED!" })
            } else if (now <= (data[key].ttl * 1000 + data[key].timeSaved * 1)) {
                res.status(200).json(data[key]);
            } else {
                res.status(200).render('show-message.ejs', { message: "KEY IS NOT AVAILABLE!" });
            }
        } else {
            res.status(404).render('show-message.ejs', { message: 'KEY DOESN\'T EXIST' });
        }
    }

    renderReadPage(req, res) {
        res.render('read.ejs')
    }
}

class Delete {
    deleteAllKeys(req, res) {
        let data = {}
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
        res.render('show-message.ejs', { message: "ALL KEYS ARE DELETED! AND JSON FILE IS RESETTED TO {}" })
    }

    deleteSpecificKey(req, res) {
        let key = req.params.key
        let data = getData();
        if (key == "" || key == undefined) {
            res.render('show-message.ejs', { message: "KEY IS IMPROPER OR UNDEFINED!!!" })
        } else {
            if (data.hasOwnProperty(key)) {
                delete data[key];
                fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
                res.render('show-message.ejs', { message: "SUCCESSFULLY KEY IS DELETED!" })
            } else {
                res.render('show-message.ejs', { message: "KEY DOESN'T EXIST!!!" })
            }
        }
    }

    redirectUser(req, res) {
        if (req.query.key == undefined || req.query.key == "") {
            res.status(404).send("Please Pass Proper Key As Arguement")
        } else {
            res.redirect('/delete/' + req.body.key)
        }
    }
}

const renderIndexPage = (req, res) => {
    res.render('index.ejs')
}

const rewriteJSONFile = (req, res) => {
    fs.writeFileSync('data.json', JSON.stringify(req.body, null, 2))
}

//This Function getData is used to read data from the JSON DB File and gives us back the data in JSON Object Format
const getData = () => {
    return JSON.parse(fs.readFileSync('data.json'))
}

//This Function GenerateRandomID is used to set random value for the Key to store a Key-Value Pair in JSON DB
const GenerateRandomID = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {
    Create: new Create(),
    Read: new Read(),
    Delete: new Delete(),
    renderIndexPage: renderIndexPage,
    rewriteJSONFile: rewriteJSONFile,
}