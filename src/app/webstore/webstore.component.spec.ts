import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstoreComponent } from './webstore.component';

describe('WebstoreComponent', () => {
  let component: WebstoreComponent;
  let fixture: ComponentFixture<WebstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
