export type ButtonProps = { presentation?: 'default' | 'mini' } & Omit<
  React.HTMLProps<HTMLButtonElement>,
  'type' | 'ref'
>
