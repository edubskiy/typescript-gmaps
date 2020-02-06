// Instructions to every other class
// on how they can an argument to 'addMarker'
export interface Mappapble {
  location: {
    lat: number;
    lng: number
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mountElement: HTMLElement) {
    this.googleMap = new google.maps.Map(mountElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }

  addMarker(mappable: Mappapble) : void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
