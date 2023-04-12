import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Accounts'
import Login from './login'

const Home = () => {
  return (
    <Login />
  )
}

export default Home;