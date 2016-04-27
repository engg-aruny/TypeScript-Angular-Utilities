import { OpaqueToken, Provider } from 'angular2/core';
export interface IGuidService {
    time(): string;
    random(): string;
}
export declare const guid: IGuidService;
export declare const guidToken: OpaqueToken;
export declare const GUID_PROVIDER: Provider;
