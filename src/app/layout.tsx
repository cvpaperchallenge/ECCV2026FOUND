import { Outlet } from "react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
// import { DeadlineBanner } from "@/components/deadline-banner";
// import workshopData from "@/data/workshop.json";

export default function SharedUILayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-background from-20% via-background-gradation-1 via-50% to-background-gradation-2 to-90%">
      <div className="bg-animated simple-grid flex min-h-screen w-full flex-col items-center">
        <Header />
        {/* Deadline banner — hidden along with the Important Dates block on
            the home page. With the call closed and the poster session moving
            to invited posters, the only date left to count down to is the
            workshop itself, which the hero already states. */}
        {/* <DeadlineBanner dates={workshopData.home.importantDates} /> */}
        <div className="w-full grow pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
