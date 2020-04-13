export class User {

    constructor(private name: string, 
        private password:string, 
        private _token: string, 
        private _tokenExpirationData: Date) {
        
    }

    get token(){
        if(this._tokenExpirationData || new Date() > this._tokenExpirationData){
            return null
        }
        return this._token
    }
}