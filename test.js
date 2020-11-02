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



const allRows = [];
const HLST = {};
const HT = {};

HT.officialname = null;
HT.no_doc_ext = null;   
HT.organisation = null;         
HT.nationalid = null;
HT.aadress = null;
HT.town = null;
HT.postal_code = null;  
HT.url_document = null;
HT.url_document = null;


for (var t = dateMonth ; t <= e_dateMonth ; t++) {

//const url = 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice/' + dateYear + '/month/' + t  +'/xml';
//const url = 'http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml'

//const url = 'https://riigihanked.riik.ee:443/rhr/api/public/v1/opendata/notice_award/2019/month/1/xml'

//const url = 'https://jvinnal.github.io/HT_2019_6.xml'

var urls = ['http://192.168.56.1:8080/HT_' + dateYear + '_' + t + '.xml', 'http://192.168.56.1:8080/HLST_' + dateYear + '_' + t + '.xml']


$.ajax({
    type: 'get',
    url: urls[0],
    dataType: "xml",
    jsonp: true,
    contentType: "text/xml; charset=\"utf-8\"",
    data: {},
    async: false,
    crossDomain: false,
    success: function(data) {
        const nodes =  data.getElementsByTagName("TED_ESENDERS")
 
        //const keys = Object.keys(nodes)
        

           // Iterate over the XML object
           for (var i = 0 ; i < nodes.length ; i++) {
            
           
            HT.file_name = 'HT_' + dateYear + '_' + t + '.xml';

            
            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined')     
                      {    
                        HT.title = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
            } else {
                HT.title = null;
            }

            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined')     
                      {    
                        HT.short_descr = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
            } else {
                HT.short_descr = null;
            }
           
     
            HT.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
            HT.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;   
            HT.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;         
            HT.nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

            if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined')     
                      { 
                        HT.aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined')     
                      { 
                        HT.town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined')     
                      { 
                        HT.postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined')     
                      {    
                        HT.url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
            } else {
                HT.url_document = null;
            }
        

            allRows.push(HT);
            
        }
           
    
    
        
    
                  
         

       
       
    }
});

//console.log(t)




//FAIL 2
if (true){
$.ajax({
    type: 'get',
    url: urls[1],
    dataType: "xml",
    jsonp: true,
    contentType: "text/xml; charset=\"utf-8\"",
    data: {},
    async: false,
    crossDomain: false,
    success: function(data) {
        const nodes =  data.getElementsByTagName("TED_ESENDERS")
 
        //const keys = Object.keys(nodes)
        

           // Iterate over the XML object
           for (var i = 0 ; i < nodes.length ; i++) {
            
           
            HLST.file_name = 'HLST_' + dateYear + '_' + t + '.xml';

            
            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined')     
                      {    
                        HLST.title = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("TITLE")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
            } else {
                HLST.title = null;
            }

            if (typeof nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0] !== 'undefined')     
                      {    
                        HLST.short_descr = nodes[i].getElementsByTagName("OBJECT_CONTRACT")[0].getElementsByTagName("SHORT_DESCR")[0].getElementsByTagName("P")[0].childNodes[0].nodeValue;
            } else {
                HLST.short_descr = null;
            }
           
     
            HLST.officialname = nodes[i].getElementsByTagName("OFFICIALNAME")[0].childNodes[0].nodeValue;
            HLST.no_doc_ext = nodes[i].getElementsByTagName("NO_DOC_EXT")[0].childNodes[0].nodeValue;   
            HLST.organisation = nodes[i].getElementsByTagName("ORGANISATION")[0].childNodes[0].nodeValue;         
            HLST.nationalid = nodes[i].getElementsByTagName("NATIONALID")[0].childNodes[0].nodeValue;

            if (typeof nodes[i].getElementsByTagName("ADDRESS")[0] !== 'undefined')     
                      { 
                        HLST.aadress = nodes[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("TOWN")[0] !== 'undefined')     
                      { 
                        HLST.town = nodes[i].getElementsByTagName("TOWN")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("POSTAL_CODE")[0] !== 'undefined')     
                      { 
                        HLST.postal_code = nodes[i].getElementsByTagName("POSTAL_CODE")[0].childNodes[0].nodeValue;
                      }

            if (typeof nodes[i].getElementsByTagName("URL_DOCUMENT")[0] !== 'undefined')     
                      {    
                        HLST.url_document = nodes[i].getElementsByTagName("URL_DOCUMENT")[0].childNodes[0].nodeValue;
            } else {
                HLST.url_document = null;
            }
        

            allRows.push(HLST);
            
        }
           
    
    
       
       
    }
});

//console.log(t)
};
};

console.log(JSON.stringify(allRows, null, 4));
};
