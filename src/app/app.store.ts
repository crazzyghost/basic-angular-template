import {InjectionToken} from '@angular/core';
import rootReducer, {AppState} from './app.reducer';
import {ActionCreator, AnyAction, applyMiddleware, compose, createStore, Store, StoreEnhancer} from 'redux';
import thunk, {ThunkAction, ThunkMiddleware} from 'redux-thunk';

export type AppThunkAction<R, T extends AnyAction> = ThunkAction<R, AppState, null, T>;
export type AsyncActionCreator<T extends AnyAction, R = void> = ActionCreator<AppThunkAction<R, T>>;

export const AppStore = new InjectionToken('App.store');


const devTools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore(
      rootReducer,
      compose( applyMiddleware(thunk as ThunkMiddleware<AppState>), devTools)
  );
}


export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
