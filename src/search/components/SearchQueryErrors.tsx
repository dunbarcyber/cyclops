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
import * as React from 'react';

// Types
// --------------------------------------------------------------------------

// Properties of the SearchQueryErrors component.
interface Props {
  errors: string[];
}

// Component
// --------------------------------------------------------------------------

// Displays a list of errors about a search query.
export class SearchQueryErrors extends React.Component<Props, {}> {
  render() {
    const errors = this.props.errors.map((error) => <p>{error}</p>);

    return (
      <div className="alert-text--high">
        {errors}
      </div>
    );
  }
}