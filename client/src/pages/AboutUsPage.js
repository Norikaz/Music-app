import React from "react";
import { AboutUsProfile } from "../components/UI/AboutUsProfile";

export const AboutUsPage = (props) => {
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="flex flex-wrap justify-between">
        <h1 className="pb-4 text-6xl font-bold text-center border-0 border-b-2 border-b-black grow basis-full">
          The Team
        </h1>
        <AboutUsProfile
          name="Tianye Chen"
          description="Frontend"
          image="https://media-exp1.licdn.com/dms/image/C4E03AQHSKHQRhV941Q/profile-displayphoto-shrink_800_800/0/1658425907416?e=1676505600&v=beta&t=wEX4nTRVPF19tUoe3zodv1UYmn7SZFrfH01dxeyhnlc"
          linkedInLink="https://www.linkedin.com/in/tianyechen/"
          gitHubLink="https://github.com/tianye-chen"
        />
        <AboutUsProfile
          name="John Soto"
          description="Frontend"
          image="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          linkedInLink=""
          gitHubLink="https://github.com/Soto-J"
        />
        <AboutUsProfile
          name="Norik Zhagui"
          description="Frontend / Backend"
          image="https://media-exp1.licdn.com/dms/image/C4E03AQHOTiC3bGIl2Q/profile-displayphoto-shrink_200_200/0/1658435536484?e=1676505600&v=beta&t=d6hE6y_fibzfOIWaaKiMmZXlHHGICVHLRAPQitLm0V4"
          linkedInLink="https://www.linkedin.com/in/norikzhagui/"
          gitHubLink="https://github.com/Norikaz"
        />
        <AboutUsProfile
          name="John Alban"
          description="Backend"
          image="https://media-exp1.licdn.com/dms/image/C4D03AQF03pwPdRaADA/profile-displayphoto-shrink_200_200/0/1647299175275?e=1676505600&v=beta&t=VvyU0zhjTRPUhs-kAtjYdBXcp_aNldFalp_mGD4jsA4"
          linkedInLink="https://www.linkedin.com/in/john-a-b36974116/"
          gitHubLink="https://github.com/JohnA28"
        />
      </div>
    </div>
  );
};
