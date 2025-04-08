"use client";
import Link from "next/link";
import { Flex, Button, Menu, MenuItem } from '@aws-amplify/ui-react';
// import { useEffect } from "react";
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'next/navigation'
import { useSessionContext } from '@/context/SessionContext';
import { Session } from "next-auth";

const GuestMenu = () => (
  <>
    <Button as={Link} href="/login" variation="link">Sign in</Button>
    <Button as={Link} href="/signup" variation="primary">Sign up</Button>
  </>
)

const LoginedMenu = ({callback}: { callback: (session: Session | null) => void }) => {
  const router = useRouter()
  async function handleSignOut() {
    await signOut()
      .then(() => {
        callback(null);
        router.push("/login");
      })
  }

  return (
    <Menu menuAlign="end">
      <MenuItem as={Link} href="/profile">Profile</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  )
};

export const LoginItem = () => {
  const {session, setSession} = useSessionContext();
  
  return (
    <Flex gap="8px" direction="row" justifyContent="flex-start" alignItems="flex-start">
      {session ? (<LoginedMenu callback={setSession} />) : (<GuestMenu />)}
    </Flex>
  )
}
