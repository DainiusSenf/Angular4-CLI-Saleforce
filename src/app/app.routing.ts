import { Routes, RouterModule } from '@angular/router';

import { SalesforceResolver } from './resolves/salesforce.resolver';
import  { FancyGridRootComponent } from './fancy-grid-root/fancy-grid-root.component';
import  { TestCompComponent } from './test-comp/test-comp.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: FancyGridRootComponent,
      resolve: {
          sfdc: SalesforceResolver
      }
  },
  {
      path: 'test',
      component: TestCompComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
