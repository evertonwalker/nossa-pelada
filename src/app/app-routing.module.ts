import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogadorComponent } from './jogador/jogador.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { PagamentoJogadorComponent } from './pagamento-jogador/pagamento-jogador.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jogador', component: JogadorComponent },
    { path: 'jogador/new', component: FormJogadorComponent },
    { path: 'pagamento', component: PagamentoJogadorComponent }
];


@NgModule({
    // tudo que for requisitado por 4200 receba essas rotas
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}