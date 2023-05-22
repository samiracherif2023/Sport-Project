
// import express module
const express = require("express");
// import bcrypt module
const bcrypt = require("bcrypt");
// import axios module
const axios = require("axios");
// import ObjectID
const { ObjectId } = require("mongodb");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require('mongoose');
// connect app with db
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// create express application
const app = express();
const path = require('path');
const multer = require('multer');
// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request 
app.use(bodyParser.urlencoded({ extended: true }));
// upload files Config
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Stadium = require("./models/stadium");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");





function generatedId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return max + 1;
}
function checkEmail(email, usersTab) {
    let exist = false;
    //vérification email 
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email) {
            exist = true;
            break;
        }
    }
    return exist;

}
// Matches Tab Simulation
let matches = [
    { id: 1, scoreOne: 0, scoreTwo: 1, teamOne: "EST", teamTwo: "CSS" },
    { id: 2, scoreOne: 3, scoreTwo: 2, teamOne: "CA", teamTwo: "CIT" },
    { id: 3, scoreOne: 1, scoreTwo: 4, teamOne: "LIV", teamTwo: "FULL" }
]

// Matches Tab Simulation
let teams = [
    { id: 1, name: "EST", owner: "Hamdi meddeb", foundation: 1990, stadium: "Rades" },
    { id: 2, name: "CA", owner: "ALI BEN MOHAMED", foundation: 1995, stadium: "MANZAH" },
    { id: 3, name: "CSS", owner: "Salah ben mohsen", foundation: 1993, stadium: "Sfax" }
]
let players = [
    { id: 1, name: "Cristiano", position: "attaquant", number: 7, age: 36 },
    { id: 2, name: "MESSI", position: "attaq", number: 11, age: 33 },
    { id: 3, name: "JMALL", position: "att", number: 5, age: 30 }
]
// Users Tab Simulation
let users = [
    { id: 1, firstName: "Ali", lastName: "ben Salah", email: "a@a.a", pwd: "aaa", role: "user" },
    { id: 2, firstName: "Mohamed", lastName: "ben ali", email: "b@b.b", pwd: "bbb", role: "admin" },
    { id: 3, firstName: "akrem", lastName: "ben gacem", email: "c@c.c", pwd: "ccc", role: "user" }
]




//Business Logic : Get All Matches
app.get("/matches", (req, res) => {
    //
    console.log("here all matches");
    Match.find().then((docs) => {
        console.log("Here docs", docs);
        res.json({ matchesArray: docs, message: "Done" });
    })

})
//Business Logic : Get All Teams
app.get("/teams", (req, res) => {
    //
    console.log("here into bl: get all teams");
    Team.find().then((docs) => {
        res.json({ teamsArray: docs, message: "Done" });
    })
})

//Business Logic : Get All Players
app.get("/players", (req, res) => {
    //
    console.log("here into bl: get all players");
    Player.find().then((docs) => {
        res.json({ playersArray: docs, message: "Done" });
    })

})

//Business Logic : Get All Stadiums
app.get("/stadiums", (req, res) => {
    //
    console.log("here into bl: get all stadiums");
    Stadium.find().then((docs) => {
        res.json({ stadiumsArray: docs, message: "Done" });
    })

})
//Business Logic : Get All Stadiums
app.get("/users", (req, res) => {
    //
    console.log("here into bl: get all stadiums");
    User.find().then((docs) => {
        res.json({ usersArray: docs, message: "Done" });
    })

})

//Business Logic : Get Match by Id
app.get("/matches/:id", (req, res) => {
    //
    console.log("here into bl: get match by id");
    // let id = activatedRoute . snapshot() . paramMap().get("id");
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
        res.json({ match: doc });
    })
})
//Business Logic : Get USER by Id
app.get("/users/:id", (req, res) => {
    //
    console.log("here into bl: get user by id");
    // let id = activatedRoute . snapshot() . paramMap().get("id");
    let id = req.params.id;
    User.findOne({ _id: id }).then((doc) => {
        res.json({ user: doc });
    })
})

//Business Logic : Get team by Id
app.get("/teams/:id", (req, res) => {
    //
    console.log("here into bl: get team by id");
    let id = req.params.id;
    Team.findOne({ _id: id }).then((doc) => {
        res.json({ team: doc });
    })
})

//Business Logic : Get player by Id
app.get("/players/:id", (req, res) => {
    //
    console.log("here into bl: get player by id")
    let id = req.params.id;
    Player.findOne({ _id: id }).then((doc) => {
        res.json({ player: doc });
    })

})

//Business Logic : Get stadium by Id
app.get("/stadiums/:id", (req, res) => {
    //
    console.log("here into bl: get stadium by id")
    let id = req.params.id;
    Stadium.findOne({ _id: id }).then((doc) => {
        res.json({ stadium: doc });
    })

})


//Business Logic: search Match by scores
app.get("/matches/:scoreOne/:scoreTwo", (req, res) => {
    // app.get("/matches/search", (req, res) => {
    //
    console.log("here into bl: serch match", req.params)
    //     findedMatch=[];
    // let findedMatch =matches.filter((obj)=>{
    //     return obj.scoreOne==req.body.scoreOne || obj.scoreTwo==req.body.scoreTwo {}
    // })
    let scoreOne = req.params.scoreOne;
    let scoreTwo = req.params.scoreTwo;
    let findedMatch = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].scoreOne == scoreOne || matches[i].scoreTwo == scoreTwo) {
            findedMatch.push(matches[i]);
            break;
        }
    }
    res.json({ match: findedMatch });
})






//Business Logic : delete Match
app.delete("/matches/:id", (req, res) => {
    //
    console.log("here into bl: delete match ");
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((response) => {
        console.log("here response", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        }
        else {
            res.json({ isDeleted: false });
        }
    });
});

//Business Logic : delete team
app.delete("/teams/:id", (req, res) => {
    //
    console.log("here into bl: delete team ");
    let id = req.params.id;
    Team.deleteOne({ _id: id }).then((response) => {
        console.log("here response", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        }
        else {
            res.json({ isDeleted: false });
        }
    });
});

//Business Logic : delete player
app.delete("/players/:id", (req, res) => {
    //
    console.log("here into bl: delete player ");
    let id = req.params.id;
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        }
        else {
            res.json({ isDeleted: false });
        }
    })
})

//Business Logic : delete stadium
app.delete("/stadiums/:id", (req, res) => {
    //
    console.log("here into bl: delete stadium ");
    let id = req.params.id;
    Stadium.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        }
        else {
            res.json({ isDeleted: false });
        }
    })
})


//Business Logic : add Match
app.post("/matches", (req, res) => {
    //
    console.log("here into bl: add match ");
    // get object from request
    let match = new Match(req.body);
    match.save();
    res.json({ message: "Match Added with success" });

})

// Business Logic :add comment


app.post("/matches/comment", (req, res) => {
    console.log("Here into addcomment", req.body);
    const comment = new Comment({
        content: req.body.content,
        userId: ObjectId(req.body.userId),
        matchId: ObjectId(req.body.matchId),
    });
    comment.save((err, result) => {
        console.log("Error", err);
        if (result) {
            res.status(200).json({
                message: "Comment added with success",
            });
        }
    });
});
// Business Logic : get all matches with comments
app.get("/matches/comments/getAll/comments", (req, res) => {
    Match.aggregate(
        [
            {
                $lookup: {
                    from: "comments", // collection to join
                    localField: "_id", //field from the input documents
                    foreignField: "matchId", //field from the documents of the "from" collection
                    as: "comments", // output array field
                },
            },
        ],
        (error, docs) => {
            res.status(200).json({
                matches: docs,
            });
        }
    );

})


//Business Logic : add Reclamation
app.post("/reclamations", (req, res) => {
    // get object from request
    let reclamation = new Reclamation(req.body);
    reclamation.save((err, doc) => {
        if (err) {
            res.json({ isAdded: false });
        } else {
            res.json({ isAdded: true });
        }
    });

})

// Business Logic get all user Reclamations
app.get("/reclamations/:id", (req, res) => {
    Reclamation.find({ userId: req.params.id }).then(
        (docs) => {
            res.json({ reclamations: docs });
        }
    )
})

//Business Logic : add team
app.post("/teams", (req, res) => {
    //
    console.log("here into bl: add team ");
    // get object from request
    let team = new Team(req.body);
    team.save();
    res.json({ message: "Team Added with success" });

})

//Business Logic : add player
app.post("/players", (req, res) => {
    //
    console.log("here into bl: add player ");
    // get object from request
    let player = new Player(req.body);
    player.save();
    res.json({ message: "Player Added with success" });

})

//Business Logic : add stadium
app.post("/stadiums", (req, res) => {
    //
    console.log("here into bl: add stadium ");
    // get object from request
    let stadium = new Stadium(req.body);
    stadium.save();
    res.json({ message: "Stadium Added with success" });

})

//Business Logic : edit Match
app.put("/matches", (req, res) => {
    //
    console.log("here into bl: edit match ")
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        console.log("Here response after update", response);
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        }
        else {
            res.json({ isUpdated: false });
        }
    });
});

//Business Logic : edit team
app.put("/teams", (req, res) => {
    //
    console.log("here into bl: edit team ");
    let newTeam = req.body;
    Team.updateOne({ _id: newTeam._id }, newTeam).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        }
        else {
            res.json({ isUpdated: false });
        }
    });
})

//Business Logic : edit player
app.put("/players", (req, res) => {
    //
    console.log("here into bl: edit player ");
    let newPlayer = req.body;
    Player.updateOne({ _id: newPlayer._id }, newPlayer).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        }
        else {
            res.json({ isUpdated: false });
        }
    })

})
//Business Logic : edit stadium
app.put("/stadiums", (req, res) => {
    //
    console.log("here into bl: edit stadium ");
    let newStadium = req.body;
    Stadium.updateOne({ _id: newStadium._id }, newStadium).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        }
        else {
            res.json({ isUpdated: false });
        }
    })
})

// Business Logic: signup

app.post("/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {

    console.log("Here into BL: Signup", req.body);
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("crypted pwd", cryptedPwd);
        let url = req.protocol + "://" + req.get("host");
        let imgPath;
        imgPath = req.file ?  url + "/images/" + req.file.filename : url + "/images/avatar.png";
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedPwd,
            phone: req.body.phone,
            role: req.body.role,
            img: imgPath,
        });
        user.save((err, doc) => {
            if (err) {
                res.json({ message: false });
            }
            else {
                res.json({ message: true });
            }
        });
    });
});


// 0 : Please check email
// 1 : Please check pwd
// 2 : Welcome
// Business Logic: login
app.post("/users/login", (req, res) => {
    console.log("Here into BL: Login", req.body);
    let user = req.body;
    User.findOne({ email: user.email })
        .then((response) => {
            if (!response) {
                res.json({ message: "0" });
            }
            userToSend = response;
            return bcrypt.compare(user.password, response.password);
        })
        .then((pwdResponse) => {
            console.log("Here pwdResponse", pwdResponse);
            if (!pwdResponse) {
                res.json({ message: "1" });
            }
            else {
                // Object {fName, lName ,id, role}
                let userObj = {
                    id: userToSend._id,
                    fName: userToSend.firstName,
                    lName: userToSend.lastName,
                    role: userToSend.role,
                }
                res.json({ message: "2", user: userObj });
            }
        });

});

//Business Logic : Search Weather
app.post("/weathers", (req, res) => {

    const city = req.body.city;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    axios.get(apiUrl).then((response) => {
        console.log('Here response', response);
        const weather = response.data.main;

        const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

        console.log('Here weather main', weather);


        const result = {
            icon: icon,
            temp: weather.temp,
            pressure: weather.pressure,
            humidity: weather.humidity,

        }
        res.status(200).json({
            result: result

        })
    });
});
//make app importable
module.exports = app;

