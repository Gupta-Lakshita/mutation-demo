# mutation-demo-repo

A small, throwaway TypeScript repo used as the **target** for the
PR-Scoped Mutation Confidence Tester.

## Why this exists

This is NOT the tool. This is the codebase the tool *runs against*. It gives
you something to open pull requests on so you can watch your tool scope
mutation testing to changed files and post a confidence score.

## Important: the test quality is uneven ON PURPOSE

Mutation testing is only interesting when some tests are weak. If every test
were perfect, every file would score 100% and the demo would prove nothing.

So the files are seeded with a spread of test quality:

| File              | Test quality | What a mutant exposes                          |
|-------------------|--------------|------------------------------------------------|
| `math`            | Weak         | `add(2,2)===4` passes even if `+` becomes `*`  |
| `discount`        | Weak (bounds)| Exact tier thresholds (100/500/1000) untested  |
| `password`        | Weak         | Individual `&&` conditions never isolated      |
| `validation`      | Medium       | Boundary `age === 18` never checked            |
| `fizzbuzz`        | Medium       | One example per branch                         |
| `cart`            | Medium       | Free-shipping boundary (exactly 50) untested   |
| `strings`         | Strong       | Edge cases + exact outputs asserted            |
| `array-utils`     | Strong       | Empty cases, ordering, throws all covered      |
| `temperature`     | Strong       | Boundaries and known values asserted           |
| `date-utils`      | **No tests** | Every mutant survives -> 0% confidence         |

**Do not "fix" the weak tests.** They are the point.

## Run the tests

```bash
npm install
npm test
```

All tests should pass. That is exactly the lesson of mutation testing:
passing tests are not the same as good tests.

## What gets added later

When you build the tool, this repo will also get:
- Stryker installed as a dev dependency
- A GitHub Actions workflow that runs your tool on every PR
