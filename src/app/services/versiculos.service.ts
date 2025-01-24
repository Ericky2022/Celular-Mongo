import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersiculosService {
  private apiUrl = 'http://localhost:3000/versiculos';

  constructor(private http: HttpClient) {}

  getVersiculos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // getVersiculosPorLivroCapitulo(livro: string, capitulo: number) {
  //   return this.http.get<any[]>(`/api/versiculos?livro=${livro}&capitulo=${capitulo}`);
  // }

  getVersiculosPorLivroCapitulo(livro: string, capitulo: number): Observable<any[]> {
    const url = `${this.apiUrl}/versiculos?livro=${encodeURIComponent(livro)}&capitulo=${capitulo}`;
    return this.http.get<any[]>(url);
  }
}
