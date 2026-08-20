import {
  Calendar,
  Mail,
  MapPin,
  ExternalLink,
  Info,
  CalendarPlus,
  Megaphone,
  LayoutPanelTop,
  Eye,
  ArrowDown,
  UserRound,
  ChevronDown,
  ShieldCheck,
  Building2,
  Lock,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { Fragment, useEffect } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import workshopData from "../../data/workshop.json";
import peopleData from "../../data/people.json";
import type { Route } from "./+types/Home";
import { buildMeta } from "@/lib/seo";
import { generateWorkshopStructuredData } from "@/lib/structured-data";
import { downloadICS, isPast, daysUntil } from "@/lib/calendar";

const LIMIT_WORKSHOP_URL = "https://eccv2026-limit-workshop.limitlab.xyz/";

function renderWithLimitLink(text: string) {
  const parts = text.split("LIMIT Workshop");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={LIMIT_WORKSHOP_URL}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-colors font-medium"
        >
          LIMIT Workshop
        </a>
      )}
    </Fragment>
  ));
}

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title:
      "FOUND Workshop @ ECCV 2026 | Foundation Data for Industrial Tech Transfer",
    description:
      "FOUND Workshop at ECCV 2026 brings together researchers working on foundation data, domain-specific datasets, robustness under domain shift, and practical tech transfer for industrial AI. Join us in September 2026 in Malmö, Sweden.",
    path: "/",
    keywords: [
      "eccv workshop 2026",
      "foundation data",
      "industrial tech transfer",
      "domain shift",
      "physical AI",
    ],
  });

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  const structuredData = generateWorkshopStructuredData({
    name: workshopData.home.title,
    description: workshopData.home.overview.mission,
    startDate: "2026-09-09T08:30:00",
    endDate: "2026-09-09T12:30:00",
    location: {
      name: workshopData.home.eventInfo.venue,
      address: workshopData.home.eventInfo.location,
    },
    organizer: {
      name: "FOUND Workshop Organizing Committee",
      url: "https://eccv2026-found-workshop.limitlab.xyz",
    },
    image: "https://eccv2026-found-workshop.limitlab.xyz/found-ogp.jpg",
    url: "https://eccv2026-found-workshop.limitlab.xyz",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    eventStatus: "EventScheduled",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <main className="container mx-auto px-6 py-12 space-y-24 xl:max-w-6xl">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border px-6 py-14 md:px-8 md:py-16 lg:py-20 text-center shadow-2xl">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0">
            <img
              src="/cover.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-50 dark:opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
            <div className="absolute inset-0 gradient-mesh opacity-50" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 md:gap-8 lg:gap-8 fade-in-up">
            {/* Conference Badge */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Held as part of
              </span>
              <div className="flex flex-wrap items-center justify-center rounded-xl md:rounded-2xl bg-white px-5 py-2.5 md:px-8 md:py-4 shadow-lg">
                <img
                  src="/eccv-navbar-logo.svg"
                  alt="ECCV 2026 | Malmö | Sept 8-13"
                  className="h-12 sm:h-14 md:h-20"
                />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3 md:space-y-4 max-w-4xl">
              <h1 className="gradient-text font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl">
                {workshopData.home.title}
              </h1>
              {workshopData.home.tagline && (
                <p className="text-sm md:text-xl lg:text-2xl font-medium text-muted-foreground/90 tracking-tight">
                  {workshopData.home.tagline}
                </p>
              )}
              <p className="text-sm md:text-lg text-muted-foreground font-medium">
                {workshopData.home.subtitle}
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 text-sm md:text-base w-full max-w-2xl">
              <div className="glass flex flex-1 items-center gap-3 md:gap-4 px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-md">
                <Calendar
                  className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0"
                  aria-hidden="true"
                />
                <div className="flex flex-col leading-tight text-left min-w-0">
                  <time
                    className="font-semibold truncate"
                    dateTime="2026-09-09T08:30"
                  >
                    {workshopData.home.eventInfo.date}
                  </time>
                  <span className="text-xs md:text-sm font-normal text-muted-foreground truncate">
                    {workshopData.home.eventInfo.time}
                  </span>
                </div>
              </div>
              <div className="glass flex flex-1 items-center gap-3 md:gap-4 px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-md">
                <MapPin
                  className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0"
                  aria-hidden="true"
                />
                <address className="not-italic flex flex-col leading-tight text-left min-w-0">
                  <span className="font-semibold truncate">
                    {workshopData.home.eventInfo.venue}
                  </span>
                  <span className="text-xs md:text-sm font-normal text-muted-foreground truncate">
                    {workshopData.home.eventInfo.location}
                  </span>
                </address>
              </div>
            </div>

            {/* CTA Buttons — the nomination CTA was dropped once the deadline
                passed, leaving the program as the next milestone. */}
            <div className="w-full max-w-sm">
              <Button
                asChild
                size="lg"
                className="text-sm md:text-base px-6 py-5 md:py-6 rounded-xl w-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Link to="/#program">View Program</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="about" className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-bold">Overview</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              {workshopData.home.overview.mission}
            </p>
          </div>

          {/* Topics of Interest */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Topics of Interest</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {workshopData.callForPosterNominations.topics.core.map(
                (topic, index) => (
                  <div
                    key={index}
                    className="glass flex items-start gap-4 rounded-xl p-6 border"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <p className="text-base leading-relaxed pt-1">{topic}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Broader Impact — collapsed by default to lower visual weight */}
          <details className="group glass rounded-2xl border overflow-hidden">
            <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-4 hover:bg-primary/5 transition-colors [&::-webkit-details-marker]:hidden">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold leading-tight">
                  Broader Impact
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 truncate">
                  Responsible data governance, privacy, and deployment safety
                </div>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="border-t border-border/50 px-6 py-5 md:px-8 md:py-6">
              <p className="text-sm leading-relaxed text-foreground/75">
                Foundation models are increasingly deployed in real-world
                industrial and societal settings, including embodied and
                multimodal systems. While these models offer strong
                generalization, their reliability often degrades under domain
                shift, rare corner cases, and safety-critical conditions.
                Addressing this gap requires domain-grounded foundation data and
                evaluation protocols that reflect operating reality. At the same
                time, the collection and reuse of large-scale data raise
                concerns related to privacy, bias, data ownership, and safety,
                particularly when systems interact with the physical world. This
                workshop encourages responsible data governance, transparent
                documentation of data sources and intended use, and careful
                evaluation of bias, privacy risk, and deployment safety. By
                fostering collaboration between academia and industry, we aim to
                promote foundation data that is not only technically robust but
                also socially responsible and aligned with trustworthy
                real-world deployment.
              </p>
            </div>
          </details>
        </section>

        {/* Program Section — flat, like the nomination guidelines and the
            sponsor benefits: a schedule is a list, not a table, so it carries
            no card of its own. The time sits in the same primary/10 chip the
            numbered lists use, which keeps the left edge scannable, and the
            session type is a kicker above the presenter so a talk title can
            slot in underneath once those are announced. */}
        <section id="program" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Workshop Program</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          {/* Date and venue are omitted here on purpose — the hero states both
              prominently. */}
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="leading-relaxed">
              All times are local to Malmö. The room assignment will be
              announced closer to the event.
            </span>
          </p>

          <ol className="divide-y divide-border/50 border-y border-border/50">
            {workshopData.schedule.workshopProgram.day1.schedule.map(
              (item, index) => (
                <li
                  key={index}
                  className="grid gap-x-6 gap-y-1.5 py-3.5 sm:grid-cols-[9.5rem_11rem_1fr] sm:items-baseline"
                >
                  <span className="justify-self-start rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold tabular-nums text-primary sm:w-full sm:text-center">
                    {item.time}
                  </span>
                  <p className="text-base font-semibold leading-snug">
                    {item.session}
                  </p>
                  {item.presenter && (
                    <p className="text-base leading-snug text-foreground/70">
                      {item.presenter}
                    </p>
                  )}
                </li>
              ),
            )}
          </ol>
        </section>

        {/* Invited Speakers Section */}
        <section id="speakers" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Invited Speakers</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {peopleData.program.invitedSpeakers.map((speaker, index) => {
              const isTba = "tba" in speaker && speaker.tba === true;
              if (isTba) {
                return (
                  <Card
                    key={index}
                    className="glass border overflow-hidden gap-0 py-0 flex flex-col opacity-70"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                          <UserRound
                            className="h-12 w-12 sm:h-16 sm:w-16 opacity-40"
                            strokeWidth={1.5}
                          />
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-60">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardHeader className="space-y-1 sm:space-y-3 p-3 sm:p-6 flex-1">
                      <CardTitle className="text-sm sm:text-xl text-muted-foreground">
                        {speaker.name}
                      </CardTitle>
                      <p className="text-xs sm:text-base text-muted-foreground">
                        Speaker to be announced
                      </p>
                    </CardHeader>
                  </Card>
                );
              }
              return (
                <a
                  key={index}
                  href={speaker.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${speaker.name} — external profile`}
                  className="block rounded-xl focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  <Card className="glass border overflow-hidden card-hover group gap-0 py-0 flex flex-col h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={speaker.photo}
                          alt={`Photo of ${speaker.name}`}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                    <CardHeader className="space-y-1 sm:space-y-3 p-3 sm:p-6 flex-1">
                      <CardTitle className="text-sm sm:text-xl flex items-start gap-2">
                        <span className="flex-1">{speaker.name}</span>
                        <ExternalLink
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors"
                          aria-hidden="true"
                        />
                      </CardTitle>
                      <p className="text-xs sm:text-base text-muted-foreground">
                        {speaker.affiliation}
                      </p>
                    </CardHeader>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* Call for Poster Nominations Section — kept as an archival record now
            that the call has closed. The heading badge and the muted accent bar
            mark it as past; the guidelines below still describe what invited
            presenters agreed to, which is why the section is retained rather
            than dropped. */}
        <section id="cfp" className="space-y-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-bold">Call for Poster Nominations</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Closed
              </span>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-muted-foreground/40 to-muted-foreground/10 rounded-full" />
          </div>

          <p className="text-lg leading-relaxed text-foreground/90">
            {workshopData.callForPosterNominations.intro}
          </p>

          {/* Format Notice — subtle callout with left border */}
          <div className="border-l-2 border-primary/50 pl-6 space-y-4">
            <div className="flex items-center gap-3">
              <Info
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold">
                {workshopData.callForPosterNominations.formatNotice.title}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-foreground/80">
              {workshopData.callForPosterNominations.formatNotice.intro}
            </p>
            <ul className="space-y-2.5">
              {workshopData.callForPosterNominations.formatNotice.points.map(
                (point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold text-foreground">
                        {point.label}
                      </span>{" "}
                      <span className="text-foreground/80">{point.text}</span>
                    </p>
                  </li>
                ),
              )}
            </ul>
            <p className="text-base leading-relaxed text-foreground/80">
              {workshopData.callForPosterNominations.formatNotice.closing}
            </p>
          </div>

          {/* Nomination Guidelines — flat content */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Nomination Guidelines</h3>
            <ul className="space-y-3">
              {workshopData.callForPosterNominations.nominationFormat.nominationGuidelines.map(
                (guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-base leading-relaxed">{guideline}</p>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Important Dates — swipeable, 4-slot basis so 3 items sit left with room on right */}
          <div id="dates" className="space-y-5">
            <h3 className="text-xl font-bold">Important Dates</h3>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
              {workshopData.home.importantDates.map((item, index) => {
                const past = isPast(item.date);
                const days = daysUntil(item.date);
                return (
                  <div
                    key={index}
                    className={`snap-start shrink-0 basis-[85%] sm:basis-[calc(50%-8px)] lg:basis-[calc(25%-12px)] glass rounded-xl p-6 shadow-md border card-hover group flex flex-col ${
                      past ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 flex-1">
                      <div className="flex-1 flex flex-col space-y-2">
                        <div className="flex items-start gap-2 min-h-[2.5rem]">
                          <Calendar
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              past ? "text-muted-foreground" : "text-primary"
                            }`}
                          />
                          <p
                            className={`text-sm font-semibold ${
                              past
                                ? "text-muted-foreground line-through"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.date}
                          </p>
                        </div>
                        <h4
                          className={`text-base font-semibold leading-tight ${
                            past ? "text-muted-foreground" : ""
                          }`}
                        >
                          {item.title}
                        </h4>
                        <div className="mt-auto">
                          {!past && days !== null && (
                            <p className="text-xs font-semibold text-primary">
                              {days === 0
                                ? "Today!"
                                : days === 1
                                  ? "Tomorrow!"
                                  : `in ${days} days`}
                            </p>
                          )}
                          {past && (
                            <p className="text-xs font-semibold text-muted-foreground">
                              Ended
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => downloadICS(item.title, item.date)}
                        className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Add to calendar"
                        title="Add to calendar"
                      >
                        <CalendarPlus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nomination status — this is where the submit CTA used to sit. The
              form link is dropped rather than demoted to a reference: unlike an
              OpenReview venue there is nothing to read there, only a form that
              would still accept a response. `submission.url` stays in
              workshop.json as the record of where nominations were collected. */}
          <div className="glass rounded-2xl border p-8 text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Nominations Closed
            </div>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/80">
              {workshopData.callForPosterNominations.submission.description}
            </p>
          </div>
        </section>

        {/* Organizers */}
        <section id="organizers" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Organizers</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {peopleData.organizers.organizers.map((chair, index) => (
              <a
                key={index}
                href={chair.website || undefined}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center text-center gap-3"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-border/50 group-hover:ring-primary/60 transition-all duration-300">
                  <img
                    src={chair.photo}
                    alt={`Photo of ${chair.name}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                    {chair.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {chair.affiliation}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">{workshopData.sponsors.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          <p className="text-lg leading-relaxed text-foreground/90">
            {workshopData.sponsors.intro}
          </p>

          {/* Logo cards — background is fixed to white in both themes so that
              sponsor logo usage guidelines are respected. */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workshopData.sponsors.sponsors.map((sponsor, index) => {
              const card = (
                <>
                  {/* Clear space is per sponsor (`padding` in workshop.json,
                      in px) because the logos differ wildly in aspect ratio —
                      a 9:1 wordmark needs a tighter inset than a square mark to
                      read at a comparable size. Inline style rather than a
                      Tailwind class: the value comes from data, and Tailwind
                      only generates classes it can find in the source. */}
                  <div
                    className="card-hover mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center rounded-2xl bg-white ring-1 ring-black/5 shadow-sm dark:shadow-lg dark:shadow-black/30"
                    style={{ padding: sponsor.padding }}
                  >
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <Building2 className="h-8 w-8" strokeWidth={1.5} />
                        <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest">
                          Logo coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  {sponsor.name && (
                    <p className="mt-4 text-center text-sm sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sponsor.name}
                    </p>
                  )}
                </>
              );

              return sponsor.url ? (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${sponsor.name} — external site`}
                  className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {card}
                </a>
              ) : (
                <div key={index}>{card}</div>
              );
            })}
          </div>
        </section>

        {/* Sponsorship Section */}
        <section id="sponsorship" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">{workshopData.sponsorship.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          <p className="text-lg leading-relaxed text-foreground/90">
            {workshopData.sponsorship.intro}
          </p>

          {/* Joint sponsorship — subtle callout with left border, mirrors CFP "About this format" */}
          <div className="border-l-2 border-primary/50 pl-6 space-y-3">
            <div className="flex items-center gap-3">
              <Info
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold">Joint sponsorship</h3>
            </div>
            <p className="text-base leading-relaxed text-foreground/80">
              {renderWithLimitLink(workshopData.sponsorship.jointNote)}
            </p>
          </div>

          {/* Benefits — flat grid, no card container */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">
              {workshopData.sponsorship.benefitsTitle}
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {workshopData.sponsorship.benefits.map((benefit, index) => {
                const Icon =
                  benefit.icon === "Megaphone"
                    ? Megaphone
                    : benefit.icon === "LayoutPanelTop"
                      ? LayoutPanelTop
                      : Eye;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA — kept as card, parallel to CFP Submit Button */}
          <div className="glass-strong rounded-2xl p-8 shadow-lg text-center space-y-4">
            <h3 className="text-xl font-bold">
              {workshopData.sponsorship.cta.title}
            </h3>
            <p className="text-base leading-relaxed text-foreground/80 max-w-2xl mx-auto">
              {renderWithLimitLink(workshopData.sponsorship.cta.description)}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 rounded-xl"
              asChild
            >
              <a href="#contact">
                {workshopData.sponsorship.cta.buttonText}
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Contact Information */}
        <section id="contact" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Contact Information</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {workshopData.contact.contactInfo.map((info, index) => (
              <Card key={index} className="glass border">
                <CardHeader className="space-y-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {info.icon === "Mail" && (
                      <Mail className="h-6 w-6 text-primary" />
                    )}
                    {info.icon === "MapPin" && (
                      <MapPin className="h-6 w-6 text-primary" />
                    )}
                    {info.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {info.description}
                  </p>
                  {info.value && (
                    <p className="font-semibold text-base">
                      {info.type === "Email" ? (
                        <a
                          href={`mailto:${info.value.replace("[at]", "@")}`}
                          className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 underline-offset-4"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < info.value.split("\n").length - 1 && <br />}
                          </span>
                        ))
                      )}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
