import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/Product";
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  produc1!: Product;
  Fromedit!:FormGroup;
  id!:any;


  constructor(private route: ActivatedRoute,public service: ServiceService) {
  }


  edit(){

    this.service.produc.splice(this.id,1,);

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    if (this.id!=null){
      this.produc1 = this.service.findbyid(this.id);
      this.Fromedit = new FormGroup({
          id:new FormControl(this.produc1.id),
          name:new FormControl(this.produc1.name),
          img:new FormControl(this.produc1.img),

        }
      )
    }
  }

}
