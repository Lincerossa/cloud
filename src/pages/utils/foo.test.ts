import foo  from './foo'

test('type check string', () => {
  expect(typeof foo('demo') === 'string').toBe(false)
})
test('type check object', () => {
  expect(typeof foo('demo') === 'object').toBe(true)
})