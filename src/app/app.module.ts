import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';
import { HeaderComponent } from './restrito/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrosselComponent,
    ConteudoComponent,
    FooterComponent,
    LoginComponent,
    RestritoComponent,
    AtualizaProdutoComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    MenuRestritoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
