import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts';
import { DataService } from './services/data.service';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { MedicalAidComponent } from './components/medical-aid/medical-aid.component';
import { AgmCoreModule } from '@agm/core';
import { WorldInfoComponent } from './components/world-info/world-info.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NoRightClickDirective } from './directives/no-right-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SymptomsComponent,
    MedicalAidComponent,
    WorldInfoComponent,
    NoRightClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ChartsModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      //AIzaSyDHnIrJsd22La-vDm2SQdHv_pWHJwdzAAo
      apiKey: 'AIzaSyCDhjF3LNn2qqYUivCkiyYD8lQMAzihz7I'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
