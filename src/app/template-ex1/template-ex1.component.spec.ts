import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEx1Component } from './template-ex1.component';

describe('TemplateEx1Component', () => {
  let component: TemplateEx1Component;
  let fixture: ComponentFixture<TemplateEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEx1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
