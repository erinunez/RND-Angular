import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbCardModule } from '@nebular/theme';


import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventsHandlingComponent } from './events-handling/events-handling.component';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    DataBindingComponent,
    EventsHandlingComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // Nebular
    NbThemeModule.forRoot(),
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
