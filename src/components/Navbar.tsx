import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { buttonVariants } from '@/ui/Button'
import SignInButtion from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import ThemeToggle from '@/components/ThemeToggle'

interface NavbarProps {

}

const Navbar = async ({ }) => {
  const session = await getServerSession()

  return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 right-0 left-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex justify-between items-center'>
    <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
      <Link href='/' className={buttonVariants({ variant: 'link' })}>
        YisyAPI 1.0
      </Link>

      <div className='md:hidden'>
        <ThemeToggle />
      </div>
      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        <Link href='/documentation' className={buttonVariants({ variant: 'ghost' })}>
          Documentation
        </Link>

        {session ? (
          <>
            <Link href='/dashboard' className={buttonVariants({ variant: 'ghost' })}>Dashboard</Link>
            <SignOutButton />
          </>
        ) : <SignInButtion />}
      </div>
    </div>
  </div>
}

export default Navbar
