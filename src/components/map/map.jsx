import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from './use-map';
import pin from 'assets/img/icon-pin.svg';
import { ContactsMapDiv } from './map.styled';
import { Location } from 'const';

function Map() {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const currentCustomIcon = leaflet.icon({
    iconUrl: pin,
    iconSize: [47.58, 61.06],
    iconAnchor: [23.79, 61.06],
  });

  useEffect(() => {
    if (map === null) {
      return;
    }
    leaflet.marker({
      lat: Location.Latitude,
      lng: Location.Longitude,
    }, {
      icon: currentCustomIcon,
    }).addTo(map);
  }, [map, currentCustomIcon]);

  return (
    <ContactsMapDiv
      ref={mapRef}
    />
  );
};

export default Map;
