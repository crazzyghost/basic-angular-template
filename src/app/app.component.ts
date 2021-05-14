import { ChangeDetectorRef, Component, Inject, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { AppStore } from "./app.store";
import * as Redux from "redux";
import { AppState } from "./app.reducer";
import { mobileQueryChange } from "./actions";
import { MediaService } from "./services/media.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  title = "cofundie";

  private query: MediaQueryList;
  private readonly queryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    mediaService: MediaService
  ) {
    const { mobile, tablet, desktop } = mediaService.screens;
    this.query = media.matchMedia(mobile + " or " + tablet + "or" + desktop);
    this.queryListener = () => {
      changeDetectorRef.detectChanges();
      console.log("here");
      mediaService.setQuery({
        isMobile: media.matchMedia(mobile).matches,
        isTablet: media.matchMedia(tablet).matches,
        isDesktop: media.matchMedia(desktop).matches,
      });
    };
    this.query.addListener(this.queryListener);
  }

  // constructor(
  //   changeDetectorRef: ChangeDetectorRef,
  //   media: MediaMatcher,
  // ) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this.mobileQueryListener = () => {
  //     changeDetectorRef.detectChanges();
  //     store.dispatch(mobileQueryChange(this.mobileQuery.matches));
  //   };
  //   this.mobileQuery.addListener(this.mobileQueryListener);
  // }

  ngOnDestroy(): void {
    this.query.removeListener(this.queryListener);
  }
}
