/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'Authenticated') return '/dashboard'
  else return '/mint'
}

export default getHomeRoute
