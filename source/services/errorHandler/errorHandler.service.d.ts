import * as ng from 'angular';
import { INotificationService } from '../notification/notification.service';
export declare var moduleName: string;
export declare var serviceName: string;
export declare enum HttpStatusCode {
    cancelledRequest = -1,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    invalidUrl = 404,
    timeout = 408,
    internalServerError = 500,
    gone = 410,
}
export interface IRejection {
    status: HttpStatusCode;
    data?: any;
}
export interface IErrorHandlerService {
    httpResponseError(rejection: IRejection): void;
}
export interface IErrorMessages {
    badRequestError: string;
    forbiddenError: string;
    invalidUrlError: string;
    timeoutError: string;
    internalServerError: string;
    defaultError: string;
    goneError: string;
}
export declare class ErrorHandlerService implements IErrorHandlerService {
    private $window;
    private $exceptionHandler;
    private notification;
    private loginUrl;
    private errorMessages;
    private returnUrlParam;
    constructor($window: ng.IWindowService, $exceptionHandler: ng.IExceptionHandlerService, notification: INotificationService, loginUrl: string, errorMessages: IErrorMessages, returnUrlParam: string);
    httpResponseError(rejection: IRejection): void;
    private badRequestError(rejection);
    private loggedOutError();
    private insufficientPermissionsError();
    private invalidUrlError();
    private timeoutError();
    private systemError();
    private goneError();
}
export interface IErrorHandlerServiceProvider extends angular.IServiceProvider {
    loginUrl: string;
    errorMessages: IErrorMessages;
    returnUrlParam: string;
    $get($window: ng.IWindowService, $exceptionHandler: ng.IExceptionHandlerService, notification: INotificationService): IErrorHandlerService;
}
