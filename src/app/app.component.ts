import { Component } from '@angular/core';
import { RegisterComponent } from './components/register.component';


@Component({
  selector: 'app-root',
    template: `<div class="route-outlet">
      <router-outlet></router-outlet>
    </div>
    `,
})
export class AppComponent {
  title = 'Blood Doner App';
}
