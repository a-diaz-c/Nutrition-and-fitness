import { RouterModule, Routes } from "@angular/router";

import { ComponentsComponent } from "./components.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { ConsultorioComponent } from "./consultorio/consultorio.component";
import { GimnasioComponent } from "./gimnasio/gimnasio.component";
import { InstalacionesComponent } from "./instalaciones/instalaciones.component";
import { InicioComponent } from "./inicio/inicio.component";

const components_routes: Routes = [
  {
    path: "",
    component: ComponentsComponent,
    children: [
      { path: "inicio", component: InicioComponent },
      { path: "instalaciones", component: InstalacionesComponent },
      { path: "gimnasio", component: GimnasioComponent },
      { path: "consultorio", component: ConsultorioComponent },
      { path: "curriculum", component: CurriculumComponent },
      { path: "", redirectTo: "/inicio", pathMatch: "full" }
    ]
  }
];

export const COMPONENTS_ROUTES = RouterModule.forChild(components_routes);
