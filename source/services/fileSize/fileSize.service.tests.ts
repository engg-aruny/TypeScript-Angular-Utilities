/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chaiAssertions.d.ts' />

'use strict';

import { IFileSizeFactory, moduleName, factoryName } from './fileSize.module';

import { angularFixture } from '../test/angularFixture';

import * as angular from 'angular';
import 'angular-mocks';

describe('fileSize', () => {
	var fileSizeFactory: IFileSizeFactory;

	beforeEach(() => {
		angular.mock.module(moduleName);

		var services: any = angularFixture.inject(factoryName);
		fileSizeFactory = services[factoryName];
	});

	it('should determine bytes', (): void => {
		expect(fileSizeFactory.getInstance(1).display()).to.equal('1 bytes');
		expect(fileSizeFactory.getInstance(1023).display()).to.equal('1023 bytes');
	});

	it('should determine kilo bytes', (): void => {
		expect(fileSizeFactory.getInstance(1024).display()).to.equal('1 KB');
		expect(fileSizeFactory.getInstance(1048575).display()).to.equal('1024 KB');
	});

	it('should determine mega bytes', (): void => {
		expect(fileSizeFactory.getInstance(1048576).display()).to.equal('1 MB');
		expect(fileSizeFactory.getInstance(1073741823).display()).to.equal('1024 MB');
	});

	it('should determine giga bytes', (): void => {
		expect(fileSizeFactory.getInstance(1073741824).display()).to.equal('1 GB');
		expect(fileSizeFactory.getInstance(1073741825).display()).to.equal('1 GB');
	});
});
