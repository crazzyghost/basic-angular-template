import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { MediaService } from "./media.service";

export const serviceProviders = [
  { provide: UserService, useClass: UserService },
  { provide: AuthService, useClass: AuthService },
  { provide: MediaService, useClass: MediaService },
];
