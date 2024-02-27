"use client";

import { Button } from "@/common/Button";
import { Input } from "@/common/ui/input";
import { Switch } from "@/common/ui/switch";
import { H3 } from "@/components/General";
import { CardGroup, CardItem } from "@/components/settings/Card";
import { userDetails } from "@/lib/constant";
import Image from "next/image";
import * as React from "react";

interface AccountPageProps {
  //Props
}

const AccountPage: React.FC<AccountPageProps> = () => {
  return (
    <main>
      {/* Profile Section */}
      <CardGroup>
        <H3>My Profile</H3>
        {/* User Profile */}
        <div className="flex items-center gap-8 my-5">
          <div className="">
            <Image
              className="w-16 h-16 rounded-full"
              src={userDetails.imageURL}
              alt={userDetails.imageURL}
            />
            <h5 className="mt-1 text-subtle">Add Photo</h5>
          </div>
          <div className="">
            <h6 className="mb-1">Preferred Name</h6>
            <Input className="bg-subtle" value={userDetails.username} />
          </div>
        </div>
      </CardGroup>

      {/* Account Security */}
      <CardGroup>
        <H3>Account Security</H3>
        <CardItem
          title="Email"
          description={userDetails.email}
          renderComponent={<Button variant={"outline"}>Change Email</Button>}
        />
        <CardItem
          title="Password"
          description={"Set a permanent password to login to your account"}
          renderComponent={<Switch></Switch>}
        />
        <CardItem
          title="2-Step Verification"
          description={
            "Add an additional layout of security to your account during login"
          }
          message={"A Password is required 2 enable 2 Step Verification"}
          renderComponent={<Switch disabled />}
        />
      </CardGroup>

      {/* Support */}
      <CardGroup>
        <H3>Support</H3>
        <CardItem
          title="Log out of all devices"
          description="Log out of all other active sessions on other devices besides this one."
        />
        <CardItem
          title="Delete My Account"
          description="Permenently delete the account"
          titleClassName="text-red-500"
          // TODO: Add a Modal for this action
          renderModal={<div></div>}
        />
      </CardGroup>
    </main>
  );
};

export default AccountPage;
