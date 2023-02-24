import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formCreate: FormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      img: new FormControl(),
    }
  )

  constructor(public service: ServiceService) {


  }


  crate() {
   this.service.Create(this.formCreate.value);
  }
}
