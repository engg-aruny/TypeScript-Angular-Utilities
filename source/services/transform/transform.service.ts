import { Provider, OpaqueToken } from '@angular/core';
import * as _ from 'lodash';

export type ITransform<TItemType, TReturnType> = string | { (item: TItemType): TReturnType };

export interface ITransformService {
	getValue<TItemType, TReturnType>(item: TItemType, transform: ITransform<TItemType, TReturnType>);
}

export class TransformService implements ITransformService {
	getValue<TItemType, TReturnType>(item: TItemType, transform: ITransform<TItemType, TReturnType>) {
		if (item == null) {
			return null;
		}

		if (transform == null) {
			return item;
		}

		return _.isFunction(transform)
			? (<{ (item: TItemType): TReturnType }>transform)(item)
			: item[<string>transform];
	}
}

export const transform: ITransformService = new TransformService();

export const transformServiceToken: OpaqueToken = new OpaqueToken('transform service token');

export const TRANSFORM_SERVICE_PROVIDER: Provider = new Provider(transformServiceToken, {
	useClass: TransformService
});
