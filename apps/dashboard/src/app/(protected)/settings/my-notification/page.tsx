import { Button } from "@/common/Button";
import { Switch } from "@/common/ui/switch";
import { H3 } from "@/components/General";
import { CardGroup, CardItem } from "@/components/settings/Card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface MyNotificationProps {
  //Props
}

const MyNotification: React.FC<MyNotificationProps> = () => {
  return (
    <main>
      <CardGroup>
        <H3>My Notifications</H3>
        <CardItem
          title="Mobile push notification"
          description="Receive push notifications on your mobile app"
          renderComponent={<Switch />}
        />
        <CardItem
          title="Desktop push notifications"
          description="Receive push notificaitons on your desktop."
        />
      </CardGroup>
      <CardGroup>
        <H3>Email Notification</H3>
        <CardItem
          title="Activity in your account"
          description="Receive emails when any activity happends in your account, i.e. remainders, access, property changes etc."
          renderComponent={<Switch />}
        />
        <CardItem
          title="Announcements and update emails"
          description="Receive occasional emails about product, launches and new features from Bookmarker"
          renderComponent={
            <Button variant={"outline"} size={"lg"}>
              <ArrowUpRight />
              <span className="ml-2">Manage Settings</span>
            </Button>
          }
        />
      </CardGroup>
    </main>
  );
};

export default MyNotification;
