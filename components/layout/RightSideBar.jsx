import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 z-20 h-screen w-[300px] xl:w-[350px] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h3 className="text-light-1 text-heading3-bold">Events</h3>
        <Image
          src="/assets/event.jpg"
          alt="ad"
          width={280}
          height={200}
          className="rounded-lg"
        />
        <p className="text-body-bold text-light-1">Covering Team Recruit</p>
        <p className="text-small-semibold text-light-2">
          NSUT College's photography team is actively seeking creative individuals with a passion for capturing moments. Join us in documenting the vibrant campus life and events while honing your photography skills. Be part of a dynamic team that captures the essence of NSUT through the lens!
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;
