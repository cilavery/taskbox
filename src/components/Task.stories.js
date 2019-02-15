import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import Task from './Task'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

// const longTitle = 'Super long task because it is not really a task it is more like things I need to do to alter my life completely like Marie Kondo my house and wake up earlier and go to sleep earlier and eat healthier. Spiderverse was a really good movie I also want to see that again.'

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Task task={object('task', { ...task })} {...actions} />
  })
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)
  // .add('long title', () => <Task task={{ ...task, title: longTitle }} {...actions} />)