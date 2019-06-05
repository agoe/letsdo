import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateLetsdoComponent } from './_template/template-letsdo/template-letsdo.component';
import { TemplateLetsdoFormComponent } from './_template/template-letsdo-form/template-letsdo-form.component';
import { TemplateLetsdoHeaderComponent } from './_template/template-letsdo-header/template-letsdo-header.component';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateLetsdoComponent,
    TemplateLetsdoFormComponent,
    TemplateLetsdoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
