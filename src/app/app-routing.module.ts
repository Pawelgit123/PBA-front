import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetjumpComponent} from './components/getjump/getjump.component';
import {OurjumpsComponent} from './components/ourjumps/ourjumps.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {RequirementsComponent} from './components/requirements/requirements.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'getjump', component: GetjumpComponent},
  {path: 'ourjumps', component: OurjumpsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'req', component: RequirementsComponent},
  {path: '', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
