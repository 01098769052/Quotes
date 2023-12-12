function quotes(){
    var text1 = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            "“So many books, so little time.”" ,"“A room without books is like a body without a soul.”",
            "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
];
var text2 = ["― Albert Einstein","― Frank Zappa" ,"― Marcus Tullius Cicero","― Dr. Seuss"];

var len = Math.floor( Math.random() * text1.length );

document.getElementById("demo1").innerHTML = text1[len];
document.getElementById("demo2").innerHTML = text2[len];


}