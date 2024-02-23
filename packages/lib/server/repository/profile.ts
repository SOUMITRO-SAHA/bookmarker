import { v4 as uuidv4 } from "uuid";

export class ProfileRepository {
  static generateProfileUid() {
    return uuidv4();
  }
}
