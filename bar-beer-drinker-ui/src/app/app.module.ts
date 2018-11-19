import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import  { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerslistComponent } from './beerslist/beerslist.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { DropdownModule } from 'primeng/primeng';
import { ManfListComponent } from './manf-list/manf-list.component';
import { ManfDetailsComponent } from './manf-details/manf-details.component';
import { BarAnalyticsComponent } from './bar-analytics/bar-analytics.component';
import { BartenderComponent } from './bartender/bartender.component';
import { BartenderAnalyticsComponent } from './bartender-analytics/bartender-analytics.component';
import { ModificationComponent } from './modification/modification.component';
import { SqlqueryComponent } from './sqlquery/sqlquery.component'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DrinkerslistComponent } from './drinkerslist/drinkerslist.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerslistComponent,
    BeerDetailsComponent,
    ManfListComponent,
    ManfDetailsComponent,
    BarAnalyticsComponent,
    BartenderComponent,
    BartenderAnalyticsComponent,
    ModificationComponent,
    SqlqueryComponent,
    DrinkerslistComponent,
    DrinkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
