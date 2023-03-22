import { ComponentFixture, TestBed } from '@angular/core/testing';

import { habilidadesComponent } from './habilidades.component';

describe('HabilidadesComponent', () => {
  let component: habilidadesComponent;
  let fixture: ComponentFixture<habilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ habilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(habilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
