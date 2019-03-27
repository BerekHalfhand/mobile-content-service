var express = require('express');
var path = require("path");
var router = express.Router();

/* GET mpromo listing. */
router.get('/', function(req, res, next) {
    // res.render('mpromo', { title: 'Express' });
    res.json({
        0:{
            text: "Создаем безроуминговое пространство по всему миру",
            image: "/images/1.png"
        },
        1:{
            text: "Одна SIM карта - несколько номеров (технология multi IMSI)",
            image: "/images/2.png"
        },
        2:{
            text: "Построение уникальных корпоративных экосистем",
            image: "/images/3.png"
        },
        3:{
            text: "Международная мобильная платформа для интернета вещей",
            image: "/images/4.png"
        }
    });
});

module.exports = router;
