import {Component} from '@angular/core';
import {Global} from "../global";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state(
        'open',
        style({
          opacity: 0
        })
      ),
      state(
        'close',
        style({
          opacity: 1
        })
      ),
      transition('open => close', [animate('500ms ease-out')]),
      transition('close => open', [animate('500ms ease-in')])
    ])]
})
export class ImageComponent {
  initialAnimation: number = 4

  constructor(public global: Global) {
  }

  handleOpen() {
    if (this.initialAnimation !==0){
      this.initialAnimation--
      return 'close';
    } else {
      return 'open'
    }
  }
}
