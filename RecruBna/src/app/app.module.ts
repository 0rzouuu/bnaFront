import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnderheaderComponent } from './underheader/underheader.component';
import { PosteComponent } from './poste/poste.component';
import { FooterComponent } from './footer/footer.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';

// Define your routes if not already done in AppRoutingModule
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poste', component: PosteComponent },
  { path: 'postuler', component: PostulerComponent },
  { path: 'final', component: FinalComponent },
  // Add other routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnderheaderComponent,
    PosteComponent,
    FooterComponent,
    PostulerComponent,
    HomeComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,  // Add HttpClientModule here
    AppRoutingModule,  // Ensure your routing module is correctly set up
    RouterModule.forRoot(routes)  // Optional: Include routing configuration here if not in AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
