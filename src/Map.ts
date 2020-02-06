// Instructions to every other class
// on how they can an argument to 'addMarker'
interface Mappapble {
  location: {
    lat: number;
    lng: number
  }
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
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }

  // addCompanyMarker(company: Company) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // }
}
