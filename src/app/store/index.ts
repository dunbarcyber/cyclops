/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import { createStore, combineReducers, applyMiddleware, Store, Reducer } from 'redux';
import * as Logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Local
import { AlertDetailState, alertDetail } from './alertDetail';
import { AlertDataContextSearchState, alertDataContextSearch } from './alertDetailContextSearch';
import { AlertDetailOutcomeState, alertDetailOutcome } from './alertDetailOutcome';
import { AlertListState, alertList } from './alertList';
import { CategoryStoreState, categoryStore } from './categoryStore';
import { DashboardState, dashboard } from './dashboard';
import { ErrorModalState, errorModal } from './errorModal';
import { MonitorModalState, monitorModal } from './monitorModal';
import { UserStoreState, userStore } from './userStore';
import { SearchResultsState, searchResults } from './searchResults';
import { SearchQueryState, searchQuery } from './searchQuery';
import { AlertSearchResultsState, alertSearchResults } from './alertSearchResults';
import { DistilleryStoreState, distilleryStore } from './distilleryStore';

/** Shape of the redux store state. */
export interface StoreState {
  alertDetail: AlertDetailState;
  alertDataContextSearch: AlertDataContextSearchState;
  alertDetailOutcome: AlertDetailOutcomeState;
  alertList: AlertListState;
  alertSearchResults: AlertSearchResultsState;
  categoryStore: CategoryStoreState;
  dashboard: DashboardState;
  distilleryStore: DistilleryStoreState;
  errorModal: ErrorModalState;
  monitorModal: MonitorModalState;
  searchQuery: SearchQueryState;
  searchResults: SearchResultsState;
  userStore: UserStoreState;
}

/**
 * Main redux reducer.
 * @type {Reducer<StoreState>}
 */
const reducers = combineReducers<StoreState>({
  alertDetail,
  alertDataContextSearch,
  alertDetailOutcome,
  alertList,
  alertSearchResults,
  categoryStore,
  dashboard,
  distilleryStore,
  errorModal,
  monitorModal,
  searchQuery,
  searchResults,
  userStore,
});

/**
 * Middleware to add to the redux store.
 * @type {GenericStoreEnhancer}
 */
const middleware = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunkMiddleware)
  : applyMiddleware(thunkMiddleware, Logger({ collapsed: true }));

/**
 * Central redux store for the application
 * @type {Store<StoreState>}
 */
export const store = createStore<StoreState>(reducers, middleware);
