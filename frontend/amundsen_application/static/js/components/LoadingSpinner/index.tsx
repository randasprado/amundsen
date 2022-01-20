// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';

import './styles.scss';

const LoadingSpinner: React.FC = () => (
  <img
    src="/static/images/200w.gif"
    alt="loading..."
    className="200w"
  />
);

export default LoadingSpinner;
