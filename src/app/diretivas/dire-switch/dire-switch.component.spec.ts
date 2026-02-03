import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireSwitchComponent } from './dire-switch.component';

describe('DireSwitchComponent', () => {
  let component: DireSwitchComponent;
  let fixture: ComponentFixture<DireSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
