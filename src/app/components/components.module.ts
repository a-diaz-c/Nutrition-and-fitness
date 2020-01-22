import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// routes
import { COMPONENTS_ROUTES } from "./components.route";

import { ComponentsComponent } from "./components.component";
import { InicioComponent } from "./inicio/inicio.component";
import { InstalacionesComponent } from "./instalaciones/instalaciones.component";
import { ConsultorioComponent } from "./consultorio/consultorio.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { GimnasioComponent } from "./gimnasio/gimnasio.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    ComponentsComponent,
    InicioComponent,
    InstalacionesComponent,
    ConsultorioComponent,
    CurriculumComponent,
    GimnasioComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, COMPONENTS_ROUTES]
})
export class ComponentsModule {}
