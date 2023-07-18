import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {path:'conteudo', component: ConteudoComponent},
  {path:'conteudo/login', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  {path:'', redirectTo:'/conteudo',pathMatch:'full'},
  {path: 'restrito/lista', component: RestritoComponent},
  {path: 'restrito/cadastro', component: CadastroProdutoComponent},
  {path: 'restrito/editar/:id', component: AtualizaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
