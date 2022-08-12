import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { NewsCardMiniComponent } from './components/news-card-mini/news-card-mini.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PageNewsInfoComponent } from './pages/page-news-info/page-news-info.component';
import { NewsCardFullComponent } from './components/news-card-full/news-card-full.component';

import { SafePipe } from './shared/pipes/safe.pipe';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormAddNewNewsComponent } from './components/form-add-new-news/form-add-new-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageMainComponent,
    NewsCardMiniComponent,
    NewsListComponent,
    PageNewsInfoComponent,
    NewsCardFullComponent,
    SafePipe,
    ButtonComponent,
    LoaderComponent,
    ModalComponent,
    FormAddNewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
