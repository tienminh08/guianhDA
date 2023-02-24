import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {CreateComponent} from "../product/create/create.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  produc: Product[] = [new Product(1, "Tien", "https://biztime.com.vn/upload/photos/2019/05/xtNWdVWaVDGDPuH7IN1n_31_c8c20cf5237587dd4a00ad1a72b494f8_image.jpg")]


  Create(produc: Product): void {
    this.produc.push(produc);
  }

  delete(id: number): void {
    for (let i = 0; i < this.produc.length; i++) {
      if (id == this.produc[i].id) {
        this.produc.splice(i);
        return;
      }
    }
  }

  findbyid(id: number): any {
    for (let i = 0; i < this.produc.length; i++) {
      if (id == this.produc[i].id) {
        return this.produc[i];
      }
    }


  }


}
