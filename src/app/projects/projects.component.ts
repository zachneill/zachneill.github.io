import {Component} from '@angular/core';
import {Global} from "../global";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  project: string = 'bcvm';

  constructor( public global: Global) {
  }

  handleNext() {
    if (this.project === 'bcvm'){
      this.global.changeImage('sigbuild')
      this.project = 'sigbuild'
    } else if (this.project === 'sigbuild'){
      this.global.changeImage('autopilot')
      this.project = 'autopilot'
    } else if (this.project === 'autopilot'){
      this.global.changeImage('bcvm')
      this.project = 'bcvm'
    }
  }
}
