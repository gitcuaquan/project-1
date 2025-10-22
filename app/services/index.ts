import CustomerService from "./CustomerService";
import { ItemService } from "./ItemService";

export default defineNuxtPlugin((nuxtApp) => {
  const appServices = {
    customer: new CustomerService(),
    items: new ItemService(),
  };
  nuxtApp.provide('appServices', appServices);
})

declare module "#app" {
    interface NuxtApp {
        $appServices: {
            customer: CustomerService;
            items: ItemService;
        };
    }
}