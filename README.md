
# Create datadog holiday service check action

## Usage
Pass a list of holidays to create a datadog servicecheck that is CRITICAL if it's a holiday and OK if it's not a holiday

See more detail Datadog servicecheck below document.
https://docs.datadoghq.com/developers/service_checks/

```yaml
name: 'Datadog holiday service check action'
on:
  schedule:
    - cron: '0 * * * *'
jobs:
  create_holiday_servicecheck:
    name: 'create datadog serviceccheck when holiday'
    runs-on: ubuntu-latest
    steps:
      - name: 'Create servicecheck'
        uses: yutachaos/datadog-holiday-service-check-action@master
        with:
          holidays: |
            2022-12-26
            2022-12-27
            2022-12-28
            2022-12-29
            2022-12-30
            2023-01-01
            2023-01-02
            2023-01-03
          service_check_name: 'holiday'
          host_name: 'myorganization'
        env:
          DD_API_KEY: ${{ secrets.DD_API_KEY }}
          DD_APP_KEY: ${{ secrets.DD_APP_KEY }}
 ```


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
