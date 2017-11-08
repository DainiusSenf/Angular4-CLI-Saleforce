import { Routes, RouterModule } from '@angular/router';

import { SalesforceResolver } from './resolves/salesforce.resolver';
import { FancyGridComponent} from './fancy-grid/fancy-grid.component';
import  { TestCompComponent } from './test-comp/test-comp.component';
import  { HighChartsComponent } from './high-charts/high-charts.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'fancyGrid',
      pathMatch: 'full'
  },
  {
      path: 'fancyGrid',
      component: FancyGridComponent,
      resolve: {
          sfdc: SalesforceResolver
      }
  },
  {
      path: 'test',
      component: TestCompComponent,
      resolve: {
          sfdc: SalesforceResolver
      }
  },
  {
    path: 'highCharts',
    component: HighChartsComponent,
    resolve: {
      sfdc: SalesforceResolver
    }
  }
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
