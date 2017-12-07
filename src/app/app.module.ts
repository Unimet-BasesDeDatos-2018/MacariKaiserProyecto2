import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosDetalleComponent } from './components/productos-detalle/productos-detalle.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductoService } from './services/producto.service'
import { AuthService } from './services/auth.service'

import { AuthGuard } from './guards/auth.guard'

// crear rutas
const appRoutes: Routes = [ 
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crear-producto', component: CrearProductoComponent, canActivate:[AuthGuard]},
  {path: 'producto/:id', component: ProductosDetalleComponent, canActivate:[AuthGuard]},
  {path: 'editar-producto/:id', component:EditarProductoComponent, canActivate:[AuthGuard] }
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductosComponent,
    ProductosDetalleComponent,
    EditarProductoComponent,
    CrearProductoComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'project'),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    ProductoService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
