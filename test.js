function test(){

//const url = 'phpscript.php'
//const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=QYOWP5SXIHB6BV3X'




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
else
{
    $('#errorMsg').html("Enter valid year-month format. For example, 2020-10.");
}



if (document.getElementById('selectid').value == "hanketeated") {
 console.log("hanked")
}
else if (document.getElementById('selectid').value == "lepingud") 
{
  console.log("lepingud")
}
else
{
  console.log("test")
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
            

              HT.ht_file_name = 'HT_' + dateYear + '_' + t + '.xml';
              HT.ht_officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
              HT.ht_no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
              HT.ht_organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;
              HT.ht_nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;


              if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                  HT.ht_aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined') {
                  HT.ht_town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                  HT.ht_postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                  HT.ht_url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
              }


              allRows.push(HT)
          }


      }
  });

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

              const HLST = {};

              
              HLST.ht_file_name = 'HT_' + dateYear + '_' + t + '.xml';
              HLST.ht_officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
              HLST.ht_no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;
              HLST.ht_organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;
              HLST.ht_nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;


              if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined') {
                HLST.ht_aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined') {
                HLST.ht_town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined') {
                HLST.ht_postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
              }

              if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined') {
                HLST.ht_url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
              }

              allRows.push(HLST)
          }


      }
  });

  
  //console.log(HT)
};

//console.log(allRows.);

console.log(JSON.stringify(allRows, null, 4));
};
