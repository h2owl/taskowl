import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useEffect } from 'react';

export default function LoginButton() {
  const { data: session } = useSession()
  useEffect(() => {
    console.log(session)
  },[session])
  if (session) {
    return (
      <>
        <Link href="/user/profile">
          <a className={`me-3 py-2 text-dark text-decoration-none`}>
            Signed in as {(session.user) ? session.user.email : ""}
          </a>
        </Link>
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <span className={`me-3 py-2 text-dark text-decoration-none`}>Not signed in</span>
      <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
    </>
  )
}