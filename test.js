

function test() {

    //const url = 'phpscript.php'
    //const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=QYOWP5SXIHB6BV3X'



    console.log("test");

    //console.log(document.getElementById('selectid').value);  //hanketeated


    startDate = new Date($('#start-date-one').val().trim())
    s_Year = startDate.getFullYear();
    s_Month = startDate.getMonth() + 1;

    //endDate = new Date($('#end-date-one').val().trim())
    e_Year = new Date().getFullYear();
    e_Month = new Date().getMonth() + 1;





    console.log(s_Year);
    console.log(s_Month);
    console.log("-------");
    console.log(e_Year);
    console.log(e_Month);

    const allRows = [];
  



    var end_month = 12;
    var start_month = s_Month;

    if (s_Year == e_Year) {
        end_month = e_Month;
    }


    for (var y = s_Year; y <= e_Year; y++) {
        // console.log(s_Year);
        //console.log(e_Year);

        if (y == e_Year) {
            end_month = e_Month;
        }

        for (var m = start_month; m <= end_month; m++) {

            console.log(m + " kuu");
            console.log(y + " aasta");
            //console.log(end_month);



            // if (document.getElementById('selectid').value == "hanketeated") {

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

                        

                        //GENERATED

                        //välistan login class B, puudub reference
                        if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {


                            for (var n = 0; n < nodes[i].getElementsByTagName("AWARD_CONTRACT").length; n++) {
                                const HT = {};

                                //genereerin faili nime
                                HT.file_name = 'HLST_' + y + '_' + m + '.xml';

                                //hanke viitenumber   OBJECT_CONTRACT
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                    HT.reference_number = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                }

                                //hanke kogumaksumus   VAL_TOTAL
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("VAL_TOTAL")[0] !== 'undefined') {
                                    HT.hanke_val_total = Number(nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("VAL_TOTAL")[0].childNodes[0].nodeValue);
                                }


                                if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n] !== 'undefined') {


                                    //hanke osa nr (vajalik hankega joinimiseks)
                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("LOT_NO")[0] !== 'undefined') {
                                        HT.lot_no = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("LOT_NO")[0].childNodes[0].nodeValue;
                                    }
                                    else {
                                        //kui ei ole hankeleping, siis osa numbri genereerin ise
                                        HT.lot_no = 0;
                                    }


                                    //lepingu nr (peab olema kõigil)
                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("CONTRACT_NO")[0] !== 'undefined') {
                                        HT.contract_no = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("CONTRACT_NO")[0].childNodes[0].nodeValue;
                                    

                                    //lepingu nimetus
                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("TITLE")[0] !== 'undefined') {
                                        HT.title = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                    }


                                    if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0] !== 'undefined') {


                                        //lepingu sõlmimise kuupäev
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0] !== 'undefined') {
                                            HT.date_conclusion_contract = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0].childNodes[0].nodeValue;
                                        }


                                        //tenders, ehk pakkumiste arv
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TENDERS")[0] !== 'undefined') {
                                            HT.tenders = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TENDERS")[0].getElementsByTagName("NB_TENDERS_RECEIVED")[0].childNodes[0].nodeValue;
                                        }

                                        //lepingu maksumus
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0] !== 'undefined') {
                                            if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0].getElementsByTagName("VAL_TOTAL")[0] !== 'undefined') {
                                                if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0].getElementsByTagName("VAL_TOTAL")[0].childNodes[0] !== 'undefined') {
                                            HT.lep_val_total = Number(nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("VALUES")[0].getElementsByTagName("VAL_TOTAL")[0].childNodes[0].nodeValue);
                                        }
                                    }
                                }


                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                            if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0].getElementsByTagName("CONTRACTOR")[0] !== 'undefined') {


                                                //pakkuja nimi
                                                HT.contract_officialname = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0].getElementsByTagName("CONTRACTOR")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;

                                                //pakkuja registrikood
                                                HT.contract_nationalid = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("CONTRACTORS")[0].getElementsByTagName("CONTRACTOR")[0].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                                // linn
                                                if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TOWN")[0] !== 'undefined') {
                                                    HT.contract_town = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                                                }

                                                // aadress
                                                if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                                                    HT.contract_aadress = nodes[i].getElementsByTagName("AWARD_CONTRACT")[n].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                                                }


                                            }
                                        }
                                    }
                                    allRows.push(HT);
                                }
                                }
                                

                            }

                        }
                    }


                }
            });
            
        }

            start_month = 1;
    }

    

        //console.log(allRows.);

        //console.log(JSON.stringify(allRows, null, 4));

     //aasta
    console.log(JSON.stringify(allRows, null, 4));
    // console.log(JSON.stringify(ref_no, null, 4));
};


