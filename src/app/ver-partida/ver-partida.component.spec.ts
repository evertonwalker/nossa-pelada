import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPartidaComponent } from './ver-partida.component';

describe('VerPartidaComponent', () => {
  let component: VerPartidaComponent;
  let fixture: ComponentFixture<VerPartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
