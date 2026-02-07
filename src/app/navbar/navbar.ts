import { Component } from '@angular/core';
import {faLinkedin, faGithub, faFacebook, faGoogle, faDiscord, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Router} from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faFacebook = faFacebook
  protected readonly faGoogle = faGoogle;
  protected readonly faDiscord = faDiscord;
  protected readonly faInstagram = faInstagram;
  constructor(private router: Router) {}

  reset() {
    this.router.navigate(['/']).then();
  }
}
