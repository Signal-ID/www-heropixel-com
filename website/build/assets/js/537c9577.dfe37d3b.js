'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2453],
  {
    7884: (s, e, i) => {
      i.r(e), i.d(e, {default: () => a});
      var t = i(3696),
        l = i(9568);
      const o = [
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
      function a() {
        return t.createElement(
          'ul',
          null,
          o.map((s, e) => {
            const i = (0, l.A)('img/connectors/' + s.file);
            return t.createElement(
              'li',
              {key: e, className: 'item'},
              t.createElement(
                'a',
                {href: s.url},
                t.createElement('img', {src: i, alt: s.file})
              )
            );
          })
        );
      }
    },
  },
]);
