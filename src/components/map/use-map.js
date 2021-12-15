import { useState, useEffect } from 'react';
import leaflet from 'leaflet';

import { Location } from 'const';

function useMap(mapRef) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: Location.Latitude,
          lng: Location.Longitude,
        },
        zoom: Location.Zoom,
      });

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);
      setMap(instance);
    } else {
      map?.panTo(leaflet.latLng(Location.Latitude, Location.Longitude));
    }
  }, [mapRef, map]);

  return map;
}

export default useMap;
