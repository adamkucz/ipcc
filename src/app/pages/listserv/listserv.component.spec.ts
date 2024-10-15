import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListservComponent } from './listserv.component';

describe('ListservComponent', () => {
  let component: ListservComponent;
  let fixture: ComponentFixture<ListservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
