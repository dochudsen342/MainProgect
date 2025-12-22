import { getAuthData, UserRole } from '@/entities/User'
import { getUserRoles } from '@/entities/User/model/selectors/roleSelector/roleSelector'
import { RoutePath } from '@/shared/const/router'
import { ReactNode, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
  roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getAuthData)
  const userRoles = useSelector(getUserRoles)
  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }
    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} />
  } else if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} />
  }

  return children
}

export default RequireAuth
