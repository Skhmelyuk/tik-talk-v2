import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);

  baseUrl: string = 'http://localhost:3200';

  getAccounts() {
    return this.http.get<Profile[]>(`${this.baseUrl}/profiles`);
  }
}
