import { Component, OnInit } from '@angular/core';
import { Letsdo } from '../../_interface/letsdo';


@Component({
  selector: 'app-template-letsdo-form',
  templateUrl: './template-letsdo-form.component.html',
  styleUrls: ['./template-letsdo-form.component.sass']
})
export class TemplateLetsdoFormComponent implements OnInit {

  public letsdo: Letsdo;
  constructor() {
    this.letsdo = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
   }

   public createLetsdo(event :any) :void{
      console.log("create "+this.letsdo.label)
   }
  ngOnInit() {
  }

}
