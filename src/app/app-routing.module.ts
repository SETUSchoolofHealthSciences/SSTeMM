import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'stress-questions/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./stress-questions/stress-questions.module').then( m => m.StressQuestionsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./password/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'forgot-password-code',
    loadChildren: () => import('./password/forgot-password-code/forgot-password-code.module').then( m => m.ForgotPasswordCodePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'resend-verification',
    loadChildren: () => import('./password/resend-verification/resend-verification.module').then( m => m.ResendVerificationPageModule)
  },
  {
    path: 'cognito',
    loadChildren: () => import('./cognito/cognito.module').then( m => m.CognitoPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'reg-code',
    loadChildren: () => import('./reg-code/reg-code.module').then( m => m.RegCodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
