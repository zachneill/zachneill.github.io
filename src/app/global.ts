import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class Global {
  public imageName: string = 'cliff'
  public newImage: string = 'cliff'
  public fadeIn: boolean = false

  constructor(private router: Router) {
    this.router.navigate(['/'])
  }
  public route(route: string) {
    return '/' + route
  }

  public changeImage(image: string): void {
    this.fadeIn = true
    this.newImage = image
  }

  public handleFade() {
    if (this.fadeIn) {
      this.fadeIn = false
      this.imageName = this.newImage
    }
  }
}
