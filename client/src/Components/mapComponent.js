import React, { Component } from 'react'; 

const mapStyle = { 
  height: '250px', 
  width: '250px'
}

/* 
https://maps.googleapis.com/maps/api/geocode/json?address=316+Housefinch+Lp,+Leander,+TX&key=AIzaSyDj4FMBTLlVLzPDANxyAv7n9jTTc58vqNk
119 Nueces St, Austin, TX, 78701
*/

const location = {
  "lat": 30.273380,
  "lng": -97.747040
}

class MapComp extends Component { 

  componentDidMount() { 
    this.renderMap()
  }

  renderMap = () => { 
    scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  initMap = () => { 
    // const directionsService = new window.google.maps.DirectionsService; 
    const directionsDisplay = new window.google.maps.DirectionsRenderer; 
    const map = new window.google.maps.Map(document.getElementById('map'), { 
      center: location, 
      zoom: 10, 
    }); 

    var marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Need a lift?!'
    });

    directionsDisplay.setMap(map)
  }

  render() { 
    return ( 
      <main>
        <div style={mapStyle} id="map"></div>
      </main> 
    )
  }
} 

function scriptLoader(url) { 
  const index = window.document.getElementsByTagName("script")[0] 
  const script = window.document.createElement("script")
  script.src = url 
  script.async = true 
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default MapComp; 