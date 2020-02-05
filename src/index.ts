import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const map = new Map(document.getElementById('map'));
map.addUserMarker(user);
map.addCompanyMarker(company);

