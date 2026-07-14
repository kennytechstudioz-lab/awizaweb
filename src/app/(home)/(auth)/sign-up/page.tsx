import { generateMetadata } from '@/lib/seo'
import SignUp from '@/components/Public/Auth/SignUp'

export const metadata = generateMetadata({
  title: 'Sign Up | Awiza',
  description: 'Create your Awiza account now.',
  twitter: {
    card: 'summary',
    site: '@Awiza',
  },
})

export default function SignUpClient() {
  return (
    <>
      <SignUp />
    </>
  )
}
