import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { PopconfirmComponent } from './popconfirm/popconfirm.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PopconfirmComponent, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
