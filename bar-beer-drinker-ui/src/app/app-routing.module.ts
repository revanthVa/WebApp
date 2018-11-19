import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerslistComponent } from './beerslist/beerslist.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component'
import { ManfListComponent } from './manf-list/manf-list.component'
import { ManfDetailsComponent } from './manf-details/manf-details.component'
import { BarAnalyticsComponent } from './bar-analytics/bar-analytics.component'
import { BartenderComponent } from './bartender/bartender.component';
import { BartenderAnalyticsComponent } from './bartender-analytics/bartender-analytics.component';
import { SqlqueryComponent } from './sqlquery/sqlquery.component';
import { ModificationComponent } from './modification/modification.component';
import { DrinkerslistComponent } from './drinkerslist/drinkerslist.component'
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
const routes: Routes = [
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeerslistComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'manfs',
    pathMatch: 'full',
    component: ManfListComponent
  },
  {
    path: 'manfs/:manf',
    pathMatch: 'full',
    component: ManfDetailsComponent
  },
  {
    path: 'barsAnalytics',
    pathMatch: 'full',
    component: BarAnalyticsComponent
  },
  {
    path:'bartenders',
    pathMatch: 'full',
    component: BartenderComponent
  },
  {
    path:'bartendersAnalytics',
    pathMatch: 'full',
    component: BartenderAnalyticsComponent
  },
  {
    path:'sqlquery',
    pathMatch: 'full',
    component: SqlqueryComponent
  },
  {
    path:'modification',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkerslistComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
