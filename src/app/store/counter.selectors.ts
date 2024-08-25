import { createSelector } from '@ngrx/store'
import { ICounterState } from './counter.model'

export const selectCounterState = (state: any) => state.count
export const selectCount = createSelector(selectCounterState, (state: ICounterState)=> state.count)
