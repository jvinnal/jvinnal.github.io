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
                    url: urls[1],
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



                            //välistan login class B, puudub reference
                            if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {

                                HT.file_name = 'HLST_' + y + '_' + m + '.xml';


                                for (var n = 0; n < nodes[i].getElementsByTagName("AWARD_CONTRACT").length; n++) {
                                    const HT = {};

                                    if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                        HT.reference_number_id = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                    }


                                    // if (HT.reference_number_id == "212933"){

                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0] !== 'undefined') {
                                            if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                                if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0].getElementsByTagName("CONTRACTOR")[0] !== 'undefined') {
                                                    HT.contract_officialname = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0].getElementsByTagName("CONTRACTOR")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;

                                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0] !== 'undefined') {
                                                        HT.val_total = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0].getElementsByTagName("VAL_TOTAL")[0].childNodes[0].nodeValue;
                                                    }


                                                    HT.title = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;

                                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("LOT_NO")[0] !== 'undefined') {
                                                        HT.lot_no = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("LOT_NO")[0].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }
                                    }





                                    if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("NATIONALID")[0] !== 'undefined') {
                                            HT.contract_nationalid = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;
                                        }
                                    }

                                    if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TOWN")[0] !== 'undefined') {
                                            HT.contract_town = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                                        }
                                    }



                                    if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0] !== 'undefined') {
                                            HT.conclusion_contract = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0].childNodes[0].nodeValue;
                                        }
                                    }



                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0] !== 'undefined') {
                                        if (HT.reference_number_id == "212933") {

                                            allRows.push(HT);
                                        }
                                    }

                                }







                            }

                        }








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


