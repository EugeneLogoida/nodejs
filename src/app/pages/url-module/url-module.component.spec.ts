import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlModuleComponent } from './url-module.component';

describe('UrlModuleComponent', () => {
  let component: UrlModuleComponent;
  let fixture: ComponentFixture<UrlModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
