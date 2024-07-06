import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';


import { FlexLayoutModule } from '@angular/flex-layout';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      // Configuración global para ng-circle-progress
      backgroundColor: "#e0f7fa",
      radius: 100,
      maxPercent: 100,
      units: "",
      unitsColor: "#8d6e63",
      outerStrokeWidth: 16,
      outerStrokeColor: "#8d6e63",
      innerStrokeWidth: 8,
      innerStrokeColor: "#e0f7fa",
      title: "Time",
      titleColor: "#8d6e63",
      subtitle: "left",
      subtitleColor: "#8d6e63",
      showUnits: true,
      showSubtitle: true,
      showTitle: true,
      animateTitle: false,
      animationDuration: 300,
      showBackground: true,
      clockwise: false,
      startFromZero: false
    })

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
