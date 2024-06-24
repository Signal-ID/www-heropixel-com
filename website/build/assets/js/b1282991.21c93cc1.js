'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8491, 2453, 3953, 1664],
  {
    6702: (e, t, s) => {
      s.r(t), s.d(t, {default: () => l});
      var i = s(3696);
      const a = 'wrapper_O4qR',
        n = 'container_jPHy';
      const l = function ({children: e}) {
        return i.createElement(
          'div',
          {className: a},
          i.createElement('div', {className: n}, e)
        );
      };
    },
    9664: (e, t, s) => {
      s.r(t), s.d(t, {default: () => r});
      var i = s(3696);
      const a = 'container_TgzH',
        n = 'title_QmeC',
        l = 'description_uhBg';
      const r = function ({title: e, description: t}) {
        return i.createElement(
          'div',
          {className: a},
          i.createElement('h1', {className: n}, e),
          i.createElement('h3', {className: l}, t)
        );
      };
    },
    6843: (e, t, s) => {
      s.r(t), s.d(t, {default: () => d});
      var i = s(3696),
        a = s(9568),
        n = s(5067),
        l = s(6702),
        r = s(9664),
        o = s(7884);
      const c = 'featureContainer_JCYB';
      const d = function () {
        const {siteConfig: e} = (0, n.A)();
        return (
          Object.values(e.customFields.users)
            .flat()
            .filter(e => e.pinned),
          i.createElement(
            l.default,
            null,
            i.createElement(r.default, {
              title: 'Prospects Streamed Into Your Ecosystem',
            }),
            i.createElement(
              'div',
              {className: c},
              i.createElement(
                'div',
                null,
                i.createElement(
                  'p',
                  null,
                  'Meta released React Native in 2015 and has been maintaining it ever since.'
                ),
                i.createElement(
                  'p',
                  null,
                  'In 2018, React Native had the',
                  ' ',
                  i.createElement(
                    'a',
                    {
                      href: 'https://octoverse.github.com/2018/projects#repositories',
                    },
                    '2nd highest'
                  ),
                  ' ',
                  'number of contributors for any repository in GitHub. Today, React Native is supported by contributions from individuals and companies around the world including',
                  ' ',
                  i.createElement(
                    'span',
                    null,
                    i.createElement(
                      'a',
                      {href: 'https://callstack.com/'},
                      'Callstack'
                    )
                  ),
                  ',',
                  ' ',
                  i.createElement(
                    'span',
                    null,
                    i.createElement('a', {href: 'https://expo.io/'}, 'Expo')
                  ),
                  ', ',
                  i.createElement(
                    'a',
                    {href: 'https://infinite.red/'},
                    'Infinite Red'
                  ),
                  ',',
                  ' ',
                  i.createElement(
                    'a',
                    {href: 'https://www.microsoft.com/'},
                    'Microsoft'
                  ),
                  ' and',
                  ' ',
                  i.createElement(
                    'a',
                    {href: 'https://swmansion.com/'},
                    'Software Mansion'
                  ),
                  '.'
                ),
                i.createElement(
                  'p',
                  null,
                  'Our community is always shipping exciting new projects and exploring platforms beyond Android and iOS with repos like',
                  ' ',
                  i.createElement(
                    'span',
                    null,
                    i.createElement(
                      'a',
                      {
                        href: 'https://github.com/microsoft/react-native-windows#readme',
                      },
                      'React Native Windows'
                    )
                  ),
                  ',',
                  ' ',
                  i.createElement(
                    'a',
                    {
                      href: 'https://github.com/microsoft/react-native-macos#readme',
                    },
                    'React Native macOS'
                  ),
                  ' ',
                  'and',
                  ' ',
                  i.createElement(
                    'a',
                    {
                      href: 'https://github.com/necolas/react-native-web#readme',
                    },
                    'React Native Web'
                  ),
                  '.'
                )
              ),
              i.createElement(
                'div',
                null,
                i.createElement(
                  'ul',
                  {className: 'AppList'},
                  i.createElement(o.default, null)
                ),
                i.createElement(
                  'p',
                  null,
                  'and ',
                  i.createElement(
                    'a',
                    {href: (0, a.A)('showcase')},
                    'many more'
                  ),
                  '.'
                )
              )
            )
          )
        );
      };
    },
    7884: (e, t, s) => {
      s.r(t), s.d(t, {default: () => l});
      var i = s(3696),
        a = s(9568);
      const n = [
        {file: 'astra.svg', url: '/docs/destinations/astra'},
        {
          file: 'azure-blob-storage.svg',
          url: '/docs/destinations/azure-blob-storage',
        },
        {file: 'datalake.svg', url: '/docs/destinations/aws-datalake'},
        {file: 'bigquery.svg', url: '/docs/destinations/bigquery'},
        {file: 'chroma.svg', url: '/docs/destinations/chroma'},
        {file: 'clickhouse.svg', url: '/docs/destinations/clickhouse'},
        {file: 'convex.svg', url: '/docs/destinations/convex'},
        {file: 'databricks.svg', url: '/docs/destinations/databricks'},
        {file: 'duckdb.svg', url: '/docs/destinations/duckdb'},
        {file: 'dynamodb.svg', url: '/docs/destinations/dynamodb'},
        {file: 'elasticsearch.svg', url: '/docs/destinations/elasticsearch'},
        {file: 'firebolt.svg', url: '/docs/destinations/firebolt'},
        {file: 'firestore.svg', url: '/docs/destinations/firestore'},
        {file: 'gcs.svg', url: '/docs/destinations/gcs'},
        {file: 'google-sheets.svg', url: '/docs/destinations/google-sheets'},
        {file: 'iceberg.svg', url: '/docs/destinations/iceberg'},
        {file: 'kafka.svg', url: '/docs/destinations/kafka'},
        {file: 'milvus.svg', url: '/docs/destinations/milvus'},
        {file: 'mongodb.svg', url: '/docs/destinations/mongodb'},
        {file: 'mssql.svg', url: '/docs/destinations/mssql'},
        {file: 'mysql.svg', url: '/docs/destinations/mysql'},
        {file: 'oracle.svg', url: '/docs/destinations/oracle'},
        {file: 'pinecone.svg', url: '/docs/destinations/pinecone'},
        {file: 'postgres.svg', url: '/docs/destinations/postgres'},
        {file: 'pubsub.svg', url: '/docs/destinations/pubsub'},
        {file: 'qdrant.svg', url: '/docs/destinations/qdrant'},
        {file: 'rabbitmq.svg', url: '/docs/destinations/rabbitmq'},
        {file: 'redis.svg', url: '/docs/destinations/redis'},
        {file: 'redshift.svg', url: '/docs/destinations/redshift'},
        {file: 's3.svg', url: '/docs/destinations/s3'},
        {file: 's3-glue.svg', url: '/docs/destinations/s3-glue'},
        {file: 'sftp-json.svg', url: '/docs/destinations/sftp-json'},
        {file: 'snowflake.svg', url: '/docs/destinations/snowflake-cortex'},
        {file: 'snowflake.svg', url: '/docs/destinations/snowflake'},
        {
          file: 'starburst-galaxy.svg',
          url: '/docs/destinations/starburst-galaxy',
        },
        {file: 'teradata.svg', url: '/docs/destinations/teradata'},
        {file: 'typesense.svg', url: '/docs/destinations/typesense'},
        {file: 'vectara.svg', url: '/docs/destinations/vectara'},
        {file: 'weaviate.svg', url: '/docs/destinations/weaviate'},
        {file: 'yellowbrick.svg', url: '/docs/destinations/yellowbrick'},
      ];
      function l() {
        return i.createElement(
          'ul',
          null,
          n.map((e, t) => {
            const s = (0, a.A)('img/connectors/' + e.file);
            return i.createElement(
              'li',
              {key: t, className: 'item'},
              i.createElement(
                'a',
                {href: e.url},
                i.createElement('img', {src: s, alt: e.file})
              )
            );
          })
        );
      }
    },
  },
]);
