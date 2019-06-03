import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateLetsdoComponent } from './_template/template-letsdo/template-letsdo.component';
import { TemplateLetsdoFormComponent } from './_template/template-letsdo-form/template-letsdo-form.component';
import { TemplateLetsdoHeaderComponent } from './_template/template-letsdo-header/template-letsdo-header.component';
import { from } from 'rxjs';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
