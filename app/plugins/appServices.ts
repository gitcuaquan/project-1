import AuthService from "~/services/AuthService";
import CustomerService from "~/services/CustomerService";
import ItemService from "~/services/ItemService";

export default defineNuxtPlugin((nuxtApp) => {
    let appServices = {
        customer: new CustomerService(),
        items: new ItemService(),
        auth: new AuthService(),
    };
    nuxtApp.provide('appServices', appServices);
})

declare module "#app" {
    interface NuxtApp {
        $appServices: {
            customer: CustomerService;
            items: ItemService;
            auth: AuthService;
        };
    }
}
