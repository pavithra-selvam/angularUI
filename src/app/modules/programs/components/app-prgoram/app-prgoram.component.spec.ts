import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrgoramComponent } from './app-prgoram.component';

describe('AppPrgoramComponent', () => {
  let component: AppPrgoramComponent;
  let fixture: ComponentFixture<AppPrgoramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPrgoramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPrgoramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
