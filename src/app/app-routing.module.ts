import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UpdateFileComponent } from './update-file/update-file.component';
import { WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  
  // { path: 'welcome', component: WelcomeComponent }  
  // { path: '/' } ,
  // { path: 'update-file', component: UpdateFileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
