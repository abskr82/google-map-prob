   // This example creates a simple polygon representing the Bermuda Triangle.

      function initMap() {
        function loadXMLDoc() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "https://dl.dropboxusercontent.com/s/8nvqnasci6l76nz/Problem.gpx?dl=0", false);
            xmlhttp.send();
            var data = xmlhttp.responseText;
            // console.log(xmlhttp.responseText.length);
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(data,"text/xml");
            // var lat = xmlDoc.getElementsByTagName("trkpt")[0].attributes[0].value; 
            var dataVar = xmlDoc.getElementsByTagName("trkpt")
            var objArr = [];
            for (var i = 0; i < dataVar.length; i++){
                var lat = dataVar[i].attributes[0].value;
                var lng = dataVar[i].attributes[1].value;
                objArr.push({lat: Number(lat), lng: Number(lng)});
            }

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 13.1935950, lng: 77.6491150},
          mapTypeId: 'terrain'
        });

        // Define the LatLng coordinates for the polygon's path.
        var triangleCoords = objArr;

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
        }
        // ["0"].attributes
        loadXMLDoc();
      }