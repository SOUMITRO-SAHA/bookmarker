import React from "react";

interface MainCardProps {
  isExtended?: boolean;
  title: string;
  source: string;
  aurthor: string;
  url: string;
  timeStamp: Date;
  readingTime: number;
}

const MainCard: React.FC<MainCardProps> = (props) => {
  const {
    isExtended = true,
    title,
    source,
    aurthor,
    url,
    timeStamp,
    readingTime,
    ...rest
  } = props;
  const getTimeSpends = (timeStamp: Date) => {
    // TODO: Complete this
    return "2 months";
  };
  return (
    <div className="p-3 border rounded cursor-pointer border-subtle bg-subtle">
      <h3 className="font-semibold">{title}</h3>
      {isExtended && (
        <div className="flex items-center gap-1 text-sm text-subtle">
          <p className="font-semibold">{source}</p>
          <p>
            <span>. by </span>
            <span className="underline">{aurthor}</span>
          </p>
        </div>
      )}
      {isExtended && <p className="my-1 text-sm text-foreground">{url}</p>}
      <div className="flex items-center gap-1 text-xs text-subtle">
        <span>{getTimeSpends(timeStamp)}</span>
        <span>.</span>
        <span>{readingTime} mins</span>
      </div>
    </div>
  );
};

export default MainCard;
