import SignInClient from '@/components/Public/Auth/SignInClient'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Sign In | Awiza',
  description: 'Sign in to your Awiza account to continue.',
  twitter: {
    card: 'summary',
    site: '@paragon',
  },
})

export default function SignIn() {
  return (
    <>
      <SignInClient />
    </>
  )
}
