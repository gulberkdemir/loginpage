import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import {MessageService} from "primeng/api";
import {RippleModule} from "primeng/ripple";
import { WelcomeComponent } from './welcome/welcome.component';
import {TabMenuModule} from "primeng/tabmenu";



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WelcomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        PasswordModule,
        DividerModule,
        BrowserAnimationsModule,
        ToastModule,
        MessagesModule,
        RippleModule,
        TabMenuModule
    ],
  providers: [ MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
