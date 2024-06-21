/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Hero from './Hero';
import Head from '@docusaurus/Head';

export default function Landing() {
  return (
    <Layout wrapperClassName="homepage">
      <Head>
        <html className="LandingPage" />
      </Head>
      <Hero />
    </Layout>
  );
}
