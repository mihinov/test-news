import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageNewsInfoComponent } from './pages/page-news-info/page-news-info.component';

const routes: Routes = [
  { path: '', component: PageMainComponent },
  { path: 'news/:urlNews', component: PageNewsInfoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
