function test() {

    //const url = 'phpscript.php'
    //const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=QYOWP5SXIHB6BV3X'


    if ($("#selectid").val() === "") {
        alert("Not selected");
    }

    console.log("test");

    console.log(document.getElementById('selectid').value);  //hanketeated


    startDate = new Date($('#start-date-one').val().trim())
    s_Year = startDate.getFullYear();
    s_Month = startDate.getMonth() + 1;

    endDate = new Date($('#end-date-one').val().trim())
    e_Year = endDate.getFullYear();
    e_Month = endDate.getMonth() + 1;


    const allRows = [];



    var end_month = 12;
    var start_month = s_Month;

    if (s_Year == e_Year) {
        end_month = e_Month;
    }


    for (var y = s_Year; y <= e_Year; y++) {
        console.log(s_Year);
        console.log(e_Year);

        if (y == e_Year) {
            end_month = e_Month;
        }

        for (var m = start_month; m <= end_month; m++) {

            console.log(start_month);
            console.log(end_month);



            if (document.getElementById('selectid').value == "hanketeated") {

                //const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

                //const url = 'https://jvinnal.github.io/HT_' + dateYear + '_' + t + '.xml'

                var urls = ['https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + y + '/month/' + m + '/xml'
                    , 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice_award/' + y + '/month/' + m + '/xml']

                //const url = 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + dateYear + '/month/' + t + '/xml';

                //const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

                $.ajax({
                    type: 'GET',
                    url: urls[0],
                    dataType: "xml",
                    jsonp: true,
                    contentType: "text/xml; charset=\"utf-8\"",
                    data: {},
                    async: false,
                    crossDomain: true,
                    success: function (data) {


                        const nodes = data.getElementsByTagName("TED_ESENDERS")


                        // Iterate over the XML object
                        for (var i = 0; i < nodes.length; i++) {


                            const HT = {};

                        
                            if (typeof nodes[i].getElementsByTagName("TITLE")[0] !== 'undefined') {
                                HT.title = nodes[i].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                            }

                            if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                            }

                            HT.old_value = "";
                            HT.new_value = "";


                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0] !== 'undefined') {

                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[0] !== 'undefined') {


                                                for (var n = 0; n < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE").length; n++) {
                                                    const HT = {};

                                                    if (typeof nodes[i].getElementsByTagName("TITLE")[0] !== 'undefined') {
                                                        HT.title = nodes[i].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                                    }
                        
                                                    if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                        HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                                    }
                        
                                                   // HT.mitu = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE").length;

                                                    HT.section = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("SECTION")[0].childNodes[0].nodeValue;
                                                    HT.label = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("LABEL")[0].childNodes[0].nodeValue;

                                                    if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0] !== 'undefined') {
                                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0] !== 'undefined') {
                                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[0].childNodes[0] !== 'undefined') {


                                                    
                                                    for (var o = 0; o < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length; o++) {
                                                        //HT.pikkus = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length;
                                                        HT.old_value = HT.old_value + " " + nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[o].childNodes[0].nodeValue;
                                                    }


                                                    
                                                    }
                                                }
                                            }

                                                    if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0] !== 'undefined') {
                                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0] !== 'undefined') {
                                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[0].childNodes[0] !== 'undefined') {

                                                                for (var u = 0; u < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length; u++) {
                                                    HT.new_value = HT.new_value + " " + nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[u].childNodes[0].nodeValue;
                                                    }
                                                }
                                                }
                                            }


                                                    allRows.push(HT);






                                                }





                                            }
                                            



                            


                        }
                        else
                        {
                            allRows.push(HT);
                        }
                    }
                        //}



















                    }
                });

            }


        }

        start_month = 1;




        //console.log(allRows.);

        //console.log(JSON.stringify(allRows, null, 4));

    }
    console.log(JSON.stringify(allRows, null, 4));
};


