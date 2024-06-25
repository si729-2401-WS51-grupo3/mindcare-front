// src/app/auth/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUserId(): number {
    // Simula la obtención del ID del usuario actualmente autenticado
    // En este caso, simplemente devolvemos un ID de usuario fijo
    return 1;
  }
}