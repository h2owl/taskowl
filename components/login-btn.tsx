import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from 'react';

export default function LoginButton() {
  const { data: session } = useSession()
  useEffect(() => {
    console.log(session)
  },[session])
  if (session) {
    return (
      <>
        Signed in as {(session.user) ? session.user.email : ""} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
    </>
  )
}