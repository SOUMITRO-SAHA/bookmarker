import {
  SettingSideBar,
  SettingSideBarItem,
  SettingSideBarItemGroup,
} from "@/components/settings";
import { userDetails } from "@/lib/constant";
import { cn } from "@/lib/utils";
import {
  ArrowDownToLine,
  ArrowUpCircle,
  ArrowUpRightSquare,
  BellDot,
  CircleUserRound,
  KeyRound,
  LayoutGrid,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const metadata: Metadata = {
  title: "Settings | Bookmarkers",
  description: "",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex w-screen h-screen">
      {/* Sidebar */}
      <section className="w-[15%]">
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
            <SettingSideBarItem>
              <Link
                href="accounts"
                className={cn("grid grid-cols-12 gap-2 items-center")}
              >
                <div className="col-span-2">
                  <CircleUserRound className={cn("w-5 h-5")} />
                </div>
                <div className="col-span-10">My Account</div>
              </Link>
            </SettingSideBarItem>
            <SettingSideBarItem>
              <Link
                href={"my-settings"}
                className={cn("grid grid-cols-12 gap-2 items-center")}
              >
                <div className="col-span-2">
                  <SlidersHorizontal className={cn("w-5 h-5")} />
                </div>
                <div className="col-span-10">My Settings</div>
              </Link>
            </SettingSideBarItem>
            <SettingSideBarItem>
              <Link
                href={"my-notification"}
                className={cn("grid grid-cols-12 gap-2 items-center")}
              >
                <div className="col-span-2">
                  <BellDot className={cn("w-5 h-5")} />
                </div>
                <div className="col-span-10">My Notification</div>
              </Link>
            </SettingSideBarItem>
            <SettingSideBarItem>
              <Link
                href={"my-connections"}
                className={cn("grid grid-cols-12 gap-2 items-center")}
              >
                <div className="col-span-2">
                  <ArrowUpRightSquare className={cn("w-5 h-5")} />
                </div>
                <div className="col-span-10">My Connections</div>
              </Link>
            </SettingSideBarItem>
          </SettingSideBarItemGroup>

          {/* Main Settings Group */}
          <SettingSideBarItemGroup title="Workspace">
            <SettingSideBarItem
              className={cn("grid grid-cols-12 gap-2 items-center")}
            >
              <div className="col-span-2">
                <Settings className={cn("w-5 h-5")} />
              </div>
              <div className="col-span-10">Settings</div>
            </SettingSideBarItem>
            <SettingSideBarItem
              className={cn("grid grid-cols-12 gap-2 items-center")}
            >
              <div className="col-span-2">
                <ArrowUpCircle className={cn("w-5 h-5")} />
              </div>
              <div className="col-span-10">Upgrade</div>
            </SettingSideBarItem>
            <SettingSideBarItem
              className={cn("grid grid-cols-12 gap-2 items-center")}
            >
              <div className="col-span-2">
                <KeyRound className={cn("w-5 h-5")} />
              </div>
              <div className="col-span-10">Security</div>
            </SettingSideBarItem>
            <SettingSideBarItem
              className={cn("grid grid-cols-12 gap-2 items-center")}
            >
              <div className="col-span-2">
                <ArrowDownToLine className={cn("w-5 h-5")} />
              </div>
              <div className="col-span-10">Imports</div>
            </SettingSideBarItem>
          </SettingSideBarItemGroup>
        </SettingSideBar>
      </section>

      {/* Body */}
      <section className="bg-subtle p-10 w-[calc(100%-15%)]">
        {children}
      </section>
    </main>
  );
}
