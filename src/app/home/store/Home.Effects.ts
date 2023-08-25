import { Injectable } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadusertaskAction,
  loadusertaskFailAction,
  loadusertaskSuccessAction,
} from './Home.Actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UserTaskEffect {
  constructor(private action$: Actions, private homeService: HomeService) {}

  loaduserTask = createEffect(() =>
    this.action$.pipe(
      ofType(loadusertaskAction),
      exhaustMap((action) => {
        return this.homeService.getUserTask().pipe(
          map((data) => {
            return loadusertaskSuccessAction({ task: data });
          }),
          catchError((err) =>
            of(loadusertaskFailAction({ errorMessage: err.message }))
          )
        );
      })
    )
  );
}
