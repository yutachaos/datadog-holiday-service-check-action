
# Create datadog holiday service check action

## Usage



Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ npm run build && npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket: 

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
