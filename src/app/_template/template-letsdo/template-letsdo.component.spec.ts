import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLetsdoComponent } from './template-letsdo.component';

describe('TemplateLetsdoComponent', () => {
  let component: TemplateLetsdoComponent;
  let fixture: ComponentFixture<TemplateLetsdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLetsdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLetsdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
