(function () {

    $(document).ready(function () {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        // Define the schema
        myConnector.getSchema = function (schemaCallback) {

            var dateObj = JSON.parse(tableau.connectionData);


            if (dateObj.selection == "hanketeated") {
                var cols = [

                    {
                        id: "reference_number",
                        alias: "viitenumber",
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
                        id: "officialname",
                        alias: "hankija",
                        dataType: tableau.dataTypeEnum.string
                    }

                    ,

                    {
                        id: "nationalid",
                        alias: "hankija_kood",
                        dataType: tableau.dataTypeEnum.int,
                        
                    }
                    ,

                    {
                        id: "datetime",
                        alias: "esitamise_aeg",
                        dataType: tableau.dataTypeEnum.datetime

                    }
                    ,

                    {
                        id: "val_estimated_total",
                        alias: "eeldatav_maksumus",
                        dataType: tableau.dataTypeEnum.int
                    }
                    ,

                    {
                        id: "duration",
                        alias: "kestvus",
                        dataType: tableau.dataTypeEnum.int
                    }
                    ,



                    {
                        id: "town",
                        alias: "hankija_linn",
                        dataType: tableau.dataTypeEnum.string,
                        geoRole: tableau.geographicRoleEnum.city
                        
                    }
                    ,

                    {
                        id: "aadress",
                        alias: "aadress",
                        dataType: tableau.dataTypeEnum.string
                    }
                    ,
                    {
                        id: "ce_activity",
                        alias: "hankija_teg_ala",
                        dataType: tableau.dataTypeEnum.string
                    }
                    ,

                    {
                        id: "type_contract",
                        alias: "hanke_liik",
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
                        id: "short_descr",
                        alias: "short_descr",
                        dataType: tableau.dataTypeEnum.string
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

            } else if (dateObj.selection == "lepingud") {

                var cols = [

                    {
                        id: "reference_number",
                        alias: "viitenumber",
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

                    //  {
                    //     id: "datetime",
                    //    alias: "esitamise_aeg",
                    //    dataType: tableau.dataTypeEnum.date

                    // }
                    //,

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

                    }
                    ,

                    //{
                    //    id: "town",
                    //    alias: "hankija_linn",
                    //    dataType: tableau.dataTypeEnum.string
                    // }
                    //,

                    // {
                    //    id: "aadress",
                    //   alias: "aadress",
                    //   dataType: tableau.dataTypeEnum.string
                    // }
                    // ,
                    // {
                    //    id: "ce_activity",
                    //   alias: "hankija_teg_ala",
                    //   dataType: tableau.dataTypeEnum.string
                    // }
                    //,

                    // {
                    //    id: "type_contract",
                    //   alias: "hanke_liik",
                    //   dataType: tableau.dataTypeEnum.string
                    // }
                    //,



                    {
                        id: "no_doc_ext",
                        alias: "no_doc_ext",
                        dataType: tableau.dataTypeEnum.string

                    }
                    // ,
                    //{
                    //   id: "organisation",
                    //   alias: "organisation",
                    //  dataType: tableau.dataTypeEnum.string
                    // }

                    ,
                    {
                        id: "file_name",
                        alias: "file_name",
                        dataType: tableau.dataTypeEnum.string

                    }
                    ,




                    //{
                    //    id: "postal_code",
                    //    alias: "postal_code",
                    //    dataType: tableau.dataTypeEnum.int
                    // }
                    // ,
                    // {
                    //    id: "url_document",
                    //    alias: "url_document",
                    //    dataType: tableau.dataTypeEnum.string
                    // }

                    // ,

                    // {
                    //    id: "url_participation",
                    //    alias: "url_participation",
                    //    dataType: tableau.dataTypeEnum.string
                    // }
                    // ,
                    //{
                    //     id: "ca_type_other",
                    //     alias: "ca_type_other",
                    //     dataType: tableau.dataTypeEnum.string
                    // }
                    // ,
                    // {
                    //    id: "ca_activity_other",
                    //    alias: "ca_activity_other",
                    //    dataType: tableau.dataTypeEnum.int
                    // }
                    //,


                    //{
                    //   id: "short_descr",
                    //   alias: "short_descr",
                    //   dataType: tableau.dataTypeEnum.string
                    //}
                    //,
                    //{
                    //   id: "val_estimated_total",
                    //   alias: "val_estimated_total",
                    //   dataType: tableau.dataTypeEnum.int
                    //}
                    //,
                    //{
                    //   id: "duration",
                    //  alias: "duration",
                    //  dataType: tableau.dataTypeEnum.int
                    //}
                    // ,
                    // {
                    //   id: "economic_financial_info",
                    //   alias: "economic_financial_info",
                    //   dataType: tableau.dataTypeEnum.string
                    //}
                    //,
                    // {
                    //    id: "technical_professional_info",
                    //   alias: "technical_professional_info",
                    //   dataType: tableau.dataTypeEnum.string
                    //}
                    //
                    //
                    //,
                    //
                    //{
                    //   id: "performance_conditions",
                    //   alias: "performance_conditions",
                    //   dataType: tableau.dataTypeEnum.string
                    //}
                    //,
                    //{
                    //    id: "date_receipt_tenders",
                    //    alias: "date_receipt_tenders",
                    //    dataType: tableau.dataTypeEnum.date
                    // }
                    // ,
                    //{
                    //    id: "time_receipt_tenders",
                    //    alias: "time_receipt_tenders",
                    //    dataType: tableau.dataTypeEnum.string
                    //}
                    //,
                    //{
                    //    id: "date_tender_valid",
                    //    alias: "date_tender_valid",
                    //    dataType: tableau.dataTypeEnum.date
                    //}
                    //,
                    {
                        id: "info_add",
                        alias: "info_add",
                        dataType: tableau.dataTypeEnum.string
                    }



                ];




            }






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


            for (var y = s_Year; y <= e_Year; y++) {

                if (y == e_Year) {
                    end_month = e_Month;
                }

                for (var m = start_month; m <= end_month; m++) {

                    if (dateObj.selection == "hanketeated") {

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
        
                                    //GENERATED
        
                                    HT.file_name = 'HT_' + y + '_' + m + '.xml';
        
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
        
        
        
        
        
        
                                    allRows.push(HT);
        
                                }
        
        
                            }
                        });
        
                    } else if (dateObj.selection == "lepingud") {
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
        
                                    //GENERATED
        
                                    HT.file_name = 'HLST_' + y + '_' + m + '.xml';
        
                                    //SENDER
                                    HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
                                    HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;
        
        
                                    //PAKKUJA
                                    if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("OFFICIALNAME")[0] !== 'undefined') {
                                            HT.contract_officialname = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
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
        
                                    if (typeof nodes[i].getElementsByTagName("VAL_TOTAL")[0] !== 'undefined') {
                                        if (nodes[i].getElementsByTagName("VAL_TOTAL")[0].childNodes[0] != null) {
                                            HT.val_total = nodes[i].getElementsByTagName("VAL_TOTAL")[0].childNodes[0].nodeValue;
                                        }
                                    }
        
                                    if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
                                        if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0] !== 'undefined') {
                                            HT.conclusion_contract = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("DATE_CONCLUSION_CONTRACT")[0].childNodes[0].nodeValue;
                                        }
                                    }
        
        
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
        
        
        
        
        
        
                                    allRows.push(HT);
        
                                }
        
        
                            }
                        });
        
                    }


                }

                start_month = 1;


            }


            //for (var t = dateMonth; t <= enddateMonth; t++) {





            //};



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
                    tableau.connectionName = "Hangete hanketeated"; // This will be the data source name in Tableau
                } else if (dateObj.selection == "lepingud") {

                    tableau.connectionName = "Lepingute teated"; // This will be the data source name in Tableau

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

