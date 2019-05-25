import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateLetsdoComponent } from './_template/template-letsdo/template-letsdo.component';
import { TemplateLetsdoFormComponent } from './_template/template-letsdo-form/template-letsdo-form.component';
import { TemplateLetsdoHeaderComponent } from './_template/template-letsdo-header/template-letsdo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateLetsdoComponent,
    TemplateLetsdoFormComponent,
    TemplateLetsdoHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
