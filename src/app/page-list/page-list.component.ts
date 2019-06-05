import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Letsdo } from '../_interface/letsdo';
import { LetsdoEvent, EventEnum } from '../_interface/letsdo-event';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit, OnDestroy {
  

  public letsdoShow = true;
  public letsdoDoneShow = false;
  public $letsdos :Letsdo[];
  public $letsdosDone :Letsdo[] = new Array();
  public subscriptions = new Subscription();

  readonly  LESTSDOGROUP = "letsdogroup"; // for DnD

  constructor(
    public _dragulaService: DragulaService) 

    {
      this._dragulaService.createGroup(this.LESTSDOGROUP,{removeOnSpill: false});

      this.subscriptions.add(_dragulaService.drop(this.LESTSDOGROUP)
        .subscribe(( {el} ) => { console.log(el);
                                 this.recalcPosition(); 
            })
        );
  
      this.$letsdos = [
      {id: 1,
      label: "testalbe1l",
      status: false,
      position: 0},
      {id: 2,
        label: "testalbel2",
        status: false,
        position: 1}
    ]
   }
   public recalcPosition() :void {
      let pos = 0;
      this.$letsdos.forEach((letsdo: Letsdo) => {
        pos++;
        letsdo.position = pos;
      })
   }


  public update(event: LetsdoEvent): void{
    console.log("update: "+event);

    if (EventEnum.CHECK === event.label){
      console.log("%c"+event.label+"Event fired.","color: yellow");
      if(!event.object.status){
        this.$letsdosDone.splice(this.$letsdosDone.indexOf(event.object),1);
        this.$letsdos.push(event.object);
      }else {
        this.$letsdos.splice(this.$letsdos.indexOf(event.object),1);
        this.$letsdosDone.push(event.object);
      }

    }else if (EventEnum.DELETE === event.label){
      console.log("%c"+event.label+"Event fired.","color: red");
      if(event.object.status){
        this.$letsdosDone.splice(this.$letsdosDone.indexOf(event.object),1);
      }else {
        this.$letsdos.splice(this.$letsdos.indexOf(event.object),1);
      }

    }else if (EventEnum.CREATE === event.label){
      event.object.position = this.$letsdos.length + 1;
      this.$letsdos.push(event.object);
      this.recalcPosition();

    }else if (EventEnum.UPDATE === event.label){
      console.log("%c"+event.label+"Event fired.","color: green");
  
      if(event.object.status){
        this.$letsdosDone.forEach((letsdo: Letsdo)=>{
          if(letsdo.id === event.object.id){
            letsdo.label=event.object.label;
          }
        })
      }else {
        this.$letsdos.forEach((letsdo: Letsdo)=>{
          if(letsdo.id === event.object.id){
            letsdo.label=event.object.label;
          }
        }); 
      }
    } //End UPDATE
    
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
  }

}
