import { Component } from '@angular/core';
import {Global} from "../global";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub
  faFacebook= faFacebook
  faGoogle = faGoogle
  faDiscord = faDiscord
  faInstagram = faInstagram

  constructor(public global: Global, public router: Router){
  }

  reset() {
    if (this.global.imageName != 'cliff'){
      this.global.changeImage('cliff')
      this.router.navigate(["/"]).then();
    }
  }
}
