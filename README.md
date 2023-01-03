
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
