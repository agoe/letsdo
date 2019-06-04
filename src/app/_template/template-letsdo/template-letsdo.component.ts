import { LetsdoEvent, EventEnum } from "../../_interface/letsdo-event";
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Letsdo } from '../../_interface/letsdo';




@Component({
  selector: 'app-template-letsdo',
  templateUrl: './template-letsdo.component.html',
  styleUrls: ['./template-letsdo.component.sass']
})
export class TemplateLetsdoComponent implements OnInit {

  
  @Input() letsdo$: Letsdo;
  @Output() $letsdoEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
   
   }

   public checked(event :any) :void{
      this.letsdo$.status = !this.letsdo$.status;
      const letsdoEvent : LetsdoEvent={
        label: EventEnum.CHECK,
        object: this.letsdo$
      }
      this.$letsdoEmitter.emit(letsdoEvent);

   }
   public changeLetsdo(event :any) :void{
    console.log(this.letsdo$.label);
    const letsdoEvent : LetsdoEvent={
      label: EventEnum.UPDATE,
      object: this.letsdo$
    }
    this.$letsdoEmitter.emit(letsdoEvent);
   }
public deleteLetsdo(event :any) :void{
    console.log("delete "+this.letsdo$.label);
    const letsdoEvent : LetsdoEvent={
      label: EventEnum.DELETE,
      object: this.letsdo$
    }
    this.$letsdoEmitter.emit(letsdoEvent);
}

  ngOnInit() {
  }

}
