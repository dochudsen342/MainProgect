import { componentRender } from '@/shared/lib/tests/componentRender'
import { screen } from '@testing-library/react'
import AddCommentForm from './AddCommentForm'

describe('AddCommentForm', () => {
  const mockOnSendComment = jest.fn()
  test('render AddCommentForm with Input and Button', () => {
    componentRender(<AddCommentForm onSendComment={mockOnSendComment} />, { route: '/articles/5' })
    expect(screen.getByTestId('addCommentForm')).toBeInTheDocument()
    expect(screen.getByTestId('addCommentInput')).toBeInTheDocument()
    expect(screen.getByTestId('addCommentButton')).toBeInTheDocument()
    screen.debug()
  })

  test(' test input event', () => {})
})
