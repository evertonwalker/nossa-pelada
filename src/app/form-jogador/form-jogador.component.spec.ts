import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJogadorComponent } from './form-jogador.component';

describe('FormJogadorComponent', () => {
  let component: FormJogadorComponent;
  let fixture: ComponentFixture<FormJogadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJogadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
