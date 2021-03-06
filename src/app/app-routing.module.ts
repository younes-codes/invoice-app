import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {
    AUTH,
    CONFIRM_INVOICE,
    CONNECTED_USER_INTERFACE,
    CREATE_CLIENT,
    CREATE_COMPANY,
    CREATE_INVOICE,
    DASHBOARD,
    INVOICE_DETAILS,
    MY_DATA,
    SEE_INVOICES
} from "./app.routes-name";
import {CreateClientComponent} from "./pages/create-client/create-client.component";
import {CreateCompanyComponent} from "./pages/create-company/create-company.component";
import {
    DashboardComponent
} from "./pages/connected-user-interface/dashboard/dashboard.component";
import {
    ConnectedUserInterfaceComponent
} from "./pages/connected-user-interface/connected-user-interface.component";
import {
    CreateInvoiceComponent
} from "./pages/connected-user-interface/create-invoice/create-invoice.component";
import {
    SeeInvoicesComponent
} from "./pages/connected-user-interface/see-invoices/see-invoices.component";
import {
    MyDataComponent
} from "./pages/connected-user-interface/my-data/my-data.component";
import {AuthGuard} from "./pages/auth/auth.guard";
import {ConfirmInvoiceComponent} from "./pages/confirm-invoice/confirm-invoice.component";
import {
    InvoiceDetailsComponent
} from "./components/invoice-details/invoice-details.component";

const routes: Routes = [
    {path: '', component: AuthComponent},
    {path: CREATE_COMPANY, component: CreateCompanyComponent},
    {path: CREATE_CLIENT, component: CreateClientComponent},
    {path: AUTH, component: AuthComponent},
    {path: CONFIRM_INVOICE, component: ConfirmInvoiceComponent},
    {
        path: CONNECTED_USER_INTERFACE,
        component: ConnectedUserInterfaceComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: DASHBOARD,
                component: DashboardComponent,
                data: {animationState: 'One'}
            },
            {
                path: CREATE_INVOICE,
                component: CreateInvoiceComponent,
                data: {animationState: 'Two'}
            },
            {
                path: SEE_INVOICES,
                component: SeeInvoicesComponent,
                data: {animationState: 'Three'},
                children: [
                    {
                        path: `${INVOICE_DETAILS}/:id`,
                        component: InvoiceDetailsComponent
                    }
                ]
            },
            {
                path: MY_DATA,
                component: MyDataComponent,
                data: {animationState: 'Four'}
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
