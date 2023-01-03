import {client, v1} from '@datadog/datadog-api-client'
import {ServiceCheckStatus} from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1'

export function createServiceCheck(
  status: ServiceCheckStatus,
  serviceCheckName: string,
  host: string,
  tags: string
): void {
  const configuration = client.createConfiguration()
  const apiInstance = new v1.ServiceChecksApi(configuration)

  const params: v1.ServiceChecksApiSubmitServiceCheckRequest = {
    body: [
      {
        check: serviceCheckName,
        hostName: host,
        status,
        tags: [tags]
      }
    ]
  }

  apiInstance
    .submitServiceCheck(params)
    .then((data: v1.IntakePayloadAccepted) => {
      console.log(
        `API called successfully. Returned data: ${JSON.stringify(data)}`
      )
    })
    .catch((error: any) => {
      console.error(error)
      throw error
    })
}
