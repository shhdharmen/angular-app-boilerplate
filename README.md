# Angular Application Boilerplate

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

A boiler-plate project to create an Open-Source Angular Application with set of most used and needed tooling.

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Create Project using this boiler-plate

1. Go to <hthttps://github.com/shhdharmen/angular-app-boilerplate>
2. Above the file list, click **Use this template**
  ![Use this template button](https://docs.github.com/assets/images/help/repository/use-this-template-button.png)
3. Follow the on-screen instructions
4. [Create a Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) named `GH_TOKEN` with `repo` access
5. Modify `--name` and `--email` in [`.github/workflows/release.yaml`](./.github/workflows/release.yaml)
6. Update name and year in [`LICENSE`](./LICENSE)

## Tools included

1. [All Contributors](https://allcontributors.org/docs/en/cli/installation)
2. [ESLint](https://eslint.org/) with help from [Angular ESLint](https://github.com/angular-eslint/angular-eslint)
3. [Prettier](https://prettier.io/)
4. [Semantic Release](https://semantic-release.gitbook.io/)
5. [Stylelint](https://stylelint.io/)
6. [Cypress](cypress.io) with help from [@briebug/cypress-schematic](https://github.com/briebug/cypress-schematic)
7. [Husky](https://typicode.github.io/husky)
8. [Commitlint](http://commitlint.js.org/)
9. [Commitizen CLI](http://commitizen.github.io/cz-cli/)
10. [Angular CLI GH Pages](https://github.com/angular-schule/angular-cli-ghpages/#readme)
11. [Github Workflows/Actions](https://github.com/features/actions)
12. [Github Issue and Pull Request Templates](./.github)

## Utilizing this boiler-plate

Once you create the repo, clone in your machine and and...

```bash
cd project-dir
```
```bash
npm i
```

### Commit messages, Husky, linting and formatting

```bash
npm run commit
```

Always use above script to commit your changes. What happens when you run above command?

1. Set of prompts will be presented to help you follow commit message guidelines
2. Linting and formatting with possible fixes will be done on staged files using `lint-staged`:
  ```json
  "lint-staged": {
    "src/**/*.ts": "eslint --cache --fix",
    "src/**/*.{ts,js,css,md,json}": "prettier --write",
    "src/**/*.css": "stylelint --fix",
    "src/**/*.scss": "stylelint --syntax=scss --fix"
  }
  ```
3. If all of above checks run successfully, only then your files will be committed, else proper error messages will be presented

### E2E Testing with Cypress

You can run e2e tests in 2 ways:

1. Browser Mode (Usually helpful to run locally):
  ```bash
  npm run start
  
  # another terminal or session
  npm run cy:open
  ```
2. Headless Mode (Usually helpful to run in CI, this is ran through GitHub Actions in this project):
  ```bash
  ng e2e
  ```

### All Contributors

To add a contributor run:

```bash
npx all-contributors add
```

### Semantic Release

Semantic release config file is present at [`.releaserc.json`](./.releaserc.json). This is triggered through GitHub Actions:

```bash
npx semantic-release
```

Above commands takes care of following things:

1. Analyzes commit messages
2. Generates release notes
3. Creates or updates [`CHANGELOG.md`](./CHANGELOG.md)
4. Updates version in `package.json`
5. Creates release tag
6. Commits above changes

Checkout [Release workflow recipes](https://semantic-release.gitbook.io/semantic-release/recipes/recipes#release-workflow) for more info on releases.

### Angular CLI GH Pages

This helps to deploy your angular app on [GitHub Pages](https://pages.github.com/).

```bash
npm run deploy
```

Above command is run through GitHub Actions.

### GitHub Workflows and Actions

This boiler-plate comes with 2 workflows:

| Workflow | Runs-on | Tasks |
| - | - | - |
| `release.yaml` | `push` on `main` branch | ✅ Build<br>✅ Release through Semantic Release<br>✅ Deploy on GitHub Pages |
| `test.yaml` | `push` on any branch except `main` | ✅ Lint<br>✅ Unit Test<br>✅ E2E Test<br>✅ Pre-release through Semantic Release |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/shhdharmen"><img src="https://avatars.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="https://github.com/shhdharmen/material-components-theme-generator/commits?author=shhdharmen" title="Code">💻</a> <a href="#content-shhdharmen" title="Content">🖋</a> <a href="#design-shhdharmen" title="Design">🎨</a> <a href="https://github.com/shhdharmen/material-components-theme-generator/commits?author=shhdharmen" title="Documentation">📖</a> <a href="#ideas-shhdharmen" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-shhdharmen" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
