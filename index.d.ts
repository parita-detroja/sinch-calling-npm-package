import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface SinchConfig {    
    /**
     * Sinch application key.
     */
    application_key: string;

    /**
     * Sinch application secret.
     */
    application_secret: string;

    /**
     * Sinch environment host.
     */
    environment_host: string;

    /**
     * Callee id.
     */
    user_id: string;
}
/**
 * @name Sinch Calling
 * @description
 * This plugin provides audio and video calling using sinch SDK.
 *
 */
export declare class SinchCalling extends IonicNativePlugin {
    /**
     * Initialize sinch for calling.
     *
     * @param options {SinchConfig} options An object of type Config
     * @returns {Observable<any>}
     */
    initSinch(options: SinchConfig): Observable<any>;
    /**
     * Connect audio call.
     *
     * @param remoteUserId {string} for connect phone call.
     * @returns {Promise<any>}
     */
    connectAudioCall(remoteUserId: string): Promise<any>;
    /**
     * hangup audio call.
     *
     * @returns {Promise<any>}
     */
    hangupAudioCall(): Promise<any>;
    /**
     * Answer audio call.
     *
     * @param answer_state {boolean} for accept or reject call.
     * @returns {Promise<any>}
     */
    answerAudioCall(answer_state: boolean): Promise<any>;
}
