---
'@backstage/plugin-techdocs-backend': minor
---

Deprecations cleaned up.

- deprecated config `generators` is now deleted and fully replaced with `techdocs.generator`
- deprecated config `generators.techdocs` is now deleted and fully replaced with `techdocs.generator.runIn`
- deprecated config `techdocs.requestUrl` is now deleted
- deprecated config `techdocs.storageUrl` is now deleted
- deprecated `createHttpResponse` is now deleted and calls to `/sync/:namespace/:kind/:name` needs to be done by an EventSource.
