import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import {MatMenuModule} from '@angular/material/menu';

import {MatDialogModule} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
