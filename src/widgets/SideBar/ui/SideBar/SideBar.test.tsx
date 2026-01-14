import { User } from '@/entities/User'
import { componentRender } from '@/shared/lib/tests/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import SideBar from './SideBar'

describe('SideBar', () => {
  const mockAuthState: User = {
    id: '1',
    username: 'Dqizi',
  }
  test('without param', () => {
    componentRender(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('test toggle', () => {
    componentRender(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })

  test('Sidebar link with auth user', () => {
    componentRender(<SideBar />, {
      //@ts-ignore
      initialState: { user: { authData: mockAuthState, _mounted: true } },
    })
    expect(screen.getByTestId('MainLink')).toBeInTheDocument()
    expect(screen.getByTestId('AboutLink')).toBeInTheDocument()
    expect(screen.getByTestId('ProfileLink')).toBeInTheDocument()
    expect(screen.getByTestId('ArticleLink')).toBeInTheDocument()
  })

  test('Sidebar link with no auth user', () => {
    componentRender(<SideBar />, {})
    expect(screen.getByTestId('MainLink')).toBeInTheDocument()
    expect(screen.getByTestId('AboutLink')).toBeInTheDocument()
    expect(screen.queryByTestId('ProfileLink')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ArticleLink')).not.toBeInTheDocument()
  })

  test('Sidebar route to profile', () => {
    componentRender(
      <>
        <SideBar />
        <Routes>
          <Route path='/profile/:id' element={<div data-testid='profile-page'>Profile page</div>} />
          <Route path='*' element={<div data-testid='other-page' />} />
        </Routes>
      </>,
      {
        //@ts-ignore
        initialState: { user: { authData: mockAuthState, _mounted: true } },
        isAppRoute: false,
      }
    )
    const profileLink = screen.getByTestId('ProfileLink')

    fireEvent.click(profileLink)
    expect(screen.getByTestId('profile-page')).toBeInTheDocument()
    expect(screen.getByText('Profile page')).toBeInTheDocument()
    screen.debug()
  })

  //написать кейс ошибки и кейс со скелетоном
})
