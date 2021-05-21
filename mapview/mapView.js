const getValueInput = () => {
  let inputValue = document.getElementById('domTextElement').value
  // document.getElementById('valueInput').innerHTML = inputValue
  var mapVal = inputValue
  console.log(mapVal)
  initMap()
  function initMap() {
    if (mapVal === '용인시 동물보호센터') {
      var options = {
        zoom: 13,
        center: { lat: 37.2433246, lng: 127.1569772 },
      }

      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.2433246, lng: 127.1569772 },
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<h1>용인시 동물보호센터</h1>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    } else {
      document.getElementById('valueInput').innerHTML =
        inputValue + '를 찾을 수 없습니다.'
    }
  }
}
