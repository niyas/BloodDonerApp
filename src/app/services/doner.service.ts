import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class DonerService {
    constructor(
        private http: Http
    ) { }

    //Set the API host from environment variables
    apiHost: string = environment.apiHost;

    /**
     * Get the list of all doner from API
     * @return {Promise}
     */
    getDoners(assignee, token) {
        return this.http.get(this.apiHost + '/api/doners?access_token='+ token)
            .map((res: Response) => res.json());
    }

    /**
     * Get a doner using Id
     * 
     * @param {String} id 
     * @return {Promise}
     */
    getDoner(id, token) {
        return this.http.get(this.apiHost + '/api/doners/' + id + '?access_token='+ token)
            .map((res: Response) => res.json());
    }

    /**
     * Create a Doner
     * 
     * @param {String} id 
     * @param {Object} payload 
     * @returns {Promise}
     */
    createDoner(payload, token) {
        return this.http.post(
            this.apiHost + '/api/doners?access_token='+ token,
            payload
        ).map((res: Response) => res.json());
    }
}