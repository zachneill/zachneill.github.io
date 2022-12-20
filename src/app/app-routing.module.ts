import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent} from "./work/work.component";
import { AboutComponent} from "./about/about.component";
import { ProjectsComponent} from "./projects/projects.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, title: "zach neill's portfolio"},
  { path: 'work', component: WorkComponent, title: "work - zach neill's portfolio"},
  { path: 'about', component: AboutComponent, title: "about - zach neill's portfolio"},
  { path: 'projects', component: ProjectsComponent, title: "projects - zach neill's portfolio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
