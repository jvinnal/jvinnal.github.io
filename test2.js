"use strict";


function test2(){

    // my test XML feed with only one post for now
    var url = "https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/2019/month/1/xml";

    // AJAX request
    var xhr = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
    xhr.onreadystatechange = XHRhandler;
    xhr.open("GET", "index.php?url=" + escape(url), true);
    xhr.send(null);

    // handle response
    function XHRhandler() {
        if (xhr.readyState == 4) {
            // parse response as JSON
            var json;
            if (JSON && JSON.parse) {
               json = JSON.parse(xhr.responseText);
            } else {
                eval("var json = " + xhr.responseText);
            }
            Display(json);
            xhr = null;
        }
    }

    // display post(s)
    function Display(data) {
        var output = document.getElementById("output");
        Show("Data from URL: " + url);

        if (data && data.channel.item) {
            if (data.channel.item.length) {
                // multiple statuses
                for (var i = 0, sl = data.channel.item.length; i < sl; i++) {
                    Show(data.channel.item[i]);
                }
            } else {
                // single status
                Show(data.channel.item);
            }
        }

        // display item
        function Show(item) {
            if (typeof item != "string") {
                item = item.title + ": " + item.description;
            }
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(item));
            output.appendChild(p);
        }
    }
    };

   
    
    