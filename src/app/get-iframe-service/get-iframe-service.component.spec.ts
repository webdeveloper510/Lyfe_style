import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIframeServiceComponent } from './get-iframe-service.component';

describe('GetIframeServiceComponent', () => {
  let component: GetIframeServiceComponent;
  let fixture: ComponentFixture<GetIframeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIframeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIframeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
