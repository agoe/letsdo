import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLetsdoFormComponent } from './template-letsdo-form.component';

describe('TemplateLetsdoFormComponent', () => {
  let component: TemplateLetsdoFormComponent;
  let fixture: ComponentFixture<TemplateLetsdoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLetsdoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLetsdoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
