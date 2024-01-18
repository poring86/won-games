import { Meta, StoryFn } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'FormSignIn',
  component: FormSignIn
} as Meta

export const Default: StoryFn = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
)
