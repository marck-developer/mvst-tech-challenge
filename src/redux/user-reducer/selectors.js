import { createSelector } from '@reduxjs/toolkit'

export const selectUserState = (state) => state.user;

export const userSelector = createSelector([selectUserState], (user) => user);