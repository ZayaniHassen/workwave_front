import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http: HttpClient, private router: Router) { }

  public addForm(body: any) {
    return this.http.post("https://workwaveback.azurewebsites.net" + '/addForm', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public updateForm(body: any) {
    return this.http.put("https://workwaveback.azurewebsites.net" + '/updateForm', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public getForms() {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/showForm");
  }
  public getForm(id: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/showForm/" + id);
  }
  public getFormswithcateg(id: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/showFormByCateg/" + id);
  }
  public delete(data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
    });
    return this.http.delete("https://workwaveback.azurewebsites.net" + `/deleteForm/${data}`, { headers: headers });
  }
  // historique 
  public getHisto(id: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/findbyUser/" + id);
  }
  public getAllHisto() {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/ShowHistorique");
  }

  public historiquebyuserandformation(id: any, idformation: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/historiquebyuserandformation/" + id + "/" + idformation);
  }
  public addHisto(body: any) {
    return this.http.post("https://workwaveback.azurewebsites.net" + '/addHistorique', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public updateHisto(body: any) {
    return this.http.put("https://workwaveback.azurewebsites.net" + '/updateHistorique', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  // quiz
  public getQuiz(id: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/quizbyformation/" + id);
  }
  public getQuizById(id: any) {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/quizbyid/" + id);
  }
  public getAllQuiz() {
    return this.http.get("https://workwaveback.azurewebsites.net" + "/ShowQuizz" );
  }
  public deleteQuiz(id:any) {
    return this.http.delete("https://workwaveback.azurewebsites.net" + "/deleteQuizz/"+id );
  }
  public addQuiz(body: any) {
    return this.http.post("https://workwaveback.azurewebsites.net" + '/addQuizz', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public updateQuiz(body: any) {
    return this.http.put("https://workwaveback.azurewebsites.net" + '/updateQuizz', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
