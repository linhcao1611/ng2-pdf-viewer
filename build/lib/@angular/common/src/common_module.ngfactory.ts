/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '@angular/common/src/common_module';
import * as import2 from '@angular/common/src/localization';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from '@angular/core/src/i18n/tokens';
class CommonModuleInjector extends import0.NgModuleInjector<import1.CommonModule> {
  _CommonModule_0:import1.CommonModule;
  __NgLocalization_1:import2.NgLocaleLocalization;
  constructor(parent:import3.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_1():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_1 == (null as any))) { (this.__NgLocalization_1 = new import2.NgLocaleLocalization(this.parent.get(import4.LOCALE_ID))); }
    return this.__NgLocalization_1;
  }
  createInternal():import1.CommonModule {
    this._CommonModule_0 = new import1.CommonModule();
    return this._CommonModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.CommonModule)) { return this._CommonModule_0; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const CommonModuleNgFactory:import0.NgModuleFactory<import1.CommonModule> = new import0.NgModuleFactory(CommonModuleInjector,import1.CommonModule);