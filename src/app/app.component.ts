import { Component } from '@angular/core';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rms';

  constructor(private dow:EmpInfoComponent)
  {

  }

  public downloadResume()
  {
    this.dow.downloadPDF();
  }
}
