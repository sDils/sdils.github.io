var avdata =
         [
            {
               "1. open": "87.3400",
               "2. high": "87.5000",
               "3. low": "86.7600",
               "4. close": "86.7700",
               "5. volume": "43590"
            },
            {
               "1. open": "86.5700",
               "2. high": "87.3800",
               "3. low": "86.3400",
               "4. close": "87.3500",
               "5. volume": "60300"
            },
            {
               "1. open": "86.8600",
               "2. high": "87.6100",
               "3. low": "86.7000",
               "4. close": "86.7000",
               "5. volume": "77400"
            },
            {
               "1. open": "87.6600",
               "2. high": "87.7500",
               "3. low": "87.2000",
               "4. close": "87.2900",
               "5. volume": "32300"
            },
            {
               "1. open": "86.9000",
               "2. high": "87.6200",
               "3. low": "86.7100",
               "4. close": "87.4300",
               "5. volume": "58500"
            },
            {
               "1. open": "86.6700",
               "2. high": "87.1500",
               "3. low": "86.1900",
               "4. close": "87.0500",
               "5. volume": "33300"
            },
            {
               "1. open": "86.9100",
               "2. high": "87.2000",
               "3. low": "85.9000",
               "4. close": "86.2200",
               "5. volume": "88600"
            }
         ]

      $(function () {
         $('#avtable').bootstrapTable({
            data: avdata
         });
      });