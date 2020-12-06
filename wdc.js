(function () {

    $(document).ready(function () {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        // Define the schema
        myConnector.getSchema = function (schemaCallback) {

            var dateObj = JSON.parse(tableau.connectionData);


            //if (dateObj.selection == "hanketeated") {
            var hanked_cols = [


                {
                    id: "officialname",
                    alias: "hankija nimi",
                    dataType: tableau.dataTypeEnum.string
                }

                ,

                {
                    id: "nationalid",
                    alias: "registrikood",
                    dataType: tableau.dataTypeEnum.int,

                }
                ,

                {
                    id: "town",
                    alias: "hankija linn",
                    dataType: tableau.dataTypeEnum.string,
                    geoRole: tableau.geographicRoleEnum.city

                }
                ,

                {
                    id: "aadress",
                    alias: "hankija aadress",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "postal_code",
                    alias: "hankija postiindeks",
                    dataType: tableau.dataTypeEnum.int
                }
                ,

                {
                    id: "ca_type",
                    alias: "hankija tüüp",
                    dataType: tableau.dataTypeEnum.string
                }

                ,

                {
                    id: "ca_activity",
                    alias: "hanke tüüp",
                    dataType: tableau.dataTypeEnum.string
                }
                ,





                {
                    id: "url_document",
                    alias: "link hankele",
                    dataType: tableau.dataTypeEnum.string
                }

                ,

                {
                    id: "title",
                    alias: "hanke nimetus",
                    dataType: tableau.dataTypeEnum.string
                }

                ,

                {
                    id: "reference_number",
                    alias: "hanke viitenumber",
                    dataType: tableau.dataTypeEnum.int
                }
                ,







                {
                    id: "cpv_main_code",
                    alias: "peamine cpv kood",
                    dataType: tableau.dataTypeEnum.int
                }
                ,

                {
                    id: "type_contract",
                    alias: "hanke liik",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "short_descr",
                    alias: "lühikirjeldus",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "val_estimated_total",
                    alias: "eeldatav kogumaksumus",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                ////////////////////////////////////





                {
                    id: "datetime",
                    alias: "esitamise_aeg",
                    dataType: tableau.dataTypeEnum.datetime

                }
                ,



                {
                    id: "duration",
                    alias: "kestvus",
                    dataType: tableau.dataTypeEnum.int
                }
                ,




                {
                    id: "ce_activity",
                    alias: "hankija_teg_ala",
                    dataType: tableau.dataTypeEnum.string
                }
                ,





                {
                    id: "no_doc_ext",
                    alias: "no_doc_ext",
                    dataType: tableau.dataTypeEnum.string

                }
                ,
                {
                    id: "organisation",
                    alias: "organisation",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "file_name",
                    alias: "file_name",
                    dataType: tableau.dataTypeEnum.string

                }
                ,




                {
                    id: "url_participation",
                    alias: "url_participation",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "ca_type_other",
                    alias: "ca_type_other",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "ca_activity_other",
                    alias: "ca_activity_other",
                    dataType: tableau.dataTypeEnum.int
                }
                ,





                {
                    id: "economic_financial_info",
                    alias: "economic_financial_info",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "technical_professional_info",
                    alias: "technical_professional_info",
                    dataType: tableau.dataTypeEnum.string
                }


                ,

                {
                    id: "performance_conditions",
                    alias: "performance_conditions",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "date_receipt_tenders",
                    alias: "date_receipt_tenders",
                    dataType: tableau.dataTypeEnum.date
                }
                ,
                {
                    id: "time_receipt_tenders",
                    alias: "time_receipt_tenders",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "date_tender_valid",
                    alias: "date_tender_valid",
                    dataType: tableau.dataTypeEnum.date
                }
                ,
                {
                    id: "info_add",
                    alias: "info_add",
                    dataType: tableau.dataTypeEnum.string
                }



            ];

            var osahanked_cols = [
                {
                    id: "reference_number",
                    alias: "hanke viitenumber",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "lot_no",
                    alias: "lot_no",
                    dataType: tableau.dataTypeEnum.int
                }

                ,
                {
                    id: "title",
                    alias: "hanke osa nimi",
                    dataType: tableau.dataTypeEnum.string
                }

            ];


            var hanked_tb = {
                id: "hanked",
                alias: "hanked",
                columns: hanked_cols
            }

            var osahanked_tb = {
                id: "osahanked",
                alias: "osahanked",
                columns: osahanked_cols
            }


            var lepingud_cols = [

                {
                    id: "reference_number",
                    alias: "hanke viitenumber",
                    dataType: tableau.dataTypeEnum.int,
                    filterable: true,
                    foreignKey: {
                        "tableId": "hanked",
                        "columnId": "reference_number"
                    }



                }

                ,


                

                {
                    id: "lot_no",
                    alias: "lot_no",
                    dataType: tableau.dataTypeEnum.int
                }

                ,

            


                {
                    id: "title",
                    alias: " lepingu nimetus",
                    dataType: tableau.dataTypeEnum.string
                }

                ,


                {
                    id: "contract_officialname",
                    alias: "pakkuja",
                    dataType: tableau.dataTypeEnum.string
                }

                ,

                {
                    id: "contract_nationalid",
                    alias: "pakkuja_kood",
                    dataType: tableau.dataTypeEnum.int
                }
                ,





                {
                    id: "contract_town",
                    alias: "pakkuja_linn",
                    dataType: tableau.dataTypeEnum.string,
                    geoRole: tableau.geographicRoleEnum.city
                }
                ,


                {
                    id: "val_total",
                    alias: "eeldatav_maksumus",
                    dataType: tableau.dataTypeEnum.string

                }
                ,

                {
                    id: "conclusion_contract",
                    alias: "solmimise_kpv",
                    dataType: tableau.dataTypeEnum.date
//
                }
                ,




                {
                    id: "file_name",
                    alias: "file_name",
                    dataType: tableau.dataTypeEnum.string

                }
                




            ];


            var lepingud_tb = {
                id: "lepingud",
                alias: "lepingud",
                columns: lepingud_cols
            };





            schemaCallback([hanked_tb, osahanked_tb, lepingud_tb]);
        };

        // Download the data




        myConnector.getData = function (table, doneCallback) {

            var dateObj = JSON.parse(tableau.connectionData);  //võtame aja parameetri
            dateString = new Date(dateObj.startDate);  //et getfullyear töötaks
            enddateString = new Date(dateObj.endDate);  //et getfullyear töötaks


            s_Year = dateString.getFullYear();
            s_Month = dateString.getMonth() + 1;

            e_Year = enddateString.getFullYear();
            e_Month = enddateString.getMonth() + 1;


            const allRows = [];



            var end_month = 12;
            var start_month = s_Month;

            if (s_Year == e_Year) {
                end_month = e_Month;
            }

            if (table.tableInfo.id == "osahanked" || table.tableInfo.id == "hanked") {

                for (var y = s_Year; y <= e_Year; y++) {

                    if (y == e_Year) {
                        end_month = e_Month;
                    }

                    for (var m = start_month; m <= end_month; m++) {




                        //if (dateObj.selection == "hanketeated") {

                        //const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

                        //const url = 'https://jvinnal.github.io/HT_' + dateYear + '_' + t + '.xml'

                        var urls = ['https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + y + '/month/' + m + '/xml']

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



                                // 
                                // Iterate over the XML object
                                for (var i = 0; i < nodes.length; i++) {

                                    const HT = {};


                                    //välistan login class B, puudub reference
                                    if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {


                                        //osahanked
                                        if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined') {

                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0] !== 'undefined') {

                                                //console.log("suurus");
                                                //console.log(nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR").length);

                                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0].getElementsByTagName("LOT_NO")[0] !== 'undefined') {


                                                    for (var n = 0; n < nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR").length; n++) {
                                                        const HT = {};

                                                        if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                            HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                                        }

                                                        if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0].getElementsByTagName("LOT_NO")[0].childNodes[0] !== 'undefined') {
                                                            HT.lot_no = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("LOT_NO")[0].childNodes[0].nodeValue;
                                                            HT.title = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                                        }


                                                        if (table.tableInfo.id == "osahanked") {
                                                            allRows.push(HT);
                                                        }




                                                        //HT.lot_no = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0].getElementsByTagName("LOT_NO")[0].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }

                                            else
                                            {
                                                HT.lot_no = 0;
                                                if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {                    
                                                    HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                                    allRows.push(HT);
                                                }



                                            }
                                        }



                                        //HANKED

                                        //GENERATED file name       
                                        HT.file_name = 'HT_' + y + '_' + m + '.xml';

                                        //hankja nimi        
                                        HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;

                                        //registrikood
                                        HT.nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                        //aadress
                                        if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                                            HT.aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined') {
                                            HT.town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                                            HT.postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                                        }

                                        //hankija tüüp
                                        if (typeof nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0] !== 'undefined') {
                                            HT.ca_type_other = nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0].childNodes[0].nodeValue;
                                        }

                                        //hankija tüüp õige
                                        if (typeof nodes[i].getElementsByTagName("CA_TYPE")[0] !== 'undefined') {
                                            HT.ca_type = nodes[i].getElementsByTagName("CA_TYPE")[0].getAttributeNode("VALUE").nodeValue;
                                        }

                                        //hanke tüüp
                                        if (typeof nodes[i].getElementsByTagName("CA_ACTIVITY")[0] !== 'undefined') {
                                            HT.ca_activity = nodes[i].getElementsByTagName("CA_ACTIVITY")[0].getAttributeNode("VALUE").nodeValue;
                                        }


                                        //Peamine CPV kood
                                        if (typeof nodes[i].getElementsByTagName("CPV_MAIN")[0] !== 'undefined') {
                                            HT.cpv_main_code = nodes[i].getElementsByTagName("CPV_MAIN")[0].getElementsByTagName("CPV_CODE")[0].getAttributeNode("CODE").nodeValue;
                                        }






                                        //SENDER
                                        HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                        //HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;

                                        //FORM_SECTION






                                        if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                                            HT.url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
                                        }

                                        //----------------
                                        if (typeof nodes[i].getElementsByTagName("URL_PARTICIPATION")[0] !== 'undefined') {
                                            HT.url_participation = nodes[i].getElementsByTagName("URL_PARTICIPATION")[0].childNodes[0].nodeValue;
                                        }



                                        if (typeof nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0] !== 'undefined') {

                                            if (typeof nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0] !== 'undefined') {
                                                HT.ca_activity_other = nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0].nodeValue;
                                            }
                                        }

                                        //OBJECT_CONTRACT

                                        if (typeof nodes[i].getElementsByTagName("TITLE")[0] !== 'undefined') {
                                            HT.title = nodes[i].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                            HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("SHORT_DESCR")[0] !== 'undefined') {
                                            HT.short_descr = nodes[i].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("VAL_ESTIMATED_TOTAL")[0] !== 'undefined') {
                                            HT.val_estimated_total = nodes[i].getElementsByTagName("VAL_ESTIMATED_TOTAL")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("DURATION")[0] !== 'undefined') {
                                            HT.duration = nodes[i].getElementsByTagName("DURATION")[0].childNodes[0].nodeValue;
                                        }

                                        //LEFTI

                                        if (typeof nodes[i].getElementsByTagName("ECONOMIC_FINANCIAL_INFO")[0] !== 'undefined') {
                                            HT.economic_financial_info = nodes[i].getElementsByTagName("ECONOMIC_FINANCIAL_INFO")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("TECHNICAL_PROFESSIONAL_INFO")[0] !== 'undefined') {
                                            HT.technical_professional_info = nodes[i].getElementsByTagName("TECHNICAL_PROFESSIONAL_INFO")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("PERFORMANCE_CONDITIONS")[0] !== 'undefined') {
                                            HT.performance_conditions = nodes[i].getElementsByTagName("PERFORMANCE_CONDITIONS")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        //PROCEDURE

                                        //ESITAMISE AEG
                                        if (typeof nodes[i].getElementsByTagName("DATE_RECEIPT_TENDERS")[0] !== 'undefined') {
                                            HT.date_receipt_tenders = nodes[i].getElementsByTagName("DATE_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                            date = nodes[i].getElementsByTagName("DATE_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("TIME_RECEIPT_TENDERS")[0] !== 'undefined') {
                                            HT.time_receipt_tenders = nodes[i].getElementsByTagName("TIME_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                            time = nodes[i].getElementsByTagName("TIME_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                        }


                                        if (typeof date !== 'undefined' && typeof time !== 'undefined') {
                                            var datetime = new Date(date + ' ' + time);
                                        }

                                        HT.datetime = datetime;

                                        if (typeof nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0] !== 'undefined') {
                                            HT.date_tender_valid = nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0].childNodes[0].nodeValue;
                                        }

                                        //COMPLEMENTARY_INFO

                                        if (typeof nodes[i].getElementsByTagName("INFO_ADD")[0] !== 'undefined') {
                                            HT.info_add = nodes[i].getElementsByTagName("INFO_ADD")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                        }

                                        if (typeof nodes[i].getElementsByTagName("CE_ACTIVITY")[0] !== 'undefined') {
                                            HT.ce_activity = nodes[i].getElementsByTagName("CE_ACTIVITY")[0].getAttributeNode("VALUE").nodeValue;
                                        }


                                        if (typeof nodes[i].getElementsByTagName("TYPE_CONTRACT")[0] !== 'undefined') {

                                            if (nodes[i].getElementsByTagName("TYPE_CONTRACT")[0].getAttributeNode("CTYPE") != null) {
                                                HT.type_contract = nodes[i].getElementsByTagName("TYPE_CONTRACT")[0].getAttributeNode("CTYPE").nodeValue;
                                            }
                                        }







                                        if (table.tableInfo.id == "hanked") {
                                            allRows.push(HT);
                                        }



                                    }
                                }


                            }
                            // }

                        });


                    }

                    start_month = 1;


                }




            } else if (table.tableInfo.id == "lepingud") {

                for (var y = s_Year; y <= e_Year; y++) {

                    if (y == e_Year) {
                        end_month = e_Month;
                    }

                    for (var m = start_month; m <= end_month + 6; m++) {




                        var filterValues = table.filterValues;





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

                                //if (table.tableInfo.id == "lepingud") {

                                // Iterate over the XML object
                                for (var i = 0; i < nodes.length; i++) {

                                    const HT = {};

                                    //GENERATED

                                    //välistan login class B, puudub reference
                                    if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {

                                        
                                        if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                            HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                        }


                                        for (var n = 0; n < nodes[i].getElementsByTagName("AWARD_CONTRACT").length; n++) {
                                            const HT = {};

                                            HT.file_name = 'HLST_' + y + '_' + m + '.xml';

                                            if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
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
                                                            else
                                                            {
                                                                //kui ei ole hankeleping, siis osa numbri genereerin ise
                                                                HT.lot_no = 0;
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
                                                //if (Object.values(filterValues).indexOf(HT.reference_number_id) > -1) {

                                                    allRows.push(HT);
                                                }
                                            //}

                                        }







                                    }



                                }
                            }

                        });
                    }


                    //}


                }

                start_month = 1;


            }



            table.appendRows(allRows)
            doneCallback();
        };







        // Create event listeners for when the user submits the form
        tableau.registerConnector(myConnector);

        $(document).ready(function () {

            $("#submitButton").click(function () {


                var dateObj = {
                    startDate: $('#start-date-one').val().trim(),
                    endDate: $('#end-date-one').val().trim(),
                    selection: document.getElementById('selectid').value
                };

                // Simple date validation: Call the getDate function on the date object created
                function isValidDate(dateStr) {
                    var d = new Date(dateStr);
                    return !isNaN(d.getDate());
                }

                //if (isValidDate(dateObj.startDate)) {
                tableau.connectionData = JSON.stringify(dateObj); // Use this variable to pass data to your getSchema and getData functions


                //if (dateObj.selection == "hanketeated") {
                tableau.connectionName = "hanked ja lepingud"; // This will be the data source name in Tableau
                //} else if (dateObj.selection == "lepingud") {

                //  tableau.connectionName = "Lepingute teated"; // This will be the data source name in Tableau

                //}




                tableau.submit(); // This sends the connector object to Tableau
                //} else {
                //  $('#errorMsg').html("Enter valid year-month format. For example, 2020-10.");
                // }

            });
        }

        );

    });
})();

