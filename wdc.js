(function () {

    $(document).ready(function () {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        // Define the schema
        myConnector.getSchema = function (schemaCallback) {

            var cols = [

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
                    alias: "officialname",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "nationalid",
                    alias: "nationalid",
                    dataType: tableau.dataTypeEnum.string
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
                    alias: "town",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "postal_code",
                    alias: "postal_code",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "url_document",
                    alias: "url_document",
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

                                HT.file_name = 'hanked' + dateYear + '_' + t + '.xml';
                                HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
                                HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;
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

                                HT.file_name = 'lepingud' + dateYear + '_' + t + '.xml';
                                HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
                                HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;
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

