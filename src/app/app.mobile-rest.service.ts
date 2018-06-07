import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Mobile } from '../models/mobile.model';

let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
const httpOptions = {
    headers           
};

@Injectable()
export class MobileRestService {
    private apiUrl = "https://serene-depths-64794.herokuapp.com/claro/mobile";   
    exibirDetalhe:boolean = false;
    selectedMobile: Mobile;
     
    constructor(private http:HttpClient) {}
 
    /*Função responsável por consumir a API REST na rota GET claro/mobile e obter todos os registros */
    getMobiles():  Observable<Mobile[]>  {
        return this.http.get<Mobile[]>(this.apiUrl, httpOptions);
    }

    /*Função responsável por consumir a API REST na rota GET claro/mobile/{code} e obter todos um registro específico */
    getMobileByCode(code) {
        return this.http.get(this.apiUrl + "\\" + code, httpOptions);
    }

    /*Função responsável por fechar o card que exibe na tela os detalhes */
    closeDetail() {
        this.exibirDetalhe = false;
    }
}