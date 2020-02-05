import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User) : void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
}
