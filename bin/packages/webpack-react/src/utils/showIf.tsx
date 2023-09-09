export function showIf(
  condition: any,
  Component: React.JSX.Element | React.ReactNode
): React.ReactNode {
  // eslint-disable-next-line no-extra-boolean-cast
  if (Boolean(condition)) {
    return Component
  } else {
    return false
  }
}
