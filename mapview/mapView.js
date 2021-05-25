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
        content: '<a href = "../infoview/gyeonggi_yongin/infoView_yongin.html"><h1>용인시 동물보호센터</h1></a>'+'<br>'
        +'<span>  경기도 용인시 처인구 중부대로 1074-1</span>',
       
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    } 
    else if(mapVal == '한국동물구조관리협회'){

      var options = {
        zoom : 13,
        center :
        { lat : 37.88834241791307, lng : 126.96784410558472}
      }

      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.88834241791307, lng: 126.96784410558472 },
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/seoul_songpa/infoView_songpa.html"><h1>한국동물구조관리협회</h1></a>'+'<br>'
        +'<span> 경기도 양주시 남면 상수리 410-1</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    } 
    

    else if(mapVal == '서초동물사랑센터'){

      var options = {
        zoom : 13,
        center : { lat : 37.47649385428486, lng : 127.03812409711139}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.47649385428486, lng: 127.03812409711139},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/seoul_seocho/infoView_seocho.html"><h1>서초동물사랑센터</h1></a>'+'<br>'
        +'<span> 서울 서초구 양재천로 19길 22</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }

    else if(mapVal == '펫토피아 동물병원'){
      var options = {
        zoom : 13,
        center : { lat : 37.366963218030065, lng : 127.1272355952546}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.366963218030065, lng: 127.1272355952546 },
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gyeonggi_seongnam/infoView_seongnam.html"><h1>펫토피아 동물병원</h1></a>'+'<br>'
        +'<span> 경기도 성남시 분당구 불정로 266</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }

    else if(mapVal == '하남 동물병원'){

      var options = {
        zoom : 13,
        center : { lat : 37.53729551504241, lng : 127.20411285478585}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.53729551504241, lng: 127.20411285478585},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gyeonggi_hanam/infoView_hanam.html"><h1>하남 동물병원</h1></a>'+'<br>'
        +'<span> 경기도 하남시 신평로 37</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }

    else if(mapVal == '평택시 유기동물 보호소'){
      var options = {
        zoom : 13,
        center : {lat : 37.13105298946498, lng : 127.05554022593407}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.13105298946498, lng: 127.05554022593407},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gyeonggi_pyeongtaek/infoView_pyeongtaek.html"><h1>평택시 유기동물 보호소</h1></a>'+'<br>'
        +'<span> 경기도 평택시 진위면 야막길 108-86</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }
    else if(mapVal == '충주시 동물보호센터'){

      var options= {
        zoom : 13,
        center : { lat : 37.00918653473625, lng : 127.84966263942123}
      }

      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.00918653473625, lng: 127.84966263942123},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/chungbuk_chungju/infoView_chungju.html"><h1>충주시 동물보호센터</h1></a>'+'<br>'
        +'<span> 충청북도 충주시 중앙탑면 일곱실길 70</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }
    else if(mapVal == '서산시 동물보호센터'){
      var options = {
        zoom : 13,
        center : {lat : 36.7233843, lng : 126.4047941}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 36.7233843, lng: 126.4047941},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/chungnam_seosan/infoView_seosan.html"><h1>서산시 동물보호센터</h1></a>'+'<br>'
        +'<span> 충청남도 서산시 인지면 무학재 1길 99</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })

    }
    else if(mapVal == '평창군 유기동물보호소'){
      var options = {
        zoom : 13,
        center : {lat : 37.63698597918235,lng : 128.55310978362573}
      }

      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.63698597918235, lng: 128.55310978362573},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gangwon/infoView_gangwon.html"><h1>평창군 유기동물보호소</h1></a>'+'<br>'
        +'<span> 강원도 평창군 진부면 청송로 61</span>',
        
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }
    else if(mapVal == '정선 가축병원'){
      var options = {
        zoom : 13,
        center : {lat : 37.37946529222383,lng : 128.66071650979674}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.37946529222383, lng: 128.66071650979674},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gangwon/infoView_gangwon.html"><h1>정선 가축병원</h1></a>'+'<br>'
        +'<span> 강원도 정선군 정선읍 정선로 1321</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }

    else if(mapVal == '철원군 유기견보호소'){

      var options = {
        zoom : 13,
        center : {lat : 37.366963218030065, lng : 127.1272355952546}
      }

      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 37.366963218030065, lng:  127.1272355952546},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/gangwon/infoView_gangwon.html"><h1>철원군 유기견보호소</h1></a>'+'<br>'
        +'<span> 강원도 철원군 동송읍 장흥로 311</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }

    else if(mapVal == '군산 유기동물보호센터'){
      var options = {
        zoom : 13,
        center : {lat : 35.96072628370728, lng : 126.81579002588973}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 35.96072628370728, lng: 126.81579002588973},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/jeolbuk_gunsan/infoView_gunsan.html"><h1>군산 유기동물보호센터</h1></a>'+'<br>'
        +'<span> 전라북도 군산시 대야면 보덕안정길 108-20</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
    }
    else if(mapVal == '강진군 유기견 보호소'){
      var options = {
        zoom : 13,
        center : {lat : 34.62520282474301, lng : 126.77850134118502}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 34.62520282474301, lng:126.77850134118502},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/jeolnam_gangjin/infoView_gangjin.html"><h1>강진군 유기견 보호소</h1></a>'+'<br>'
        +'<span> 전라남도 강진군 강진읍 초지길 109-62</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
      
    }
    else if(mapVal == '대구 유기동물보호센터'){
      var options = {
        zoom : 13,
        center : {lat : 35.86398823369899,lng : 128.73593485472222}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var marker = new google.maps.Marker({
        position: { lat: 35.86398823369899, lng: 128.73593485472222},
        map: map,
      })

      var infoWindow = new google.maps.InfoWindow({
        content: '<a href = "../infoview/daegu_dalseo/infoView_daegu.html"><h1>대구 유기동물보호센터</h1></a>'+'<br>'
        +'<span> 대구광역시 동구 금강로 151-13</span>',
      })

      marker.addListener('click', function () {
        infoWindow.open(map, marker)
      })
      
    }
    
    else {
      document.getElementById('valueInput').innerHTML =
        inputValue + '를 찾을 수 없습니다.'
    }
  }
}