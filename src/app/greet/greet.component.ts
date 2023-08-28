import {Component, OnInit} from '@angular/core';
import {Global} from "../global";
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {flipInX, flipOutX} from "ng-animate";

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.sass'],
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
      transition('close => open', animate('500ms ease-in')),
      transition('open => close', animate('500ms ease-out'))
    ]),

    trigger('flip', [
      transition('out => in', [useAnimation(flipInX)]),
      transition('in => out', useAnimation(flipOutX))
    ])
  ]

})
export class GreetComponent implements OnInit {
  hidden = false
  initialAnimation: number = 2
  backBtn: boolean = true
  titles = ['a software engineer', 'a project administrator', 'a web developer']
  title: string = this.titles[0]
  titleIdx = 0
  firstCall = true
  flip = 'in'

  constructor( public global: Global) {
  }

  ngOnInit() {
    setTimeout(()=>this.switch(), 2000)
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
  switch () {
    if (this.flip === 'in'){
      this.flip = 'out'
    } else {
      this.flip = 'in'
    }
  }
  toggleVisibility(state: string) {
    if (state == 'start') {
      if (this.flip === 'in'){
      }
    } else {
      if (this.flip === 'out') {
        this.changeTitle()
        this.switch()
      } else {
        if (!this.firstCall){
          setTimeout(()=>this.switch(), 2000)
        }
        else {
          this.firstCall = false
        }
      }
    }
  }
  changeTitle() {
    this.title = this.titles[(this.titleIdx + 1) % this.titles.length]
    this.titleIdx ++
  }
  protected readonly flipOutX = flipOutX;
  protected readonly flipInX = flipInX;
}
