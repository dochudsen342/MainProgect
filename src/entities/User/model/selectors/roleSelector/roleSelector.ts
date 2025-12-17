import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { UserRole } from '../../types/userSchema'

export const getUserRoles = (state: StateSchema): UserRole[] => state?.user?.authData?.roles || []

export const isUserAdmin = createSelector(getUserRoles, (roles: UserRole[]) =>
  Boolean(roles?.includes(UserRole.ADMIN))
)

export const isUserManager = createSelector(getUserRoles, (roles: UserRole[]) =>
  Boolean(roles?.includes(UserRole.MANAGER))
)
