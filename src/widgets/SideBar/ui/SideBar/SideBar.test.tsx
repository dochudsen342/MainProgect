import { componentRender } from '@/shared/lib/tests/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import SideBar from './SideBar'

describe('SideBar', () => {
  test('without param', () => {
    componentRender(<SideBar />)
    expect(screen.getByTestId('sidebarasd')).toBeInTheDocument()
    screen.debug()
  })
  test('test toggle', () => {
    componentRender(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
