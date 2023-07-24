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
      transition('open => close', [animate('200ms ease-out')]),
      transition('close => open', [animate('200ms ease-in')])
    ])]
})
export class ImageComponent {

  constructor(public global: Global) {
  }

}
