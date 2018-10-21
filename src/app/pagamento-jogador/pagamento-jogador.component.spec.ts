import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoJogadorComponent } from './pagamento-jogador.component';

describe('PagamentoJogadorComponent', () => {
  let component: PagamentoJogadorComponent;
  let fixture: ComponentFixture<PagamentoJogadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoJogadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
