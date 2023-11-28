import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbCardModule } from '@nebular/theme';
import { PostService } from './Services/post.service';

import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventsHandlingComponent } from './events-handling/events-handling.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    DataBindingComponent,
    EventsHandlingComponent,
    DirectivesComponent,
    PipesComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // Nebular
    NbThemeModule.forRoot(),
    NbCardModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
