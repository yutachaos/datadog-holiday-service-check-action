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
    const serviceCheckName: string = core.getInput('service_check_name')
    const hostName: string = core.getInput('host_name')
    const tags: string = core.getInput('tags')
    const result = isHoliday(new Date(), holidays)
    if (result) {
      createServiceCheck(CRITICAL, serviceCheckName, hostName, tags)
    } else {
      createServiceCheck(OK, serviceCheckName, hostName, tags)
    }

    core.setOutput('is_holiday', result)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
