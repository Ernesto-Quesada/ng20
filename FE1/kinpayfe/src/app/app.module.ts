import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';





import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgencyComponent } from './agency/agency.component';
import {AgencyService} from './services/agency.service';

const routes: Routes = [
  { path: 'agency',  component: AgencyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
    AgencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
