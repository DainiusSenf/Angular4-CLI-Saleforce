import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FancyGridComponent } from './fancy-grid/fancy-grid.component';
import { FancyGridRootComponent } from './fancy-grid-root/fancy-grid-root.component';

import { SalesforceService } from './services/salesforce.service';
import { LoggerService } from './services/logger.service';
import { TestCompComponent } from './test-comp/test-comp.component';
import { SalesforceResolver } from './resolves/salesforce.resolver';

@NgModule({
  declarations: [
    AppComponent,
    FancyGridComponent,
    FancyGridRootComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    SalesforceService,
    LoggerService,
    appRoutingProviders,
    SalesforceResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(private sfdc: SalesforceService) {
        this.sfdc.controller = 'AngularAppController';
    }
 }
