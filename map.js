function initMap() {
  var myLatLng = { lat: 14.62549, lng: 121.00593 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
    // disableDefaultUI: true,
    zoomControl: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Autospecs Motor Sales",
    animation: google.maps.Animation.BOUNCE
  });

  var addr =
    "<h3>Autospecs Motor Sales</h3>" +
    "<p>37H Banawe Street, Quezon City, Philippines</p>";

  var info = new google.maps.InfoWindow({
    content: addr
  });

  google.maps.event.addListener(marker, "click", function() {
    info.open(map, marker);
  });
}
