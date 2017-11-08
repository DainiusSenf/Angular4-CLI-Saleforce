import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FancyGridComponent } from './fancy-grid/fancy-grid.component';

import { SalesforceService } from './services/salesforce.service';
import { LoggerService } from './services/logger.service';
import { ClaimService} from './services/claim.service';
import { TestCompComponent } from './test-comp/test-comp.component';
import { SalesforceResolver } from './resolves/salesforce.resolver';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import { HighChartsComponent } from './high-charts/high-charts.component';

export function highchartsFactory() {
  // Initialize addons.
  highchartsMore(highcharts);
  brokenAxis(highcharts);
  highmaps(highcharts);

  return highcharts;
}

@NgModule({
  declarations: [
    AppComponent,
    FancyGridComponent,
    TestCompComponent,
    NavigationBarComponent,
    HighChartsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartModule
  ],
  providers: [
    SalesforceService,
    LoggerService,
    appRoutingProviders,
    ClaimService,
    SalesforceResolver,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(private sfdc: SalesforceService) {
        this.sfdc.controller = 'AngularAppController';
    }
 }
