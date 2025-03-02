import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app/app.routes'; // Импорт маршрутов

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // ✅ Добавляем маршрутизацию
    importProvidersFrom(HttpClientModule) // ✅ Добавляем поддержку HTTP-запросов
  ]
}).catch(err => console.error(err));
