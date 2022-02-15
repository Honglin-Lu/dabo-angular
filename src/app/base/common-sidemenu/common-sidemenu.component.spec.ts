import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSidemenuComponent } from './common-sidemenu.component';

describe('CommonSidemenuComponent', () => {
  let component: CommonSidemenuComponent;
  let fixture: ComponentFixture<CommonSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
