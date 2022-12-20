import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Global} from "../global";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass'],
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
export class WorkComponent {
  constructor(public global:Global) {
  }
}
