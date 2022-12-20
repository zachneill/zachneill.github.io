import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class Global {
  public initialAnimation: number = 1
  public imageName: string = 'cliff'
  public newImage: string = 'cliff'
  public fade: boolean = false
  public fadeType: string = 'none'

  public route(route: string) {
    this.fadeType = 'fading out'
    this.fade = true
    return '/' + route
  }

  public changeImage(image: string): void {
    this.newImage = image
  }

  public handleFade() {
    if (this.initialAnimation != 0) {
      this.initialAnimation--
    } else {
      if (this.fadeType === 'fading out') {
        this.imageName = this.newImage
        this.fade = false
        this.fadeType = 'fading in'
      } else {
        this.fadeType = 'none'
      }
    }
  }
}
