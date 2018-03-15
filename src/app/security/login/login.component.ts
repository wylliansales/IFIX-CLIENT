import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {NotificationsService} from '../../services/notifications.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup
    navigateTo: string


  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notification: NotificationsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required])
        })
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

    login() {
        this.loginService.login(
            this.loginForm.value.email,
            this.loginForm.value.password
        ).subscribe(response => this.notification.showNotification('Bem vindo :)', 'success'),
            error => this.notification.showNotification('Não autorizado, verifique seus dados :(', 'danger'),
            () => {
                this.router.navigate([atob(this.navigateTo)]);
            }
        );

    }

}
