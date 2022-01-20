// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { storiesOf } from '@storybook/react';

import StorySection from '../StorySection';
import LoadingSpinner from '.';

const stories = storiesOf('Attributes/States', module);

stories.add('200w', () => (
  <>
    <StorySection title="200w">
      <LoadingSpinner />
    </StorySection>
  </>
));
