/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ '../node_modules/workbox-core/_private/Deferred.js':
      /*!*********************************************************!*\
  !*** ../node_modules/workbox-core/_private/Deferred.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Deferred: () => /* binding */ Deferred,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * The Deferred class composes Promises in a way that allows for them to be
         * resolved or rejected from outside the constructor. In most cases promises
         * should be used directly, but Deferreds can be necessary when the logic to
         * resolve a promise must be separate.
         *
         * @private
         */
        class Deferred {
          /**
           * Creates a promise and exposes its resolve and reject functions as methods.
           */
          constructor() {
            this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
            });
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/WorkboxError.js':
      /*!*************************************************************!*\
  !*** ../node_modules/workbox-core/_private/WorkboxError.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ WorkboxError: () => /* binding */ WorkboxError,
          /* harmony export */
        });
        /* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../models/messages/messageGenerator.js */ '../node_modules/workbox-core/models/messages/messageGenerator.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Workbox errors should be thrown with this class.
         * This allows use to ensure the type easily in tests,
         * helps developers identify errors from workbox
         * easily and allows use to optimise error
         * messages correctly.
         *
         * @private
         */
        class WorkboxError extends Error {
          /**
           *
           * @param {string} errorCode The error code that
           * identifies this particular error.
           * @param {Object=} details Any relevant arguments
           * that will help developers identify issues should
           * be added as a key on the context object.
           */
          constructor(errorCode, details) {
            const message = (0,
            _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(
              errorCode,
              details
            );
            super(message);
            this.name = errorCode;
            this.details = details;
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/assert.js':
      /*!*******************************************************!*\
  !*** ../node_modules/workbox-core/_private/assert.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ assert: () => /* binding */ finalAssertExports,
          /* harmony export */
        });
        /* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /*
         * This method throws if the supplied value is not an array.
         * The destructed values are required to produce a meaningful error for users.
         * The destructed and restructured object is so it's clear what is
         * needed.
         */
        const isArray = (value, details) => {
          if (!Array.isArray(value)) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'not-an-array',
              details
            );
          }
        };
        const hasMethod = (object, expectedMethod, details) => {
          const type = typeof object[expectedMethod];
          if (type !== 'function') {
            details['expectedMethod'] = expectedMethod;
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'missing-a-method',
              details
            );
          }
        };
        const isType = (object, expectedType, details) => {
          if (typeof object !== expectedType) {
            details['expectedType'] = expectedType;
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'incorrect-type',
              details
            );
          }
        };
        const isInstance = (
          object,
          // Need the general type to do the check later.
          // eslint-disable-next-line @typescript-eslint/ban-types
          expectedClass,
          details
        ) => {
          if (!(object instanceof expectedClass)) {
            details['expectedClassName'] = expectedClass.name;
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'incorrect-class',
              details
            );
          }
        };
        const isOneOf = (value, validValues, details) => {
          if (!validValues.includes(value)) {
            details[
              'validValueDescription'
            ] = `Valid values are ${JSON.stringify(validValues)}.`;
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'invalid-value',
              details
            );
          }
        };
        const isArrayOfClass = (
          value,
          // Need general type to do check later.
          expectedClass, // eslint-disable-line
          details
        ) => {
          const error =
            new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'not-array-of-class',
              details
            );
          if (!Array.isArray(value)) {
            throw error;
          }
          for (const item of value) {
            if (!(item instanceof expectedClass)) {
              throw error;
            }
          }
        };
        const finalAssertExports = false
          ? 0
          : {
              hasMethod,
              isArray,
              isInstance,
              isOneOf,
              isType,
              isArrayOfClass,
            };

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js':
      /*!***********************************************************************!*\
  !*** ../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ cacheMatchIgnoreParams: () =>
            /* binding */ cacheMatchIgnoreParams,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        function stripParams(fullURL, ignoreParams) {
          const strippedURL = new URL(fullURL);
          for (const param of ignoreParams) {
            strippedURL.searchParams.delete(param);
          }
          return strippedURL.href;
        }
        /**
         * Matches an item in the cache, ignoring specific URL params. This is similar
         * to the `ignoreSearch` option, but it allows you to ignore just specific
         * params (while continuing to match on the others).
         *
         * @private
         * @param {Cache} cache
         * @param {Request} request
         * @param {Object} matchOptions
         * @param {Array<string>} ignoreParams
         * @return {Promise<Response|undefined>}
         */
        async function cacheMatchIgnoreParams(
          cache,
          request,
          ignoreParams,
          matchOptions
        ) {
          const strippedRequestURL = stripParams(request.url, ignoreParams);
          // If the request doesn't include any ignored params, match as normal.
          if (request.url === strippedRequestURL) {
            return cache.match(request, matchOptions);
          }
          // Otherwise, match by comparing keys
          const keysOptions = Object.assign(Object.assign({}, matchOptions), {
            ignoreSearch: true,
          });
          const cacheKeys = await cache.keys(request, keysOptions);
          for (const cacheKey of cacheKeys) {
            const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
            if (strippedRequestURL === strippedCacheKeyURL) {
              return cache.match(cacheKey, matchOptions);
            }
          }
          return;
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/cacheNames.js':
      /*!***********************************************************!*\
  !*** ../node_modules/workbox-core/_private/cacheNames.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ cacheNames: () => /* binding */ cacheNames,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const _cacheNameDetails = {
          googleAnalytics: 'googleAnalytics',
          precache: 'precache-v2',
          prefix: 'workbox',
          runtime: 'runtime',
          suffix: typeof registration !== 'undefined' ? registration.scope : '',
        };
        const _createCacheName = cacheName => {
          return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
            .filter(value => value && value.length > 0)
            .join('-');
        };
        const eachCacheNameDetail = fn => {
          for (const key of Object.keys(_cacheNameDetails)) {
            fn(key);
          }
        };
        const cacheNames = {
          updateDetails: details => {
            eachCacheNameDetail(key => {
              if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
              }
            });
          },
          getGoogleAnalyticsName: userCacheName => {
            return (
              userCacheName ||
              _createCacheName(_cacheNameDetails.googleAnalytics)
            );
          },
          getPrecacheName: userCacheName => {
            return (
              userCacheName || _createCacheName(_cacheNameDetails.precache)
            );
          },
          getPrefix: () => {
            return _cacheNameDetails.prefix;
          },
          getRuntimeName: userCacheName => {
            return userCacheName || _createCacheName(_cacheNameDetails.runtime);
          },
          getSuffix: () => {
            return _cacheNameDetails.suffix;
          },
        };

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js':
      /*!***********************************************************************************!*\
  !*** ../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ canConstructResponseFromBodyStream: () =>
            /* binding */ canConstructResponseFromBodyStream,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        let supportStatus;
        /**
         * A utility function that determines whether the current browser supports
         * constructing a new `Response` from a `response.body` stream.
         *
         * @return {boolean} `true`, if the current browser can successfully
         *     construct a `Response` from a `response.body` stream, `false` otherwise.
         *
         * @private
         */
        function canConstructResponseFromBodyStream() {
          if (supportStatus === undefined) {
            const testResponse = new Response('');
            if ('body' in testResponse) {
              try {
                new Response(testResponse.body);
                supportStatus = true;
              } catch (error) {
                supportStatus = false;
              }
            }
            supportStatus = false;
          }
          return supportStatus;
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js':
      /*!***************************************************************************!*\
  !*** ../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ executeQuotaErrorCallbacks: () =>
            /* binding */ executeQuotaErrorCallbacks,
          /* harmony export */
        });
        /* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../models/quotaErrorCallbacks.js */ '../node_modules/workbox-core/models/quotaErrorCallbacks.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Runs all of the callback functions, one at a time sequentially, in the order
         * in which they were registered.
         *
         * @memberof workbox-core
         * @private
         */
        async function executeQuotaErrorCallbacks() {
          if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(
              `About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
                `callbacks to clean up caches.`
            );
          }
          for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
            await callback();
            if (true) {
              _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(
                callback,
                'is complete.'
              );
            }
          }
          if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(
              'Finished running callbacks.'
            );
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/getFriendlyURL.js':
      /*!***************************************************************!*\
  !*** ../node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getFriendlyURL: () =>
            /* binding */ getFriendlyURL,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const getFriendlyURL = url => {
          const urlObj = new URL(String(url), location.href);
          // See https://github.com/GoogleChrome/workbox/issues/2323
          // We want to include everything, except for the origin if it's same-origin.
          return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
        };

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/logger.js':
      /*!*******************************************************!*\
  !*** ../node_modules/workbox-core/_private/logger.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ logger: () => /* binding */ logger,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const logger = false
          ? 0
          : (() => {
              // Don't overwrite this value if it's already set.
              // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
              if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
                self.__WB_DISABLE_DEV_LOGS = false;
              }
              let inGroup = false;
              const methodToColorMap = {
                debug: `#7f8c8d`,
                log: `#2ecc71`,
                warn: `#f39c12`,
                error: `#c0392b`,
                groupCollapsed: `#3498db`,
                groupEnd: null, // No colored prefix on groupEnd
              };
              const print = function (method, args) {
                if (self.__WB_DISABLE_DEV_LOGS) {
                  return;
                }
                if (method === 'groupCollapsed') {
                  // Safari doesn't print all console.groupCollapsed() arguments:
                  // https://bugs.webkit.org/show_bug.cgi?id=182754
                  if (
                    /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                  ) {
                    console[method](...args);
                    return;
                  }
                }
                const styles = [
                  `background: ${methodToColorMap[method]}`,
                  `border-radius: 0.5em`,
                  `color: white`,
                  `font-weight: bold`,
                  `padding: 2px 0.5em`,
                ];
                // When in a group, the workbox prefix is not displayed.
                const logPrefix = inGroup
                  ? []
                  : ['%cworkbox', styles.join(';')];
                console[method](...logPrefix, ...args);
                if (method === 'groupCollapsed') {
                  inGroup = true;
                }
                if (method === 'groupEnd') {
                  inGroup = false;
                }
              };
              // eslint-disable-next-line @typescript-eslint/ban-types
              const api = {};
              const loggerMethods = Object.keys(methodToColorMap);
              for (const key of loggerMethods) {
                const method = key;
                api[method] = (...args) => {
                  print(method, args);
                };
              }
              return api;
            })();

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/timeout.js':
      /*!********************************************************!*\
  !*** ../node_modules/workbox-core/_private/timeout.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ timeout: () => /* binding */ timeout,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Returns a promise that resolves and the passed number of milliseconds.
         * This utility is an async/await-friendly version of `setTimeout`.
         *
         * @param {number} ms
         * @return {Promise}
         * @private
         */
        function timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_private/waitUntil.js':
      /*!**********************************************************!*\
  !*** ../node_modules/workbox-core/_private/waitUntil.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ waitUntil: () => /* binding */ waitUntil,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A utility method that makes it easier to use `event.waitUntil` with
         * async functions and return the result.
         *
         * @param {ExtendableEvent} event
         * @param {Function} asyncFn
         * @return {Function}
         * @private
         */
        function waitUntil(event, asyncFn) {
          const returnPromise = asyncFn();
          event.waitUntil(returnPromise);
          return returnPromise;
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/_version.js':
      /*!************************************************!*\
  !*** ../node_modules/workbox-core/_version.js ***!
  \************************************************/
      /***/ () => {
        // @ts-ignore
        try {
          self['workbox:core:7.0.0'] && _();
        } catch (e) {}

        /***/
      },

    /***/ '../node_modules/workbox-core/copyResponse.js':
      /*!****************************************************!*\
  !*** ../node_modules/workbox-core/copyResponse.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ copyResponse: () => /* binding */ copyResponse,
          /* harmony export */
        });
        /* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_private/canConstructResponseFromBodyStream.js */ '../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js'
          );
        /* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Allows developers to copy a response and modify its `headers`, `status`,
         * or `statusText` values (the values settable via a
         * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
         * object in the constructor).
         * To modify these values, pass a function as the second argument. That
         * function will be invoked with a single object with the response properties
         * `{headers, status, statusText}`. The return value of this function will
         * be used as the `ResponseInit` for the new `Response`. To change the values
         * either modify the passed parameter(s) and return it, or return a totally
         * new object.
         *
         * This method is intentionally limited to same-origin responses, regardless of
         * whether CORS was used or not.
         *
         * @param {Response} response
         * @param {Function} modifier
         * @memberof workbox-core
         */
        async function copyResponse(response, modifier) {
          let origin = null;
          // If response.url isn't set, assume it's cross-origin and keep origin null.
          if (response.url) {
            const responseURL = new URL(response.url);
            origin = responseURL.origin;
          }
          if (origin !== self.location.origin) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError(
              'cross-origin-copy-response',
              {origin}
            );
          }
          const clonedResponse = response.clone();
          // Create a fresh `ResponseInit` object by cloning the headers.
          const responseInit = {
            headers: new Headers(clonedResponse.headers),
            status: clonedResponse.status,
            statusText: clonedResponse.statusText,
          };
          // Apply any user modifications.
          const modifiedResponseInit = modifier
            ? modifier(responseInit)
            : responseInit;
          // Create the new response from the body stream and `ResponseInit`
          // modifications. Note: not all browsers support the Response.body stream,
          // so fall back to reading the entire body into memory as a blob.
          const body = (0,
          _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
            ? clonedResponse.body
            : await clonedResponse.blob();
          return new Response(body, modifiedResponseInit);
        }

        /***/
      },

    /***/ '../node_modules/workbox-core/models/messages/messageGenerator.js':
      /*!************************************************************************!*\
  !*** ../node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ messageGenerator: () =>
            /* binding */ messageGenerator,
          /* harmony export */
        });
        /* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./messages.js */ '../node_modules/workbox-core/models/messages/messages.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const fallback = (code, ...args) => {
          let msg = code;
          if (args.length > 0) {
            msg += ` :: ${JSON.stringify(args)}`;
          }
          return msg;
        };
        const generatorFunction = (code, details = {}) => {
          const message =
            _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
          if (!message) {
            throw new Error(`Unable to find message for code '${code}'.`);
          }
          return message(details);
        };
        const messageGenerator = false ? 0 : generatorFunction;

        /***/
      },

    /***/ '../node_modules/workbox-core/models/messages/messages.js':
      /*!****************************************************************!*\
  !*** ../node_modules/workbox-core/models/messages/messages.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ messages: () => /* binding */ messages,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const messages = {
          'invalid-value': ({paramName, validValueDescription, value}) => {
            if (!paramName || !validValueDescription) {
              throw new Error(`Unexpected input to 'invalid-value' error.`);
            }
            return (
              `The '${paramName}' parameter was given a value with an ` +
              `unexpected value. ${validValueDescription} Received a value of ` +
              `${JSON.stringify(value)}.`
            );
          },
          'not-an-array': ({moduleName, className, funcName, paramName}) => {
            if (!moduleName || !className || !funcName || !paramName) {
              throw new Error(`Unexpected input to 'not-an-array' error.`);
            }
            return (
              `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className}.${funcName}()' must be an array.`
            );
          },
          'incorrect-type': ({
            expectedType,
            paramName,
            moduleName,
            className,
            funcName,
          }) => {
            if (!expectedType || !paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-type' error.`);
            }
            const classNameStr = className ? `${className}.` : '';
            return (
              `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}` +
              `${funcName}()' must be of type ${expectedType}.`
            );
          },
          'incorrect-class': ({
            expectedClassName,
            paramName,
            moduleName,
            className,
            funcName,
            isReturnValueProblem,
          }) => {
            if (!expectedClassName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-class' error.`);
            }
            const classNameStr = className ? `${className}.` : '';
            if (isReturnValueProblem) {
              return (
                `The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`
              );
            }
            return (
              `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}${funcName}()' ` +
              `must be an instance of class ${expectedClassName}.`
            );
          },
          'missing-a-method': ({
            expectedMethod,
            paramName,
            moduleName,
            className,
            funcName,
          }) => {
            if (
              !expectedMethod ||
              !paramName ||
              !moduleName ||
              !className ||
              !funcName
            ) {
              throw new Error(`Unexpected input to 'missing-a-method' error.`);
            }
            return (
              `${moduleName}.${className}.${funcName}() expected the ` +
              `'${paramName}' parameter to expose a '${expectedMethod}' method.`
            );
          },
          'add-to-cache-list-unexpected-type': ({entry}) => {
            return (
              `An unexpected entry was passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
              `'${JSON.stringify(
                entry
              )}' isn't supported. You must supply an array of ` +
              `strings with one or more characters, objects with a url property or ` +
              `Request objects.`
            );
          },
          'add-to-cache-list-conflicting-entries': ({
            firstEntry,
            secondEntry,
          }) => {
            if (!firstEntry || !secondEntry) {
              throw new Error(
                `Unexpected input to ` +
                  `'add-to-cache-list-duplicate-entries' error.`
              );
            }
            return (
              `Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${firstEntry} but different revision details. Workbox is ` +
              `unable to cache and version the asset correctly. Please remove one ` +
              `of the entries.`
            );
          },
          'plugin-error-request-will-fetch': ({thrownErrorMessage}) => {
            if (!thrownErrorMessage) {
              throw new Error(
                `Unexpected input to ` +
                  `'plugin-error-request-will-fetch', error.`
              );
            }
            return (
              `An error was thrown by a plugins 'requestWillFetch()' method. ` +
              `The thrown error message was: '${thrownErrorMessage}'.`
            );
          },
          'invalid-cache-name': ({cacheNameId, value}) => {
            if (!cacheNameId) {
              throw new Error(
                `Expected a 'cacheNameId' for error 'invalid-cache-name'`
              );
            }
            return (
              `You must provide a name containing at least one character for ` +
              `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
              `'${JSON.stringify(value)}'`
            );
          },
          'unregister-route-but-not-found-with-method': ({method}) => {
            if (!method) {
              throw new Error(
                `Unexpected input to ` +
                  `'unregister-route-but-not-found-with-method' error.`
              );
            }
            return (
              `The route you're trying to unregister was not  previously ` +
              `registered for the method type '${method}'.`
            );
          },
          'unregister-route-route-not-registered': () => {
            return (
              `The route you're trying to unregister was not previously ` +
              `registered.`
            );
          },
          'queue-replay-failed': ({name}) => {
            return `Replaying the background sync queue '${name}' failed.`;
          },
          'duplicate-queue-name': ({name}) => {
            return (
              `The Queue name '${name}' is already being used. ` +
              `All instances of backgroundSync.Queue must be given unique names.`
            );
          },
          'expired-test-without-max-age': ({methodName, paramName}) => {
            return (
              `The '${methodName}()' method can only be used when the ` +
              `'${paramName}' is used in the constructor.`
            );
          },
          'unsupported-route-type': ({
            moduleName,
            className,
            funcName,
            paramName,
          }) => {
            return (
              `The supplied '${paramName}' parameter was an unsupported type. ` +
              `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
              `valid input types.`
            );
          },
          'not-array-of-class': ({
            value,
            expectedClass,
            moduleName,
            className,
            funcName,
            paramName,
          }) => {
            return (
              `The supplied '${paramName}' parameter must be an array of ` +
              `'${expectedClass}' objects. Received '${JSON.stringify(
                value
              )},'. ` +
              `Please check the call to ${moduleName}.${className}.${funcName}() ` +
              `to fix the issue.`
            );
          },
          'max-entries-or-age-required': ({
            moduleName,
            className,
            funcName,
          }) => {
            return (
              `You must define either config.maxEntries or config.maxAgeSeconds` +
              `in ${moduleName}.${className}.${funcName}`
            );
          },
          'statuses-or-headers-required': ({
            moduleName,
            className,
            funcName,
          }) => {
            return (
              `You must define either config.statuses or config.headers` +
              `in ${moduleName}.${className}.${funcName}`
            );
          },
          'invalid-string': ({moduleName, funcName, paramName}) => {
            if (!paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'invalid-string' error.`);
            }
            return (
              `When using strings, the '${paramName}' parameter must start with ` +
              `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
              `Please see the docs for ${moduleName}.${funcName}() for ` +
              `more info.`
            );
          },
          'channel-name-required': () => {
            return (
              `You must provide a channelName to construct a ` +
              `BroadcastCacheUpdate instance.`
            );
          },
          'invalid-responses-are-same-args': () => {
            return (
              `The arguments passed into responsesAreSame() appear to be ` +
              `invalid. Please ensure valid Responses are used.`
            );
          },
          'expire-custom-caches-only': () => {
            return (
              `You must provide a 'cacheName' property when using the ` +
              `expiration plugin with a runtime caching strategy.`
            );
          },
          'unit-must-be-bytes': ({normalizedRangeHeader}) => {
            if (!normalizedRangeHeader) {
              throw new Error(
                `Unexpected input to 'unit-must-be-bytes' error.`
              );
            }
            return (
              `The 'unit' portion of the Range header must be set to 'bytes'. ` +
              `The Range header provided was "${normalizedRangeHeader}"`
            );
          },
          'single-range-only': ({normalizedRangeHeader}) => {
            if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'single-range-only' error.`);
            }
            return (
              `Multiple ranges are not supported. Please use a  single start ` +
              `value, and optional end value. The Range header provided was ` +
              `"${normalizedRangeHeader}"`
            );
          },
          'invalid-range-values': ({normalizedRangeHeader}) => {
            if (!normalizedRangeHeader) {
              throw new Error(
                `Unexpected input to 'invalid-range-values' error.`
              );
            }
            return (
              `The Range header is missing both start and end values. At least ` +
              `one of those values is needed. The Range header provided was ` +
              `"${normalizedRangeHeader}"`
            );
          },
          'no-range-header': () => {
            return `No Range header was found in the Request provided.`;
          },
          'range-not-satisfiable': ({size, start, end}) => {
            return (
              `The start (${start}) and end (${end}) values in the Range are ` +
              `not satisfiable by the cached response, which is ${size} bytes.`
            );
          },
          'attempt-to-cache-non-get-request': ({url, method}) => {
            return (
              `Unable to cache '${url}' because it is a '${method}' request and ` +
              `only 'GET' requests can be cached.`
            );
          },
          'cache-put-with-no-response': ({url}) => {
            return (
              `There was an attempt to cache '${url}' but the response was not ` +
              `defined.`
            );
          },
          'no-response': ({url, error}) => {
            let message = `The strategy could not generate a response for '${url}'.`;
            if (error) {
              message += ` The underlying error is ${error}.`;
            }
            return message;
          },
          'bad-precaching-response': ({url, status}) => {
            return (
              `The precaching request for '${url}' failed` +
              (status ? ` with an HTTP status of ${status}.` : `.`)
            );
          },
          'non-precached-url': ({url}) => {
            return (
              `createHandlerBoundToURL('${url}') was called, but that URL is ` +
              `not precached. Please pass in a URL that is precached instead.`
            );
          },
          'add-to-cache-list-conflicting-integrities': ({url}) => {
            return (
              `Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${url} with different integrity values. Please remove one of them.`
            );
          },
          'missing-precache-entry': ({cacheName, url}) => {
            return `Unable to find a precached response in ${cacheName} for ${url}.`;
          },
          'cross-origin-copy-response': ({origin}) => {
            return (
              `workbox-core.copyResponse() can only be used with same-origin ` +
              `responses. It was passed a response with origin ${origin}.`
            );
          },
          'opaque-streams-source': ({type}) => {
            const message =
              `One of the workbox-streams sources resulted in an ` +
              `'${type}' response.`;
            if (type === 'opaqueredirect') {
              return (
                `${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`
              );
            }
            return `${message} Please ensure your sources are CORS-enabled.`;
          },
        };

        /***/
      },

    /***/ '../node_modules/workbox-core/models/quotaErrorCallbacks.js':
      /*!******************************************************************!*\
  !*** ../node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ quotaErrorCallbacks: () =>
            /* binding */ quotaErrorCallbacks,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-core/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        // Callbacks to be executed whenever there's a quota error.
        // Can't change Function type right now.
        // eslint-disable-next-line @typescript-eslint/ban-types
        const quotaErrorCallbacks = new Set();

        /***/
      },

    /***/ '../node_modules/workbox-precaching/PrecacheController.js':
      /*!****************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheController.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheController: () =>
            /* binding */ PrecacheController,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/cacheNames.js */ '../node_modules/workbox-core/_private/cacheNames.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! workbox-core/_private/waitUntil.js */ '../node_modules/workbox-core/_private/waitUntil.js'
          );
        /* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./utils/createCacheKey.js */ '../node_modules/workbox-precaching/utils/createCacheKey.js'
          );
        /* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./utils/PrecacheInstallReportPlugin.js */ '../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js'
          );
        /* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./utils/PrecacheCacheKeyPlugin.js */ '../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js'
          );
        /* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./utils/printCleanupDetails.js */ '../node_modules/workbox-precaching/utils/printCleanupDetails.js'
          );
        /* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./utils/printInstallDetails.js */ '../node_modules/workbox-precaching/utils/printInstallDetails.js'
          );
        /* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./PrecacheStrategy.js */ '../node_modules/workbox-precaching/PrecacheStrategy.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_11__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Performs efficient precaching of assets.
         *
         * @memberof workbox-precaching
         */
        class PrecacheController {
          /**
           * Create a new PrecacheController.
           *
           * @param {Object} [options]
           * @param {string} [options.cacheName] The cache to use for precaching.
           * @param {string} [options.plugins] Plugins to use when precaching as well
           * as responding to fetch events for precached assets.
           * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
           * get the response from the network if there's a precache miss.
           */
          constructor({
            cacheName,
            plugins = [],
            fallbackToNetwork = true,
          } = {}) {
            this._urlsToCacheKeys = new Map();
            this._urlsToCacheModes = new Map();
            this._cacheKeysToIntegrities = new Map();
            this._strategy =
              new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy(
                {
                  cacheName:
                    workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(
                      cacheName
                    ),
                  plugins: [
                    ...plugins,
                    new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin(
                      {precacheController: this}
                    ),
                  ],
                  fallbackToNetwork,
                }
              );
            // Bind the install and activate methods to the instance.
            this.install = this.install.bind(this);
            this.activate = this.activate.bind(this);
          }
          /**
           * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
           * used to cache assets and respond to fetch events.
           */
          get strategy() {
            return this._strategy;
          }
          /**
           * Adds items to the precache list, removing any duplicates and
           * stores the files in the
           * {@link workbox-core.cacheNames|"precache cache"} when the service
           * worker installs.
           *
           * This method can be called multiple times.
           *
           * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
           */
          precache(entries) {
            this.addToCacheList(entries);
            if (!this._installAndActiveListenersAdded) {
              self.addEventListener('install', this.install);
              self.addEventListener('activate', this.activate);
              this._installAndActiveListenersAdded = true;
            }
          }
          /**
           * This method will add items to the precache list, removing duplicates
           * and ensuring the information is valid.
           *
           * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
           *     Array of entries to precache.
           */
          addToCacheList(entries) {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(
                entries,
                {
                  moduleName: 'workbox-precaching',
                  className: 'PrecacheController',
                  funcName: 'addToCacheList',
                  paramName: 'entries',
                }
              );
            }
            const urlsToWarnAbout = [];
            for (const entry of entries) {
              // See https://github.com/GoogleChrome/workbox/issues/2259
              if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
              } else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
              }
              const {cacheKey, url} = (0,
              _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(
                entry
              );
              const cacheMode =
                typeof entry !== 'string' && entry.revision
                  ? 'reload'
                  : 'default';
              if (
                this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey
              ) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(
                  'add-to-cache-list-conflicting-entries',
                  {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                  }
                );
              }
              if (typeof entry !== 'string' && entry.integrity) {
                if (
                  this._cacheKeysToIntegrities.has(cacheKey) &&
                  this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity
                ) {
                  throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(
                    'add-to-cache-list-conflicting-integrities',
                    {
                      url,
                    }
                  );
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
              }
              this._urlsToCacheKeys.set(url, cacheKey);
              this._urlsToCacheModes.set(url, cacheMode);
              if (urlsToWarnAbout.length > 0) {
                const warningMessage =
                  `Workbox is precaching URLs without revision ` +
                  `info: ${urlsToWarnAbout.join(
                    ', '
                  )}\nThis is generally NOT safe. ` +
                  `Learn more at https://bit.ly/wb-precache`;
                if (false) {
                } else {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(
                    warningMessage
                  );
                }
              }
            }
          }
          /**
           * Precaches new and updated assets. Call this method from the service worker
           * install event.
           *
           * Note: this method calls `event.waitUntil()` for you, so you do not need
           * to call it yourself in your event handlers.
           *
           * @param {ExtendableEvent} event
           * @return {Promise<workbox-precaching.InstallResult>}
           */
          install(event) {
            // waitUntil returns Promise<any>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return (0,
            workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(
              event,
              async () => {
                const installReportPlugin =
                  new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
                this.strategy.plugins.push(installReportPlugin);
                // Cache entries one at a time.
                // See https://github.com/GoogleChrome/workbox/issues/2528
                for (const [url, cacheKey] of this._urlsToCacheKeys) {
                  const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                  const cacheMode = this._urlsToCacheModes.get(url);
                  const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                  });
                  await Promise.all(
                    this.strategy.handleAll({
                      params: {cacheKey},
                      request,
                      event,
                    })
                  );
                }
                const {updatedURLs, notUpdatedURLs} = installReportPlugin;
                if (true) {
                  (0,
                  _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(
                    updatedURLs,
                    notUpdatedURLs
                  );
                }
                return {updatedURLs, notUpdatedURLs};
              }
            );
          }
          /**
           * Deletes assets that are no longer present in the current precache manifest.
           * Call this method from the service worker activate event.
           *
           * Note: this method calls `event.waitUntil()` for you, so you do not need
           * to call it yourself in your event handlers.
           *
           * @param {ExtendableEvent} event
           * @return {Promise<workbox-precaching.CleanupResult>}
           */
          activate(event) {
            // waitUntil returns Promise<any>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return (0,
            workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(
              event,
              async () => {
                const cache = await self.caches.open(this.strategy.cacheName);
                const currentlyCachedRequests = await cache.keys();
                const expectedCacheKeys = new Set(
                  this._urlsToCacheKeys.values()
                );
                const deletedURLs = [];
                for (const request of currentlyCachedRequests) {
                  if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                  }
                }
                if (true) {
                  (0,
                  _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(
                    deletedURLs
                  );
                }
                return {deletedURLs};
              }
            );
          }
          /**
           * Returns a mapping of a precached URL to the corresponding cache key, taking
           * into account the revision information for the URL.
           *
           * @return {Map<string, string>} A URL to cache key mapping.
           */
          getURLsToCacheKeys() {
            return this._urlsToCacheKeys;
          }
          /**
           * Returns a list of all the URLs that have been precached by the current
           * service worker.
           *
           * @return {Array<string>} The precached URLs.
           */
          getCachedURLs() {
            return [...this._urlsToCacheKeys.keys()];
          }
          /**
           * Returns the cache key used for storing a given URL. If that URL is
           * unversioned, like `/index.html', then the cache key will be the original
           * URL with a search parameter appended to it.
           *
           * @param {string} url A URL whose cache key you want to look up.
           * @return {string} The versioned URL that corresponds to a cache key
           * for the original URL, or undefined if that URL isn't precached.
           */
          getCacheKeyForURL(url) {
            const urlObject = new URL(url, location.href);
            return this._urlsToCacheKeys.get(urlObject.href);
          }
          /**
           * @param {string} url A cache key whose SRI you want to look up.
           * @return {string} The subresource integrity associated with the cache key,
           * or undefined if it's not set.
           */
          getIntegrityForCacheKey(cacheKey) {
            return this._cacheKeysToIntegrities.get(cacheKey);
          }
          /**
           * This acts as a drop-in replacement for
           * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
           * with the following differences:
           *
           * - It knows what the name of the precache is, and only checks in that cache.
           * - It allows you to pass in an "original" URL without versioning parameters,
           * and it will automatically look up the correct cache key for the currently
           * active revision of that URL.
           *
           * E.g., `matchPrecache('index.html')` will find the correct precached
           * response for the currently active service worker, even if the actual cache
           * key is `'/index.html?__WB_REVISION__=1234abcd'`.
           *
           * @param {string|Request} request The key (without revisioning parameters)
           * to look up in the precache.
           * @return {Promise<Response|undefined>}
           */
          async matchPrecache(request) {
            const url = request instanceof Request ? request.url : request;
            const cacheKey = this.getCacheKeyForURL(url);
            if (cacheKey) {
              const cache = await self.caches.open(this.strategy.cacheName);
              return cache.match(cacheKey);
            }
            return undefined;
          }
          /**
           * Returns a function that looks up `url` in the precache (taking into
           * account revision information), and returns the corresponding `Response`.
           *
           * @param {string} url The precached URL which will be used to lookup the
           * `Response`.
           * @return {workbox-routing~handlerCallback}
           */
          createHandlerBoundToURL(url) {
            const cacheKey = this.getCacheKeyForURL(url);
            if (!cacheKey) {
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(
                'non-precached-url',
                {url}
              );
            }
            return options => {
              options.request = new Request(url);
              options.params = Object.assign({cacheKey}, options.params);
              return this.strategy.handle(options);
            };
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/PrecacheFallbackPlugin.js':
      /*!********************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheFallbackPlugin: () =>
            /* binding */ PrecacheFallbackPlugin,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
         * response to be used when a given strategy is unable to generate a response.
         *
         * It does this by intercepting the `handlerDidError` plugin callback
         * and returning a precached response, taking the expected revision parameter
         * into account automatically.
         *
         * Unless you explicitly pass in a `PrecacheController` instance to the
         * constructor, the default instance will be used. Generally speaking, most
         * developers will end up using the default.
         *
         * @memberof workbox-precaching
         */
        class PrecacheFallbackPlugin {
          /**
           * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
           *
           * @param {Object} config
           * @param {string} config.fallbackURL A precached URL to use as the fallback
           *     if the associated strategy can't generate a response.
           * @param {PrecacheController} [config.precacheController] An optional
           *     PrecacheController instance. If not provided, the default
           *     PrecacheController will be used.
           */
          constructor({fallbackURL, precacheController}) {
            /**
             * @return {Promise<Response>} The precache response for the fallback URL.
             *
             * @private
             */
            this.handlerDidError = () =>
              this._precacheController.matchPrecache(this._fallbackURL);
            this._fallbackURL = fallbackURL;
            this._precacheController =
              precacheController ||
              (0,
              _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/PrecacheRoute.js':
      /*!***********************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheRoute.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheRoute: () => /* binding */ PrecacheRoute,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/getFriendlyURL.js */ '../node_modules/workbox-core/_private/getFriendlyURL.js'
          );
        /* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! workbox-routing/Route.js */ '../node_modules/workbox-routing/Route.js'
          );
        /* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./utils/generateURLVariations.js */ '../node_modules/workbox-precaching/utils/generateURLVariations.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A subclass of {@link workbox-routing.Route} that takes a
         * {@link workbox-precaching.PrecacheController}
         * instance and uses it to match incoming requests and handle fetching
         * responses from the precache.
         *
         * @memberof workbox-precaching
         * @extends workbox-routing.Route
         */
        class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
          /**
           * @param {PrecacheController} precacheController A `PrecacheController`
           * instance used to both match requests and respond to fetch events.
           * @param {Object} [options] Options to control how requests are matched
           * against the list of precached URLs.
           * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
           * check cache entries for a URLs ending with '/' to see if there is a hit when
           * appending the `directoryIndex` value.
           * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
           * array of regex's to remove search params when looking for a cache match.
           * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
           * check the cache for the URL with a `.html` added to the end of the end.
           * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
           * This is a function that should take a URL and return an array of
           * alternative URLs that should be checked for precache matches.
           */
          constructor(precacheController, options) {
            const match = ({request}) => {
              const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
              for (const possibleURL of (0,
              _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(
                request.url,
                options
              )) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                  const integrity =
                    precacheController.getIntegrityForCacheKey(cacheKey);
                  return {cacheKey, integrity};
                }
              }
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(
                  `Precaching did not find a match for ` +
                    (0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                      request.url
                    )
                );
              }
              return;
            };
            super(match, precacheController.strategy);
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/PrecacheStrategy.js':
      /*!**************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheStrategy: () =>
            /* binding */ PrecacheStrategy,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/copyResponse.js */ '../node_modules/workbox-core/copyResponse.js'
          );
        /* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/cacheNames.js */ '../node_modules/workbox-core/_private/cacheNames.js'
          );
        /* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! workbox-core/_private/getFriendlyURL.js */ '../node_modules/workbox-core/_private/getFriendlyURL.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! workbox-strategies/Strategy.js */ '../node_modules/workbox-strategies/Strategy.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_6__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A {@link workbox-strategies.Strategy} implementation
         * specifically designed to work with
         * {@link workbox-precaching.PrecacheController}
         * to both cache and fetch precached assets.
         *
         * Note: an instance of this class is created automatically when creating a
         * `PrecacheController`; it's generally not necessary to create this yourself.
         *
         * @extends workbox-strategies.Strategy
         * @memberof workbox-precaching
         */
        class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
          /**
           *
           * @param {Object} [options]
           * @param {string} [options.cacheName] Cache name to store and retrieve
           * requests. Defaults to the cache names provided by
           * {@link workbox-core.cacheNames}.
           * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
           * to use in conjunction with this caching strategy.
           * @param {Object} [options.fetchOptions] Values passed along to the
           * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
           * of all fetch() requests made by this strategy.
           * @param {Object} [options.matchOptions] The
           * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
           * for any `cache.match()` or `cache.put()` calls made by this strategy.
           * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
           * get the response from the network if there's a precache miss.
           */
          constructor(options = {}) {
            options.cacheName =
              workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(
                options.cacheName
              );
            super(options);
            this._fallbackToNetwork =
              options.fallbackToNetwork === false ? false : true;
            // Redirected responses cannot be used to satisfy a navigation request, so
            // any redirected response must be "copied" rather than cloned, so the new
            // response doesn't contain the `redirected` flag. See:
            // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
            this.plugins.push(
              PrecacheStrategy.copyRedirectedCacheableResponsesPlugin
            );
          }
          /**
           * @private
           * @param {Request|string} request A request to run this strategy for.
           * @param {workbox-strategies.StrategyHandler} handler The event that
           *     triggered the request.
           * @return {Promise<Response>}
           */
          async _handle(request, handler) {
            const response = await handler.cacheMatch(request);
            if (response) {
              return response;
            }
            // If this is an `install` event for an entry that isn't already cached,
            // then populate the cache.
            if (handler.event && handler.event.type === 'install') {
              return await this._handleInstall(request, handler);
            }
            // Getting here means something went wrong. An entry that should have been
            // precached wasn't found in the cache.
            return await this._handleFetch(request, handler);
          }
          async _handleFetch(request, handler) {
            let response;
            const params = handler.params || {};
            // Fall back to the network if we're configured to do so.
            if (this._fallbackToNetwork) {
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(
                  `The precached response for ` +
                    `${(0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(
                      request.url
                    )} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`
                );
              }
              const integrityInManifest = params.integrity;
              const integrityInRequest = request.integrity;
              const noIntegrityConflict =
                !integrityInRequest ||
                integrityInRequest === integrityInManifest;
              // Do not add integrity if the original request is no-cors
              // See https://github.com/GoogleChrome/workbox/issues/3096
              response = await handler.fetch(
                new Request(request, {
                  integrity:
                    request.mode !== 'no-cors'
                      ? integrityInRequest || integrityInManifest
                      : undefined,
                })
              );
              // It's only "safe" to repair the cache if we're using SRI to guarantee
              // that the response matches the precache manifest's expectations,
              // and there's either a) no integrity property in the incoming request
              // or b) there is an integrity, and it matches the precache manifest.
              // See https://github.com/GoogleChrome/workbox/issues/2858
              // Also if the original request users no-cors we don't use integrity.
              // See https://github.com/GoogleChrome/workbox/issues/3096
              if (
                integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors'
              ) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(
                  request,
                  response.clone()
                );
                if (true) {
                  if (wasCached) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                      `A response for ${(0,
                      workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(
                        request.url
                      )} ` + `was used to "repair" the precache.`
                    );
                  }
                }
              }
            } else {
              // This shouldn't normally happen, but there are edge cases:
              // https://github.com/GoogleChrome/workbox/issues/1441
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError(
                'missing-precache-entry',
                {
                  cacheName: this.cacheName,
                  url: request.url,
                }
              );
            }
            if (true) {
              const cacheKey =
                params.cacheKey || (await handler.getCacheKey(request, 'read'));
              // Workbox is going to handle the route.
              // print the routing details to the console.
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                `Precaching is responding to: ` +
                  (0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(
                    request.url
                  )
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                `Serving the precached url: ${(0,
                workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(
                  cacheKey instanceof Request ? cacheKey.url : cacheKey
                )}`
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                `View request details here.`
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                request
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                `View response details here.`
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                response
              );
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            }
            return response;
          }
          async _handleInstall(request, handler) {
            this._useDefaultCacheabilityPluginIfNeeded();
            const response = await handler.fetch(request);
            // Make sure we defer cachePut() until after we know the response
            // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
            const wasCached = await handler.cachePut(request, response.clone());
            if (!wasCached) {
              // Throwing here will lead to the `install` handler failing, which
              // we want to do if *any* of the responses aren't safe to cache.
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError(
                'bad-precaching-response',
                {
                  url: request.url,
                  status: response.status,
                }
              );
            }
            return response;
          }
          /**
           * This method is complex, as there a number of things to account for:
           *
           * The `plugins` array can be set at construction, and/or it might be added to
           * to at any time before the strategy is used.
           *
           * At the time the strategy is used (i.e. during an `install` event), there
           * needs to be at least one plugin that implements `cacheWillUpdate` in the
           * array, other than `copyRedirectedCacheableResponsesPlugin`.
           *
           * - If this method is called and there are no suitable `cacheWillUpdate`
           * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
           *
           * - If this method is called and there is exactly one `cacheWillUpdate`, then
           * we don't have to do anything (this might be a previously added
           * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
           *
           * - If this method is called and there is more than one `cacheWillUpdate`,
           * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
           * we need to remove it. (This situation is unlikely, but it could happen if
           * the strategy is used multiple times, the first without a `cacheWillUpdate`,
           * and then later on after manually adding a custom `cacheWillUpdate`.)
           *
           * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
           *
           * @private
           */
          _useDefaultCacheabilityPluginIfNeeded() {
            let defaultPluginIndex = null;
            let cacheWillUpdatePluginCount = 0;
            for (const [index, plugin] of this.plugins.entries()) {
              // Ignore the copy redirected plugin when determining what to do.
              if (
                plugin ===
                PrecacheStrategy.copyRedirectedCacheableResponsesPlugin
              ) {
                continue;
              }
              // Save the default plugin's index, in case it needs to be removed.
              if (
                plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin
              ) {
                defaultPluginIndex = index;
              }
              if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
              }
            }
            if (cacheWillUpdatePluginCount === 0) {
              this.plugins.push(
                PrecacheStrategy.defaultPrecacheCacheabilityPlugin
              );
            } else if (
              cacheWillUpdatePluginCount > 1 &&
              defaultPluginIndex !== null
            ) {
              // Only remove the default plugin; multiple custom plugins are allowed.
              this.plugins.splice(defaultPluginIndex, 1);
            }
            // Nothing needs to be done if cacheWillUpdatePluginCount is 1
          }
        }
        PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
          async cacheWillUpdate({response}) {
            if (!response || response.status >= 400) {
              return null;
            }
            return response;
          },
        };
        PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
          async cacheWillUpdate({response}) {
            return response.redirected
              ? await (0,
                workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(
                  response
                )
              : response;
          },
        };

        /***/
      },

    /***/ '../node_modules/workbox-precaching/_types.js':
      /*!****************************************************!*\
  !*** ../node_modules/workbox-precaching/_types.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        // * * * IMPORTANT! * * *
        // ------------------------------------------------------------------------- //
        // jdsoc type definitions cannot be declared above TypeScript definitions or
        // they'll be stripped from the built `.js` files, and they'll only be in the
        // `d.ts` files, which aren't read by the jsdoc generator. As a result we
        // have to put declare them below.
        /**
         * @typedef {Object} InstallResult
         * @property {Array<string>} updatedURLs List of URLs that were updated during
         * installation.
         * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
         * date.
         *
         * @memberof workbox-precaching
         */
        /**
         * @typedef {Object} CleanupResult
         * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
         * while cleaning up the cache.
         *
         * @memberof workbox-precaching
         */
        /**
         * @typedef {Object} PrecacheEntry
         * @property {string} url URL to precache.
         * @property {string} [revision] Revision information for the URL.
         * @property {string} [integrity] Integrity metadata that will be used when
         * making the network request for the URL.
         *
         * @memberof workbox-precaching
         */
        /**
         * The "urlManipulation" callback can be used to determine if there are any
         * additional permutations of a URL that should be used to check against
         * the available precached files.
         *
         * For example, Workbox supports checking for '/index.html' when the URL
         * '/' is provided. This callback allows additional, custom checks.
         *
         * @callback ~urlManipulation
         * @param {Object} context
         * @param {URL} context.url The request's URL.
         * @return {Array<URL>} To add additional urls to test, return an Array of
         * URLs. Please note that these **should not be strings**, but URL objects.
         *
         * @memberof workbox-precaching
         */

        /***/
      },

    /***/ '../node_modules/workbox-precaching/_version.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/_version.js ***!
  \******************************************************/
      /***/ () => {
        // @ts-ignore
        try {
          self['workbox:precaching:7.0.0'] && _();
        } catch (e) {}

        /***/
      },

    /***/ '../node_modules/workbox-precaching/addPlugins.js':
      /*!********************************************************!*\
  !*** ../node_modules/workbox-precaching/addPlugins.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addPlugins: () => /* binding */ addPlugins,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Adds plugins to the precaching strategy.
         *
         * @param {Array<Object>} plugins
         *
         * @memberof workbox-precaching
         */
        function addPlugins(plugins) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          precacheController.strategy.plugins.push(...plugins);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/addRoute.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/addRoute.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addRoute: () => /* binding */ addRoute,
          /* harmony export */
        });
        /* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-routing/registerRoute.js */ '../node_modules/workbox-routing/registerRoute.js'
          );
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./PrecacheRoute.js */ '../node_modules/workbox-precaching/PrecacheRoute.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Add a `fetch` listener to the service worker that will
         * respond to
         * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
         * with precached assets.
         *
         * Requests for assets that aren't precached, the `FetchEvent` will not be
         * responded to, allowing the event to fall through to other `fetch` event
         * listeners.
         *
         * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
         * options.
         *
         * @memberof workbox-precaching
         */
        function addRoute(options) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
          const precacheRoute =
            new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(
              precacheController,
              options
            );
          (0,
          workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(
            precacheRoute
          );
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/cleanupOutdatedCaches.js':
      /*!*******************************************************************!*\
  !*** ../node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ cleanupOutdatedCaches: () =>
            /* binding */ cleanupOutdatedCaches,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/cacheNames.js */ '../node_modules/workbox-core/_private/cacheNames.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./utils/deleteOutdatedCaches.js */ '../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Adds an `activate` event listener which will clean up incompatible
         * precaches that were created by older versions of Workbox.
         *
         * @memberof workbox-precaching
         */
        function cleanupOutdatedCaches() {
          // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
          self.addEventListener('activate', event => {
            const cacheName =
              workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
            event.waitUntil(
              (0,
              _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(
                cacheName
              ).then(cachesDeleted => {
                if (true) {
                  if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(
                      `The following out-of-date precaches were cleaned up ` +
                        `automatically:`,
                      cachesDeleted
                    );
                  }
                }
              })
            );
          });
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/createHandlerBoundToURL.js':
      /*!*********************************************************************!*\
  !*** ../node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createHandlerBoundToURL: () =>
            /* binding */ createHandlerBoundToURL,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Helper function that calls
         * {@link PrecacheController#createHandlerBoundToURL} on the default
         * {@link PrecacheController} instance.
         *
         * If you are creating your own {@link PrecacheController}, then call the
         * {@link PrecacheController#createHandlerBoundToURL} on that instance,
         * instead of using this function.
         *
         * @param {string} url The precached URL which will be used to lookup the
         * `Response`.
         * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
         * response from the network if there's a precache miss.
         * @return {workbox-routing~handlerCallback}
         *
         * @memberof workbox-precaching
         */
        function createHandlerBoundToURL(url) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          return precacheController.createHandlerBoundToURL(url);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/getCacheKeyForURL.js':
      /*!***************************************************************!*\
  !*** ../node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCacheKeyForURL: () =>
            /* binding */ getCacheKeyForURL,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Takes in a URL, and returns the corresponding URL that could be used to
         * lookup the entry in the precache.
         *
         * If a relative URL is provided, the location of the service worker file will
         * be used as the base.
         *
         * For precached entries without revision information, the cache key will be the
         * same as the original URL.
         *
         * For precached entries with revision information, the cache key will be the
         * original URL with the addition of a query parameter used for keeping track of
         * the revision info.
         *
         * @param {string} url The URL whose cache key to look up.
         * @return {string} The cache key that corresponds to that URL.
         *
         * @memberof workbox-precaching
         */
        function getCacheKeyForURL(url) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          return precacheController.getCacheKeyForURL(url);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/index.js':
      /*!***************************************************!*\
  !*** ../node_modules/workbox-precaching/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheController: () =>
            /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController,
          /* harmony export */ PrecacheFallbackPlugin: () =>
            /* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin,
          /* harmony export */ PrecacheRoute: () =>
            /* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute,
          /* harmony export */ PrecacheStrategy: () =>
            /* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy,
          /* harmony export */ addPlugins: () =>
            /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins,
          /* harmony export */ addRoute: () =>
            /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute,
          /* harmony export */ cleanupOutdatedCaches: () =>
            /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches,
          /* harmony export */ createHandlerBoundToURL: () =>
            /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL,
          /* harmony export */ getCacheKeyForURL: () =>
            /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL,
          /* harmony export */ matchPrecache: () =>
            /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache,
          /* harmony export */ precache: () =>
            /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache,
          /* harmony export */ precacheAndRoute: () =>
            /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute,
          /* harmony export */
        });
        /* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./addPlugins.js */ '../node_modules/workbox-precaching/addPlugins.js'
          );
        /* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./addRoute.js */ '../node_modules/workbox-precaching/addRoute.js'
          );
        /* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./cleanupOutdatedCaches.js */ '../node_modules/workbox-precaching/cleanupOutdatedCaches.js'
          );
        /* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./createHandlerBoundToURL.js */ '../node_modules/workbox-precaching/createHandlerBoundToURL.js'
          );
        /* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./getCacheKeyForURL.js */ '../node_modules/workbox-precaching/getCacheKeyForURL.js'
          );
        /* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./matchPrecache.js */ '../node_modules/workbox-precaching/matchPrecache.js'
          );
        /* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./precache.js */ '../node_modules/workbox-precaching/precache.js'
          );
        /* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./precacheAndRoute.js */ '../node_modules/workbox-precaching/precacheAndRoute.js'
          );
        /* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./PrecacheController.js */ '../node_modules/workbox-precaching/PrecacheController.js'
          );
        /* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./PrecacheRoute.js */ '../node_modules/workbox-precaching/PrecacheRoute.js'
          );
        /* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./PrecacheStrategy.js */ '../node_modules/workbox-precaching/PrecacheStrategy.js'
          );
        /* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./PrecacheFallbackPlugin.js */ '../node_modules/workbox-precaching/PrecacheFallbackPlugin.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_12__
          );
        /* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ./_types.js */ '../node_modules/workbox-precaching/_types.js'
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Most consumers of this module will want to use the
         * {@link workbox-precaching.precacheAndRoute}
         * method to add assets to the cache and respond to network requests with these
         * cached assets.
         *
         * If you require more control over caching and routing, you can use the
         * {@link workbox-precaching.PrecacheController}
         * interface.
         *
         * @module workbox-precaching
         */

        /***/
      },

    /***/ '../node_modules/workbox-precaching/matchPrecache.js':
      /*!***********************************************************!*\
  !*** ../node_modules/workbox-precaching/matchPrecache.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ matchPrecache: () => /* binding */ matchPrecache,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Helper function that calls
         * {@link PrecacheController#matchPrecache} on the default
         * {@link PrecacheController} instance.
         *
         * If you are creating your own {@link PrecacheController}, then call
         * {@link PrecacheController#matchPrecache} on that instance,
         * instead of using this function.
         *
         * @param {string|Request} request The key (without revisioning parameters)
         * to look up in the precache.
         * @return {Promise<Response|undefined>}
         *
         * @memberof workbox-precaching
         */
        function matchPrecache(request) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          return precacheController.matchPrecache(request);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/precache.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/precache.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ precache: () => /* binding */ precache,
          /* harmony export */
        });
        /* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./utils/getOrCreatePrecacheController.js */ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Adds items to the precache list, removing any duplicates and
         * stores the files in the
         * {@link workbox-core.cacheNames|"precache cache"} when the service
         * worker installs.
         *
         * This method can be called multiple times.
         *
         * Please note: This method **will not** serve any of the cached files for you.
         * It only precaches files. To respond to a network request you call
         * {@link workbox-precaching.addRoute}.
         *
         * If you have a single array of files to precache, you can just call
         * {@link workbox-precaching.precacheAndRoute}.
         *
         * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
         *
         * @memberof workbox-precaching
         */
        function precache(entries) {
          const precacheController = (0,
          _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
          precacheController.precache(entries);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/precacheAndRoute.js':
      /*!**************************************************************!*\
  !*** ../node_modules/workbox-precaching/precacheAndRoute.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ precacheAndRoute: () =>
            /* binding */ precacheAndRoute,
          /* harmony export */
        });
        /* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./addRoute.js */ '../node_modules/workbox-precaching/addRoute.js'
          );
        /* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./precache.js */ '../node_modules/workbox-precaching/precache.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * This method will add entries to the precache list and add a route to
         * respond to fetch events.
         *
         * This is a convenience method that will call
         * {@link workbox-precaching.precache} and
         * {@link workbox-precaching.addRoute} in a single call.
         *
         * @param {Array<Object|string>} entries Array of entries to precache.
         * @param {Object} [options] See the
         * {@link workbox-precaching.PrecacheRoute} options.
         *
         * @memberof workbox-precaching
         */
        function precacheAndRoute(entries, options) {
          (0, _precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
          (0, _addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js':
      /*!**************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheCacheKeyPlugin: () =>
            /* binding */ PrecacheCacheKeyPlugin,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A plugin, designed to be used with PrecacheController, to translate URLs into
         * the corresponding cache key, based on the current revision info.
         *
         * @private
         */
        class PrecacheCacheKeyPlugin {
          constructor({precacheController}) {
            this.cacheKeyWillBeUsed = async ({request, params}) => {
              // Params is type any, can't change right now.
              /* eslint-disable */
              const cacheKey =
                (params === null || params === void 0
                  ? void 0
                  : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
              /* eslint-enable */
              return cacheKey
                ? new Request(cacheKey, {headers: request.headers})
                : request;
            };
            this._precacheController = precacheController;
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js':
      /*!*******************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheInstallReportPlugin: () =>
            /* binding */ PrecacheInstallReportPlugin,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A plugin, designed to be used with PrecacheController, to determine the
         * of assets that were updated (or not updated) during the install event.
         *
         * @private
         */
        class PrecacheInstallReportPlugin {
          constructor() {
            this.updatedURLs = [];
            this.notUpdatedURLs = [];
            this.handlerWillStart = async ({request, state}) => {
              // TODO: `state` should never be undefined...
              if (state) {
                state.originalRequest = request;
              }
            };
            this.cachedResponseWillBeUsed = async ({
              event,
              state,
              cachedResponse,
            }) => {
              if (event.type === 'install') {
                if (
                  state &&
                  state.originalRequest &&
                  state.originalRequest instanceof Request
                ) {
                  // TODO: `state` should never be undefined...
                  const url = state.originalRequest.url;
                  if (cachedResponse) {
                    this.notUpdatedURLs.push(url);
                  } else {
                    this.updatedURLs.push(url);
                  }
                }
              }
              return cachedResponse;
            };
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/createCacheKey.js':
      /*!******************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createCacheKey: () =>
            /* binding */ createCacheKey,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        // Name of the search parameter used to store revision info.
        const REVISION_SEARCH_PARAM = '__WB_REVISION__';
        /**
         * Converts a manifest entry into a versioned URL suitable for precaching.
         *
         * @param {Object|string} entry
         * @return {string} A URL with versioning info.
         *
         * @private
         * @memberof workbox-precaching
         */
        function createCacheKey(entry) {
          if (!entry) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'add-to-cache-list-unexpected-type',
              {entry}
            );
          }
          // If a precache manifest entry is a string, it's assumed to be a versioned
          // URL, like '/app.abcd1234.js'. Return as-is.
          if (typeof entry === 'string') {
            const urlObject = new URL(entry, location.href);
            return {
              cacheKey: urlObject.href,
              url: urlObject.href,
            };
          }
          const {revision, url} = entry;
          if (!url) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError(
              'add-to-cache-list-unexpected-type',
              {entry}
            );
          }
          // If there's just a URL and no revision, then it's also assumed to be a
          // versioned URL.
          if (!revision) {
            const urlObject = new URL(url, location.href);
            return {
              cacheKey: urlObject.href,
              url: urlObject.href,
            };
          }
          // Otherwise, construct a properly versioned URL using the custom Workbox
          // search parameter along with the revision info.
          const cacheKeyURL = new URL(url, location.href);
          const originalURL = new URL(url, location.href);
          cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
          return {
            cacheKey: cacheKeyURL.href,
            url: originalURL.href,
          };
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js':
      /*!************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deleteOutdatedCaches: () =>
            /* binding */ deleteOutdatedCaches,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        const SUBSTRING_TO_FIND = '-precache-';
        /**
         * Cleans up incompatible precaches that were created by older versions of
         * Workbox, by a service worker registered under the current scope.
         *
         * This is meant to be called as part of the `activate` event.
         *
         * This should be safe to use as long as you don't include `substringToFind`
         * (defaulting to `-precache-`) in your non-precache cache names.
         *
         * @param {string} currentPrecacheName The cache name currently in use for
         * precaching. This cache won't be deleted.
         * @param {string} [substringToFind='-precache-'] Cache names which include this
         * substring will be deleted (excluding `currentPrecacheName`).
         * @return {Array<string>} A list of all the cache names that were deleted.
         *
         * @private
         * @memberof workbox-precaching
         */
        const deleteOutdatedCaches = async (
          currentPrecacheName,
          substringToFind = SUBSTRING_TO_FIND
        ) => {
          const cacheNames = await self.caches.keys();
          const cacheNamesToDelete = cacheNames.filter(cacheName => {
            return (
              cacheName.includes(substringToFind) &&
              cacheName.includes(self.registration.scope) &&
              cacheName !== currentPrecacheName
            );
          });
          await Promise.all(
            cacheNamesToDelete.map(cacheName => self.caches.delete(cacheName))
          );
          return cacheNamesToDelete;
        };

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/generateURLVariations.js':
      /*!*************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateURLVariations: () =>
            /* binding */ generateURLVariations,
          /* harmony export */
        });
        /* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./removeIgnoredSearchParams.js */ '../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Generator function that yields possible variations on the original URL to
         * check, one at a time.
         *
         * @param {string} url
         * @param {Object} options
         *
         * @private
         * @memberof workbox-precaching
         */
        function* generateURLVariations(
          url,
          {
            ignoreURLParametersMatching = [/^utm_/, /^fbclid$/],
            directoryIndex = 'index.html',
            cleanURLs = true,
            urlManipulation,
          } = {}
        ) {
          const urlObject = new URL(url, location.href);
          urlObject.hash = '';
          yield urlObject.href;
          const urlWithoutIgnoredParams = (0,
          _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(
            urlObject,
            ignoreURLParametersMatching
          );
          yield urlWithoutIgnoredParams.href;
          if (
            directoryIndex &&
            urlWithoutIgnoredParams.pathname.endsWith('/')
          ) {
            const directoryURL = new URL(urlWithoutIgnoredParams.href);
            directoryURL.pathname += directoryIndex;
            yield directoryURL.href;
          }
          if (cleanURLs) {
            const cleanURL = new URL(urlWithoutIgnoredParams.href);
            cleanURL.pathname += '.html';
            yield cleanURL.href;
          }
          if (urlManipulation) {
            const additionalURLs = urlManipulation({url: urlObject});
            for (const urlToAttempt of additionalURLs) {
              yield urlToAttempt.href;
            }
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js':
      /*!*********************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getOrCreatePrecacheController: () =>
            /* binding */ getOrCreatePrecacheController,
          /* harmony export */
        });
        /* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../PrecacheController.js */ '../node_modules/workbox-precaching/PrecacheController.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        let precacheController;
        /**
         * @return {PrecacheController}
         * @private
         */
        const getOrCreatePrecacheController = () => {
          if (!precacheController) {
            precacheController =
              new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
          }
          return precacheController;
        };

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/printCleanupDetails.js':
      /*!***********************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ printCleanupDetails: () =>
            /* binding */ printCleanupDetails,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * @param {string} groupTitle
         * @param {Array<string>} deletedURLs
         *
         * @private
         */
        const logGroup = (groupTitle, deletedURLs) => {
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(
            groupTitle
          );
          for (const url of deletedURLs) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(
              url
            );
          }
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
        };
        /**
         * @param {Array<string>} deletedURLs
         *
         * @private
         * @memberof workbox-precaching
         */
        function printCleanupDetails(deletedURLs) {
          const deletionCount = deletedURLs.length;
          if (deletionCount > 0) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(
              `During precaching cleanup, ` +
                `${deletionCount} cached ` +
                `request${deletionCount === 1 ? ' was' : 's were'} deleted.`
            );
            logGroup('Deleted Cache Requests', deletedURLs);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/printInstallDetails.js':
      /*!***********************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ printInstallDetails: () =>
            /* binding */ printInstallDetails,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * @param {string} groupTitle
         * @param {Array<string>} urls
         *
         * @private
         */
        function _nestedGroup(groupTitle, urls) {
          if (urls.length === 0) {
            return;
          }
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(
            groupTitle
          );
          for (const url of urls) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(
              url
            );
          }
          workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
        }
        /**
         * @param {Array<string>} urlsToPrecache
         * @param {Array<string>} urlsAlreadyPrecached
         *
         * @private
         * @memberof workbox-precaching
         */
        function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
          const precachedCount = urlsToPrecache.length;
          const alreadyPrecachedCount = urlsAlreadyPrecached.length;
          if (precachedCount || alreadyPrecachedCount) {
            let message = `Precaching ${precachedCount} file${
              precachedCount === 1 ? '' : 's'
            }.`;
            if (alreadyPrecachedCount > 0) {
              message +=
                ` ${alreadyPrecachedCount} ` +
                `file${
                  alreadyPrecachedCount === 1 ? ' is' : 's are'
                } already cached.`;
            }
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(
              message
            );
            _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
            _nestedGroup(
              `View previously precached URLs.`,
              urlsAlreadyPrecached
            );
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js':
      /*!*****************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ removeIgnoredSearchParams: () =>
            /* binding */ removeIgnoredSearchParams,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-precaching/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Removes any URL search parameters that should be ignored.
         *
         * @param {URL} urlObject The original URL.
         * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
         * each search parameter name. Matches mean that the search parameter should be
         * ignored.
         * @return {URL} The URL with any ignored search parameters removed.
         *
         * @private
         * @memberof workbox-precaching
         */
        function removeIgnoredSearchParams(
          urlObject,
          ignoreURLParametersMatching = []
        ) {
          // Convert the iterable into an array at the start of the loop to make sure
          // deletion doesn't mess up iteration.
          for (const paramName of [...urlObject.searchParams.keys()]) {
            if (
              ignoreURLParametersMatching.some(regExp => regExp.test(paramName))
            ) {
              urlObject.searchParams.delete(paramName);
            }
          }
          return urlObject;
        }

        /***/
      },

    /***/ '../node_modules/workbox-routing/RegExpRoute.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-routing/RegExpRoute.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ RegExpRoute: () => /* binding */ RegExpRoute,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./Route.js */ '../node_modules/workbox-routing/Route.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * RegExpRoute makes it easy to create a regular expression based
         * {@link workbox-routing.Route}.
         *
         * For same-origin requests the RegExp only needs to match part of the URL. For
         * requests against third-party servers, you must define a RegExp that matches
         * the start of the URL.
         *
         * @memberof workbox-routing
         * @extends workbox-routing.Route
         */
        class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
          /**
           * If the regular expression contains
           * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
           * the captured values will be passed to the
           * {@link workbox-routing~handlerCallback} `params`
           * argument.
           *
           * @param {RegExp} regExp The regular expression to match against URLs.
           * @param {workbox-routing~handlerCallback} handler A callback
           * function that returns a Promise resulting in a Response.
           * @param {string} [method='GET'] The HTTP method to match the Route
           * against.
           */
          constructor(regExp, handler, method) {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(
                regExp,
                RegExp,
                {
                  moduleName: 'workbox-routing',
                  className: 'RegExpRoute',
                  funcName: 'constructor',
                  paramName: 'pattern',
                }
              );
            }
            const match = ({url}) => {
              const result = regExp.exec(url.href);
              // Return immediately if there's no match.
              if (!result) {
                return;
              }
              // Require that the match start at the first character in the URL string
              // if it's a cross-origin request.
              // See https://github.com/GoogleChrome/workbox/issues/281 for the context
              // behind this behavior.
              if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(
                    `The regular expression '${regExp.toString()}' only partially matched ` +
                      `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                      `handle cross-origin requests if they match the entire URL.`
                  );
                }
                return;
              }
              // If the route matches, but there aren't any capture groups defined, then
              // this will return [], which is truthy and therefore sufficient to
              // indicate a match.
              // If there are capture groups, then it will return their values.
              return result.slice(1);
            };
            super(match, handler, method);
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-routing/Route.js':
      /*!************************************************!*\
  !*** ../node_modules/workbox-routing/Route.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Route: () => /* binding */ Route,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./utils/constants.js */ '../node_modules/workbox-routing/utils/constants.js'
          );
        /* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./utils/normalizeHandler.js */ '../node_modules/workbox-routing/utils/normalizeHandler.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * A `Route` consists of a pair of callback functions, "match" and "handler".
         * The "match" callback determine if a route should be used to "handle" a
         * request by returning a non-falsy value if it can. The "handler" callback
         * is called when there is a match and should return a Promise that resolves
         * to a `Response`.
         *
         * @memberof workbox-routing
         */
        class Route {
          /**
           * Constructor for Route class.
           *
           * @param {workbox-routing~matchCallback} match
           * A callback function that determines whether the route matches a given
           * `fetch` event by returning a non-falsy value.
           * @param {workbox-routing~handlerCallback} handler A callback
           * function that returns a Promise resolving to a Response.
           * @param {string} [method='GET'] The HTTP method to match the Route
           * against.
           */
          constructor(
            match,
            handler,
            method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod
          ) {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(
                match,
                'function',
                {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'match',
                }
              );
              if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(
                  method,
                  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods,
                  {paramName: 'method'}
                );
              }
            }
            // These values are referenced directly by Router so cannot be
            // altered by minificaton.
            this.handler = (0,
            _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(
              handler
            );
            this.match = match;
            this.method = method;
          }
          /**
           *
           * @param {workbox-routing-handlerCallback} handler A callback
           * function that returns a Promise resolving to a Response
           */
          setCatchHandler(handler) {
            this.catchHandler = (0,
            _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(
              handler
            );
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-routing/Router.js':
      /*!*************************************************!*\
  !*** ../node_modules/workbox-routing/Router.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Router: () => /* binding */ Router,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/getFriendlyURL.js */ '../node_modules/workbox-core/_private/getFriendlyURL.js'
          );
        /* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./utils/constants.js */ '../node_modules/workbox-routing/utils/constants.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./utils/normalizeHandler.js */ '../node_modules/workbox-routing/utils/normalizeHandler.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_6__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * The Router can be used to process a `FetchEvent` using one or more
         * {@link workbox-routing.Route}, responding with a `Response` if
         * a matching route exists.
         *
         * If no route matches a given a request, the Router will use a "default"
         * handler if one is defined.
         *
         * Should the matching Route throw an error, the Router will use a "catch"
         * handler if one is defined to gracefully deal with issues and respond with a
         * Request.
         *
         * If a request matches multiple routes, the **earliest** registered route will
         * be used to respond to the request.
         *
         * @memberof workbox-routing
         */
        class Router {
          /**
           * Initializes a new Router.
           */
          constructor() {
            this._routes = new Map();
            this._defaultHandlerMap = new Map();
          }
          /**
           * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
           * method name ('GET', etc.) to an array of all the corresponding `Route`
           * instances that are registered.
           */
          get routes() {
            return this._routes;
          }
          /**
           * Adds a fetch event listener to respond to events when a route matches
           * the event's request.
           */
          addFetchListener() {
            // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
            self.addEventListener('fetch', event => {
              const {request} = event;
              const responsePromise = this.handleRequest({request, event});
              if (responsePromise) {
                event.respondWith(responsePromise);
              }
            });
          }
          /**
           * Adds a message event listener for URLs to cache from the window.
           * This is useful to cache resources loaded on the page prior to when the
           * service worker started controlling it.
           *
           * The format of the message data sent from the window should be as follows.
           * Where the `urlsToCache` array may consist of URL strings or an array of
           * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
           *
           * ```
           * {
           *   type: 'CACHE_URLS',
           *   payload: {
           *     urlsToCache: [
           *       './script1.js',
           *       './script2.js',
           *       ['./script3.js', {mode: 'no-cors'}],
           *     ],
           *   },
           * }
           * ```
           */
          addCacheListener() {
            // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
            self.addEventListener('message', event => {
              // event.data is type 'any'
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const {payload} = event.data;
                if (true) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(
                    `Caching URLs from the window`,
                    payload.urlsToCache
                  );
                }
                const requestPromises = Promise.all(
                  payload.urlsToCache.map(entry => {
                    if (typeof entry === 'string') {
                      entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({request, event});
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                  })
                ); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                  void requestPromises.then(() =>
                    event.ports[0].postMessage(true)
                  );
                }
              }
            });
          }
          /**
           * Apply the routing rules to a FetchEvent object to get a Response from an
           * appropriate Route's handler.
           *
           * @param {Object} options
           * @param {Request} options.request The request to handle.
           * @param {ExtendableEvent} options.event The event that triggered the
           *     request.
           * @return {Promise<Response>|undefined} A promise is returned if a
           *     registered route can handle the request. If there is no matching
           *     route and there's no `defaultHandler`, `undefined` is returned.
           */
          handleRequest({request, event}) {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(
                request,
                Request,
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'handleRequest',
                  paramName: 'options.request',
                }
              );
            }
            const url = new URL(request.url, location.href);
            if (!url.protocol.startsWith('http')) {
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(
                  `Workbox Router only supports URLs that start with 'http'.`
                );
              }
              return;
            }
            const sameOrigin = url.origin === location.origin;
            const {params, route} = this.findMatchingRoute({
              event,
              request,
              sameOrigin,
              url,
            });
            let handler = route && route.handler;
            const debugMessages = [];
            if (true) {
              if (handler) {
                debugMessages.push([
                  `Found a route to handle this request:`,
                  route,
                ]);
                if (params) {
                  debugMessages.push([
                    `Passing the following params to the route's handler:`,
                    params,
                  ]);
                }
              }
            }
            // If we don't have a handler because there was no matching route, then
            // fall back to defaultHandler if that's defined.
            const method = request.method;
            if (!handler && this._defaultHandlerMap.has(method)) {
              if (true) {
                debugMessages.push(
                  `Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`
                );
              }
              handler = this._defaultHandlerMap.get(method);
            }
            if (!handler) {
              if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(
                  `No route found for: ${(0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                    url
                  )}`
                );
              }
              return;
            }
            if (true) {
              // We have a handler, meaning Workbox is going to handle the route.
              // print the routing details to the console.
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                `Router is responding to: ${(0,
                workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                  url
                )}`
              );
              debugMessages.forEach(msg => {
                if (Array.isArray(msg)) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                    ...msg
                  );
                } else {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(
                    msg
                  );
                }
              });
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            }
            // Wrap in try and catch in case the handle method throws a synchronous
            // error. It should still callback to the catch handler.
            let responsePromise;
            try {
              responsePromise = handler.handle({url, request, event, params});
            } catch (err) {
              responsePromise = Promise.reject(err);
            }
            // Get route's catch handler, if it exists
            const catchHandler = route && route.catchHandler;
            if (
              responsePromise instanceof Promise &&
              (this._catchHandler || catchHandler)
            ) {
              responsePromise = responsePromise.catch(async err => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                  if (true) {
                    // Still include URL here as it will be async from the console group
                    // and may not make sense without the URL
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                      `Error thrown when responding to: ` +
                        ` ${(0,
                        workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                          url
                        )}. Falling back to route's Catch Handler.`
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(
                      `Error thrown by:`,
                      route
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(
                      err
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                  }
                  try {
                    return await catchHandler.handle({
                      url,
                      request,
                      event,
                      params,
                    });
                  } catch (catchErr) {
                    if (catchErr instanceof Error) {
                      err = catchErr;
                    }
                  }
                }
                if (this._catchHandler) {
                  if (true) {
                    // Still include URL here as it will be async from the console group
                    // and may not make sense without the URL
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(
                      `Error thrown when responding to: ` +
                        ` ${(0,
                        workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                          url
                        )}. Falling back to global Catch Handler.`
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(
                      `Error thrown by:`,
                      route
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(
                      err
                    );
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                  }
                  return this._catchHandler.handle({url, request, event});
                }
                throw err;
              });
            }
            return responsePromise;
          }
          /**
           * Checks a request and URL (and optionally an event) against the list of
           * registered routes, and if there's a match, returns the corresponding
           * route along with any params generated by the match.
           *
           * @param {Object} options
           * @param {URL} options.url
           * @param {boolean} options.sameOrigin The result of comparing `url.origin`
           *     against the current origin.
           * @param {Request} options.request The request to match.
           * @param {Event} options.event The corresponding event.
           * @return {Object} An object with `route` and `params` properties.
           *     They are populated if a matching route was found or `undefined`
           *     otherwise.
           */
          findMatchingRoute({url, sameOrigin, request, event}) {
            const routes = this._routes.get(request.method) || [];
            for (const route of routes) {
              let params;
              // route.match returns type any, not possible to change right now.
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const matchResult = route.match({
                url,
                sameOrigin,
                request,
                event,
              });
              if (matchResult) {
                if (true) {
                  // Warn developers that using an async matchCallback is almost always
                  // not the right thing to do.
                  if (matchResult instanceof Promise) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(
                      `While routing ${(0,
                      workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(
                        url
                      )}, an async ` +
                        `matchCallback function was used. Please convert the ` +
                        `following route to use a synchronous matchCallback function:`,
                      route
                    );
                  }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                  // Instead of passing an empty array in as params, use undefined.
                  params = undefined;
                } else if (
                  matchResult.constructor === Object && // eslint-disable-line
                  Object.keys(matchResult).length === 0
                ) {
                  // Instead of passing an empty object in as params, use undefined.
                  params = undefined;
                } else if (typeof matchResult === 'boolean') {
                  // For the boolean value true (rather than just something truth-y),
                  // don't set params.
                  // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                  params = undefined;
                }
                // Return early if have a match.
                return {route, params};
              }
            }
            // If no match was found above, return and empty object.
            return {};
          }
          /**
           * Define a default `handler` that's called when no routes explicitly
           * match the incoming request.
           *
           * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
           *
           * Without a default handler, unmatched requests will go against the
           * network as if there were no service worker present.
           *
           * @param {workbox-routing~handlerCallback} handler A callback
           * function that returns a Promise resulting in a Response.
           * @param {string} [method='GET'] The HTTP method to associate with this
           * default handler. Each method has its own default.
           */
          setDefaultHandler(
            handler,
            method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod
          ) {
            this._defaultHandlerMap.set(
              method,
              (0,
              _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(
                handler
              )
            );
          }
          /**
           * If a Route throws an error while handling a request, this `handler`
           * will be called and given a chance to provide a response.
           *
           * @param {workbox-routing~handlerCallback} handler A callback
           * function that returns a Promise resulting in a Response.
           */
          setCatchHandler(handler) {
            this._catchHandler = (0,
            _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(
              handler
            );
          }
          /**
           * Registers a route with the router.
           *
           * @param {workbox-routing.Route} route The route to register.
           */
          registerRoute(route) {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(
                route,
                'object',
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
                }
              );
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(
                route,
                'match',
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
                }
              );
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(
                route.handler,
                'object',
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
                }
              );
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(
                route.handler,
                'handle',
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route.handler',
                }
              );
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(
                route.method,
                'string',
                {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route.method',
                }
              );
            }
            if (!this._routes.has(route.method)) {
              this._routes.set(route.method, []);
            }
            // Give precedence to all of the earlier routes by adding this additional
            // route to the end of the array.
            this._routes.get(route.method).push(route);
          }
          /**
           * Unregisters a route with the router.
           *
           * @param {workbox-routing.Route} route The route to unregister.
           */
          unregisterRoute(route) {
            if (!this._routes.has(route.method)) {
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError(
                'unregister-route-but-not-found-with-method',
                {
                  method: route.method,
                }
              );
            }
            const routeIndex = this._routes.get(route.method).indexOf(route);
            if (routeIndex > -1) {
              this._routes.get(route.method).splice(routeIndex, 1);
            } else {
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError(
                'unregister-route-route-not-registered'
              );
            }
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-routing/_version.js':
      /*!***************************************************!*\
  !*** ../node_modules/workbox-routing/_version.js ***!
  \***************************************************/
      /***/ () => {
        // @ts-ignore
        try {
          self['workbox:routing:7.0.0'] && _();
        } catch (e) {}

        /***/
      },

    /***/ '../node_modules/workbox-routing/registerRoute.js':
      /*!********************************************************!*\
  !*** ../node_modules/workbox-routing/registerRoute.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ registerRoute: () => /* binding */ registerRoute,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./Route.js */ '../node_modules/workbox-routing/Route.js'
          );
        /* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./RegExpRoute.js */ '../node_modules/workbox-routing/RegExpRoute.js'
          );
        /* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./utils/getOrCreateDefaultRouter.js */ '../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * Easily register a RegExp, string, or function with a caching
         * strategy to a singleton Router instance.
         *
         * This method will generate a Route for you if needed and
         * call {@link workbox-routing.Router#registerRoute}.
         *
         * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
         * If the capture param is a `Route`, all other arguments will be ignored.
         * @param {workbox-routing~handlerCallback} [handler] A callback
         * function that returns a Promise resulting in a Response. This parameter
         * is required if `capture` is not a `Route` object.
         * @param {string} [method='GET'] The HTTP method to match the Route
         * against.
         * @return {workbox-routing.Route} The generated `Route`.
         *
         * @memberof workbox-routing
         */
        function registerRoute(capture, handler, method) {
          let route;
          if (typeof capture === 'string') {
            const captureUrl = new URL(capture, location.href);
            if (true) {
              if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError(
                  'invalid-string',
                  {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                  }
                );
              }
              // We want to check if Express-style wildcards are in the pathname only.
              // TODO: Remove this log message in v4.
              const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
              // See https://github.com/pillarjs/path-to-regexp#parameters
              const wildcards = '[*:?+]';
              if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(
                  `The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`
                );
              }
            }
            const matchCallback = ({url}) => {
              if (true) {
                if (
                  url.pathname === captureUrl.pathname &&
                  url.origin !== captureUrl.origin
                ) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(
                    `${capture} only partially matches the cross-origin URL ` +
                      `${url.toString()}. This route will only handle cross-origin requests ` +
                      `if they match the entire URL.`
                  );
                }
              }
              return url.href === captureUrl.href;
            };
            // If `capture` is a string then `handler` and `method` must be present.
            route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(
              matchCallback,
              handler,
              method
            );
          } else if (capture instanceof RegExp) {
            // If `capture` is a `RegExp` then `handler` and `method` must be present.
            route =
              new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(
                capture,
                handler,
                method
              );
          } else if (typeof capture === 'function') {
            // If `capture` is a function then `handler` and `method` must be present.
            route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(
              capture,
              handler,
              method
            );
          } else if (
            capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route
          ) {
            route = capture;
          } else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError(
              'unsupported-route-type',
              {
                moduleName: 'workbox-routing',
                funcName: 'registerRoute',
                paramName: 'capture',
              }
            );
          }
          const defaultRouter = (0,
          _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
          defaultRouter.registerRoute(route);
          return route;
        }

        /***/
      },

    /***/ '../node_modules/workbox-routing/utils/constants.js':
      /*!**********************************************************!*\
  !*** ../node_modules/workbox-routing/utils/constants.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ defaultMethod: () => /* binding */ defaultMethod,
          /* harmony export */ validMethods: () => /* binding */ validMethods,
          /* harmony export */
        });
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * The default HTTP method, 'GET', used when there's no specific method
         * configured for a route.
         *
         * @type {string}
         *
         * @private
         */
        const defaultMethod = 'GET';
        /**
         * The list of valid HTTP methods associated with requests that could be routed.
         *
         * @type {Array<string>}
         *
         * @private
         */
        const validMethods = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'];

        /***/
      },

    /***/ '../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js':
      /*!*************************************************************************!*\
  !*** ../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getOrCreateDefaultRouter: () =>
            /* binding */ getOrCreateDefaultRouter,
          /* harmony export */
        });
        /* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../Router.js */ '../node_modules/workbox-routing/Router.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        let defaultRouter;
        /**
         * Creates a new, singleton Router instance if one does not exist. If one
         * does already exist, that instance is returned.
         *
         * @private
         * @return {Router}
         */
        const getOrCreateDefaultRouter = () => {
          if (!defaultRouter) {
            defaultRouter =
              new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
            // The helpers that use the default Router assume these listeners exist.
            defaultRouter.addFetchListener();
            defaultRouter.addCacheListener();
          }
          return defaultRouter;
        };

        /***/
      },

    /***/ '../node_modules/workbox-routing/utils/normalizeHandler.js':
      /*!*****************************************************************!*\
  !*** ../node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ normalizeHandler: () =>
            /* binding */ normalizeHandler,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../_version.js */ '../node_modules/workbox-routing/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * @param {function()|Object} handler Either a function, or an object with a
         * 'handle' method.
         * @return {Object} An object with a handle method.
         *
         * @private
         */
        const normalizeHandler = handler => {
          if (handler && typeof handler === 'object') {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(
                handler,
                'handle',
                {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'handler',
                }
              );
            }
            return handler;
          } else {
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(
                handler,
                'function',
                {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'handler',
                }
              );
            }
            return {handle: handler};
          }
        };

        /***/
      },

    /***/ '../node_modules/workbox-strategies/Strategy.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-strategies/Strategy.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Strategy: () => /* binding */ Strategy,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/cacheNames.js */ '../node_modules/workbox-core/_private/cacheNames.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! workbox-core/_private/getFriendlyURL.js */ '../node_modules/workbox-core/_private/getFriendlyURL.js'
          );
        /* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./StrategyHandler.js */ '../node_modules/workbox-strategies/StrategyHandler.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-strategies/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        /**
         * An abstract base class that all other strategy classes must extend from:
         *
         * @memberof workbox-strategies
         */
        class Strategy {
          /**
           * Creates a new instance of the strategy and sets all documented option
           * properties as public instance properties.
           *
           * Note: if a custom strategy class extends the base Strategy class and does
           * not need more than these properties, it does not need to define its own
           * constructor.
           *
           * @param {Object} [options]
           * @param {string} [options.cacheName] Cache name to store and retrieve
           * requests. Defaults to the cache names provided by
           * {@link workbox-core.cacheNames}.
           * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
           * to use in conjunction with this caching strategy.
           * @param {Object} [options.fetchOptions] Values passed along to the
           * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
           * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
           * `fetch()` requests made by this strategy.
           * @param {Object} [options.matchOptions] The
           * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
           * for any `cache.match()` or `cache.put()` calls made by this strategy.
           */
          constructor(options = {}) {
            /**
             * Cache name to store and retrieve
             * requests. Defaults to the cache names provided by
             * {@link workbox-core.cacheNames}.
             *
             * @type {string}
             */
            this.cacheName =
              workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(
                options.cacheName
              );
            /**
             * The list
             * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
             * used by this strategy.
             *
             * @type {Array<Object>}
             */
            this.plugins = options.plugins || [];
            /**
             * Values passed along to the
             * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
             * of all fetch() requests made by this strategy.
             *
             * @type {Object}
             */
            this.fetchOptions = options.fetchOptions;
            /**
             * The
             * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
             * for any `cache.match()` or `cache.put()` calls made by this strategy.
             *
             * @type {Object}
             */
            this.matchOptions = options.matchOptions;
          }
          /**
           * Perform a request strategy and returns a `Promise` that will resolve with
           * a `Response`, invoking all relevant plugin callbacks.
           *
           * When a strategy instance is registered with a Workbox
           * {@link workbox-routing.Route}, this method is automatically
           * called when the route matches.
           *
           * Alternatively, this method can be used in a standalone `FetchEvent`
           * listener by passing it to `event.respondWith()`.
           *
           * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
           *     properties listed below.
           * @param {Request|string} options.request A request to run this strategy for.
           * @param {ExtendableEvent} options.event The event associated with the
           *     request.
           * @param {URL} [options.url]
           * @param {*} [options.params]
           */
          handle(options) {
            const [responseDone] = this.handleAll(options);
            return responseDone;
          }
          /**
           * Similar to {@link workbox-strategies.Strategy~handle}, but
           * instead of just returning a `Promise` that resolves to a `Response` it
           * it will return an tuple of `[response, done]` promises, where the former
           * (`response`) is equivalent to what `handle()` returns, and the latter is a
           * Promise that will resolve once any promises that were added to
           * `event.waitUntil()` as part of performing the strategy have completed.
           *
           * You can await the `done` promise to ensure any extra work performed by
           * the strategy (usually caching responses) completes successfully.
           *
           * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
           *     properties listed below.
           * @param {Request|string} options.request A request to run this strategy for.
           * @param {ExtendableEvent} options.event The event associated with the
           *     request.
           * @param {URL} [options.url]
           * @param {*} [options.params]
           * @return {Array<Promise>} A tuple of [response, done]
           *     promises that can be used to determine when the response resolves as
           *     well as when the handler has completed all its work.
           */
          handleAll(options) {
            // Allow for flexible options to be passed.
            if (options instanceof FetchEvent) {
              options = {
                event: options,
                request: options.request,
              };
            }
            const event = options.event;
            const request =
              typeof options.request === 'string'
                ? new Request(options.request)
                : options.request;
            const params = 'params' in options ? options.params : undefined;
            const handler =
              new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(
                this,
                {event, request, params}
              );
            const responseDone = this._getResponse(handler, request, event);
            const handlerDone = this._awaitComplete(
              responseDone,
              handler,
              request,
              event
            );
            // Return an array of promises, suitable for use with Promise.all().
            return [responseDone, handlerDone];
          }
          async _getResponse(handler, request, event) {
            await handler.runCallbacks('handlerWillStart', {event, request});
            let response = undefined;
            try {
              response = await this._handle(request, handler);
              // The "official" Strategy subclasses all throw this error automatically,
              // but in case a third-party Strategy doesn't, ensure that we have a
              // consistent failure when there's no response or an error response.
              if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError(
                  'no-response',
                  {url: request.url}
                );
              }
            } catch (error) {
              if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks(
                  'handlerDidError'
                )) {
                  response = await callback({error, event, request});
                  if (response) {
                    break;
                  }
                }
              }
              if (!response) {
                throw error;
              } else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(
                  `While responding to '${(0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(
                    request.url
                  )}', ` +
                    `an ${
                      error instanceof Error ? error.toString() : ''
                    } error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`
                );
              }
            }
            for (const callback of handler.iterateCallbacks(
              'handlerWillRespond'
            )) {
              response = await callback({event, request, response});
            }
            return response;
          }
          async _awaitComplete(responseDone, handler, request, event) {
            let response;
            let error;
            try {
              response = await responseDone;
            } catch (error) {
              // Ignore errors, as response errors should be caught via the `response`
              // promise above. The `done` promise will only throw for errors in
              // promises passed to `handler.waitUntil()`.
            }
            try {
              await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
              });
              await handler.doneWaiting();
            } catch (waitUntilError) {
              if (waitUntilError instanceof Error) {
                error = waitUntilError;
              }
            }
            await handler.runCallbacks('handlerDidComplete', {
              event,
              request,
              response,
              error: error,
            });
            handler.destroy();
            if (error) {
              throw error;
            }
          }
        }

        /**
         * Classes extending the `Strategy` based class should implement this method,
         * and leverage the {@link workbox-strategies.StrategyHandler}
         * arg to perform all fetching and cache logic, which will ensure all relevant
         * cache, cache options, fetch options and plugins are used (per the current
         * strategy instance).
         *
         * @name _handle
         * @instance
         * @abstract
         * @function
         * @param {Request} request
         * @param {workbox-strategies.StrategyHandler} handler
         * @return {Promise<Response>}
         *
         * @memberof workbox-strategies.Strategy
         */

        /***/
      },

    /***/ '../node_modules/workbox-strategies/StrategyHandler.js':
      /*!*************************************************************!*\
  !*** ../node_modules/workbox-strategies/StrategyHandler.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ StrategyHandler: () =>
            /* binding */ StrategyHandler,
          /* harmony export */
        });
        /* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! workbox-core/_private/assert.js */ '../node_modules/workbox-core/_private/assert.js'
          );
        /* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! workbox-core/_private/cacheMatchIgnoreParams.js */ '../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js'
          );
        /* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! workbox-core/_private/Deferred.js */ '../node_modules/workbox-core/_private/Deferred.js'
          );
        /* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! workbox-core/_private/executeQuotaErrorCallbacks.js */ '../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js'
          );
        /* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! workbox-core/_private/getFriendlyURL.js */ '../node_modules/workbox-core/_private/getFriendlyURL.js'
          );
        /* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! workbox-core/_private/logger.js */ '../node_modules/workbox-core/_private/logger.js'
          );
        /* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! workbox-core/_private/timeout.js */ '../node_modules/workbox-core/_private/timeout.js'
          );
        /* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! workbox-core/_private/WorkboxError.js */ '../node_modules/workbox-core/_private/WorkboxError.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./_version.js */ '../node_modules/workbox-strategies/_version.js'
          );
        /* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            _version_js__WEBPACK_IMPORTED_MODULE_8__
          );
        /*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

        function toRequest(input) {
          return typeof input === 'string' ? new Request(input) : input;
        }
        /**
         * A class created every time a Strategy instance instance calls
         * {@link workbox-strategies.Strategy~handle} or
         * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
         * cache actions around plugin callbacks and keeps track of when the strategy
         * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
         *
         * @memberof workbox-strategies
         */
        class StrategyHandler {
          /**
           * Creates a new instance associated with the passed strategy and event
           * that's handling the request.
           *
           * The constructor also initializes the state that will be passed to each of
           * the plugins handling this request.
           *
           * @param {workbox-strategies.Strategy} strategy
           * @param {Object} options
           * @param {Request|string} options.request A request to run this strategy for.
           * @param {ExtendableEvent} options.event The event associated with the
           *     request.
           * @param {URL} [options.url]
           * @param {*} [options.params] The return value from the
           *     {@link workbox-routing~matchCallback} (if applicable).
           */
          constructor(strategy, options) {
            this._cacheKeys = {};
            /**
             * The request the strategy is performing (passed to the strategy's
             * `handle()` or `handleAll()` method).
             * @name request
             * @instance
             * @type {Request}
             * @memberof workbox-strategies.StrategyHandler
             */
            /**
             * The event associated with this request.
             * @name event
             * @instance
             * @type {ExtendableEvent}
             * @memberof workbox-strategies.StrategyHandler
             */
            /**
             * A `URL` instance of `request.url` (if passed to the strategy's
             * `handle()` or `handleAll()` method).
             * Note: the `url` param will be present if the strategy was invoked
             * from a workbox `Route` object.
             * @name url
             * @instance
             * @type {URL|undefined}
             * @memberof workbox-strategies.StrategyHandler
             */
            /**
             * A `param` value (if passed to the strategy's
             * `handle()` or `handleAll()` method).
             * Note: the `param` param will be present if the strategy was invoked
             * from a workbox `Route` object and the
             * {@link workbox-routing~matchCallback} returned
             * a truthy value (it will be that value).
             * @name params
             * @instance
             * @type {*|undefined}
             * @memberof workbox-strategies.StrategyHandler
             */
            if (true) {
              workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(
                options.event,
                ExtendableEvent,
                {
                  moduleName: 'workbox-strategies',
                  className: 'StrategyHandler',
                  funcName: 'constructor',
                  paramName: 'options.event',
                }
              );
            }
            Object.assign(this, options);
            this.event = options.event;
            this._strategy = strategy;
            this._handlerDeferred =
              new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
            this._extendLifetimePromises = [];
            // Copy the plugins list (since it's mutable on the strategy),
            // so any mutations don't affect this handler instance.
            this._plugins = [...strategy.plugins];
            this._pluginStateMap = new Map();
            for (const plugin of this._plugins) {
              this._pluginStateMap.set(plugin, {});
            }
            this.event.waitUntil(this._handlerDeferred.promise);
          }
          /**
           * Fetches a given request (and invokes any applicable plugin callback
           * methods) using the `fetchOptions` (for non-navigation requests) and
           * `plugins` defined on the `Strategy` object.
           *
           * The following plugin lifecycle methods are invoked when using this method:
           * - `requestWillFetch()`
           * - `fetchDidSucceed()`
           * - `fetchDidFail()`
           *
           * @param {Request|string} input The URL or request to fetch.
           * @return {Promise<Response>}
           */
          async fetch(input) {
            const {event} = this;
            let request = toRequest(input);
            if (
              request.mode === 'navigate' &&
              event instanceof FetchEvent &&
              event.preloadResponse
            ) {
              const possiblePreloadResponse = await event.preloadResponse;
              if (possiblePreloadResponse) {
                if (true) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(
                    `Using a preloaded navigation response for ` +
                      `'${(0,
                      workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                        request.url
                      )}'`
                  );
                }
                return possiblePreloadResponse;
              }
            }
            // If there is a fetchDidFail plugin, we need to save a clone of the
            // original request before it's either modified by a requestWillFetch
            // plugin or before the original request's body is consumed via fetch().
            const originalRequest = this.hasCallback('fetchDidFail')
              ? request.clone()
              : null;
            try {
              for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({request: request.clone(), event});
              }
            } catch (err) {
              if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError(
                  'plugin-error-request-will-fetch',
                  {
                    thrownErrorMessage: err.message,
                  }
                );
              }
            }
            // The request can be altered by plugins with `requestWillFetch` making
            // the original request (most likely from a `fetch` event) different
            // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
            const pluginFilteredRequest = request.clone();
            try {
              let fetchResponse;
              // See https://github.com/GoogleChrome/workbox/issues/1796
              fetchResponse = await fetch(
                request,
                request.mode === 'navigate'
                  ? undefined
                  : this._strategy.fetchOptions
              );
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                  `Network request for ` +
                    `'${(0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                      request.url
                    )}' returned a response with ` +
                    `status '${fetchResponse.status}'.`
                );
              }
              for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                  event,
                  request: pluginFilteredRequest,
                  response: fetchResponse,
                });
              }
              return fetchResponse;
            } catch (error) {
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(
                  `Network request for ` +
                    `'${(0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                      request.url
                    )}' threw an error.`,
                  error
                );
              }
              // `originalRequest` will only exist if a `fetchDidFail` callback
              // is being used (see above).
              if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                  error: error,
                  event,
                  originalRequest: originalRequest.clone(),
                  request: pluginFilteredRequest.clone(),
                });
              }
              throw error;
            }
          }
          /**
           * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
           * the response generated by `this.fetch()`.
           *
           * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
           * so you do not have to manually call `waitUntil()` on the event.
           *
           * @param {Request|string} input The request or URL to fetch and cache.
           * @return {Promise<Response>}
           */
          async fetchAndCachePut(input) {
            const response = await this.fetch(input);
            const responseClone = response.clone();
            void this.waitUntil(this.cachePut(input, responseClone));
            return response;
          }
          /**
           * Matches a request from the cache (and invokes any applicable plugin
           * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
           * defined on the strategy object.
           *
           * The following plugin lifecycle methods are invoked when using this method:
           * - cacheKeyWillByUsed()
           * - cachedResponseWillByUsed()
           *
           * @param {Request|string} key The Request or URL to use as the cache key.
           * @return {Promise<Response|undefined>} A matching response, if found.
           */
          async cacheMatch(key) {
            const request = toRequest(key);
            let cachedResponse;
            const {cacheName, matchOptions} = this._strategy;
            const effectiveRequest = await this.getCacheKey(request, 'read');
            const multiMatchOptions = Object.assign(
              Object.assign({}, matchOptions),
              {cacheName}
            );
            cachedResponse = await caches.match(
              effectiveRequest,
              multiMatchOptions
            );
            if (true) {
              if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                  `Found a cached response in '${cacheName}'.`
                );
              } else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                  `No cached response found in '${cacheName}'.`
                );
              }
            }
            for (const callback of this.iterateCallbacks(
              'cachedResponseWillBeUsed'
            )) {
              cachedResponse =
                (await callback({
                  cacheName,
                  matchOptions,
                  cachedResponse,
                  request: effectiveRequest,
                  event: this.event,
                })) || undefined;
            }
            return cachedResponse;
          }
          /**
           * Puts a request/response pair in the cache (and invokes any applicable
           * plugin callback methods) using the `cacheName` and `plugins` defined on
           * the strategy object.
           *
           * The following plugin lifecycle methods are invoked when using this method:
           * - cacheKeyWillByUsed()
           * - cacheWillUpdate()
           * - cacheDidUpdate()
           *
           * @param {Request|string} key The request or URL to use as the cache key.
           * @param {Response} response The response to cache.
           * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
           * not be cached, and `true` otherwise.
           */
          async cachePut(key, response) {
            const request = toRequest(key);
            // Run in the next task to avoid blocking other cache reads.
            // https://github.com/w3c/ServiceWorker/issues/1397
            await (0,
            workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(
              0
            );
            const effectiveRequest = await this.getCacheKey(request, 'write');
            if (true) {
              if (
                effectiveRequest.method &&
                effectiveRequest.method !== 'GET'
              ) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError(
                  'attempt-to-cache-non-get-request',
                  {
                    url: (0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                      effectiveRequest.url
                    ),
                    method: effectiveRequest.method,
                  }
                );
              }
              // See https://github.com/GoogleChrome/workbox/issues/2818
              const vary = response.headers.get('Vary');
              if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                  `The response for ${(0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                    effectiveRequest.url
                  )} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`
                );
              }
            }
            if (!response) {
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(
                  `Cannot cache non-existent response for ` +
                    `'${(0,
                    workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                      effectiveRequest.url
                    )}'.`
                );
              }
              throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError(
                'cache-put-with-no-response',
                {
                  url: (0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                    effectiveRequest.url
                  ),
                }
              );
            }
            const responseToCache = await this._ensureResponseSafeToCache(
              response
            );
            if (!responseToCache) {
              if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                  `Response '${(0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                    effectiveRequest.url
                  )}' ` + `will not be cached.`,
                  responseToCache
                );
              }
              return false;
            }
            const {cacheName, matchOptions} = this._strategy;
            const cache = await self.caches.open(cacheName);
            const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
            const oldResponse = hasCacheUpdateCallback
              ? await (0,
                workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
                  // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
                  // feature. Consider into ways to only add this behavior if using
                  // precaching.
                  cache,
                  effectiveRequest.clone(),
                  ['__WB_REVISION__'],
                  matchOptions
                )
              : null;
            if (true) {
              workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                `Updating the '${cacheName}' cache with a new Response ` +
                  `for ${(0,
                  workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(
                    effectiveRequest.url
                  )}.`
              );
            }
            try {
              await cache.put(
                effectiveRequest,
                hasCacheUpdateCallback
                  ? responseToCache.clone()
                  : responseToCache
              );
            } catch (error) {
              if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                  await (0,
                  workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
              }
            }
            for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
              await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
              });
            }
            return true;
          }
          /**
           * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
           * executes any of those callbacks found in sequence. The final `Request`
           * object returned by the last plugin is treated as the cache key for cache
           * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
           * been registered, the passed request is returned unmodified
           *
           * @param {Request} request
           * @param {string} mode
           * @return {Promise<Request>}
           */
          async getCacheKey(request, mode) {
            const key = `${request.url} | ${mode}`;
            if (!this._cacheKeys[key]) {
              let effectiveRequest = request;
              for (const callback of this.iterateCallbacks(
                'cacheKeyWillBeUsed'
              )) {
                effectiveRequest = toRequest(
                  await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                  })
                );
              }
              this._cacheKeys[key] = effectiveRequest;
            }
            return this._cacheKeys[key];
          }
          /**
           * Returns true if the strategy has at least one plugin with the given
           * callback.
           *
           * @param {string} name The name of the callback to check for.
           * @return {boolean}
           */
          hasCallback(name) {
            for (const plugin of this._strategy.plugins) {
              if (name in plugin) {
                return true;
              }
            }
            return false;
          }
          /**
           * Runs all plugin callbacks matching the given name, in order, passing the
           * given param object (merged ith the current plugin state) as the only
           * argument.
           *
           * Note: since this method runs all plugins, it's not suitable for cases
           * where the return value of a callback needs to be applied prior to calling
           * the next callback. See
           * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
           * below for how to handle that case.
           *
           * @param {string} name The name of the callback to run within each plugin.
           * @param {Object} param The object to pass as the first (and only) param
           *     when executing each callback. This object will be merged with the
           *     current plugin state prior to callback execution.
           */
          async runCallbacks(name, param) {
            for (const callback of this.iterateCallbacks(name)) {
              // TODO(philipwalton): not sure why `any` is needed. It seems like
              // this should work with `as WorkboxPluginCallbackParam[C]`.
              await callback(param);
            }
          }
          /**
           * Accepts a callback and returns an iterable of matching plugin callbacks,
           * where each callback is wrapped with the current handler state (i.e. when
           * you call each callback, whatever object parameter you pass it will
           * be merged with the plugin's current state).
           *
           * @param {string} name The name fo the callback to run
           * @return {Array<Function>}
           */
          *iterateCallbacks(name) {
            for (const plugin of this._strategy.plugins) {
              if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = param => {
                  const statefulParam = Object.assign(
                    Object.assign({}, param),
                    {state}
                  );
                  // TODO(philipwalton): not sure why `any` is needed. It seems like
                  // this should work with `as WorkboxPluginCallbackParam[C]`.
                  return plugin[name](statefulParam);
                };
                yield statefulCallback;
              }
            }
          }
          /**
           * Adds a promise to the
           * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
           * of the event event associated with the request being handled (usually a
           * `FetchEvent`).
           *
           * Note: you can await
           * {@link workbox-strategies.StrategyHandler~doneWaiting}
           * to know when all added promises have settled.
           *
           * @param {Promise} promise A promise to add to the extend lifetime promises
           *     of the event that triggered the request.
           */
          waitUntil(promise) {
            this._extendLifetimePromises.push(promise);
            return promise;
          }
          /**
           * Returns a promise that resolves once all promises passed to
           * {@link workbox-strategies.StrategyHandler~waitUntil}
           * have settled.
           *
           * Note: any work done after `doneWaiting()` settles should be manually
           * passed to an event's `waitUntil()` method (not this handler's
           * `waitUntil()` method), otherwise the service worker thread my be killed
           * prior to your work completing.
           */
          async doneWaiting() {
            let promise;
            while ((promise = this._extendLifetimePromises.shift())) {
              await promise;
            }
          }
          /**
           * Stops running the strategy and immediately resolves any pending
           * `waitUntil()` promises.
           */
          destroy() {
            this._handlerDeferred.resolve(null);
          }
          /**
           * This method will call cacheWillUpdate on the available plugins (or use
           * status === 200) to determine if the Response is safe and valid to cache.
           *
           * @param {Request} options.request
           * @param {Response} options.response
           * @return {Promise<Response|undefined>}
           *
           * @private
           */
          async _ensureResponseSafeToCache(response) {
            let responseToCache = response;
            let pluginsUsed = false;
            for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
              responseToCache =
                (await callback({
                  request: this.request,
                  response: responseToCache,
                  event: this.event,
                })) || undefined;
              pluginsUsed = true;
              if (!responseToCache) {
                break;
              }
            }
            if (!pluginsUsed) {
              if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
              }
              if (true) {
                if (responseToCache) {
                  if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(
                        `The response for '${this.request.url}' ` +
                          `is an opaque response. The caching strategy that you're ` +
                          `using will not cache opaque responses by default.`
                      );
                    } else {
                      workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(
                        `The response for '${this.request.url}' ` +
                          `returned a status code of '${response.status}' and won't ` +
                          `be cached as a result.`
                      );
                    }
                  }
                }
              }
            }
            return responseToCache;
          }
        }

        /***/
      },

    /***/ '../node_modules/workbox-strategies/_version.js':
      /*!******************************************************!*\
  !*** ../node_modules/workbox-strategies/_version.js ***!
  \******************************************************/
      /***/ () => {
        // @ts-ignore
        try {
          self['workbox:strategies:7.0.0'] && _();
        } catch (e) {}

        /***/
      },

    /***/ '../node_modules/workbox-precaching/index.mjs':
      /*!****************************************************!*\
  !*** ../node_modules/workbox-precaching/index.mjs ***!
  \****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PrecacheController: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController,
          /* harmony export */ PrecacheFallbackPlugin: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin,
          /* harmony export */ PrecacheRoute: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute,
          /* harmony export */ PrecacheStrategy: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy,
          /* harmony export */ addPlugins: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins,
          /* harmony export */ addRoute: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute,
          /* harmony export */ cleanupOutdatedCaches: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches,
          /* harmony export */ createHandlerBoundToURL: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL,
          /* harmony export */ getCacheKeyForURL: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL,
          /* harmony export */ matchPrecache: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache,
          /* harmony export */ precache: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache,
          /* harmony export */ precacheAndRoute: () =>
            /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute,
          /* harmony export */
        });
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./index.js */ '../node_modules/workbox-precaching/index.js'
          );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, {a: getter});
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = exports => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', {value: true});
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(
      /*! workbox-precaching */ '../node_modules/workbox-precaching/index.mjs'
    );
  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /* eslint-disable no-restricted-globals */

  function parseSwParams() {
    const params = JSON.parse(
      new URLSearchParams(self.location.search).get('params')
    );
    if (params.debug) {
      console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
  }
  // Doc advises against dynamic imports in SW
  // https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
  // https://twitter.com/sebastienlorber/status/1280155204575518720
  // but looks it's working fine as it's inlined by webpack, need to double check
  async function runSWCustomCode(params) {
    if (false) {
    }
  }
  /**
   * Gets different possible variations for a request URL. Similar to
   * https://git.io/JvixK
   */
  function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
      return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
      // /blog.html
      urlObject.href,
      // /blog/ => /blog/index.html
      // /blog => /blog/index.html
      `${urlObject.href}${
        urlObject.pathname.endsWith('/') ? '' : '/'
      }index.html`,
    ];
  }
  (async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [
      {revision: 'fdc7d7115ebcc9bfa3538ac02d30bcc4', url: '404.html'},
      {
        revision: '93434a587bad9ebac8cc1d25a162c600',
        url: 'assets/css/styles.8991c9cc.css',
      },
      {
        revision: '0d8d18c4c545d37e7573ed5bd984953a',
        url: 'assets/js/0077c686.799a76bc.js',
      },
      {
        revision: 'cb26a28a5ce42c1058f747a396ee5341',
        url: 'assets/js/01a85c17.c120a2a0.js',
      },
      {
        revision: 'a0aefbf83d8705c5d2aa194b5378a952',
        url: 'assets/js/03a36a50.ce1d3fe8.js',
      },
      {
        revision: 'ec9405ebcd887067ce51ebac56eed537',
        url: 'assets/js/086193cc.6fcda7dc.js',
      },
      {
        revision: 'f739c3a42dd1296e71757471a08e8f7d',
        url: 'assets/js/0b55a3c2.c515f1a9.js',
      },
      {
        revision: '05805db7e387c5ad4f3f02be3ded51b7',
        url: 'assets/js/10a9d0dd.6a569582.js',
      },
      {
        revision: 'c7a94df88034c5600a7d7944fd5641dc',
        url: 'assets/js/131e29b3.440904df.js',
      },
      {
        revision: '74992415dd8c50ae50e1cf352a08406f',
        url: 'assets/js/144.7c0a0f7a.js',
      },
      {
        revision: '9da79e1bc267f92d83f6726b7b2c9bbf',
        url: 'assets/js/14d8f0bf.97707b8a.js',
      },
      {
        revision: 'bb3b903819729d3bf104a6da80e9d69b',
        url: 'assets/js/159171c3.ec78fc9f.js',
      },
      {
        revision: 'fb42cad6fd23a729f8ab2038e6e048a0',
        url: 'assets/js/17896441.3dcfd797.js',
      },
      {
        revision: 'c63b7485b0ed93866b9a3222b1212b11',
        url: 'assets/js/18b93cb3.a53817bb.js',
      },
      {
        revision: '89af06467533dcdd1b2ad5b7be449e57',
        url: 'assets/js/1964a717.bfc961da.js',
      },
      {
        revision: '3f88e6a7b01cb3272e37f569f9dae6da',
        url: 'assets/js/19a34acc.d0423915.js',
      },
      {
        revision: 'd91d4fd91e2ef738614646016e8057f7',
        url: 'assets/js/1a4e3797.69a46bcf.js',
      },
      {
        revision: '320b4af9764b96bdd4cd637b4a7e7395',
        url: 'assets/js/2162e835.fd5e978f.js',
      },
      {
        revision: '83dc3d63f45045e19cdbfc3f5a485b5f',
        url: 'assets/js/227c0f05.87be9170.js',
      },
      {
        revision: 'f297955e6195d319d9a28af2a494466b',
        url: 'assets/js/2470.555c4564.js',
      },
      {
        revision: 'c2b143ef7a1dd44f95492b0a9d0438f4',
        url: 'assets/js/261d41ac.ccb2aa5f.js',
      },
      {
        revision: 'bef8a70725d97c8d8ce2c5f564bc2a65',
        url: 'assets/js/265f1bf0.f52aad6b.js',
      },
      {
        revision: '1024af055f82bb09d2731b266a677496',
        url: 'assets/js/283e63f8.a695ff42.js',
      },
      {
        revision: '3e14de8915fcf7d4261233dc319de4cf',
        url: 'assets/js/29f10043.0f7d6256.js',
      },
      {
        revision: 'e888380dec9062ea1abc19c35609bc1e',
        url: 'assets/js/2bfcd05e.f52bdd2f.js',
      },
      {
        revision: 'c4fef33c7d32077cf885a9fffff4bf25',
        url: 'assets/js/3048.42314e79.js',
      },
      {
        revision: 'ae7c4e85dbce8896a183553eca5f376b',
        url: 'assets/js/31595137.0e7a67b4.js',
      },
      {
        revision: 'ca3f067b3e21e24426976d78eb715998',
        url: 'assets/js/32aaaf70.0bfd6940.js',
      },
      {
        revision: '1ab59b2b4c256f60ad7b2cf75275709e',
        url: 'assets/js/338afeee.e1041704.js',
      },
      {
        revision: '2a80cc0d2846a137cd29fbb7f6ee0ee9',
        url: 'assets/js/3475.f3a32b03.js',
      },
      {
        revision: 'd5aab81052122d04e46cb4425db867ea',
        url: 'assets/js/37a94953.0be94efc.js',
      },
      {
        revision: 'cefd0a4a929ca20dd19d2d33834c01b8',
        url: 'assets/js/454d84e2.6edd4a4a.js',
      },
      {
        revision: 'c510094eeef2ce9d7ee9894a500eecea',
        url: 'assets/js/464b2a7f.7f782c5d.js',
      },
      {
        revision: 'ef186df5a86372dfcbe98926a1d021b0',
        url: 'assets/js/46b4c412.4196cb16.js',
      },
      {
        revision: '62e1d1dc8ac6a30465cd59b685678a9c',
        url: 'assets/js/46ce5674.53f97829.js',
      },
      {
        revision: '2597729612f2b8930587aab74b5f4d12',
        url: 'assets/js/4709a4ae.80dc7b41.js',
      },
      {
        revision: 'f78304fcc493aa261c95123ee30d9d25',
        url: 'assets/js/48b70c36.6928cdde.js',
      },
      {
        revision: 'e219e8ac2f1f6d8411a8ff45541300ee',
        url: 'assets/js/4a9bda00.526576b1.js',
      },
      {
        revision: '7de25c8de4933ada39ef9d4ae0ee9189',
        url: 'assets/js/50ae88c6.5496f7ad.js',
      },
      {
        revision: '072bc844a3d89ea804278fc97d22a136',
        url: 'assets/js/54e04490.69875213.js',
      },
      {
        revision: '357500f44a3ef41a0bb0969141096839',
        url: 'assets/js/5882.449fe864.js',
      },
      {
        revision: 'b6089debc1781281b9079e4eed6cbe1b',
        url: 'assets/js/5bad0003.e6d4a509.js',
      },
      {
        revision: '6368be25a69dd58aa18ee7f53b34906d',
        url: 'assets/js/5e95c892.e489d0a9.js',
      },
      {
        revision: '649746245688c42b399be00b6da446c9',
        url: 'assets/js/6612.06a90b92.js',
      },
      {
        revision: '7a9c7a47043cb9891cc39c41068b5e79',
        url: 'assets/js/6875c492.9f4b9df9.js',
      },
      {
        revision: '9dc5eb23df7b6601e92c86363862ffbb',
        url: 'assets/js/695a3a77.6511f581.js',
      },
      {
        revision: '68919f49c56efb4bc152049151dec55a',
        url: 'assets/js/6991a43c.0902a35a.js',
      },
      {
        revision: '151b69069b712a96a1db580868841a15',
        url: 'assets/js/6b0755a6.95c7363d.js',
      },
      {
        revision: '16ee456ae04fd0b9608966ef15585ede',
        url: 'assets/js/6e08b3ef.793e3c18.js',
      },
      {
        revision: '4cdcf152b7d240d05e111864d2cafc1f',
        url: 'assets/js/74af3424.c0ece0c5.js',
      },
      {
        revision: 'bf12f8a7c5fd2f4edbf21d78c2163752',
        url: 'assets/js/79b55fdf.9ded092c.js',
      },
      {
        revision: '01ed8ccbf210fa9c3bc72b1a57818416',
        url: 'assets/js/7b9d9f1b.c75fd367.js',
      },
      {
        revision: 'f16098215564f59cc4b4400249ea3293',
        url: 'assets/js/7c447515.ac97f660.js',
      },
      {
        revision: '881aaf3fe98e9e36b4970893662ec3b2',
        url: 'assets/js/8107b385.a976ebd6.js',
      },
      {
        revision: 'cca5582f3fbc384be3e1359636935da2',
        url: 'assets/js/8119.0cee50b9.js',
      },
      {
        revision: 'b0b544fa5188b91da514684cd1a93390',
        url: 'assets/js/814f3328.cc6e05b1.js',
      },
      {
        revision: 'bcd32edc0e45d2f915211ef92fe6d577',
        url: 'assets/js/82e08b2c.48baef69.js',
      },
      {
        revision: '82b7b1d4f911de03ea361bf63dc7e0fb',
        url: 'assets/js/83d480e9.7475b647.js',
      },
      {
        revision: '935085bcf0749ce6f92c504158ddac33',
        url: 'assets/js/85dd1552.1f1fe345.js',
      },
      {
        revision: '8a974a83c5eac039478dd8abc415ac2c',
        url: 'assets/js/8636.5ebde330.js',
      },
      {
        revision: '14ebd737db9af7fac2c53d4ed5332417',
        url: 'assets/js/8973.9c478e29.js',
      },
      {
        revision: '127d57c2ea87fa7af7aff606d798b2b3',
        url: 'assets/js/8c66913f.3b41d742.js',
      },
      {
        revision: '1307ddebb6e8a332cb05f801864b14c6',
        url: 'assets/js/8cb51acd.444a5134.js',
      },
      {
        revision: '6b03b08d6372498889c27797beabef00',
        url: 'assets/js/903.c1a251da.js',
      },
      {
        revision: 'fa44f76bafc0173f29c1b037b55a0a7e',
        url: 'assets/js/92317b88.d89b1848.js',
      },
      {
        revision: 'adf6595b4e0fe8ea20fe8ecf550af384',
        url: 'assets/js/935f2afb.efbb9d39.js',
      },
      {
        revision: 'aa32340da3431a38a7a23eb58e1d4b17',
        url: 'assets/js/958bc128.d00b78b7.js',
      },
      {
        revision: 'da9ec0b81da929f5db37bb54621e876e',
        url: 'assets/js/98e2ae66.0edbc5c1.js',
      },
      {
        revision: 'af72855854cbb6711b2ec2c94d61d2c0',
        url: 'assets/js/99a43cbf.7c742ff2.js',
      },
      {
        revision: '195c6f18b1e3c1cc22a5ee9b0dcadad1',
        url: 'assets/js/9c021584.1e71999b.js',
      },
      {
        revision: 'c759eb7ff64bf8de5d8a2d16c72a4693',
        url: 'assets/js/9e4087bc.f79fde6b.js',
      },
      {
        revision: 'f4032d13993fb6f30b90074cc150302a',
        url: 'assets/js/a19de0f8.71d9d008.js',
      },
      {
        revision: '14b7c747d49cac6143a55ec69c90c858',
        url: 'assets/js/a4871d7e.0eb0e61d.js',
      },
      {
        revision: '45ec6d4a6e2b3f78d2762c6d72c14baa',
        url: 'assets/js/a5852e81.31369f0b.js',
      },
      {
        revision: '94832f77de70449f0592806337d41b17',
        url: 'assets/js/a6aa9e1f.933fc26a.js',
      },
      {
        revision: 'ed14b7ade1ec3812b4d10608cff27092',
        url: 'assets/js/a7023ddc.11e5a0cc.js',
      },
      {
        revision: '938cb129e1f094074f67290b472cf855',
        url: 'assets/js/a7bd4aaa.ac994da9.js',
      },
      {
        revision: '946ee6d0aa4906ba11ced6f7da6fa3e1',
        url: 'assets/js/a94703ab.dde27d1f.js',
      },
      {
        revision: 'c9ae7e27625e41189d11bd9770941589',
        url: 'assets/js/acecf23e.21ff8828.js',
      },
      {
        revision: '63fbe2fdeeed1969b16321c3280017e6',
        url: 'assets/js/af1261ab.91fc1cf5.js',
      },
      {
        revision: '3d62c0204c6d1b09329db56242c72ce6',
        url: 'assets/js/af55db91.0c87c87b.js',
      },
      {
        revision: 'ea9665572d0e17a5bf718239cb063d14',
        url: 'assets/js/b1282991.27c118cf.js',
      },
      {
        revision: '9b76c6876060476bee7c6ba3f7e1f141',
        url: 'assets/js/b1f5fc95.ab5b76fb.js',
      },
      {
        revision: 'a30722d5c5fa4c016b765d80d99f6cf5',
        url: 'assets/js/b2b675dd.97d84c28.js',
      },
      {
        revision: 'a340bc60a2ba09270cde797ecc1821c0',
        url: 'assets/js/b2f554cd.2b03594b.js',
      },
      {
        revision: 'a737d02410669e31edc303e7814ffc7e',
        url: 'assets/js/b57a647f.db67226e.js',
      },
      {
        revision: '3b9ce9dc535665d212d17404086bcc0a',
        url: 'assets/js/bc27fdad.6f3d5fe2.js',
      },
      {
        revision: '166ac56dd1f752f9a97d3b87548264a8',
        url: 'assets/js/bf2aa723.4bc01e43.js',
      },
      {
        revision: '03fc691136b207630887142af612d51d',
        url: 'assets/js/c2776f76.0113a402.js',
      },
      {
        revision: 'c8be3906640c65b863fa23e0c4965275',
        url: 'assets/js/c4f5d8e4.72b803db.js',
      },
      {
        revision: '8a2c555dca77f51a1ef35ae41b3c4619',
        url: 'assets/js/c70f4716.b0b69a8a.js',
      },
      {
        revision: 'f6e38fbe5debd81bc26d2a83e6d6712f',
        url: 'assets/js/ccc49370.3dd2c743.js',
      },
      {
        revision: '3c7f7adca318981c5c6ccd537046bbc3',
        url: 'assets/js/cfcb5f93.27c8bb3b.js',
      },
      {
        revision: 'fb613aac24009b460a3fc573afb8d3e8',
        url: 'assets/js/d22152a6.d7c16983.js',
      },
      {
        revision: 'baa0be5be55d59d7ab0097bf519244e7',
        url: 'assets/js/dd40202d.88cbaa6f.js',
      },
      {
        revision: '3d9627c29fcd16e62189661ae6d2523a',
        url: 'assets/js/dfbd2c11.2f919efd.js',
      },
      {
        revision: '349e38701114cff6dcf3fc923217ce32',
        url: 'assets/js/e13aac12.a4fcb70e.js',
      },
      {
        revision: '6df3ed88f4038fc00e6be4f727045d4e',
        url: 'assets/js/e5822b3c.d230f891.js',
      },
      {
        revision: '3e32766eb163a2fc6057ee2748c0bfa7',
        url: 'assets/js/e665582c.66038fe8.js',
      },
      {
        revision: '5d680040adc985d489ec57e784693c5a',
        url: 'assets/js/e722f956.f9f0a478.js',
      },
      {
        revision: 'c6b3a922dab46f30666f286705dd7d32',
        url: 'assets/js/ea659f99.9c087a37.js',
      },
      {
        revision: 'b13d3eedae2ce3e1b3fbe5c1ce20cb5d',
        url: 'assets/js/ece86388.bfa14b56.js',
      },
      {
        revision: '4dad3f550cde10705c367cc82617815a',
        url: 'assets/js/ed58481b.9f56296b.js',
      },
      {
        revision: 'c4f58cfff04200c2503f50c95239fe5e',
        url: 'assets/js/eea5ed86.6dfad984.js',
      },
      {
        revision: '62dbeda270decde76fc27ded88600d53',
        url: 'assets/js/efd7435c.e94d90ca.js',
      },
      {
        revision: '6246969397da0738b0b7fe705575a0ca',
        url: 'assets/js/f4f9e066.6c3d358c.js',
      },
      {
        revision: '489fa48627716ce21b1cf47494b7523d',
        url: 'assets/js/f6c839d8.9eb53f36.js',
      },
      {
        revision: 'aa6757964a3d42771bfa5e3b879eb708',
        url: 'assets/js/fb311b19.734901eb.js',
      },
      {
        revision: '894f3e8eb097bf866faab4d2f2a5dbab',
        url: 'assets/js/fca129b3.ffbdcf1e.js',
      },
      {
        revision: '53331611aa41f6a2a723687f17ce8e44',
        url: 'assets/js/main.07878951.js',
      },
      {
        revision: 'f8ee473d9ef8972403a936a2708890ca',
        url: 'assets/js/runtime~main.50724797.js',
      },
      {revision: 'acf8a66259f54782fb3d632f7ed66beb', url: 'blog.html'},
      {
        revision: '7e78df27dda3b2e47a79b682e98fa566',
        url: 'blog/2024/06/18/0.73-real-time-processing-release.html',
      },
      {revision: '4711af3652588a13257fa39692c668cf', url: 'blog/archive.html'},
      {revision: '9f8a69c7e1596c5337eb4c0aef94f43d', url: 'blog/feed.json'},
      {revision: 'cff2ff1b4397170757e8d6963b753de1', url: 'blog/tags.html'},
      {
        revision: '769f05f260e3a1d39c032d4d53cffc01',
        url: 'blog/tags/announcement.html',
      },
      {
        revision: 'a2c1856440bef785764631cc73326b2c',
        url: 'blog/tags/debugging.html',
      },
      {
        revision: '459b2b56652207a66df797578051fb41',
        url: 'blog/tags/release.html',
      },
      {
        revision: '46839e398bf97905119d077dac5b1fa6',
        url: 'components/Section.html',
      },
      {
        revision: 'b99eb18d69fcf2fcf14853d65cc81481',
        url: 'components/SectionTitle.html',
      },
      {
        revision: 'ae72f40edd8018a610ab1abf3947b3a8',
        url: 'components/ThemeImage.html',
      },
      {revision: 'c2c2a7d7940a632688153786d274c444', url: 'docs.html'},
      {
        revision: '5e5cb9753b3a3fee35b7891856273e2b',
        url: 'docs/add-bank-account.html',
      },
      {revision: '0139974a3757138be7553b6b2e5a9879', url: 'docs/billing.html'},
      {revision: 'fc58d08d9c5bfdf5f2ec8af8657d4031', url: 'docs/blank.html'},
      {
        revision: 'dbfd3d02c153a76e7e8f20ba52858a17',
        url: 'docs/changing-member-roles.html',
      },
      {
        revision: '97a47c94b6e6b56f5468f5fd8921dfad',
        url: 'docs/changing-ownership.html',
      },
      {
        revision: 'c606e451086dba6e4f824a336874b559',
        url: 'docs/dashboard.html',
      },
      {
        revision: 'ee08f91d1f651ce5b8e95d0eeef6bf2c',
        url: 'docs/dont-install-with-gtm.html',
      },
      {
        revision: '9ab151a38ada23f5198c03f03a095f1f',
        url: 'docs/dont-install-with-shopify-settings.html',
      },
      {
        revision: 'c3940e0f007df6a6954ade728040590f',
        url: 'docs/event-pageview.html',
      },
      {revision: 'f593c0c4e552a4a4f918692a1a952c06', url: 'docs/events.html'},
      {revision: 'f752509290f9520c7be6ef641f5da0bd', url: 'docs/faq.html'},
      {revision: '7c04798dafe9e066dd7ce2ab6cacd659', url: 'docs/glossary.html'},
      {
        revision: '65c9ab026451361ba9c800c7b0a4186d',
        url: 'docs/Integrations.html',
      },
      {
        revision: '1948a2017ad2e482d1bca65bcc8b1733',
        url: 'docs/intro-to-dashboard.html',
      },
      {
        revision: '9aeff1d1df23aa6cb4a2f42d9fead7ec',
        url: 'docs/intro-to-graphql.html',
      },
      {
        revision: '61b6590f673c6eaf7f435a2c1d4f04fd',
        url: 'docs/intro-to-integrations.html',
      },
      {
        revision: '12860e1d5d7d621d73d18ab73e2ec2a5',
        url: 'docs/intro-to-leads.html',
      },
      {
        revision: '4213e8e802ffa89fa0ff37669a73de5a',
        url: 'docs/intro-to-pixel-tech.html',
      },
      {
        revision: 'b0006212b65b318f714a3c897bccddd1',
        url: 'docs/intro-to-rest.html',
      },
      {
        revision: '7d3fae1e16c127850f6234f4b2c21e0b',
        url: 'docs/intro-to-suppressing.html',
      },
      {revision: '163ef9cda434adeb3836f0d1c0d2c836', url: 'docs/inviting.html'},
      {
        revision: 'eea772b35fbae81312ac5c21e64ce33e',
        url: 'docs/Journeyimg.html',
      },
      {
        revision: 'aa27d7515d24cbe335668ed5cef1b94d',
        url: 'docs/next/blank.html',
      },
      {
        revision: 'cbee9a4aa131a06d371071ae005eb8d6',
        url: 'docs/next/event-add-to-cart.html',
      },
      {
        revision: '0f25e5dfba0910d7adaf29efff1a1ed2',
        url: 'docs/next/event-pageview.html',
      },
      {
        revision: 'fddc68d3e6a7318ceb6598a9943cd2d3',
        url: 'docs/next/events.html',
      },
      {
        revision: 'ef6be2197d6f87d89c5804a8f788cf34',
        url: 'docs/next/intro-to-dashboard.html',
      },
      {
        revision: '54008794e93bc83719c75c6b2c82f8dd',
        url: 'docs/next/intro-to-graphql.html',
      },
      {
        revision: '016e7bc3f5b26831c383ac3fcf817d34',
        url: 'docs/next/intro-to-integrations.html',
      },
      {
        revision: '3753d66ab2577fc4a09093cc7247761a',
        url: 'docs/next/intro-to-leads.html',
      },
      {
        revision: '5757f26b37eb86040d675b7f39b3db8c',
        url: 'docs/next/intro-to-pixel-tech.html',
      },
      {
        revision: 'cdb19d226303bd800ce2474cb4a91cff',
        url: 'docs/next/intro-to-rest.html',
      },
      {
        revision: '3a03139f5f491e0781c9e87e12f086f8',
        url: 'docs/next/intro-to-suppressing.html',
      },
      {
        revision: '3909a755734ec9fab3070217132c3670',
        url: 'docs/next/start-create-a-pixel.html',
      },
      {
        revision: '833ebc952f44206042ac11866f0a8ea3',
        url: 'docs/next/start-get-your-leads.html',
      },
      {
        revision: '6a8605f5df9ebd9133aa4a2d6701da11',
        url: 'docs/next/start-pixel-installation.html',
      },
      {
        revision: 'd46a6dee53c87425a8c3a73520ec7282',
        url: 'docs/next/start-registration.html',
      },
      {
        revision: '2e58a411837fa15b5323008ef3ff0621',
        url: 'docs/organizations.html',
      },
      {
        revision: 'ff2bb67d2bbbe4d2de0d1c815ebb85e5',
        url: 'docs/QuickLinks.html',
      },
      {
        revision: '61270fb9ff5d5ec3afbdb6820da2dd37',
        url: 'docs/removing-a-member.html',
      },
      {
        revision: '6efd2eec2641b4f6c5da2dd717fadcb0',
        url: 'docs/start-create-a-pixel.html',
      },
      {
        revision: '021289aa24364d455f6644f4e473f776',
        url: 'docs/start-get-your-leads.html',
      },
      {
        revision: '66d117f5647204d662dbbabcf914a931',
        url: 'docs/start-pixel-installation.html',
      },
      {
        revision: 'a2a2801ca88ee1a7ce63d34659111ab0',
        url: 'docs/start-registration.html',
      },
      {revision: '955735764e5c1ec94ee9ef4692d12bdd', url: 'docs/teams.html'},
      {
        revision: '24d2390f94803c3f9bd1ea10db6c5dee',
        url: 'Home/CallToAction.html',
      },
      {
        revision: '349ec24b54e2fe091a273c1bdb519d11',
        url: 'Home/components/Section.html',
      },
      {
        revision: 'a33fd429d70e39e4ba31e8cf0e1bbc85',
        url: 'Home/components/SectionTitle.html',
      },
      {
        revision: 'e6ba8bb3c8921e6e160a44f1d8df4b2a',
        url: 'Home/components/ThemeImage.html',
      },
      {
        revision: 'c42ae93b1a187611068e4953eba1535c',
        url: 'Home/Framework.html',
      },
      {revision: '855c40697b93845f4a6b7f84da5fd666', url: 'Home/Logo.html'},
      {revision: '88f5362e745129ff8b185c022b5e467f', url: 'Home/Native.html'},
      {
        revision: 'e78395cb8e099e6b09504ddcca1b94c2',
        url: 'Home/Platforms.html',
      },
      {
        revision: 'd353d5b3e0b3e6fdabbdb472e1fbaaad',
        url: 'Home/Platforms/FoxFact.html',
      },
      {revision: '41743d6c324e37d396027c1936c6b910', url: 'Home/Watch.html'},
      {revision: '0d8544015fa920363f52f6fa8359744d', url: 'index.html'},
      {revision: '77e22b086a5ed1807c1a06c44ef50270', url: 'Landing.html'},
      {revision: 'c5057f0007b10704740327482e97dfd0', url: 'Landing/Hero.html'},
      {
        revision: '2c1673d3c4e33f78713efa8f18d44b14',
        url: 'Landing/Hero/Devices.html',
      },
      {
        revision: '91c7fa0f7b9c40cd5b988dd09ccbb9a5',
        url: 'Landing/Hero/FloorBackground.html',
      },
      {
        revision: '4bce299651020ca4be6fce8bf4667fd4',
        url: 'Landing/Hero/GridBackground.html',
      },
      {revision: '9c08fe691089d13a7c178407fa32e32b', url: 'manifest.json'},
      {revision: '2d2a11cb9524bebd70d56b4c77b99d42', url: 'movies.json'},
      {
        revision: '3328e0e374f423fe357bf91fe30e5742',
        url: 'privacy-policy.html',
      },
      {revision: '8b1f451f13a49d8f0035f068ad1ff857', url: 'search.html'},
      {
        revision: 'b64528e03e14fd8b0d99687e3bd95f9a',
        url: 'terms-and-conditions.html',
      },
      {revision: '9ad546a24223bae04ceba4aa2a3a8980', url: 'versions.html'},
      {
        revision: '89b76b52d3bfd5c51d6e4f8b8c02f479',
        url: 'assets/images/click-on-leads-761d8a50a3fc2933c0cc852bead683b6.gif',
      },
      {
        revision: '9899bb6c241f653fb60ef1ceffdd09e8',
        url: 'assets/images/cta-bg-pattern-8895160074a5adead0ce217de37d101f.png',
      },
      {
        revision: 'f9d7db996043a800e14ec39e36f5653c',
        url: 'assets/images/dashboard-ss-11a77701dd63d9da67812603c2946645.png',
      },
      {
        revision: '08ff72ebc42e9f11350fe52647fc9d4f',
        url: 'assets/images/organization-menu-6d7c7f1dd4b05dfe5cc3fe97b5517d0d.png',
      },
      {
        revision: '4e9af901afce6872862de3828e8b8670',
        url: 'assets/images/registration-ss-8a0c9e949cf1dfc2b885f79966d0af24.png',
      },
      {
        revision: 'b8094401c2cf3541e4dadfee7fa68541',
        url: 'blog/assets/0.58-cli-speed.png',
      },
      {
        revision: '1010a51dbe6898103d674f507c79dde5',
        url: 'blog/assets/0.59-cli-speed.png',
      },
      {
        revision: 'e151b81be4f51e22714931eb3c4c2dfd',
        url: 'blog/assets/0.60-new-init-screen.png',
      },
      {
        revision: '57d85a98e64d179eabd505cbd27dbe26',
        url: 'blog/assets/0.60-upgrade-helper.png',
      },
      {
        revision: '9a9cbf34a88aef25f42242624a120c0b',
        url: 'blog/assets/0.62-flipper.png',
      },
      {
        revision: 'c634f23f74e24e7e0362a7dae960816c',
        url: 'blog/assets/0.63-logbox.png',
      },
      {
        revision: '1b0328b607ee3390390e8d85ddf1ee00',
        url: 'blog/assets/0.66-artifact.png',
      },
      {
        revision: '3c619503d78fbe9126eebfa276d61efe',
        url: 'blog/assets/0.66-build-npm-package.png',
      },
      {
        revision: '9cf272cac476c87c338f4316ce9f776d',
        url: 'blog/assets/0.73-android-media-picker.jpg',
      },
      {
        revision: 'a7671d41367c5abb8dbb09a256ae2832',
        url: 'blog/assets/0.73-debugging-docs.jpg',
      },
      {
        revision: '9d9390fdd2c301a79d11c1ed80eac782',
        url: 'blog/assets/0.74-align-content.png',
      },
      {
        revision: '8b50a43f9d1c3a82a47e745bffe867b2',
        url: 'blog/assets/0.74-android-app-size.jpg',
      },
      {
        revision: '32241a7469d12333ff3222f5b3e3085a',
        url: 'blog/assets/0.74-row-reverse-after.png',
      },
      {
        revision: '397439e9e729acdad569db6f84086e2f',
        url: 'blog/assets/0.74-row-reverse-before.png',
      },
      {
        revision: '128bbbc38356ed5cf2c787870f56a435',
        url: 'blog/assets/0.74-static-example.png',
      },
      {
        revision: '550f6fd7e3b585f2d541b69814801704',
        url: 'blog/assets/2019_hermes-launch-illo-rachel-nabors.jpg',
      },
      {
        revision: '6830fb837e8cbd743548e64bfe8d7dec',
        url: 'blog/assets/animated-diagram.png',
      },
      {
        revision: '7380b462f4f80dca380e7bf8bd3599a1',
        url: 'blog/assets/big-hero.jpg',
      },
      {
        revision: 'a5d6e2f21b4bb0f898165c63ed8a94fb',
        url: 'blog/assets/blue-hero.jpg',
      },
      {
        revision: 'e15d3196abe5d2176cb606326fd0d55c',
        url: 'blog/assets/build-com-blog-image.jpg',
      },
      {
        revision: '0abc8e9793a8ebe5fdc5fc1e2899bf20',
        url: 'blog/assets/button-android-ios.png',
      },
      {
        revision: '0cee8fdf5ae32eac0ac43fd5e53ec8f3',
        url: 'blog/assets/core-contributor-summit-2022.jpg',
      },
      {
        revision: '3a93c74fe936959c0ccd7445a5ea112e',
        url: 'blog/assets/dark-hero.png',
      },
      {
        revision: 'f59db71d30e8463c6790bc792d95eca1',
        url: 'blog/assets/eli-at-f8.png',
      },
      {
        revision: '7b4fcc1f5e57943aceff048cad354b56',
        url: 'blog/assets/FlexboxGapAfter.png',
      },
      {
        revision: 'ae749f044d40181285f31f12689db512',
        url: 'blog/assets/FlexboxGapBefore.png',
      },
      {
        revision: '971116e4c506b85d5b8ba8396c3d4f45',
        url: 'blog/assets/git-upgrade-conflict.png',
      },
      {
        revision: 'e85b3bc4c335d7247443354158c2966c',
        url: 'blog/assets/git-upgrade-output.png',
      },
      {
        revision: '4b565c9b0739e4b1782c03c9d1597ef5',
        url: 'blog/assets/hermes-default-android-data.png',
      },
      {
        revision: '46ad4fdc73e9af98d9e79133a9050711',
        url: 'blog/assets/hermes-default-ios-data.png',
      },
      {
        revision: '71f135963df25a8ebbd68813cd1736a9',
        url: 'blog/assets/hmr-architecture.png',
      },
      {
        revision: 'c2e1198af32c912c37f8154572d07268',
        url: 'blog/assets/hmr-diamond.png',
      },
      {
        revision: '751c840551a12471f33821266d29e290',
        url: 'blog/assets/hmr-log.png',
      },
      {
        revision: '45176192bb8c389ad22e8fff5d8f527a',
        url: 'blog/assets/hmr-proxy.png',
      },
      {
        revision: '1542c258fed30b793006bf4050c4f547',
        url: 'blog/assets/hmr-step.png',
      },
      {
        revision: 'e9f90ea640584122397b9fc45856320c',
        url: 'blog/assets/inline-requires.png',
      },
      {
        revision: '8e7ca2e37fd88298f460dfb588609312',
        url: 'blog/assets/input-accessory-1.png',
      },
      {
        revision: 'a975c6f482184a1534b02399154033a0',
        url: 'blog/assets/input-accessory-2.gif',
      },
      {
        revision: '5b3f6d3b95651121411356e7e043a415',
        url: 'blog/assets/input-accessory-4.gif',
      },
      {
        revision: '16406afc541d291ec8bb89f9859ba12f',
        url: 'blog/assets/input-accessory-5.gif',
      },
      {
        revision: '6efbddd04c0c99c8b6a25e47f7b9f0aa',
        url: 'blog/assets/ios-15-navigation-bar.jpg',
      },
      {
        revision: '9f6b42ab3e446bff89eade571a8be85f',
        url: 'blog/assets/ios-15-quicktype-bar.png',
      },
      {
        revision: 'd0fb510b0a0c6e6e90106251b569667f',
        url: 'blog/assets/loading-screen-01.gif',
      },
      {
        revision: 'd09be36793388cd7b53c4d0b8d82033f',
        url: 'blog/assets/loading-screen-02.gif',
      },
      {
        revision: '534466d71e7d544feb9b72e70b70bfbb',
        url: 'blog/assets/loading-screen-03.png',
      },
      {
        revision: '31d89830123a54c32e59301ea3cbea99',
        url: 'blog/assets/loading-screen-04.png',
      },
      {
        revision: 'f0f77605103ac8056e5cec567aee70a3',
        url: 'blog/assets/loading-screen-05.png',
      },
      {
        revision: '4a54755d8149c3e14c642f25812803a0',
        url: 'blog/assets/loading-screen-06.gif',
      },
      {
        revision: '0d3d2458b8a2115a70e4214e41250370',
        url: 'blog/assets/loading-screen-07.png',
      },
      {
        revision: '0751141f294bca2b3a989fcca44ce129',
        url: 'blog/assets/many-platform-vision-facebook-dating.png',
      },
      {
        revision: '5f98e2f66356457cc8d2d1ce8b436a59',
        url: 'blog/assets/many-platform-vision-facebook-website.png',
      },
      {
        revision: 'c766c0346c2bb2cfa2a5806b2e50f7fc',
        url: 'blog/assets/many-platform-vision-messenger-desktop.png',
      },
      {
        revision: 'f5bf8d1c62029ba071fdb1cf7db9d1a0',
        url: 'blog/assets/many-platform-vision-oculus-home.png',
      },
      {
        revision: 'ba744d461f589c018a284e12304ab988',
        url: 'blog/assets/new-arch-example-steps-to-migrate-an-app.png',
      },
      {
        revision: 'c9ac332af47ab4c2b06355d86170fa97',
        url: 'blog/assets/oss-roadmap-hero.jpg',
      },
      {
        revision: 'ebcf36cc588145ffbbb340aee6de4de1',
        url: 'blog/assets/package-exports-rollout.png',
      },
      {
        revision: 'cfe9170985cc6b10fc527790d4445399',
        url: 'blog/assets/pointer-events-code-flow.png',
      },
      {
        revision: '22963563ebe41b275e364cd70f23a752',
        url: 'blog/assets/pointer-events-motionevent-relationship.png',
      },
      {
        revision: '1cbe99dad8ba6e04acd1e21fafd9ed5b',
        url: 'blog/assets/rnmsf-august-2016-airbnb.jpg',
      },
      {
        revision: 'f0b3fe8a037b3b44f2ac067379c4ae63',
        url: 'blog/assets/rnmsf-august-2016-docs.jpg',
      },
      {
        revision: '94dd9205377b6217f8389c2f5734240f',
        url: 'blog/assets/rnmsf-august-2016-hero.jpg',
      },
      {
        revision: '8249ebafff6125514347ffde076da34f',
        url: 'blog/assets/rnmsf-august-2016-netflix.jpg',
      },
      {
        revision: 'c6e208a998dda590ff041288f0339ec2',
        url: 'blog/assets/RNPerformanceStartup.png',
      },
      {
        revision: '30c32b0b784d8ce472e3f822d8c2906d',
        url: 'blog/assets/rtl-ama-android-hebrew.png',
      },
      {
        revision: '5531306982594a0977e38c7343dac6a1',
        url: 'blog/assets/rtl-ama-ios-arabic.png',
      },
      {
        revision: '54894d7a24c86a8e1bc7549ab95565e2',
        url: 'blog/assets/rtl-demo-forcertl.png',
      },
      {
        revision: '77189961ca504f6cb2b8671294412848',
        url: 'blog/assets/rtl-demo-icon-ltr.png',
      },
      {
        revision: '83259e415a0b3c2df50ffd2596ef4582',
        url: 'blog/assets/rtl-demo-icon-rtl.png',
      },
      {
        revision: 'c3ef0dac35e4a4e9b208d8453db183b3',
        url: 'blog/assets/rtl-demo-listitem-ltr.png',
      },
      {
        revision: '6a69d24aa35197f6d14c0c09bbc41a28',
        url: 'blog/assets/rtl-demo-listitem-rtl.png',
      },
      {
        revision: 'e3bc27cf3edf37df6dc87cd89ebc344b',
        url: 'blog/assets/rtl-demo-swipe-ltr.png',
      },
      {
        revision: '4d04157c7ebf334c5c98aef859b4a58d',
        url: 'blog/assets/rtl-demo-swipe-rtl.png',
      },
      {
        revision: 'eca07dd1f562cc3ca6c28032c9f79989',
        url: 'blog/assets/rtl-rn-core-updates.png',
      },
      {
        revision: 'c3c9530c1c1c450ebe73a6de44a1c352',
        url: 'blog/assets/typescript-first-new-app.png',
      },
      {
        revision: '91a5c95bd3946f1b909d94bbb838899a',
        url: 'blog/assets/yarn-rncli.png',
      },
      {
        revision: '43c76f591eff8dc902a5a8fbe6a4d679',
        url: 'docs/assets/AddToBuildPhases.png',
      },
      {
        revision: '0b673e6bef465ce800abde4700248057',
        url: 'docs/assets/AddToLibraries.png',
      },
      {
        revision: '4b9ed8ca010fa9e62c7434c6535f76f7',
        url: 'docs/assets/AddToSearchPaths.png',
      },
      {
        revision: 'a2a7919f564aa67e7f2bba5ac36ab20a',
        url: 'docs/assets/Alert/exampleandroid.gif',
      },
      {
        revision: '7adb5639884db79ed337a39cc081a558',
        url: 'docs/assets/Alert/exampleios.gif',
      },
      {
        revision: '6df837f5fec1fb5b65f792844abdc98c',
        url: 'docs/assets/Architecture/renderer-phase-one.png',
      },
      {
        revision: 'f10bacb80e5332e566253c36e4f7dcc0',
        url: 'docs/assets/Architecture/renderer-phase-three.png',
      },
      {
        revision: 'cce984f7c035bc0454d44a4ff216b5ff',
        url: 'docs/assets/Architecture/renderer-phase-two.png',
      },
      {
        revision: 'fafd0e3d4cb34609687d361780aa2a3c',
        url: 'docs/assets/Architecture/renderer-pipeline/data-flow.jpg',
      },
      {
        revision: '6df837f5fec1fb5b65f792844abdc98c',
        url: 'docs/assets/Architecture/renderer-pipeline/phase-one-render.png',
      },
      {
        revision: 'f10bacb80e5332e566253c36e4f7dcc0',
        url: 'docs/assets/Architecture/renderer-pipeline/phase-three-mount.png',
      },
      {
        revision: 'cce984f7c035bc0454d44a4ff216b5ff',
        url: 'docs/assets/Architecture/renderer-pipeline/phase-two-commit.png',
      },
      {
        revision: 'e874b6dec27ee5aca7ca0cd41ebaee5d',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-1.png',
      },
      {
        revision: '377b8fb257e85e1eb9e3329be15bb0b4',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-2.png',
      },
      {
        revision: 'e5afabbe36b5b25c4c647d7f66e9f1b6',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-3.png',
      },
      {
        revision: '163a30ab659a65ac79574c01855ba9e0',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-4.png',
      },
      {
        revision: 'de05f9682c4f9f78ebc4ef00904856dd',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-5.png',
      },
      {
        revision: '9a9220030de5eb91790f45be6911cbaf',
        url: 'docs/assets/Architecture/renderer-pipeline/render-pipeline-6.png',
      },
      {
        revision: '7cf9ca49a39d819faa8969afe3dc3797',
        url: 'docs/assets/Architecture/threading-model/case-1.jpg',
      },
      {
        revision: '0cf9643b471adf0e247725b6367f70ea',
        url: 'docs/assets/Architecture/threading-model/case-2.jpg',
      },
      {
        revision: '47974b8e61552beb66e41d8868868b8e',
        url: 'docs/assets/Architecture/threading-model/case-3.jpg',
      },
      {
        revision: '2298902aa8f702758c5e853e7245df60',
        url: 'docs/assets/Architecture/threading-model/case-4.jpg',
      },
      {
        revision: '5007106b92c8f124200ee420594fedd3',
        url: 'docs/assets/Architecture/threading-model/case-6.jpg',
      },
      {
        revision: '63fd9b4f589400bc1d3ead39c137ddb2',
        url: 'docs/assets/Architecture/threading-model/symbols.png',
      },
      {
        revision: '981f11462744e0c1705a572adda3246f',
        url: 'docs/assets/Architecture/view-flattening/diagram-one.png',
      },
      {
        revision: '3abe318c06ce2ac57c0cff07bc37f50a',
        url: 'docs/assets/Architecture/view-flattening/diagram-two.png',
      },
      {
        revision: '5a3e4e99a06d60c8a4d9977bbb619cb1',
        url: 'docs/assets/Architecture/xplat-implementation/xplat-implementation-diagram.png',
      },
      {
        revision: '0b58afda661e805ca0534af6f3286567',
        url: 'docs/assets/Button.png',
      },
      {
        revision: '577ac73952496ef4a05a2845fa4edcf5',
        url: 'docs/assets/buttonExample.png',
      },
      {
        revision: '78238f846386dbdc6ca124042e24a85e',
        url: 'docs/assets/CallStackDemo.jpg',
      },
      {
        revision: '0b9f47884225907d8f3f3251fed8e496',
        url: 'docs/assets/ConfigureReleaseScheme.png',
      },
      {
        revision: '7ebc5ecc39ec0f56aac71838e83a24e1',
        url: 'docs/assets/d_pressable_anatomy.svg',
      },
      {
        revision: '1ec8cc79caf8b5d88e43a1c093e8fbba',
        url: 'docs/assets/d_pressable_pressing.svg',
      },
      {
        revision: '09c3192edac2cae21c2268833d2b3bdc',
        url: 'docs/assets/d_security_chart.svg',
      },
      {
        revision: 'd0684a554723a0a408c40ad90970e783',
        url: 'docs/assets/d_security_deep-linking.svg',
      },
      {
        revision: 'c4d84d166678b30ac67421f5ea8c0ff4',
        url: 'docs/assets/DatePickerIOS/example.gif',
      },
      {
        revision: '5f5022c4cfde995c7b4eee9e007285a8',
        url: 'docs/assets/DatePickerIOS/maximumDate.gif',
      },
      {
        revision: '3ddec3db038c956a824262a96853c83a',
        url: 'docs/assets/DatePickerIOS/minuteInterval.png',
      },
      {
        revision: '57e7801af529d1ee5729f83284587b08',
        url: 'docs/assets/DatePickerIOS/mode.png',
      },
      {
        revision: 'b4d05d97cdcbe00a4ebaa0088decbf50',
        url: 'docs/assets/debugging-chrome-remote-debugger.jpg',
      },
      {
        revision: '124246cc7ed5ca3c0d6d27f22affa036',
        url: 'docs/assets/debugging-debugger-welcome.jpg',
      },
      {
        revision: 'dedf685491153f7e259057a35e24b4c0',
        url: 'docs/assets/debugging-dev-menu.jpg',
      },
      {
        revision: '98f813004bc75295fbe0e1d283ede8f4',
        url: 'docs/assets/debugging-element-inspector-react-devtools.gif',
      },
      {
        revision: '03abf9ebd1929c82db68223e19e52179',
        url: 'docs/assets/debugging-flipper-console.jpg',
      },
      {
        revision: '291585e2eca125ec3bb1ece128bda321',
        url: 'docs/assets/debugging-hermes-debugger-instructions.jpg',
      },
      {
        revision: '94837acebf5bb43096d5226995c9594c',
        url: 'docs/assets/debugging-logbox.jpg',
      },
      {
        revision: '06363a9aa2b21a2a2d78d7da3823190e',
        url: 'docs/assets/debugging-performance-monitor.jpg',
      },
      {
        revision: '6c5e357bd1ce98010f8b4e3722726276',
        url: 'docs/assets/debugging-react-devtools-blank.jpg',
      },
      {
        revision: 'c04a72274fa698e1fadcf275546cbabc',
        url: 'docs/assets/debugging-react-devtools-connection.gif',
      },
      {
        revision: 'c7f30e21315c1de111636150324984a1',
        url: 'docs/assets/debugging-react-devtools-detail.jpg',
      },
      {
        revision: '820be253ceffcfb8a325cdcad3819b4b',
        url: 'docs/assets/debugging-safari-developer-tools.jpg',
      },
      {
        revision: '838e11b849462dd46db2dd50b1dec480',
        url: 'docs/assets/DeveloperMenu.png',
      },
      {
        revision: 'e96bb221d43f426b9a7ad857bcb3532a',
        url: 'docs/assets/DevMenu.png',
      },
      {
        revision: 'c09cf8910b7d810ed0f1a15a05715668',
        url: 'docs/assets/diagram_ios-android-views.svg',
      },
      {
        revision: '188623deeb6d6df90c7c342331706e22',
        url: 'docs/assets/diagram_pkce.svg',
      },
      {
        revision: 'b531fb378ad8a40db054c15b5f856901',
        url: 'docs/assets/diagram_react-native-components_dark.svg',
      },
      {
        revision: 'dd3b2b794f4a1262f5ec901a8e0fc234',
        url: 'docs/assets/diagram_react-native-components.svg',
      },
      {
        revision: 'd2f8843c0426cb867810cd60a9a93533',
        url: 'docs/assets/diagram_testing.svg',
      },
      {
        revision: 'e699227f2c6e3dc0a9486f2e05795007',
        url: 'docs/assets/EmbeddedAppAndroid.png',
      },
      {
        revision: 'a1e3ae06d03b5d68efb171002c4a2f48',
        url: 'docs/assets/favicon.png',
      },
      {
        revision: '15ddba42e7338178726207e2ab01cc14',
        url: 'docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png',
      },
      {
        revision: '2b77747dcce5c6c984141fe35a66e213',
        url: 'docs/assets/GettingStartedAndroidSDKManagerInstallsMacOS.png',
      },
      {
        revision: '73692b28661335a607a4a6943999faec',
        url: 'docs/assets/GettingStartedAndroidSDKManagerInstallsWindows.png',
      },
      {
        revision: 'f3076463bf14f4e76c96c942a6259741',
        url: 'docs/assets/GettingStartedAndroidSDKManagerMacOS.png',
      },
      {
        revision: 'fec452bb7a9d1c6afa81f73255ddd966',
        url: 'docs/assets/GettingStartedAndroidSDKManagerSDKToolsMacOS.png',
      },
      {
        revision: 'a4cf8aab3eb426ebe3a3ef27ae65d8be',
        url: 'docs/assets/GettingStartedAndroidSDKManagerSDKToolsWindows.png',
      },
      {
        revision: 'eb0269c3fb2a4ff141f576c04b1a5341',
        url: 'docs/assets/GettingStartedAndroidSDKManagerWindows.png',
      },
      {
        revision: '9dbc7dfa22478ad58ba580bb354c5adf',
        url: 'docs/assets/GettingStartedAndroidStudioAVD.png',
      },
      {
        revision: 'e88e7b7aabdc03f83c205767011c5992',
        url: 'docs/assets/GettingStartedAndroidStudioWelcomeMacOS.png',
      },
      {
        revision: '086af535f64fcd5f7744e6c4d81ab2ac',
        url: 'docs/assets/GettingStartedAndroidStudioWelcomeWindows.png',
      },
      {
        revision: '83b554e8aa135d102f6d0044123b026d',
        url: 'docs/assets/GettingStartedAndroidSuccessMacOS.png',
      },
      {
        revision: '7d011bf8439e51ce3892d88641566f57',
        url: 'docs/assets/GettingStartedAndroidSuccessWindows.png',
      },
      {
        revision: '4da404b4dfe0b85c035e004ae020ff48',
        url: 'docs/assets/GettingStartedAVDManagerMacOS.png',
      },
      {
        revision: '57867547ea8820654d679dbc0dca0671',
        url: 'docs/assets/GettingStartedAVDManagerWindows.png',
      },
      {
        revision: '6b020b8e1379bb13258cd422f40b3474',
        url: 'docs/assets/GettingStartedCongratulations.png',
      },
      {
        revision: '43dff86884e0cc3c5e4c1780753ac519',
        url: 'docs/assets/GettingStartedCreateAVDMacOS.png',
      },
      {
        revision: 'd3ff25b7954328ef04b6e9da97f1cedf',
        url: 'docs/assets/GettingStartedCreateAVDWindows.png',
      },
      {
        revision: 'a2c5924e01cda0ada5525eaf5dd3b9f3',
        url: 'docs/assets/GettingStartedCreateAVDx86MacOS.png',
      },
      {
        revision: 'bcbd49f57c1fa04d71b67ea238b27ebc',
        url: 'docs/assets/GettingStartedCreateAVDx86Windows.png',
      },
      {
        revision: '58036ac72888eb32d707df35904fe0d0',
        url: 'docs/assets/GettingStartediOSSuccess.png',
      },
      {
        revision: 'c5447da7047faca8e514faa6aefcab5f',
        url: 'docs/assets/GettingStartedXcodeCommandLineTools.png',
      },
      {
        revision: '1a246f8d1488212f20d45afcbe47ae25',
        url: 'docs/assets/HermesApp.jpg',
      },
      {
        revision: '4783cdefdf75b046a5f6a40bacb554eb',
        url: 'docs/assets/HermesDebugChromeConfig.png',
      },
      {
        revision: '1dd1a9d4d95bf1c5481690d906ecb209',
        url: 'docs/assets/HermesDebugChromeInspect.png',
      },
      {
        revision: 'a5d5993530b7d9cb715035836eb93e53',
        url: 'docs/assets/HermesDebugChromeMetroAddress.png',
      },
      {
        revision: '20bda27bdeb505bf3e0be949fae25180',
        url: 'docs/assets/HermesDebugChromePause.png',
      },
      {
        revision: 'b018da6766b54283e3c47112a8fd25a9',
        url: 'docs/assets/HermesLogo.svg',
      },
      {
        revision: '4d8239976add849d3e3917dfd8cc0e16',
        url: 'docs/assets/HermesProfileSaved.png',
      },
      {
        revision: 'dffbc87252b1a3ab5ef51870351403b3',
        url: 'docs/assets/Inspector.gif',
      },
      {
        revision: 'd39ad6aae5790f37db8c27a5ce737190',
        url: 'docs/assets/MaskedViewIOS/example.png',
      },
      {
        revision: '85f4dfff7b8a9c05b7d5a698e659cff6',
        url: 'docs/assets/metro-new-arch.png',
      },
      {
        revision: 'c9bdbc08842171081aa12b383a0cdeb7',
        url: 'docs/assets/native-modules-android-add-class.png',
      },
      {
        revision: '418836875296fcf08675f0ae305bddad',
        url: 'docs/assets/native-modules-android-errorscreen.png',
      },
      {
        revision: '4d3dbd5ffe73eba52e6cc49f2116fc12',
        url: 'docs/assets/native-modules-android-logs.png',
      },
      {
        revision: '837c513817303ddb328b87177b8e7a9f',
        url: 'docs/assets/native-modules-android-open-project.png',
      },
      {
        revision: '01a1f1921ced3d5f7e8314d716c3aa67',
        url: 'docs/assets/native-modules-ios-add-class.png',
      },
      {
        revision: 'ab4a1b470b309a6ea669506f924b7812',
        url: 'docs/assets/native-modules-ios-logs.png',
      },
      {
        revision: '428475a27f22866bf3510ab56b210dba',
        url: 'docs/assets/native-modules-ios-open-project.png',
      },
      {
        revision: 'be30e11dfcbe38c3f1b08b052d8189bc',
        url: 'docs/assets/NavigationStack-NavigatorIOS.gif',
      },
      {
        revision: '603aaed1ee2c6908802da7b56d34f905',
        url: 'docs/assets/oauth-pkce.png',
      },
      {
        revision: 'e5172077aa874ec168986518e470afef',
        url: 'docs/assets/ObjectObserveError.png',
      },
      {
        revision: 'dfb44b7c086028fc429d8d6e83c17a6d',
        url: 'docs/assets/openChromeProfile.png',
      },
      {
        revision: '3356b36c4275ab1a3f6fbf5fdf3f4e27',
        url: 'docs/assets/p_android-ios-devices.svg',
      },
      {
        revision: 'ae25e174625934ac609e8ecf08eef0d9',
        url: 'docs/assets/p_cat1.png',
      },
      {
        revision: '5d12a26f6cd8b54127b1d5bdbfef9733',
        url: 'docs/assets/p_cat2.png',
      },
      {
        revision: 'b5639e68fc9fc742fb43a5d62c5069ac',
        url: 'docs/assets/p_tests-component.svg',
      },
      {
        revision: 'a0032443c019fa478396eaf2deacf591',
        url: 'docs/assets/p_tests-e2e.svg',
      },
      {
        revision: '67126729753ba7336a5bfe89c011831c',
        url: 'docs/assets/p_tests-integration.svg',
      },
      {
        revision: '641ffcc6cbc95d93dc96119962365e89',
        url: 'docs/assets/p_tests-snapshot.svg',
      },
      {
        revision: '2496bbc70ea680dfc2d028343fab8332',
        url: 'docs/assets/p_tests-unit.svg',
      },
      {
        revision: '38260624d55e2e8ebaca13a16b6090b3',
        url: 'docs/assets/PerfUtil.png',
      },
      {
        revision: '1b278549a941922323a2d8148cdaf65c',
        url: 'docs/assets/react-native-add-react-native-integration-example-high-scores.png',
      },
      {
        revision: '5617e064724b95fb61ff24d50369330d',
        url: 'docs/assets/react-native-add-react-native-integration-example-home-screen.png',
      },
      {
        revision: 'a9d34a06f7073e81c0ec3899fdca40c5',
        url: 'docs/assets/react-native-add-react-native-integration-link.png',
      },
      {
        revision: '9b9eacd1e559c138570e37882fcff6b0',
        url: 'docs/assets/react-native-add-react-native-integration-wire-up.png',
      },
      {
        revision: 'b70783d1b198a79ea2c1baab7f3d8d8d',
        url: 'docs/assets/react-native-existing-app-integration-ios-before.png',
      },
      {
        revision: '9d44735414e9160415ee406f64aa8ae0',
        url: 'docs/assets/ReactDevTools.png',
      },
      {
        revision: '3459ee7659ee97f26032a0403a7aecea',
        url: 'docs/assets/ReactDevToolsDollarR.gif',
      },
      {
        revision: '99b32af249bb105da639c2cd2425baea',
        url: 'docs/assets/RunningOnDeviceCodeSigning.png',
      },
      {
        revision: 'af5c9e6d2978cd207680f7c11705c0c6',
        url: 'docs/assets/RunningOnDeviceReady.png',
      },
      {
        revision: '74d57cb2c2d72722961756aa46d19678',
        url: 'docs/assets/SystraceBadCreateUI.png',
      },
      {
        revision: 'c17703e55b835e7811250e4ced325469',
        url: 'docs/assets/SystraceBadJS.png',
      },
      {
        revision: 'd3a255b1066d6c5f94c95a333dee1ef5',
        url: 'docs/assets/SystraceBadJS2.png',
      },
      {
        revision: '6936dd3b05745489f21f6f7d53638c67',
        url: 'docs/assets/SystraceBadUI.png',
      },
      {
        revision: '3c2e9b29eb135f238fb61fd4bf3165ed',
        url: 'docs/assets/SystraceExample.png',
      },
      {
        revision: '231edbd7bdb5a94b6c25958b837c7d86',
        url: 'docs/assets/SystraceHighlightVSync.png',
      },
      {
        revision: '709dafb3256b82f817fd90d54584f61e',
        url: 'docs/assets/SystraceJSThreadExample.png',
      },
      {
        revision: 'e17023e93505f9020d8bbce9db523c75',
        url: 'docs/assets/SystraceNativeModulesThreadExample.png',
      },
      {
        revision: 'ef44ce7d96300b79d617dae4e28e257a',
        url: 'docs/assets/SystraceRenderThreadExample.png',
      },
      {
        revision: '7006fb40c1d12dc3424917a63d6b6520',
        url: 'docs/assets/SystraceUIThreadExample.png',
      },
      {
        revision: '37fde68c315bf1cc5f6c4b2c09614fd8',
        url: 'docs/assets/SystraceWellBehaved.png',
      },
      {
        revision: '3cd22ceddcff4ff268acd6fe70958956',
        url: 'docs/assets/TodayWidgetUnableToLoad.jpg',
      },
      {
        revision: '03372da8d524268935a4c9ceca88536d',
        url: 'docs/assets/XcodeBuildIP.png',
      },
      {
        revision: 'd007e0dd070eb81b7d757b56f9a0127e',
        url: 'docs/assets/XCodeEnableATS.png',
      },
      {
        revision: 'e6c3394ad01bb709bfd923b34f7d3530',
        url: 'img/AdministratorCommandPrompt.png',
      },
      {revision: 'b0b3b4dd3c620a392a55d2303f171c6d', url: 'img/alertIOS.png'},
      {
        revision: '92d36bb0aba548dd5ddc0b5b25d6e7f5',
        url: 'img/amazon_logo_darkbg.png',
      },
      {
        revision: '8de7c298001b00f509da5ca76004eebf',
        url: 'img/amazon_logo_lightbg.png',
      },
      {
        revision: 'd4caa7e46428892f124302f79a978807',
        url: 'img/AndroidAVDConfiguration.png',
      },
      {
        revision: '56a95c778f18a19e73ede22d086a2c2a',
        url: 'img/AndroidDeveloperMenu.png',
      },
      {
        revision: '72529747199756eaf29407404e369a46',
        url: 'img/AndroidDevServerDialog.png',
      },
      {
        revision: '2d10f0730f34ba1aa7455ac01f3f00b4',
        url: 'img/AndroidDevSettings.png',
      },
      {
        revision: 'bb585a307eda160b696ab38f590da6f5',
        url: 'img/AndroidSDK1.png',
      },
      {
        revision: 'd1964c02c101d05744fd3709cc28469c',
        url: 'img/AndroidSDK2.png',
      },
      {
        revision: 'b0bd766bc7e6d126ac9c6fd3452867ac',
        url: 'img/AndroidStudioCustomSetup.png',
      },
      {
        revision: '4d2675cdc8e11362f5155ecd8fabd97c',
        url: 'img/AnimatedFadeInView.gif',
      },
      {
        revision: 'ff655e45d5fbd0d61b89493ba777e638',
        url: 'img/AnimationExperimentalOpacity.gif',
      },
      {
        revision: '23a67ce93987a605f1147cdaf1fe44b4',
        url: 'img/AnimationExperimentalScaleXY.gif',
      },
      {revision: '48609f069e7e2ddc171bc7f69a5a7eb6', url: 'img/author.png'},
      {
        revision: 'e60248e9a4e6769d81da65ed55489587',
        url: 'img/chrome_breakpoint.png',
      },
      {
        revision: '1b8cc561bae6a1fb4693d2b342e959be',
        url: 'img/DoctorManualInstallationMessage.png',
      },
      {
        revision: '3d99daa32f5b6a09fe832412b4ad3cd1',
        url: 'img/EmbeddedAppContainerViewExample.png',
      },
      {revision: 'fd73a6eb26a08ee46e7fd3cc34e7f6bf', url: 'img/favicon.ico'},
      {
        revision: '709d6f6b2816eec68ad851bf75b80741',
        url: 'img/header_logo.png',
      },
      {
        revision: 'e20b70e7a752c7c83393a91c33ebcdb1',
        url: 'img/header_logo.svg',
      },
      {
        revision: '89b76b52d3bfd5c51d6e4f8b8c02f479',
        url: 'img/heropixel/click-on-leads.gif',
      },
      {
        revision: 'f9d7db996043a800e14ec39e36f5653c',
        url: 'img/heropixel/dashboard-ss.png',
      },
      {
        revision: 'ba2fe9e4b88d1346589b1f63c76dc8ff',
        url: 'img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-Black-Medium.png',
      },
      {
        revision: 'f7ddd5e7d4e8ab27d449a6765e2353a5',
        url: 'img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-White-Medium.png',
      },
      {
        revision: 'e897f47a0aef5d59f08e60b6fe2fe8e9',
        url: 'img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
      },
      {
        revision: '1bf309edc760044fc66a7e1a638f672f',
        url: 'img/heropixel/hero-pixel-icon.png',
      },
      {
        revision: '8d328a83448a77f3e7f533ca3eea0321',
        url: 'img/heropixel/hero-pixel-logo.png',
      },
      {
        revision: '08ff72ebc42e9f11350fe52647fc9d4f',
        url: 'img/heropixel/organization-menu.png',
      },
      {
        revision: '4e9af901afce6872862de3828e8b8670',
        url: 'img/heropixel/registration-ss.png',
      },
      {
        revision: '9899bb6c241f653fb60ef1ceffdd09e8',
        url: 'img/homepage/cta-bg-pattern.png',
      },
      {
        revision: 'd067d195000c5b8d543fce321362b5c7',
        url: 'img/homepage/devices-dark.png',
      },
      {
        revision: '24da15f7d8cf33cd5856549646c5e20d',
        url: 'img/homepage/devices.png',
      },
      {
        revision: '96138283790289097be38415f88bf13f',
        url: 'img/homepage/dissection-dark.png',
      },
      {
        revision: 'cc7693df7bf2bd81e6d0c63a6f718a27',
        url: 'img/homepage/dissection.png',
      },
      {
        revision: 'bc1164a49c0c1d768d6054303d2e05a7',
        url: 'img/homepage/file-based-routing-dark.png',
      },
      {
        revision: 'e80948be4743c0bcfa7d1d6ad1ce9462',
        url: 'img/homepage/file-based-routing.png',
      },
      {
        revision: '801b018967ccf860f7edae386cdcc5eb',
        url: 'img/homepage/libraries-dark.png',
      },
      {
        revision: 'e663127e52dca5a94830a6ce64938b27',
        url: 'img/homepage/libraries.png',
      },
      {
        revision: 'a0984da8f35f86b77aca061ac0117310',
        url: 'img/homepage/tools-dark.png',
      },
      {
        revision: '0c98f97b30037a3f481099a57e9fcfad',
        url: 'img/homepage/tools.png',
      },
      {
        revision: '6c280bad837cdbcac741608c3b681397',
        url: 'img/importing-pull-requests.png',
      },
      {revision: 'dffbc87252b1a3ab5ef51870351403b3', url: 'img/Inspector.gif'},
      {
        revision: 'd4dc14e8253454a191b6caae8826f1fb',
        url: 'img/LayoutAnimationExample.gif',
      },
      {revision: 'cba0b89d2bf2d96a1ed26edb5849f804', url: 'img/logo-og.png'},
      {
        revision: 'e6127d567fe97167f219abb4d7e896fd',
        url: 'img/meta_negative_primary.svg',
      },
      {
        revision: '48f0e855b1f90601118a830a66597f0c',
        url: 'img/meta_positive_primary.svg',
      },
      {
        revision: '2dda1822e8a53b159275938f166fc63e',
        url: 'img/microsoft-logo-gray.png',
      },
      {
        revision: '1043dc2a87db50d092b9e5efab0d55d6',
        url: 'img/microsoft-logo-white.png',
      },
      {
        revision: 'c8a987a0b980a891c0ddd942a5a070b2',
        url: 'img/NavigationStack-Navigator.gif',
      },
      {
        revision: '8df3fed56a2c9e3aa26688b645e099a6',
        url: 'img/new-architecture/async-on-layout.gif',
      },
      {
        revision: '7294a22b2dd9345df79152ec749e625c',
        url: 'img/new-architecture/legacy-renderer.gif',
      },
      {
        revision: 'c41d31b65d168377edf26a56463f4459',
        url: 'img/new-architecture/react18-renderer.gif',
      },
      {
        revision: '09fa76a8b5a68fad10605da0ef310aec',
        url: 'img/new-architecture/sync-use-layout-effect.gif',
      },
      {
        revision: 'df2af346d43fce8e6a5c69ad7692d375',
        url: 'img/new-architecture/with-transitions.gif',
      },
      {
        revision: '56cc6c2fae03d3e621033fa7f880f589',
        url: 'img/new-architecture/without-transitions.gif',
      },
      {revision: '103c68111a20e4ce15de38486a0d22e4', url: 'img/opengraph.png'},
      {revision: 'ead57c7bad412a5924924e6effb2e946', url: 'img/oss_logo.svg'},
      {
        revision: '86c5af521876f945d955d691d422f65e',
        url: 'img/pwa/apple-icon-120.png',
      },
      {
        revision: '0376a7d8f98e79509b9b0b3931386d33',
        url: 'img/pwa/apple-icon-152.png',
      },
      {
        revision: 'e6e303f3a83b24c3777d930a9ce441b3',
        url: 'img/pwa/apple-icon-167.png',
      },
      {
        revision: 'f267801ca524e072b979eb094fdea928',
        url: 'img/pwa/apple-icon-180.png',
      },
      {
        revision: '8c66be1966d4be97262e253f6b4cba65',
        url: 'img/pwa/manifest-icon-192.png',
      },
      {
        revision: '7b0c1fbfafd4ce797f9875d9c4987e73',
        url: 'img/pwa/manifest-icon-512.png',
      },
      {
        revision: '9691534a3772b83d06f3c9d782ed80c1',
        url: 'img/react-native-android-studio-additional-installs-linux.png',
      },
      {
        revision: '6d9d6cd3072dfe9195a004d009c7da06',
        url: 'img/react-native-android-studio-additional-installs.png',
      },
      {
        revision: '163db014cfa5d89b6451c23d4854806e',
        url: 'img/react-native-android-studio-android-sdk-build-tools-linux.png',
      },
      {
        revision: '940c9ee209a9699063e162eda5aeab88',
        url: 'img/react-native-android-studio-android-sdk-build-tools-windows.png',
      },
      {
        revision: 'b150528b9099fafdb7888b7a34fba537',
        url: 'img/react-native-android-studio-android-sdk-build-tools.png',
      },
      {
        revision: 'ec3b54aad2a2666a3c22843125cffad9',
        url: 'img/react-native-android-studio-android-sdk-platforms-linux.png',
      },
      {
        revision: '3d455e674b359c46f874528188873b0a',
        url: 'img/react-native-android-studio-android-sdk-platforms-windows.png',
      },
      {
        revision: '891e4d622f3a87316005661bf1d72316',
        url: 'img/react-native-android-studio-android-sdk-platforms.png',
      },
      {
        revision: '45fe9cc6c8334fa081387bf7c9952564',
        url: 'img/react-native-android-studio-avd-linux.png',
      },
      {
        revision: '922835af2f60f63fd846d8d128ce09ac',
        url: 'img/react-native-android-studio-avd-windows.png',
      },
      {
        revision: '531c4f469ae096f9bdf4d3696116d082',
        url: 'img/react-native-android-studio-avd.png',
      },
      {
        revision: '68de14eb626c01cf47f8fe16bf5c2466',
        url: 'img/react-native-android-studio-configure-sdk-linux.png',
      },
      {
        revision: '3133793e8814e165216d84687d7bb6d7',
        url: 'img/react-native-android-studio-configure-sdk-windows.png',
      },
      {
        revision: '210c7f3edb00ebc700c3f54466f9d2f0',
        url: 'img/react-native-android-studio-configure-sdk.png',
      },
      {
        revision: '94b807746f8954e676cb9d28aff6d786',
        url: 'img/react-native-android-studio-custom-install-linux.png',
      },
      {
        revision: 'be873b4d2ea00a0fc80c671ccd1dd16a',
        url: 'img/react-native-android-studio-custom-install-windows.png',
      },
      {
        revision: 'be6a0976c26b99d26a782b629225e811',
        url: 'img/react-native-android-studio-custom-install.png',
      },
      {
        revision: '09b28c5b1127f9a223aa2bc3970b0a87',
        url: 'img/react-native-android-studio-kvm-linux.png',
      },
      {
        revision: '1cdb0371415ab91c94fc292e4cbab563',
        url: 'img/react-native-android-studio-no-virtual-device-windows.png',
      },
      {
        revision: 'ddee4c001dedeb6cc09efc916886e45b',
        url: 'img/react-native-android-studio-verify-installs-windows.png',
      },
      {
        revision: 'b192803ea003bb71591fc169357535ca',
        url: 'img/react-native-android-tools-environment-variable-windows.png',
      },
      {
        revision: 'a747a53a8d9b59e435fb49aa25e46382',
        url: 'img/react-native-sdk-platforms.png',
      },
      {
        revision: '5500d0bb0ca79123e7142a1afd8968c1',
        url: 'img/react-native-sorry-not-supported.png',
      },
      {revision: 'ca406fb44b1227c38a77b117efdf390b', url: 'img/Rebound.gif'},
      {
        revision: '0ef54b66ad01d7d6d84f1fafd6d58a9f',
        url: 'img/ReboundExample.png',
      },
      {
        revision: 'be2f59167f6acde73a595ac74460d04b',
        url: 'img/ReboundImage.gif',
      },
      {revision: 'ab8906bbaedc98a29d52843f427d0140', url: 'img/search.png'},
      {
        revision: 'd9340911ca8c679b148dd4a205ad2ffa',
        url: 'img/shopify_logo_darkbg.svg',
      },
      {
        revision: 'b2e2f48c81f4ae49a1f1f3c128238f50',
        url: 'img/shopify_logo_whitebg.svg',
      },
      {
        revision: '0f9f203f3abb9415d7a72e0b51be6f27',
        url: 'img/showcase/adsmanager.png',
      },
      {
        revision: 'af5c54b69b561ac16aa287ae200aa5fc',
        url: 'img/showcase/airbnb.png',
      },
      {
        revision: '77d1b074583a6159a74b402234a85339',
        url: 'img/showcase/amazon-appstore.png',
      },
      {
        revision: 'e8281cd4c278aa59fdc1432cc346bf4f',
        url: 'img/showcase/amazon-kindle.png',
      },
      {
        revision: 'f8bbdb9f3dd40eac87199d8abbef53f5',
        url: 'img/showcase/amazon-shopping.png',
      },
      {
        revision: '30107afd5a590dbeb587d7fa9c28523f',
        url: 'img/showcase/artsy.png',
      },
      {
        revision: 'd745c8aa942dce4cfa627f199bbbf346',
        url: 'img/showcase/baidu.png',
      },
      {
        revision: '6b0a3047baf1b95078f3d6304d2a957b',
        url: 'img/showcase/bloomberg.png',
      },
      {
        revision: 'd8cadead056bd5a62bf1cafe30689bd2',
        url: 'img/showcase/bolt.png',
      },
      {
        revision: 'd7a18ae8e38a6399e4618f2e90492a4c',
        url: 'img/showcase/brex.png',
      },
      {
        revision: '0d576b7b4697a99e2984e28fb49292b2',
        url: 'img/showcase/callofduty_companion.png',
      },
      {
        revision: 'aecdb5ef9707842295f091caa819f3c8',
        url: 'img/showcase/coinbase.png',
      },
      {
        revision: '21f70b06ed227a28d75fbbf7bd8e5773',
        url: 'img/showcase/dave.png',
      },
      {
        revision: '5e0eb678abcf319cef836efd01ad7e65',
        url: 'img/showcase/delivery.png',
      },
      {
        revision: 'd821e91c9c60d7f44e34f1a34db95114',
        url: 'img/showcase/discord.png',
      },
      {
        revision: '6a48d377a1226ab7e83673e96b2769fd',
        url: 'img/showcase/f8.png',
      },
      {
        revision: '37c6dd42d62a919074ff24d4bbfba32d',
        url: 'img/showcase/flare.png',
      },
      {
        revision: '23f6357bf2253ad7b4923711a07dc2aa',
        url: 'img/showcase/flipkart.png',
      },
      {
        revision: '4a54307e67c89354689ec8f255381c7b',
        url: 'img/showcase/foreca.png',
      },
      {
        revision: '3fafc21411d65dbc8b9a671ed0f12032',
        url: 'img/showcase/glitch.png',
      },
      {
        revision: '628e2c59b617ccf12146e3fd10626a10',
        url: 'img/showcase/gyroscope.png',
      },
      {
        revision: 'e049b61600af0a8a0c3aaa6f84a1f065',
        url: 'img/showcase/huiseoul.png',
      },
      {
        revision: 'b723364f1afbc8182e291b8af3c893a4',
        url: 'img/showcase/instagram.png',
      },
      {
        revision: 'e09c147505493269bef606a0f38c3ab7',
        url: 'img/showcase/jdcom.png',
      },
      {
        revision: 'fb272918bc2904c7c324fccd145a0510',
        url: 'img/showcase/klarna.jpg',
      },
      {
        revision: 'f73ca8503b91100854cce74efeed3f43',
        url: 'img/showcase/lendmn.png',
      },
      {
        revision: 'ca7e14dd8b6dacbf7a420eb9cddff8eb',
        url: 'img/showcase/mercari.png',
      },
      {
        revision: 'e14362c931f83a3be00a812988cb5afb',
        url: 'img/showcase/messengerdesktop.png',
      },
      {
        revision: '7338a1e2b3c20a2aae3b4725d63c0712',
        url: 'img/showcase/metaquest.png',
      },
      {
        revision: 'f36689ef83f8761b436f713e8161fc26',
        url: 'img/showcase/nerdwallet.png',
      },
      {
        revision: '50c5cadec5321523d70ee38b12e018d6',
        url: 'img/showcase/officemobile.png',
      },
      {
        revision: '37b9af295e85519366b89a8f03f6a2dc',
        url: 'img/showcase/openvpn.png',
      },
      {
        revision: '01dc8adbd81983d49259f8e7ac0419ed',
        url: 'img/showcase/outlookmobile.png',
      },
      {
        revision: '633d8d8387f771dbfd07fbc55f626619',
        url: 'img/showcase/playstation.png',
      },
      {
        revision: 'ce8551292daa05391075c182a1281b54',
        url: 'img/showcase/puma.png',
      },
      {
        revision: 'f6214cd3e2d0ee403d72b9ef7fb91037',
        url: 'img/showcase/salesforce.png',
      },
      {
        revision: '81f098ae4a82cc6013ec8a480e2524ad',
        url: 'img/showcase/shopify.png',
      },
      {
        revision: '404cd25bd2ced847793a9596fc310ecb',
        url: 'img/showcase/soundcloud_pulse.jpg',
      },
      {
        revision: '502db17481705ce68d620ba94402e351',
        url: 'img/showcase/teamsmobile.png',
      },
      {
        revision: 'f144f98848c3331d3dd3516f02349460',
        url: 'img/showcase/tesla.png',
      },
      {
        revision: 'd8df7486a0e9f4a8274edae756a92fde',
        url: 'img/showcase/townske.png',
      },
      {
        revision: 'bf48d76bad3b95b25566d95d909d857f',
        url: 'img/showcase/vogue.jpeg',
      },
      {
        revision: 'b11ce62d199cae99c986bf12db7db7fa',
        url: 'img/showcase/wix_logo_darkbg.svg',
      },
      {
        revision: '22b27fc90f91e241e819fa60de3d5c97',
        url: 'img/showcase/wix_logo_lightbg.svg',
      },
      {
        revision: '0d0a47547d379fb11158bfa424f7dc3d',
        url: 'img/showcase/wordpress.png',
      },
      {
        revision: '4549ed1f58d9b18168d15ada82d7dae9',
        url: 'img/showcase/words2.png',
      },
      {
        revision: 'cb2bc7150ceb24297dbc254d7672f7af',
        url: 'img/showcase/xboxgamepass.png',
      },
      {
        revision: 'a2c19aac04099e21ae472a63b621d835',
        url: 'img/StaticImageAssets.png',
      },
      {revision: '12dca422fb11f21ae63f7410d68b3abf', url: 'img/survey.png'},
      {revision: 'fd73a6eb26a08ee46e7fd3cc34e7f6bf', url: 'img/tiny_logo.png'},
      {
        revision: '3cd22ceddcff4ff268acd6fe70958956',
        url: 'img/TodayWidgetUnableToLoad.jpg',
      },
      {
        revision: '6baa843b748e8bad06680ff66cbac4cb',
        url: 'img/TutorialFinal.png',
      },
      {
        revision: '3ded23046d8e1c74d2693d0e69cb068a',
        url: 'img/TutorialFinal2.png',
      },
      {
        revision: 'df35b4845add6d20287d07e4aa2716a2',
        url: 'img/TutorialMock.png',
      },
      {
        revision: '85f88444d652fdf0a84d7591d3a9ba83',
        url: 'img/TutorialMock2.png',
      },
      {
        revision: '240c8de5dad5bae405b35e492bbad8b7',
        url: 'img/TutorialSingleFetched.png',
      },
      {
        revision: '00545d0e7c454addd6f0c6a306a9d7e5',
        url: 'img/TutorialSingleFetched2.png',
      },
      {
        revision: '5d1fe823307dbae52a28c8a16e5ec51a',
        url: 'img/TutorialStyledMock.png',
      },
      {
        revision: 'a2a1e8aa9f9febccd5f92b9596becc5b',
        url: 'img/TutorialStyledMock2.png',
      },
      {revision: 'd468cd5faa4be0fbe9fb1dd2b0741885', url: 'img/TweenState.gif'},
      {
        revision: 'cfe178c582ad7813fb23d1bd3573a3ac',
        url: 'img/uiexplorer_main_android.png',
      },
      {
        revision: '09c6c8a8a31bc7188ec8ed71f6d9d91c',
        url: 'img/uiexplorer_main_ios.png',
      },
      {revision: '217d1918ddb8d13fbefac673e5f5fb0b', url: 'img/Warning.png'},
      {
        revision: 'c72b454ea7db97693cc24d0a82bdce27',
        url: 'assets/fonts/GeneralSans-Bold-148ea237c2c383c0be3402b1e507f011.ttf',
      },
      {
        revision: '9b8355be55c0430e161ea069f30dd1b1',
        url: 'assets/fonts/GeneralSans-Bold-4d82f8e0a57d7f8de158e38f2ffc91fa.woff',
      },
      {
        revision: '2bdfea05fe02f9a5869fd5e012bedb1b',
        url: 'assets/fonts/GeneralSans-Bold-64b1bf9966a3bbb94f5c0b97307ff664.woff2',
      },
      {
        revision: '5799d81b470ee822e1cc4b9c4734ede7',
        url: 'assets/fonts/GeneralSans-BoldItalic-4a1bf4017464541f1af097f56cd23867.woff2',
      },
      {
        revision: 'acd6503627c08d6b7d6706c6d23423ab',
        url: 'assets/fonts/GeneralSans-BoldItalic-62949caf7e58a37dcc10a90bdfdeecab.woff',
      },
      {
        revision: '20bb7726f39565266942cf25da5acaa4',
        url: 'assets/fonts/GeneralSans-BoldItalic-89074cc2992a9e354b7fff6aa3c41af0.ttf',
      },
      {
        revision: 'fad1af494d39a26102cec52a5cf163d3',
        url: 'assets/fonts/GeneralSans-Extralight-d6a4332df60f058537bf2ecb2092153b.woff2',
      },
      {
        revision: '7887c87ae42c25319906eb657546f4b4',
        url: 'assets/fonts/GeneralSans-Extralight-e9e1615018c62dee6364188493ed455b.ttf',
      },
      {
        revision: 'f952edfef05d709e48865d23cfdf15fe',
        url: 'assets/fonts/GeneralSans-Extralight-efc4ce019c1e039a0ca46d8cf9a487d5.woff',
      },
      {
        revision: '282018bc59b7001847c2b876d18fd7a0',
        url: 'assets/fonts/GeneralSans-ExtralightItalic-3d55e7e4573d13e895672a688e0db039.woff2',
      },
      {
        revision: '254394a77ee726c39f9ba83d029a866e',
        url: 'assets/fonts/GeneralSans-ExtralightItalic-637cc7b537db1b5556d060908912e6f1.woff',
      },
      {
        revision: '0fd7d55b599a68fde47e85ea97d4af27',
        url: 'assets/fonts/GeneralSans-ExtralightItalic-f2b0d5013d4b60046410706784fd0276.ttf',
      },
      {
        revision: 'f0880fc07810ab929772de5983aef136',
        url: 'assets/fonts/GeneralSans-Italic-38fe83c7db536c3d94dd6847e5019282.woff',
      },
      {
        revision: '69d69c2c87687ea0e9e7ee8a35b0793a',
        url: 'assets/fonts/GeneralSans-Italic-61b5c6351467c3e672361bd81f4478e1.ttf',
      },
      {
        revision: '1955b6caece90b4f8b526c2f0d753f71',
        url: 'assets/fonts/GeneralSans-Italic-8c6daf7c32037313da66e179b793d151.woff2',
      },
      {
        revision: '380d5fb96f5d59e9a59fa058663d0778',
        url: 'assets/fonts/GeneralSans-Light-59797635a5ce50599b804b430a152e40.woff2',
      },
      {
        revision: '616866d9a8b3d3a1db1ff828549ed368',
        url: 'assets/fonts/GeneralSans-Light-69935ec696c32e0cb38bb7bb8b537442.ttf',
      },
      {
        revision: 'f43a420409a24822fe7b161b8639e665',
        url: 'assets/fonts/GeneralSans-Light-705af1342b8d9e53554c0ff70f0bbfeb.woff',
      },
      {
        revision: 'ae70d08ff06a6797fe0ce688cc1e10fa',
        url: 'assets/fonts/GeneralSans-LightItalic-01f39fefaea383e46bde7557a18dcec4.ttf',
      },
      {
        revision: 'aed00f9b1b103b0b867052421426da5f',
        url: 'assets/fonts/GeneralSans-LightItalic-b3f37670fedaabb03a2514b69d97147e.woff',
      },
      {
        revision: '7df218967c06026188e0cad09b57c6a1',
        url: 'assets/fonts/GeneralSans-LightItalic-c8c13d9aa739ec1adb02bb4bd88a44a3.woff2',
      },
      {
        revision: '5b10ff4d624f320aa08a2b8f58cfe438',
        url: 'assets/fonts/GeneralSans-Medium-1096c81555467a69cc165feb960b2b8f.woff2',
      },
      {
        revision: '73757c353e6b0c9529e32f7699e2ead0',
        url: 'assets/fonts/GeneralSans-Medium-9ff9c3429a09b987bdec6c0cff331b4b.woff',
      },
      {
        revision: '25c8b884ca555f338df57a70ee6d539c',
        url: 'assets/fonts/GeneralSans-Medium-c729d67488834af78b6a5fedf97f854b.ttf',
      },
      {
        revision: '1a430b5d3494cc82c2c5afa948d426fa',
        url: 'assets/fonts/GeneralSans-MediumItalic-8a74287fe8e26ab8bb5fa9fcaaea8dec.woff2',
      },
      {
        revision: '41c4d8194d479c857497716c4ef2fbbf',
        url: 'assets/fonts/GeneralSans-MediumItalic-8eb302fc9872cba2529120f2121764e7.ttf',
      },
      {
        revision: 'cff539660fb611a55c085a4e4b9c380b',
        url: 'assets/fonts/GeneralSans-MediumItalic-be50bba710738fc9f7a623b8b106e979.woff',
      },
      {
        revision: '82dccf33188fef2a2231280b8280f0db',
        url: 'assets/fonts/GeneralSans-Regular-33c07568e483102927ef88917ad58a3d.woff2',
      },
      {
        revision: '5b2485493464681c29bffca44dc643c9',
        url: 'assets/fonts/GeneralSans-Regular-6d91885b9c7fa66bdd05fb70e6744e6a.ttf',
      },
      {
        revision: 'b9826ded2eef35134f7495f87f9eaa47',
        url: 'assets/fonts/GeneralSans-Regular-c8cfd56b3d5c429046726df5321cd320.woff',
      },
      {
        revision: 'f74baa005bd5f5e653c204dcf3bd7825',
        url: 'assets/fonts/GeneralSans-Semibold-23103addec2ccc9cbc17c97069134665.woff2',
      },
      {
        revision: 'fb69990708893276bdb20a98eb2e06d3',
        url: 'assets/fonts/GeneralSans-Semibold-f6a5bacab0316e8117bb02fd3f97ddd8.ttf',
      },
      {
        revision: 'c9bfdf52fb3d6541afd4e28f5f730650',
        url: 'assets/fonts/GeneralSans-Semibold-f7917c077957122793f69ac58e027542.woff',
      },
      {
        revision: '97a8904d89dd36744c569f4ebe25d805',
        url: 'assets/fonts/GeneralSans-SemiboldItalic-36eb24d73e66df8e25a433fbdfc1064e.woff',
      },
      {
        revision: '647a61d85b0afa8e62ce62dbbe9ccdd5',
        url: 'assets/fonts/GeneralSans-SemiboldItalic-b5447559b0839b0bc9bd691bd3b6b8b0.woff2',
      },
      {
        revision: 'e4615d59604d3d0bb8376f5e258aee4d',
        url: 'assets/fonts/GeneralSans-SemiboldItalic-e325608e1fa36dcac17999197148dafd.ttf',
      },
      {
        revision: '8e765124680c81f492d970a01faea9e1',
        url: 'assets/fonts/GeneralSans-Variable-65a7e76e15a342e2ed8fec4e9952a871.woff2',
      },
      {
        revision: '0fd543ca1298be70f16ae6ad9efc4255',
        url: 'assets/fonts/GeneralSans-Variable-bc2b124702cdb8b3b38be7c5a5829996.woff',
      },
      {
        revision: '7b7a625024c0f39cbca2cf9674f51d94',
        url: 'assets/fonts/GeneralSans-Variable-d7facbbe2ed9ae4aae496c8282dc3701.ttf',
      },
      {
        revision: '7f6bbc6db19479024a99b545aca55aea',
        url: 'assets/fonts/GeneralSans-VariableItalic-37a2c9e4ec944dec5059fc690a43601a.ttf',
      },
      {
        revision: '59d08ae12089d95a0554a66993a18d47',
        url: 'assets/fonts/GeneralSans-VariableItalic-8d45d5d416206c70daeb22d31da75568.woff2',
      },
      {
        revision: 'a7a6c6eb5388124fd6dc308b622ad39e',
        url: 'assets/fonts/GeneralSans-VariableItalic-e4ae865b18351f51feb9e07ac77d2b88.woff',
      },
    ];
    const controller =
      new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
      });
    if (params.offlineMode) {
      controller.addToCacheList(precacheManifest);
      if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: addToCacheList', {precacheManifest});
      }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', event => {
      if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: install event', {event});
      }
      event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', event => {
      if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: activate event', {event});
      }
      event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async event => {
      if (params.offlineMode) {
        const requestURL = event.request.url;
        const possibleURLs = getPossibleURLs(requestURL);
        for (const possibleURL of possibleURLs) {
          const cacheKey = controller.getCacheKeyForURL(possibleURL);
          if (cacheKey) {
            const cachedResponse = caches.match(cacheKey);
            if (params.debug) {
              console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                requestURL,
                possibleURL,
                possibleURLs,
                cacheKey,
                cachedResponse,
              });
            }
            event.respondWith(cachedResponse);
            break;
          }
        }
      }
    });
    self.addEventListener('message', async event => {
      if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: message event', {event});
      }
      const type = event.data?.type;
      if (type === 'SKIP_WAITING') {
        // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
        self.skipWaiting();
      }
    });
  })();

  /******/
})();
//# sourceMappingURL=sw.js.map
