"use client";
import { Button } from "@/common/Button";
import {
  SettingSideBar,
  SettingSideBarItem,
  SettingSideBarItemGroup,
} from "@/components/settings";
import { settingsMenuItems, userDetails } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  return (
    <main className="flex w-screen h-screen">
      {/* Sidebar */}
      <section className="w-[25%] lg:w-[20%] xl:w-[15%]">
        <SettingSideBar>
          {/* User Details | Static*/}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-subtle">
              <Image src={userDetails.imageURL} alt={userDetails.email} />
            </div>
            <div title={`${userDetails.username} \n${userDetails.email}`}>
              <div className="uppercase">{userDetails.username}</div>
              <div className="text-[10px] text-subtle">{userDetails.email}</div>
            </div>
          </div>

          {/* My Account Group */}
          <SettingSideBarItemGroup title="Account">
            {settingsMenuItems.Accounts.map((item) => {
              const { id, label, icon, route } = item;
              return (
                <SettingSideBarItem isActive={pathname === route} key={id}>
                  <Link
                    href={route}
                    className={cn("grid grid-cols-12 gap-2 items-center")}
                  >
                    <div className="col-span-2">{icon(cn("w-5 h-5"))}</div>
                    <div className="col-span-10">{label}</div>
                  </Link>
                </SettingSideBarItem>
              );
            })}
          </SettingSideBarItemGroup>
          <SettingSideBarItemGroup title="Workspace">
            {settingsMenuItems.Workspaces.map((item) => {
              const { id, label, icon, route } = item;
              return (
                <SettingSideBarItem isActive={pathname === route} key={id}>
                  <Link
                    href={route}
                    className={cn("grid grid-cols-12 gap-2 items-center")}
                  >
                    <div className="col-span-2">{icon(cn("w-5 h-5"))}</div>
                    <div className="col-span-10">{label}</div>
                  </Link>
                </SettingSideBarItem>
              );
            })}
          </SettingSideBarItemGroup>

          {/* Go Back to Home Page */}
          <Button variant="outline">
            <Link href={"/dashboard"}>Go Back to Dashboard</Link>
          </Button>
        </SettingSideBar>
      </section>

      {/* Body */}
      <section className="bg-subtle p-10 w-[calc(100%-25%)] lg:w-[calc(100%-20%)] xl:w-[calc(100%-15%)]">
        {children}
      </section>
    </main>
  );
}
