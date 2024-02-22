import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-confirmation';
  toAnimate = false;

  onOrderComplete(): void {
    this.toAnimate = true;
      setTimeout(() => {
        this.toAnimate = false
      }, 10000);
  }
}
