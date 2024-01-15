import { helloWorld } from "."

test('the test runs', () => {
  const foo = 'bar'
  console.log(foo)
  expect(foo).toBe('bar')
})

test('hello world', () => {
  const foo = helloWorld()
  expect(foo).toBe('hello 👋')
})



