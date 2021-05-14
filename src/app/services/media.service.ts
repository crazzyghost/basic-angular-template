import { ChangeDetectorRef, Injectable } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Subject } from "rxjs";

export interface MediaQuery {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

@Injectable({ providedIn: "root" })
export class MediaService {
  _subject = new Subject<MediaQuery>();
  _screens: any = {
    mobile: "screen and (min-width: 768px)",
    tablet: "screen and (min-width: 1012px)",
    desktop: "screen and (min-width: 1280px)",
  };

  get subject(): Subject<MediaQuery> {
    return this._subject;
  }

  get screens(): any {
    return this._screens;
  }

  setQuery(query: MediaQuery): void {
    this._subject.next(query);
  }
}
