import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LambdaService {
   
    
    constructor(private http: HttpClient){}

    awsLmbda()
    {
        return this.http.get<String>("https://0w59unfdn4.execute-api.ap-south-1.amazonaws.com/prod/myfirstlambda");
    }
}