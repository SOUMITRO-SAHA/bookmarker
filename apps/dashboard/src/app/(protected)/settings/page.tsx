import { Button } from "@/common/Button";
import { Input } from "@/common/ui/input";
import { H3, H4 } from "@/components/General";
import { CardDivider, CardGroup, CardItem } from "@/components/settings/Card";
import { userDetails } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SettingsProps {
  //Props
}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <main>
      <CardGroup>
        <H3>Workspace Settings</H3>
        <section className="grid grid-cols-12 my-6">
          <div className="flex flex-col items-center justify-center col-span-2">
            <div className="w-20 h-20 mb-2 rounded bg-muted">
              <Image
                className={cn("w-20 h-20")}
                src={userDetails.imageURL}
                alt={userDetails.username}
              />
            </div>
            <H4>Icon</H4>
          </div>
          <div className="col-span-8">
            <div className="text-sm text-subtle">Name</div>
            <Input
              className="w-auto my-2 bg-subtle border-subtle h-7"
              value={`${userDetails.username}`}
            />
            <p className="text-xs text-subtle">
              You can use your organization or computer name. Keep it simple
            </p>
          </div>
        </section>
        <CardDivider />
      </CardGroup>

      <CardGroup className={cn("my-12")}>
        <H3>Public Settings</H3>

        <CardItem
          title="Export Content"
          description={
            <div className="flex items-center gap-2 my-3 text-muted">
              <span>
                <HelpCircle className="w-4 h-4" />
              </span>
              <span>Learn more about exporting</span>
            </div>
          }
          renderComponent={<Button variant={"outline"}>Export as CSV</Button>}
        />
      </CardGroup>
    </main>
  );
};

export default Settings;
