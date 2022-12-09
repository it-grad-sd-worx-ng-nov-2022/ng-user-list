import { Login } from "./login"
import { Name } from "./name"
import { Registered } from "./registered"
import { Dob } from "./date-of-birth"
import { Id } from "./id"
import { Picture } from "./picture"
import { Location} from "./location"

export interface User {

  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;

}
