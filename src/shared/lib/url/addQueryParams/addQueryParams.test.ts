import { getQueryParams } from './addQueryParams'

describe('shared/url/addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    })
    expect(params).toBe('?test=value')
  })

  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      search: '2',
    })
    expect(params).toBe('?test=value&search=2')
  })

  test('test with undefine', () => {
    const params = getQueryParams({
      test: 'value',
      search: undefined,
    })
    expect(params).toBe('?test=value')
  })
})
