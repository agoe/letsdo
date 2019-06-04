
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Letsdo } from '../../_interface/letsdo';
import { EventEnum, LetsdoEvent } from '../../_interface/letsdo-event';


@Component({
  selector: 'app-template-letsdo-form',
  templateUrl: './template-letsdo-form.component.html',
  styleUrls: ['./template-letsdo-form.component.sass']
})
export class TemplateLetsdoFormComponent implements OnInit {

  letsdo$: Letsdo;
  @Output() $letsdoEmitter: EventEmitter<LetsdoEvent> =new EventEmitter<LetsdoEvent>();

  constructor() {
    this.letsdo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
   }

   public createLetsdo(event :any) :void{
      console.log("create "+this.letsdo$.label);
      const copyLetsdo= {... this.letsdo$}; // simple es6 clone

      const letsdoEvent : LetsdoEvent={
        label: EventEnum.CREATE,
        object: copyLetsdo
      }
      this.$letsdoEmitter.emit(letsdoEvent);
   }
  ngOnInit() {
  }

}
