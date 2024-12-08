# i18next-resources-fallback

[![npm](https://img.shields.io/npm/v/i18next-resources-fallback)](https://www.npmjs.com/package/i18next-resources-fallback)

### Installation

```bash
yarn add i18next-resources-fallback
```

### Usage

```diff
  import i18next, type { Resource } from "i18next";
+ import resourcesFallback from 'i18next-resources-fallback'

  const resources: Resource = {
    en: {
      translation: {
        key: 'value'
      }
    }
  };

  i18next
    .init({
      // ... your i18next config
    });

+ resourcesFallback(i18n, resources)
```

### Introduction

**Why need to use this package?**

When you use i18next, your backend resources and bundled resources may differ. When the backend resources are missing, you might want to use the bundled resources as a fallback to avoid issues when certain texts are missing from the backend resources.

**How does this package work?**

This package adds text using `addResourceBundle` after the backend resources have finished loading, to supplement the missing texts from the backend as a fallback.

**Comparisons**

- `i18next-resources-to-backend`: It is used as a fallback when a certain file or namespace is missing.
- `i18next-resources-fallback`: It is used as a fallback when a certain key is missing in the backend resources.

### License

MIT Licensed
