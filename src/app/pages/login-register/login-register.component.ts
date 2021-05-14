import {Component, Inject, OnInit} from '@angular/core';
import {AppStore} from '../../app.store';
import {AppState} from '../../app.reducer';
import * as Redux from 'redux';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AUTHENTICATING, REGISTERING} from '../../config/progress.type';
import {login, register} from '../../actions';
import {AuthCredentials} from '../../models';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-component',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoading = false;
  isLoginFormSubmitted = false;
  isRegisterFormSubmitted = false;
  isLoginSelected = true;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>,
              private service: AuthService,
              builder: FormBuilder,
              private router: Router) {

    store.subscribe(() => this.updateState());

    this.buildLoginForm(builder);
    this.buildRegisterForm(builder);


  }

  ngOnInit() {

  }

  setLoginSelected(selected) {
    this.isLoginSelected = selected;
  }

  buildLoginForm(builder: FormBuilder) {
    this.loginForm = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  buildRegisterForm(builder: FormBuilder) {
    this.registerForm = builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  updateState() {
    const state = this.store.getState();
    this.isLoading = state.progress.includes(AUTHENTICATING) || state.progress.includes(REGISTERING);
  }

  get lf() {
    return this.loginForm.controls;
  }

  get rf() {
    return this.registerForm.controls;
  }

  onLoginFormSubmit(obj: AuthCredentials): void {
    this.isLoginFormSubmitted = true;
    if (!this.loginForm.valid) return;
    const successCallback = () => this.router.navigateByUrl('/app/dashboard');
    // @ts-ignore
    this.store.dispatch(dispatch => dispatch( login(obj, this.service, successCallback) ));
    // this.store.dispatch();
  }

  onRegisterFormSubmit(obj): void {
    this.isRegisterFormSubmitted = true;
    if (!this.registerForm.valid) { return; }
    // @ts-ignore
    this.store.dispatch(dispatch => dispatch(register(obj, this.service)));
    // this.store.dispatch();
  }
}
