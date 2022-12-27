import {isHoliday} from '../src/holiday'
import {expect, test} from '@jest/globals'
// import {createEvent} from "../src/datadog";
// import {OK} from "@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/ServiceCheckStatus";

test('check holiday', async () => {
  const holidays: string = `
2022-12-26
2022-12-27
2022-12-28
2022-12-29
2022-12-30
2023-01-01
2023-01-02
2023-01-03`
  expect(isHoliday(new Date('2022-12-26'), holidays)).toBeTruthy()
  expect(isHoliday(new Date('2023-01-30'), holidays)).toBeFalsy()
})

/*
For debug code
test('check datadog', async () => {
  try {
    await createEvent(OK, "test","test","test");
  } catch (e) {
    expect(e).toMatch('error');
  }
})

*/
