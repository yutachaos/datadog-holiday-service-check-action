import * as core from '@actions/core'
import {createServiceCheck} from './datadog'
import {isHoliday} from './holiday'

import {
  CRITICAL,
  OK
} from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/ServiceCheckStatus'

async function run(): Promise<void> {
  try {
    const holidays: string = core.getInput('holidays')
    const serviceName: string = core.getInput('holidays')
    const host: string = core.getInput('datadog_host')
    const tags: string = core.getInput('datadog_tags')

    process.env['DD_API_KEY'] = core.getInput('datadog_api_key')
    process.env['DD_APP_KEY'] = core.getInput('datadog_app_key')
    const result = isHoliday(new Date(), holidays)
    if (result) {
      createServiceCheck(CRITICAL, serviceName, host, tags)
    } else {
      createServiceCheck(OK, serviceName, host, tags)
    }

    core.setOutput('is_holiday', result)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
