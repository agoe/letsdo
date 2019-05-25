import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLetsdoHeaderComponent } from './template-letsdo-header.component';

describe('TemplateLetsdoHeaderComponent', () => {
  let component: TemplateLetsdoHeaderComponent;
  let fixture: ComponentFixture<TemplateLetsdoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLetsdoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLetsdoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
