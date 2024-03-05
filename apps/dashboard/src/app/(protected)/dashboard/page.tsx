"use client";
import MainCard from "@/common/Card/MainCard";
import * as React from "react";

interface DashboardPageProps {
  //Props
}

export const CardInfo = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro at fuga sunt.",
  source: "Lorem ipsum dolor sit amet",
  author: "soumitra Saha",
  url: "http://blog.com/soumitra",
  timeStamp: new Date(),
  redingTime: 5,
};

const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <section className="grid grid-cols-12 gap-3">
      <div className="col-span-6">
        <MainCard
          title={CardInfo.title}
          source={CardInfo.source}
          aurthor={CardInfo.author}
          timeStamp={CardInfo.timeStamp}
          readingTime={CardInfo.redingTime}
          url={CardInfo.url}
        />
      </div>
      <div className="col-span-6">
        <MainCard
          title={CardInfo.title}
          source={CardInfo.source}
          aurthor={CardInfo.author}
          timeStamp={CardInfo.timeStamp}
          readingTime={CardInfo.redingTime}
          url={CardInfo.url}
        />
      </div>
    </section>
  );
};

export default DashboardPage;
