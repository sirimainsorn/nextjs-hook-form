export function GlobalReducer(
  state = {
    version: 1.0,
    ready: false,
  },
  action: any
) {
  const { type } = action
  switch (type) {
    case 'SYSTEM_READY':
      return Object.assign({}, state, { ready: true })

    default:
      return state
  }
}
