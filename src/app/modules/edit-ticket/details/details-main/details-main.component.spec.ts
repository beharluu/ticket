import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMainComponent } from './details-main.component';

describe('DetailsMainComponent', () => {
  let component: DetailsMainComponent;
  let fixture: ComponentFixture<DetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
