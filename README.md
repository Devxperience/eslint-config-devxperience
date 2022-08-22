# Devxperience ESLint config

## Whats included?

- Airbnb config base;
- React plugin;
- React Hooks plugin;
- Import helpers plugin;
- Unused imports plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```
npm i -D eslint @devxperience/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```
{
  "extends": "@devxperience/eslint-config/react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
