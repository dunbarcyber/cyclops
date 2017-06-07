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
import { schema } from 'normalizr';

/**
 * Normalized context filter object.
 * @type {schema.Entity}
 */
export const CONTEXT_FILTER_SCHEMA = new schema.Entity('contextFilters');

const DISTILLERY_FLAT_SCHEMA = new schema.Entity('distilleries');

/**
 * Normalized list of context filter objects.
 * @type {schema.Array}
 */
export const CONTEXT_FILTER_LIST_SCHEMA = new schema.Array(CONTEXT_FILTER_SCHEMA);

/**
 * Normalized schema for context objects.
 * @type {schema.Entity}
 */
export const CONTEXT_SCHEMA: schema.Entity = new schema.Entity('contexts', {
  filters: CONTEXT_FILTER_LIST_SCHEMA,
  primary_distillery: DISTILLERY_FLAT_SCHEMA,
  related_distillery: DISTILLERY_FLAT_SCHEMA,
});

/**
 * Normalized list of context objects.
 * @type {schema.Array}
 */
export const CONTEXT_LIST_SCHEMA: schema.Array = new schema.Array(CONTEXT_SCHEMA);