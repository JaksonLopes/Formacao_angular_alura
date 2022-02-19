import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrsdeFotosAnimaisComponent } from './grsde-fotos-animais.component';

describe('GrsdeFotosAnimaisComponent', () => {
  let component: GrsdeFotosAnimaisComponent;
  let fixture: ComponentFixture<GrsdeFotosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrsdeFotosAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrsdeFotosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
