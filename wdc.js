

(function () {

    $(document).ready(function () {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        // Define the schema
        myConnector.getSchema = function (schemaCallback) {

            //var dateObj = JSON.parse(tableau.connectionData);


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
                    alias: "hankija reg",
                    dataType: tableau.dataTypeEnum.string,

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
                    dataType: tableau.dataTypeEnum.string,
                    geoRole: tableau.geographicRoleEnum.zip_code_postcode
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
                    id: "joint",
                    alias: "ühishange",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "url_document",
                    alias: "hanke link",
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
                    id: "pt_open",
                    alias: "menetluse liik",
                    dataType: tableau.dataTypeEnum.string
                }
                ,


                {
                    id: "framework",
                    alias: "hankega kaasneb",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "central",
                    alias: "keskse hankija hange",
                    dataType: tableau.dataTypeEnum.string
                }
                ,

                {
                    id: "recurrent",
                    alias: "korduv hange",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                


                {
                    id: "main_cpv_code",
                    alias: "peamine cpv",
                    dataType: tableau.dataTypeEnum.string
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
                    id: "duration",
                    alias: "kestvus kuudes",
                    dataType: tableau.dataTypeEnum.int
                }
                ,

                {
                    id: "val_estimated_total",
                    alias: "eeldatav kogumaksumus",
                    dataType: tableau.dataTypeEnum.float
                }
                ,

                {
                    id: "datetime_receipt_tenders",
                    alias: "pakkumuste esitamine",
                    dataType: tableau.dataTypeEnum.datetime

                }
                ,


                {
                    id: "date_dispatch_notice",
                    alias: "teate kinnitamise kp",
                    dataType: tableau.dataTypeEnum.date

                }
                ,

                // {
                //     id: "date_dispatch_notice_original",
                //     alias: "avaldamise kp orig",
                //    dataType: tableau.dataTypeEnum.date

                // }
                //,

                {
                    id: "file_name",
                    alias: "faili nimi",
                    dataType: tableau.dataTypeEnum.string
                }

            ];

            var osahanked_cols = [
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
                    alias: "hanke osa jrk",
                    dataType: tableau.dataTypeEnum.int
                }

                ,
                {
                    id: "title",
                    alias: "hanke osa nimi",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "hanke_osa_cpv",
                    alias: "hanke osa cpv",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "main_site",
                    alias: "teostamise koht",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "short_desc",
                    alias: "kirjeldus",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "val_obj",
                    alias: "eeldatav maksumus",
                    dataType: tableau.dataTypeEnum.string
                }

                ,
                {
                    id: "osa_kest",
                    alias: "hanke osa kestvus",
                    dataType: tableau.dataTypeEnum.int
                }

                ,
                {
                    id: "no_eu",
                    alias: "seos EU prog",
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
                    id: "contract_no",
                    alias: "lepingu nr",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "title",
                    alias: "lepingu nimetus",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "date_conclusion_contract",
                    alias: "solmimise kp",
                    dataType: tableau.dataTypeEnum.date
                }
                ,
                {
                    id: "tenders",
                    alias: "pakkumuste arv",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "contract_officialname",
                    alias: "pakkuja nimi",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "contract_nationalid",
                    alias: "pakkuja reg",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "contract_town",
                    alias: "pakkuja linn",
                    dataType: tableau.dataTypeEnum.string,
                    geoRole: tableau.geographicRoleEnum.city
                }
                ,
                {
                    id: "contract_aadress",
                    alias: "pakkuja aadress",
                    dataType: tableau.dataTypeEnum.string
                }
                ,
                {
                    id: "lep_val_total",
                    alias: "lepingu osamaksumus",
                    dataType: tableau.dataTypeEnum.float

                }
                ,
                {
                    id: "hanke_val_total",
                    alias: "lepingute kogumaksumus",
                    dataType: tableau.dataTypeEnum.float

                }
                ,
                {
                    id: "lot_no",
                    alias: "hanke osa jrk",
                    dataType: tableau.dataTypeEnum.int
                }
                ,
                {
                    id: "file_name",
                    alias: "faili nimi",
                    dataType: tableau.dataTypeEnum.string
                }
            ];


            var lepingud_tb = {
                id: "lepingud",
                alias: "lepingud",
                columns: lepingud_cols
            };


            var muudatused_cols = [
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
                    id: "section",
                    alias: "osa",
                    dataType: tableau.dataTypeEnum.string

                }
                ,
                {
                    id: "label",
                    alias: "pealkiri",
                    dataType: tableau.dataTypeEnum.string

                }
                ,

                {
                    id: "old_value",
                    alias: "vana väärtus",
                    dataType: tableau.dataTypeEnum.string

                }
                ,

                {
                    id: "new_value",
                    alias: "uus väärtus",
                    dataType: tableau.dataTypeEnum.string

                }

                ,

                {
                    id: "c_info_add",
                    alias: "muudatuse põhjendus",
                    dataType: tableau.dataTypeEnum.string

                }




            ]

            var muudatused_tb = {
                id: "muudatused",
                alias: "muudatused",
                columns: muudatused_cols
            };









            schemaCallback([hanked_tb, osahanked_tb, lepingud_tb, muudatused_tb]);
        };

        // Download the data




        myConnector.getData = function (table, doneCallback) {

            var dateObj = JSON.parse(tableau.connectionData);  //võtame aja parameetri
            dateString = new Date(dateObj.startDate);  //et getfullyear töötaks
            //enddateString = new Date(dateObj.endDate);  //et getfullyear töötaks


            //algus
            s_Year = dateString.getFullYear();
            s_Month = dateString.getMonth() + 1;

            //lõpp
            //e_Year = enddateString.getFullYear();
            //e_Month = enddateString.getMonth() + 1;

            e_Year = new Date().getFullYear();
            e_Month = new Date().getMonth() + 1;

            //lepingutele eraldi
            //algus
            s_Year_l = dateString.getFullYear();
            s_Month_l = dateString.getMonth() + 1;

            //lopp
            //e_Year_l = enddateString.getFullYear() + 1;
            //e_Month_l = enddateString.getMonth() + 1;
            e_Year_l = new Date().getFullYear();
            e_Month_l = new Date().getMonth() + 1;




            const allRows = [];



            var end_month = 12;
            var start_month = s_Month;

            if (s_Year == e_Year) {
                end_month = e_Month;
            }

            if (table.tableInfo.id == "osahanked" || table.tableInfo.id == "hanked" || table.tableInfo.id == "muudatused") {

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

                                    var max_dur = 0; //osahangete suurim kestvus


                                    //välistan login class B, puudub reference
                                    if (typeof nodes[i].getElementsByTagName("LOGIN")[0] == 'undefined') {


                                        //osahanked
                                        if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined') {

                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0] !== 'undefined') {


                                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[0].getElementsByTagName("LOT_NO")[0] !== 'undefined') {





                                                    for (var n = 0; n < nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR").length; n++) {
                                                        const HT = {};



                                                        if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                            HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                                        }

                                                        if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("LOT_NO")[0].childNodes[0] !== 'undefined') {
                                                            HT.lot_no = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("LOT_NO")[0].childNodes[0].nodeValue;
                                                            HT.title = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;




                                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("CPV_ADDITIONAL")[0] !== 'undefined') {
                                                                if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("CPV_ADDITIONAL")[0].getElementsByTagName("CPV_CODE")[0].getAttributeNode("CODE") !== 'undefined') {


                                                                    HT.hanke_osa_cpv = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("CPV_ADDITIONAL")[0].getElementsByTagName("CPV_CODE")[0].getAttributeNode("CODE").nodeValue;
                                                                }
                                                            }

                                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("MAIN_SITE")[0] !== 'undefined') {

                                                                HT.main_site = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("MAIN_SITE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;

                                                            }

                                                            HT.short_desc = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;



                                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("VAL_OBJECT")[0] !== 'undefined') {
                                                                HT.val_obj = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("VAL_OBJECT")[0].childNodes[0].nodeValue;
                                                            }


                                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("DURATION")[0] !== 'undefined') {
                                                                HT.osa_kest = parseInt(nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("DURATION")[0].childNodes[0].nodeValue);
                                                            }


                                                            if (HT.osa_kest > max_dur) {

                                                                max_dur = HT.osa_kest
                                                            }




                                                            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("NO_EU_PROGR_RELATED")[0] !== 'undefined') {
                                                                HT.no_eu = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("OBJECT_DESCR")[n].getElementsByTagName("NO_EU_PROGR_RELATED")[0].nodeValue;
                                                            }



                                                        }




                                                        if (table.tableInfo.id == "osahanked") {
                                                            allRows.push(HT);
                                                        }





                                                    }



                                                }
                                                else {
                                                    HT.lot_no = 0;
                                                    if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                        HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;

                                                        if (table.tableInfo.id == "osahanked") {
                                                            allRows.push(HT);
                                                        }
                                                    }



                                                }


                                            }

                                            else {
                                                HT.lot_no = 0;
                                                if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                    HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;

                                                    if (table.tableInfo.id == "osahanked") {
                                                        allRows.push(HT);
                                                    }
                                                }



                                            }
                                        }




                                        //muudatused
                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0] !== 'undefined') {

                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[0] !== 'undefined') {


                                                for (var n = 0; n < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE").length; n++) {
                                                    const HT = {};

                                                    if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("INFO_ADD")[0] !== 'undefined') {
                                                        HT.c_info_add = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("INFO_ADD")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
                                                    }


                                                    if (typeof nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0] !== 'undefined') {
                                                        HT.reference_number = nodes[i].getElementsByTagName("REFERENCE_NUMBER")[0].childNodes[0].nodeValue;
                                                    }



                                                    HT.section = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("SECTION")[0].childNodes[0].nodeValue;
                                                    HT.label = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("LABEL")[0].childNodes[0].nodeValue;




                                                    if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0] !== 'undefined') {
                                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0] !== 'undefined') {
                                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[0].childNodes[0] !== 'undefined') {

                                                                for (var o = 0; o < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length; o++) {
                                                                    //HT.pikkus = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length;
                                                                    if (typeof HT.old_value !== 'undefined') {
                                                                        HT.old_value = HT.old_value + " " + nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[o].childNodes[0].nodeValue;
                                                                    }
                                                                    else {

                                                                        HT.old_value = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("OLD_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[o].childNodes[0].nodeValue;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                    if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0] !== 'undefined') {
                                                        if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0] !== 'undefined') {
                                                            if (typeof nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[0].childNodes[0] !== 'undefined') {



                                                                for (var u = 0; u < nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P").length; u++) {
                                                                    if (typeof HT.new_value !== 'undefined') {
                                                                        HT.new_value = HT.new_value + " " + nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[u].childNodes[0].nodeValue;
                                                                    }
                                                                    else {
                                                                        HT.new_value = nodes[i].getElementsByTagName("CHANGES")[0].getElementsByTagName("CHANGE")[n].getElementsByTagName("NEW_VALUE")[0].getElementsByTagName("TEXT")[0].getElementsByTagName("P")[u].childNodes[0].nodeValue;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                    if (table.tableInfo.id == "muudatused") {
                                                        allRows.push(HT);
                                                    }
                                                }
                                            }
                                        }



                                        //HANKED

                                        //GENERATED file name       
                                        HT.file_name = 'HT_' + y + '_' + m + '.xml';


                                        //vaikeväärtused
                                        HT.joint = "ei"
                                        HT.central = "ei"
                                        HT.framework = "Hankelepingu sõlmimine"
                                        HT.recurrent =  "ei"

                                        //hankja nimi
                                        if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0] !== 'undefined') {
                                            HT.officialname = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;

                                            //registrikood
                                            HT.nationalid = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

                                            //aadress
                                            HT.aadress = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;

                                            //linn
                                            HT.town = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;

                                            //postiindeks
                                            if (typeof nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                                                HT.postal_code = nodes[i].getElementsByTagName("CONTRACTING_BODY")[0].getElementsByTagName("ADDRESS_CONTRACTING_BODY")[0].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
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
                                                HT.recurrent =  "jah"
                                            }
                                        }



                                        }



                                        if (table.tableInfo.id == "hanked") {
                                            allRows.push(HT);
                                        }
                                    }
                                }
                            }

                        });
                    }

                    start_month = 1;
                }


            } else if (table.tableInfo.id == "lepingud") {



                var end_month_l = 12;
                var start_month_l = s_Month_l;

                if (s_Year_l == e_Year_l) {
                    end_month_l = e_Month_l;
                }

                for (var y = s_Year_l; y <= e_Year_l; y++) {

                    if (y == e_Year_l) {
                        end_month_l = e_Month_l;
                    }

                    for (var m = start_month_l; m <= end_month_l; m++) {



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


                                                //lepingu nr, peab olema kõigil
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

                    start_month_l = 1;
                }




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
                    //endDate: $('#end-date-one').val().trim(),
                    //selection: document.getElementById('selectid').value
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