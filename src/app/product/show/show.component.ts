import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public serviceProduc :ServiceService) {

  }


}
