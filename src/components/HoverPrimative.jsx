import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const HoverBox = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a>
        <p className="bg-green-600 text-white rounded-lg p-1 w-[50vh] align-center">
          A note on Friends List
        </p>
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div>
          <div className="Text text-pink-400">
            One day this will actually include Data about those you follow
          </div>
        </div>

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverBox;
