import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireForComponent } from './dire-for.component';

describe('DireForComponent', () => {
  let component: DireForComponent;
  let fixture: ComponentFixture<DireForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
