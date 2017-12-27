var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

var SinchCalling = (function (_super) {
    __extends(SinchCalling, _super);
    function SinchCalling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    /**
     * Initialize sinch for calling.
     *
     * @param options {SinchConfig} options An object of type Config
     * @returns {Observable<any>}
     */
    SinchCalling.prototype.initSinch = function (options) { return; };
    /**
     * Connect audio call.
     *
     * @param remoteUserId {string} for connect phone call.
     * @returns {Promise<any>}
     */
    SinchCalling.prototype.connectAudioCall = function (remoteUserId) { return; };
    /**
     * hangup audio call.
     *
     * @returns {Promise<any>}
     */
    SinchCalling.prototype.hangupAudioCall = function () { return; };
   /**
     * Answer audio call.
     *
     * @param answer_state {boolean} for accept or reject call.
     * @returns {Promise<any>}
     */
    SinchCalling.prototype.answerAudioCall = function (answer_state) { return; };
    
    return SinchCalling;
}(IonicNativePlugin));
SinchCalling.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SinchCalling.ctorParameters = function () { return []; };

__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], SinchCalling.prototype, "initSinch", null);

__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SinchCalling.prototype, "connectAudioCall", null);

__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SinchCalling.prototype, "hangupAudioCall", null);

__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SinchCalling.prototype, "answerAudioCall", null);

SinchCalling = __decorate([
    Plugin({
        pluginName: 'SinchCalling',
        plugin: 'cordova-plugin-sinch-calling',
        pluginRef: 'sinchCalling',
        platforms: ['Android']
    })
], SinchCalling);
export { SinchCalling };