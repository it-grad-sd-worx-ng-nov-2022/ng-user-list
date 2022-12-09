import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error.interceptor";
import { LoadingInterceptor } from "./loading.interceptor";

export const InterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true},
    { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}
];