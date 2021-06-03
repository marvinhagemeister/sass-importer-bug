# sass `importer` not working

Steps to reproduce

1. Clone repo
2. install packages via `npm install`
3. run `npm test`

## Expected outcome

Running `npm test` prints `SUCCESS`.

## Actual outcome

Sass calls the custom importer but seems to ignore the result. It then errors because it cannot find the `$color` variable, which is only present in the file that was resolved in the custom importer.
