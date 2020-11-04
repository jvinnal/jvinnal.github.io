function test() {

  //const url = 'phpscript.php'
  //const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=QYOWP5SXIHB6BV3X'


  if ($("#selectid").val() === "") 

  {
      alert("Not selected");
  }


  // Simple date validation: Call the getDate function on the date object created
  function isValidDate(dateStr) {
    var d = new Date(dateStr);
    return !isNaN(d.getDate());
  }

  startDate = new Date($('#start-date-one').val().trim())
  dateYear = startDate.getFullYear();
  dateMonth = startDate.getMonth() + 1;

  endDate = new Date($('#end-date-one').val().trim())
  e_dateYear = endDate.getFullYear();
  e_dateMonth = endDate.getMonth() + 1;





  if (isValidDate(startDate)) {
    //console.log(startDate);
    console.log(dateYear);
    console.log(dateMonth);

    console.log(e_dateYear);
    console.log(e_dateMonth);
  }
  else {
    $('#errorMsg').html("Enter valid year-month format. For example, 2020-10.");
  }




  const allRows = [];


  for (var t = dateMonth; t <= e_dateMonth; t++) {



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


          if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
            if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("OFFICIALNAME")[0] !== 'undefined') {
              HT.contract_officialname = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
            }
          }


          if (typeof nodes[i].getElementsByTagName("CONTRACTORS")[0] !== 'undefined') {
            if (typeof nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("OFFICIALNAME")[0] !== 'undefined') {
              HT.contract_nationalid = nodes[i].getElementsByTagName("AWARD_CONTRACT")[0].getElementsByTagName("AWARDED_CONTRACT")[0].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;
            }
          }

          if (typeof nodes[i].getElementsByTagName("VAL_TOTAL")[0] !== 'undefined') {
            if (nodes[i].getElementsByTagName("VAL_TOTAL")[0].childNodes[0] != null) {
            HT.val_total = nodes[i].getElementsByTagName("VAL_TOTAL")[0].childNodes[0].nodeValue;
            }
          }

          console.log(HT.val_total )


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



    //console.log(HT)
  };

  //console.log(allRows.);

  //console.log(JSON.stringify(allRows, null, 4));
};
