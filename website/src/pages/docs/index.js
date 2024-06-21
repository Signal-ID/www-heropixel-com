/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Integrations from './Integrations';
import QuickLinks from './QuickLinks';
import Journeyimg from './Journeyimg';

export default function Docs() {
  return (
    <Layout wrapperClassName="page-docs">
      <div class="dochero">
        <div class="container">
          <div class="row">
            <div class="column">
              <h1>Hero Pixel Docs</h1>
              <h2>Help for wherever you are on your Hero journey.</h2>
            </div>
            <div class="column">
              <Journeyimg />
            </div>
          </div>
        </div>
      </div>

      <QuickLinks />
      {/* <Integrations /> */}
    </Layout>
  );
}
