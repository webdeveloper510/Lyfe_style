import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendServiceService } from './backend-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public artists:any= []
  title = 'lyfestyle';
  constructor(private list: BackendServiceService) { }
  jobForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
    this.artists = this.list.AccountServiceV1login();
    console.log(this.artists)
  }

  save() {
    console.log(this.jobForm.value)
  }

}
