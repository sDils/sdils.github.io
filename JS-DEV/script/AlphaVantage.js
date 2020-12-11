function loadTickerHistory() {

    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ZQQ.TO&outputsize=compact&apikey=NITDY4YEPF7745VF

    var av_baseURI = "https://www.alphavantage.co/query?";
    var av_function = "function=TIME_SERIES_DAILY";
    //var av_symbol = "symbol=CNR.TO";
    var ticker_value = document.getElementById("ticker_input").value;
    var av_symbol = "symbol="
    av_symbol = av_symbol.concat(ticker_value);

    var av_outputsize = "outputsize=compact";
    var av_apikey = "apikey=NITDY4YEPF7745VF";



    var request_url = av_baseURI.concat(av_function, "&", av_symbol, "&", av_outputsize, "&", av_apikey);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("demo").innerHTML = this.responseText;
          document.getElementById("stkHist_output").textContent = this.responseText;
       }
    };
    xhttp.open("GET", request_url, true);
    //xhttp.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=CNR.TO&outputsize=compact&apikey=NITDY4YEPF7745VF", true);
    xhttp.send();
 }

 function loadStockQupte() {

   //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ZQQ.TO&outputsize=compact&apikey=NITDY4YEPF7745VF

   var av_baseURI = "https://www.alphavantage.co/query?";
   var av_function = "function=GLOBAL_QUOTE";
   //var av_symbol = "symbol=CNR.TO";
   var ticker_value = document.getElementById("stkQuote_input").value;
   var av_symbol = "symbol="
   av_symbol = av_symbol.concat(ticker_value);

   var av_apikey = "apikey=NITDY4YEPF7745VF";



   var request_url = av_baseURI.concat(av_function, "&", av_symbol, "&", av_apikey);

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         //document.getElementById("demo").innerHTML = this.responseText;
         document.getElementById("stkquote_output").textContent = this.responseText;
      }
   };
   xhttp.open("GET", request_url, true);
   //xhttp.open("GET", "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=CNR.TO&apikey=NITDY4YEPF7745VF", true);

   xhttp.send();
}