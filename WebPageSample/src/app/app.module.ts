import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatLabel, MatInputModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatListModule, MatSidenavModule, MatChipsModule, MatDialogModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule} from '@angular/material';
import 'hammerjs';
import { ArticlesComponent } from './components/articles/articles.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewSuggestionsComponent } from './components/view-suggestions/view-suggestions.component';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionService } from './services/suggestions.service';
import { StorageServiceModule } from   'ngx-webstorage-service';
import { StorageService } from 'ngx-webstorage-service';
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SuggestionsComponent,
    SubscribeComponent,
    AboutComponent,
    ViewSuggestionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    StorageServiceModule 
  ],
  providers: [SuggestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
