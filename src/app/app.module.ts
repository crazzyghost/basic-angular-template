import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './components/shared/shared.module';
import {PageModule} from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http';
import {appStoreProviders} from './app.store';
import {serviceProviders} from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule,
    PageModule,
  ],
  providers: [
    serviceProviders,
    appStoreProviders,
    {provide: 'API_URL', useValue: ''},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
