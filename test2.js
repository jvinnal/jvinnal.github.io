
function test2() {

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

                        const HT = {};

                        var max_dur = 0; //osahangete suurim kestvus


                        //välistan login class B, puudub reference
                        if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {




                            //HANKED

                            //GENERATED file name       
                            HT.file_name = 'HT_' + y + '_' + m + '.xml';


                            //vaikeväärtused
                            HT.joint = "ei"
                            HT.central = "ei"
                            HT.framework = "Hankelepingu sõlmimine"
                            HT.recurrent = "ei"

                            //hankja nimi
                            if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0] !== 'undefined') {
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0] !== 'undefined') {

                                    HT.officialname = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;

                                    //registrikood
                                    HT.nationalid = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                    //aadress
                                    if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                                        HT.aadress = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                                    }

                                    //linn
                                    HT.town = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;

                                    //postiindeks
                                    if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                                        HT.postal_code = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                                    }

                                }

                                //hankija tüüp
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_TYPE")[0] !== 'undefined') {
                                    HT.ca_type = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_TYPE")[0].getAttributeNode("VALUE").nodeValue;
                                }

                                //hankija tüüp eestikeel
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_TYPE_OTHER")[0] !== 'undefined') {
                                    HT.ca_type = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_TYPE_OTHER")[0].childNodes[0].nodeValue;
                                }

                                //hanke tüüp
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_ACTIVITY")[0] !== 'undefined') {
                                    HT.ca_activity = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_ACTIVITY")[0].getAttributeNode("VALUE").nodeValue;
                                }

                                //ühishange
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("JOINT_PROCUREMENT_INVOLVED")[0] !== 'undefined') {
                                    HT.joint = "jah"
                                } else {
                                    HT.joint = "ei"
                                }


                                //keskse hankija hange (jah/ei), 
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CENTRAL_PURCHASING")[0] !== 'undefined') {
                                    HT.central = "jah"
                                } else {
                                    HT.central = "ei"
                                }

                                //hanke tüüp eestikeel
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_ACTIVITY_OTHER")[0] !== 'undefined') {
                                    if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0] !== 'undefined') {
                                        HT.ca_activity = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0].nodeValue;
                                    }
                                }

                                //url
                                if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                                    HT.url_document = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
                                }
                            }


                            //OBJECT_CONTRACT

                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined') {

                                //hanke nimetus
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TITLE")[0] !== 'undefined') {
                                    HT.title = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                }

                                //hanke viitenumber
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                    HT.reference_number = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                }

                                //Peamine CPV kood
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("CPV_MAIN")[0] !== 'undefined') {
                                    HT.main_cpv_code = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("CPV_MAIN")[0].getElementsByTagName("CPV_CODE")[0].getAttributeNode("CODE").nodeValue;
                                }

                                //hanke liik
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TYPE_CONTRACT")[0] !== 'undefined') {
                                    if (nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TYPE_CONTRACT")[0].getAttributeNode("CTYPE") != null) {
                                        HT.type_contract = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TYPE_CONTRACT")[0].getAttributeNode("CTYPE").nodeValue;
                                    }
                                }

                                //lühikirjeldus
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0] !== 'undefined') {

                                    for (var l = 0; l < nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P").length; l++) {

                                        if (typeof HT.short_descr !== 'undefined') {
                                            HT.short_descr = HT.short_descr + " " + nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[l].childNodes[0].nodeValue;
                                        }
                                        else {

                                            HT.short_descr = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[l].childNodes[0].nodeValue;
                                        }
                                    }
                                }



                                //kui hankel on osahanked, siis võtab kestvuseks osahanke suurima kestvuse.
                                if (max_dur == 0) {

                                    //kestvus kuudes
                                    if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("DURATION")[0] !== 'undefined') {
                                        HT.duration = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("DURATION")[0].childNodes[0].nodeValue;
                                    }
                                } else {
                                    HT.duration = max_dur;
                                }




                                //eeldatav kogumaksumus
                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("VAL_ESTIMATED_TOTAL")[0] !== 'undefined') {
                                    HT.val_estimated_total = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("VAL_ESTIMATED_TOTAL")[0].childNodes[0].nodeValue;
                                }



                                //ESITAMISE AEG

                                if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0] !== 'undefined') {



                                    //kestvus kuudes test
                                    //if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("DURATION_TENDER_VALID")[0] !== 'undefined') {
                                    //  HT.duration_ten_val = nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("DURATION_TENDER_VALID")[0].childNodes[0].nodeValue;
                                    //}


                                    //Hankemenetluse liik
                                    if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("PT_OPEN")[0] !== 'undefined') {
                                        HT.pt_open = "Avatud hankemenetlus"
                                    }

                                    //Hankega kaasneb
                                    if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("FRAMEWORK")[0] !== 'undefined') {
                                        HT.framework = "Raamlepingu sõlmimine"
                                    } else {
                                        HT.framework = "Hankelepingu sõlmimine"
                                    }




                                    if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("DATE_RECEIPT_TENDERS")[0] !== 'undefined') {
                                        date = nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("DATE_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                    }

                                    if (typeof nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("TIME_RECEIPT_TENDERS")[0] !== 'undefined') {
                                        time = nodes[i].getElementsByTagName("PROCEDURE")[0].getElementsByTagName("TIME_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                    }


                                    if (typeof date !== 'undefined' && typeof time !== 'undefined') {
                                        var datetime = new Date(date + ' ' + time);
                                    }

                                    HT.datetime_receipt_tenders = moment(datetime).format("Y-MM-DD HH:mm:ss");

                                }

                                //avaldatud
                                if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0] !== 'undefined') {
                                    HT.date_dispatch_notice = nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0].getElementsByTagName("DATE_DISPATCH_NOTICE")[0].childNodes[0].nodeValue;
                                }

                                //avaldatud originaal
                                if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0] !== 'undefined') {
                                    if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0].getElementsByTagName("DATE_DISPATCH_ORIGINAL")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0].getElementsByTagName("DATE_DISPATCH_ORIGINAL")[0].childNodes[0] !== 'undefined') {
                                            HT.date_dispatch_notice_original = nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0].getElementsByTagName("DATE_DISPATCH_ORIGINAL")[0].childNodes[0].nodeValue;
                                        }
                                    }
                                }

                                //korduv hange (jah/ei),
                                if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0] !== 'undefined') {
                                    if (typeof nodes[i].getElementsByTagName("COMPLEMENTARY_INFO")[0].getElementsByTagName("RECURRENT_PROCUREMENT")[0] !== 'undefined') {
                                        HT.recurrent = "jah"
                                    }
                                }



                            }




                            allRows.push(HT);

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


