'use client'

import prisma from "@repo/db/client"

export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
    <div className=" flex-col">
      id :
      {user?.id}
      name :
      {user?.username}
      password :
      {user?.password}
      dwjknadnjasndjknasjkdnjandknakndjksnka
    </div>
  );
}
