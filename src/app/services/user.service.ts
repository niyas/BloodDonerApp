import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    constructor(
        private http: Http
    ) { }

    //Set the API host from environment variables
    apiHost: string = environment.apiHost;
    email: string = environment.email;
    password: string = environment.password;

    /**
     * Authenticate user
     * 
     * @param {Object} payload 
     * @param {String} token 
     * @returns {Promise}
     */
    login(payload) {
        return this.http.post(
            this.apiHost + '/api/Users/login',
            payload
        ).map((res: Response) => res.json());
    }
}