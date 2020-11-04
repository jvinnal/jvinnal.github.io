(function () {

    $(document).ready(function () {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        // Define the schema
        myConnector.getSchema = function (schemaCallback) {

            var cols = [

                {
                    id: "datetime",
                    alias: "esitamise_aeg",
                    dataType: tableau.dataTypeEnum.date

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
                    id: "officialname",
                    alias: "hankija",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "nationalid",
                    alias: "hankija_kood",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "aadress",
                    alias: "aadress",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "town",
                    alias: "hankija_linn",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "postal_code",
                    alias: "postal_code",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "url_document",
                    alias: "url_document",
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
                    id: "title",
                    alias: "nimetus",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "reference_number",
                    alias: "viitenumber",
                    dataType: tableau.dataTypeEnum.int
                }

                ,

                {
                    id: "short_descr",
                    alias: "short_descr",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "val_estimated_total",
                    alias: "val_estimated_total",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "duration",
                    alias: "duration",
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


            var dateObj = JSON.parse(tableau.connectionData);



            if (dateObj.selection == "hanketeated") {
                var tb = {
                    id: "hanked",
                    alias: "hanked",
                    columns: cols
                };
            }
            else if (dateObj.selection == "lepingud") {
                var tb = {
                    id: "lepingud",
                    alias: "lepingud",
                    columns: cols
                };
            }
            else {
                var tb = {
                    id: "undefined",
                    alias: "undefined",
                    columns: cols
                };
            }

            schemaCallback([tb]);
        };

        // Download the data




        myConnector.getData = function (table, doneCallback) {

            var dateObj = JSON.parse(tableau.connectionData);  //võtame aja parameetri
            dateString = new Date(dateObj.startDate);  //et getfullyear töötaks
            enddateString = new Date(dateObj.endDate);  //et getfullyear töötaks


            dateYear = dateString.getFullYear();
            dateMonth = dateString.getMonth() + 1;

            enddateYear = enddateString.getFullYear();
            enddateMonth = enddateString.getMonth() + 1;


            const allRows = [];




            for (var t = dateMonth; t <= enddateMonth; t++) {




                if (dateObj.selection == "hanketeated") {

                    //const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

                    //const url = 'https://jvinnal.github.io/HT_' + dateYear + '_' + t + '.xml'

                    var urls = ['https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + dateYear + '/month/' + t + '/xml'
                        , 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice_award/' + dateYear + '/month/' + t + '/xml']

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

                                //GENERATED

                                HT.file_name = 'HT_' + dateYear + '_' + t + '.xml';

                                //SENDER
                                HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;

                                //FORM_SECTION
                                //CONTRACTING_BODY

                                HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
                                HT.nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                                    HT.aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined') {
                                    HT.town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                                    HT.postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                                    HT.url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
                                }

                                //----------------
                                if (typeof nodes[i].getElementsByTagName("URL_PARTICIPATION")[0] !== 'undefined') {
                                    HT.url_participation = nodes[i].getElementsByTagName("URL_PARTICIPATION")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0] !== 'undefined') {
                                    HT.ca_type_other = nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0] !== 'undefined') {
                                    HT.ca_activity_other = nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0].nodeValue;
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


                                var datetime = new Date(date + ' ' + time);

                                HT.datetime = datetime;

                                if (typeof nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0] !== 'undefined') {
                                    HT.date_tender_valid = nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0].childNodes[0].nodeValue;
                                }

                                //COMPLEMENTARY_INFO

                                if (typeof nodes[i].getElementsByTagName("INFO_ADD")[0] !== 'undefined') {
                                    HT.info_add = nodes[i].getElementsByTagName("INFO_ADD")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                }






                                allRows.push(HT);

                            }


                        }
                    });

                } else if (dateObj.selection == "lepingud") {
                    //const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

                    //const url = 'https://jvinnal.github.io/HT_' + dateYear + '_' + t + '.xml'

                    var urls = ['https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + dateYear + '/month/' + t + '/xml'
                        , 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice_award/' + dateYear + '/month/' + t + '/xml']

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

                                //GENERATED

                                HT.file_name = 'HT_' + dateYear + '_' + t + '.xml';

                                //SENDER
                                HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;

                                //FORM_SECTION
                                //CONTRACTING_BODY

                                HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
                                HT.nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                                    HT.aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined') {
                                    HT.town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                                    HT.postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                                    HT.url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
                                }

                                //----------------
                                if (typeof nodes[i].getElementsByTagName("URL_PARTICIPATION")[0] !== 'undefined') {
                                    HT.url_participation = nodes[i].getElementsByTagName("URL_PARTICIPATION")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0] !== 'undefined') {
                                    HT.ca_type_other = nodes[i].getElementsByTagName("CA_TYPE_OTHER")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0] !== 'undefined') {
                                    HT.ca_activity_other = nodes[i].getElementsByTagName("CA_ACTIVITY_OTHER")[0].childNodes[0].nodeValue;
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

                                if (typeof nodes[i].getElementsByTagName("DATE_RECEIPT_TENDERS")[0] !== 'undefined') {
                                    HT.date_receipt_tenders = nodes[i].getElementsByTagName("DATE_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("TIME_RECEIPT_TENDERS")[0] !== 'undefined') {
                                    HT.time_receipt_tenders = nodes[i].getElementsByTagName("TIME_RECEIPT_TENDERS")[0].childNodes[0].nodeValue;
                                }

                                if (typeof nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0] !== 'undefined') {
                                    HT.date_tender_valid = nodes[i].getElementsByTagName("DATE_TENDER_VALID")[0].childNodes[0].nodeValue;
                                }

                                //COMPLEMENTARY_INFO

                                if (typeof nodes[i].getElementsByTagName("INFO_ADD")[0] !== 'undefined') {
                                    HT.info_add = nodes[i].getElementsByTagName("INFO_ADD")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                }






                                allRows.push(HT);

                            }


                        }
                    });

                }


            };



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


                if (dateObj.selection == "hanketeated") {
                    tableau.connectionName = "hangete hanketeated ja muutmise teated"; // This will be the data source name in Tableau
                } else if (dateObj.selection == "lepingud") {

                    tableau.connectionName = "lepingute teated ja lepingute muutmise teated"; // This will be the data source name in Tableau

                }




                tableau.submit(); // This sends the connector object to Tableau
                //} else {
                //  $('#errorMsg').html("Enter valid year-month format. For example, 2020-10.");
                // }

            });
        }

        );

    });
})();

