import { Component, OnInit } from '@angular/core';
import { Letsdo } from '../../_interface/letsdo';

@Component({
  selector: 'app-template-letsdo',
  templateUrl: './template-letsdo.component.html',
  styleUrls: ['./template-letsdo.component.sass']
})
export class TemplateLetsdoComponent implements OnInit {

  public letsdo: Letsdo;
  constructor() {
    this.letsdo = {
      id: 1,
      label:"Hallo",
      status: false,
      position: 1
    }
   }

   public checked(event :any) :void{
      this.letsdo.status = !this.letsdo.status;
   }
   public changeLetsdo(event :any) :void{
    console.log(this.letsdo.label);
   }
public deleteLetsdo(event :any) :void{
    console.log("delete "+this.letsdo.label);
}

  ngOnInit() {
  }

}
