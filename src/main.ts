import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { SohoComponentsModule } from "ids-enterprise-ng";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        importProvidersFrom(BrowserModule, FormsModule, SohoComponentsModule),
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => {
                Soho.Locale.culturesPath = "/assets/ids-enterprise/js/cultures/";
                return Soho.Locale.set("en-US").catch((err) => console.error(`Failed to set locale`, err));
            },
            multi: true,
        }
    ]
})
  .catch((err) => console.error(err));
