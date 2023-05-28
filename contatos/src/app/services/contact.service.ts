import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.url}`);
  }

  deleteContact(id: number): Observable<Contact[]> {
    return this.http.delete<Contact[]>(`${this.url}/${id}`);
  }
}
