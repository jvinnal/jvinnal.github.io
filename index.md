<html>

<head>
    <title>Riigihanked</title>
    <meta http-equiv="Cache-Control" content="no-store" />

    <link rel="stylesheet" href="styles.css">

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" crossorigin="anonymous"></script>

    <script src="https://connectors.tableau.com/libs/tableauwdc-2.3.latest.js" type="text/javascript"></script>
    <script src="wdc.js" type="text/javascript"></script>
    <script src="test.js" type="text/javascript"></script>
    <script src="test2.js" type="text/javascript"></script>
   
</head>

<body>
    <div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-left col-md-4 col-md-offset-4">
                
                <br><br>
                Väljakuulutatud hangete hanketeated ja muutmise teated
                    <br><br>

                <label for="start">Start month:</label>
                 <br>
                 <input type="month" id="start-date-one" name="start-date-one"
                 min="2015-01" value="2019-01">
                 <br> 
                 <label for="start">End month:</label>
                 <br>
                 <input type="month" id="end-date-one" name="end-date-one"
                 min="2015-01" value="2019-05">
                 <br>
          
                <button type="button" id="submitButton" class="btn btn-success">Get Data</button>

                <br>
                <br>
                <br>
                <br>
                <button type="button" id="test" onclick="test()">Debugging</button>
                <button type="button" id="test2" onclick="test2()">test2</button>
                <br>
                <div id="errorMsg"></div>

              
                 

            </div>
        </div>
    </div>
</body>

</html>
