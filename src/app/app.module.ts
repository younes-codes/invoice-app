import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './pages/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {InputComponent} from './components/input/input.component';
import {CreateCompanyComponent} from './pages/create-company/create-company.component';
import {CreateClientComponent} from './pages/create-client/create-client.component';
import {
    DashboardComponent
} from './pages/connected-user-interface/dashboard/dashboard.component';
import {MenuComponent} from './components/menu/menu.component';
import {
    ConnectedUserInterfaceComponent
} from './pages/connected-user-interface/connected-user-interface.component';
import {
    CreateInvoiceComponent
} from './pages/connected-user-interface/create-invoice/create-invoice.component';
import {
    SeeInvoicesComponent
} from './pages/connected-user-interface/see-invoices/see-invoices.component';
import {
    MyDataComponent
} from './pages/connected-user-interface/my-data/my-data.component';
import {
    InvoiceOverviewComponent
} from './components/invoice-overview/invoice-overview.component';
import {MatTabsModule} from "@angular/material/tabs";
import {
    MyCompanyDataComponent
} from './components/my-company-data/my-company-data.component';
import {
    MyClientDataComponent
} from './components/my-client-data/my-client-data.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfirmInvoiceComponent} from './pages/confirm-invoice/confirm-invoice.component';
import {LoaderComponent} from './components/loader/loader.component';
import {
    InvoiceDetailsComponent
} from './components/invoice-details/invoice-details.component';
import {PlaceholderDirective} from "./shared/placeholder/placeholder.directive";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ServiceWorkerModule, SwRegistrationOptions} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        InputComponent,
        CreateCompanyComponent,
        CreateClientComponent,
        DashboardComponent,
        MenuComponent,
        ConnectedUserInterfaceComponent,
        CreateInvoiceComponent,
        SeeInvoicesComponent,
        MyDataComponent,
        InvoiceOverviewComponent,
        MyCompanyDataComponent,
        MyClientDataComponent,
        ConfirmInvoiceComponent,
        LoaderComponent,
        InvoiceDetailsComponent,
        PlaceholderDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        FormsModule,
        MatTabsModule,
        HttpClientModule,
        MatSlideToggleModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerImmediately'
        }),
        MatListModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
