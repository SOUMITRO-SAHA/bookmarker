"use client";

import { Button } from "@/common/Button";
import { H3 } from "@/components/General";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import { CardGroup, CardItem } from "@/components/settings/Card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/ui/dropdown-menu";
import React from "react";
import { Switch } from "@/common/ui/switch";
import { Input } from "@/common/ui/input";
import { ChevronDown } from "lucide-react";

interface MySettingsProps {
  //Props
}

const MySettings: React.FC<MySettingsProps> = () => {
  return (
    <main>
      <CardGroup>
        <H3>My Settings</H3>
        <CardItem
          title="Appearance"
          description="Customise how bookmarker looks on your device"
          renderComponent={<ModeToggle />}
        />
        <CardItem
          title="Open on Start"
          description="Choose what to show when bookmarker starts"
          renderComponent={
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={"outline"} size={"lg"}>
                  Dashboard
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Last Visited Site</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        />
        <CardItem
          title="Enable Command Search"
          description="Open search anywhere with a shortcut."
          renderComponent={<Switch />}
        />
        <CardItem
          title="Command Search Shortcut"
          description="Customize the shortcut used to trigger Command Search."
          renderComponent={
            <Button variant={"outline"} size={"lg"}>
              Shift+Ctrl+K
            </Button>
          }
        />
      </CardGroup>

      <CardGroup>
        <H3>Date & Time</H3>
        <CardItem
          title="Set timezone automatically using your location"
          description="Remainders, notifications and emails are delivered based on your time zonde."
          renderComponent={<Switch />}
        />
        <CardItem
          title="Time Zone"
          description="Current time zone setting."
          renderComponent={<Input disabled value={"(GMT +05:30)"} />}
        />
      </CardGroup>

      <CardGroup>
        <H3>Privacy</H3>
        <CardItem
          title="Cookie settings"
          description={"Customize cookies. See Cookie Bookmarker for Details"}
          renderComponent={
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={"outline"} size={"lg"}>
                  <div>Customize</div>
                  <div>
                    <ChevronDown />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <CardItem
                    title="Strictly necessary"
                    description="Essential for the site to function. Always On."
                    renderComponent={<Switch disabled />}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CardItem
                    title="Functional"
                    description="Used to remember preference selections and provide enhanced features."
                    renderComponent={<Switch />}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CardItem
                    title="Analytics"
                    description="Used to measure usage and improve your experience."
                    renderComponent={<Switch />}
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        />
      </CardGroup>
    </main>
  );
};

export default MySettings;
