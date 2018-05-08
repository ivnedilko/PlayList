;(function(){
    "use strict";
    var playList = [{
                author: "led zeppelin",
                song: "stairway to heaven",
                duration: "2:03"
            },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];


        var playListEl = document.getElementById('playlist'),
                playListTmpl = document.getElementById('playlist-li').innerHTML,
                playlistHTML = '';

        console.log(playListTmpl);

        playList.forEach(function (audio)
        {
            console.log(audio);

            playlistHTML += playListTmpl
            .replace(/{{author}}/ig,audio.author)
            .replace(/{{duration}}/ig,audio.duration) 
            .replace(/{{song}}/ig,audio.song)  

            console.log(playlistHTML);
        });

        playListEl.innerHTML = playlistHTML;            



})();
