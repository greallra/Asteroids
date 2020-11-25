
export default {
    foo: 'bar',
    get: jest.fn(() => Promise.resolve({ data: {} }))
}