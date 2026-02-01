import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireIfComponent } from './dire-if.component';

describe('DireIfComponent', () => {
  let component: DireIfComponent;
  let fixture: ComponentFixture<DireIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
