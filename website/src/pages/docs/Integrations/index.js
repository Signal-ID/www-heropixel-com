/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import SvgList from '../../components/IntegrationsList/svglist';

import styles from './styles.module.css';

function Integrations() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields.users)
    .flat()
    .filter(app => app.pinned);

  return (
    <Section>
      <SectionTitle title="Prospects Streamed Into Your Ecosystem" />
      <div className={styles.featureContainer}>
        <div>
          <p>
            Prior to providing integrations natively we saw our customers
            spending thousands upon thousands of dollars on zapier connections.
          </p>
          <p>
            We didn't want our service to impose uneccessary costs onto our
            clients, just so they could take position of their leads. For that
            reason, we decided to build and maintain the necessary integrations
            to make our client's lives easier.
          </p>
          <p>
            If you don't find the integration you're looking for, just reach out
            to our support team and they'll be happy to build it for you.
          </p>
        </div>
        <div>
          <SvgList />
          <p>
            and{' '}
            <a href={useBaseUrl(`/docs/intro-to-integrations`)}>many more</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Integrations;
