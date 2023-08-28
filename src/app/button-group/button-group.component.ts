import { Component } from '@angular/core';
import {Global} from "../global";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.sass'],
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
      transition('close => open', [animate('500ms ease-in')]),
      transition('open => close', [animate('500ms ease-out')])
    ])]
})
export class ButtonGroupComponent {
  hidden: boolean = false;
  initialAnimation: number = 2
  backBtn: boolean = true;
  flip: any
  constructor(public global: Global) {
  }

  onAnimation(type: string): void {
    if (this.initialAnimation != 0){
      this.initialAnimation--
    } else {
      if (this.global.newImage === 'cliff'){
        if (type === 'done'){
          this.backBtn = false
        }
        this.hidden = false
      } else {
        this.hidden = type !== 'start'
        this.backBtn = true
      }
    }
  }
}
