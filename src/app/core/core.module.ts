import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Services
import { ThemeService } from './services/theme.service';
import { EnvironmentService } from './services/environment.service';

// Guards (when you add them)
// import { AuthGuard } from './guards/auth.guard';

// Interceptors (when you add them)
// import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ThemeService,
    EnvironmentService,
    // Add your guards here
    // AuthGuard,

    // Add your interceptors here
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only once in AppModule.');
    }
  }
}
