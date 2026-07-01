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
  Users,
  TrendingUp,
  Lightbulb,
  Handshake,
  ArrowDown,
  UserRound,
} from "lucide-react";
import { useLocation } from "react-router";
import { Fragment, useEffect } from "react";
import { NewsCarousel } from "../../components/news-carousel";

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
    startDate: "2026-09-09T09:00:00",
    endDate: "2026-09-09T13:00:00",
    location: {
      name: workshopData.home.eventInfo.location,
      address: "Malmö, Sweden",
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
        <section className="relative overflow-hidden rounded-3xl border px-6 py-14 md:px-8 md:py-24 lg:py-32 text-center shadow-2xl">
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

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 md:gap-10 lg:gap-12 fade-in-up">
            {/* Conference Badge */}
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
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
            <div className="space-y-3 md:space-y-6 max-w-4xl">
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
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-8 text-sm md:text-lg">
              <div className="glass flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-md">
                <Calendar
                  className="h-4 w-4 md:h-5 md:w-5 text-primary"
                  aria-hidden="true"
                />
                <time className="font-medium" dateTime="2026-09-09T09:00">
                  {workshopData.home.eventInfo.date}
                </time>
              </div>
              <div className="glass flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-md">
                <MapPin
                  className="h-4 w-4 md:h-5 md:w-5 text-primary"
                  aria-hidden="true"
                />
                <address className="font-medium not-italic">
                  {workshopData.home.eventInfo.location}
                </address>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                variant="outline"
                size="lg"
                className="text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-xl opacity-50 cursor-not-allowed"
                disabled
              >
                Submit Nomination (Coming Soon)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-xl opacity-50 cursor-not-allowed"
                disabled
              >
                View Program (Coming Soon)
              </Button>
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section id="dates" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Important Dates</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workshopData.home.importantDates.map((item, index) => {
              const past = isPast(item.date);
              const days = daysUntil(item.date);
              return (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 shadow-md border card-hover group flex flex-col ${
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
                      <h3
                        className={`text-base font-semibold leading-tight ${
                          past ? "text-muted-foreground" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
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
        </section>

        {/* Info + Latest News Section */}
        <div className="space-y-12">
          {/* Info Section */}
          <div className="glass-strong flex items-start gap-4 rounded-2xl p-8 shadow-lg card-hover">
            <Info className="h-6 w-6 shrink-0 text-primary mt-1" />
            <p className="text-base leading-relaxed">
              We are accepting self-nominations to present a poster at the FOUND
              Workshop Poster Session at ECCV 2026. The nomination deadline is{" "}
              <span className="font-semibold text-primary">
                Tuesday, August 25, 2026, 23:59 AoE
              </span>
              . Please check the topics of interest below. The Google Form for
              nominations will be announced soon.
            </p>
          </div>

          {/* Latest News Section */}
          <section id="news" className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-bold">Latest News</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
            </div>
            <NewsCarousel items={workshopData.home.latestNews} />
          </section>
        </div>

        {/* Overview Section */}
        <section id="about" className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-bold">About the Workshop</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              {workshopData.home.overview.mission}
            </p>
          </div>

          {/* Broader impact */}
          <div className="glass rounded-2xl p-10 space-y-4 border shadow-lg">
            <h3 className="text-2xl font-bold">Broader Impact</h3>
            <p className="text-base leading-relaxed text-foreground/80">
              Foundation models are increasingly deployed in real-world
              industrial and societal settings, including embodied and
              multimodal systems. While these models offer strong
              generalization, their reliability often degrades under domain
              shift, rare corner cases, and safety-critical conditions.
              Addressing this gap requires domain-grounded foundation data and
              evaluation protocols that reflect operating reality. At the same
              time, the collection and reuse of large-scale data raise concerns
              related to privacy, bias, data ownership, and safety, particularly
              when systems interact with the physical world. This workshop
              encourages responsible data governance, transparent documentation
              of data sources and intended use, and careful evaluation of bias,
              privacy risk, and deployment safety. By fostering collaboration
              between academia and industry, we aim to promote foundation data
              that is not only technically robust but also socially responsible
              and aligned with trustworthy real-world deployment.
            </p>
          </div>

          {/* Topics of Interest */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Topics of Interest</h3>
            <p className="text-base text-muted-foreground">
              The workshop covers two coupled pillars: (1) Foundation Data
              creation and (2) practical tech transfer, with a key focus on
              Physical AI and World Models:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {workshopData.callForPosterNominations.topics.core.map(
                (topic, index) => (
                  <div
                    key={index}
                    className="glass flex items-start gap-4 rounded-xl p-6 border card-hover"
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
        </section>

        {/* Call for Poster Nominations Section */}
        <section id="cfp" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">Call for Poster Nominations</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          <p className="text-lg leading-relaxed text-foreground/90">
            {workshopData.callForPosterNominations.intro}
          </p>

          {/* Format Notice */}
          <div className="glass-strong rounded-2xl p-8 shadow-lg space-y-4">
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

          {/* Nomination Guidelines */}
          <div className="glass rounded-2xl p-8 md:p-10 border shadow-lg space-y-6">
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

          {/* Selection & Presentation */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-8 border shadow-md space-y-3">
              <h3 className="text-lg font-bold">Selection Process</h3>
              <p className="text-base leading-relaxed text-foreground/80">
                {
                  workshopData.callForPosterNominations.nominationFormat
                    .selectionProcess
                }
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border shadow-md space-y-3">
              <h3 className="text-lg font-bold">Presentation Format</h3>
              <p className="text-base leading-relaxed text-foreground/80">
                {
                  workshopData.callForPosterNominations.nominationFormat
                    .presentationFormat
                }
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="glass-strong rounded-2xl p-8 shadow-lg text-center space-y-4">
            <p className="text-base leading-relaxed">
              {workshopData.callForPosterNominations.submission.description}
            </p>
            <Button
              size="lg"
              className="text-base px-8 py-6 rounded-xl opacity-50 cursor-not-allowed"
              disabled
            >
              Submit Nomination (Coming Soon)
            </Button>
          </div>
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
              return (
                <Card
                  key={index}
                  className="glass border overflow-hidden card-hover group gap-0 py-0 flex flex-col"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      {isTba ? (
                        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                          <UserRound
                            className="h-12 w-12 sm:h-16 sm:w-16 opacity-40"
                            strokeWidth={1.5}
                          />
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-60">
                            Coming Soon
                          </span>
                        </div>
                      ) : (
                        <img
                          src={speaker.photo}
                          alt={`Photo of ${speaker.name}`}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </CardContent>
                  <CardHeader className="space-y-1 sm:space-y-3 p-3 sm:p-6 flex-1">
                    <CardTitle
                      className={`text-sm sm:text-xl ${isTba ? "text-muted-foreground" : ""}`}
                    >
                      {speaker.name}
                    </CardTitle>
                    <p className="text-xs sm:text-base text-muted-foreground">
                      {isTba ? "Speaker to be announced" : speaker.affiliation}
                    </p>
                  </CardHeader>
                  <div className="px-3 pb-3 sm:px-6 sm:pb-6 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full text-xs sm:text-sm ${
                        isTba
                          ? "opacity-50 cursor-not-allowed"
                          : "group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      }`}
                      disabled={isTba}
                      asChild={!isTba}
                    >
                      {isTba ? (
                        <span className="flex items-center justify-center gap-1 sm:gap-2">
                          Profile (Coming Soon)
                        </span>
                      ) : (
                        <a
                          href={speaker.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-2"
                        >
                          Profile{" "}
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
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

        {/* Sponsorship Section */}
        <section id="sponsorship" className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-bold">{workshopData.sponsorship.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          {/* Intro card */}
          <div className="relative overflow-hidden rounded-2xl p-px bg-gradient-to-br from-primary/40 via-primary/15 to-transparent">
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-8 md:p-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Handshake className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">
                  {workshopData.sponsorship.subtitle}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/80">
                {workshopData.sponsorship.intro}
              </p>
              <div className="rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm px-5 py-4 flex items-start gap-3">
                <Info
                  className="h-4 w-4 shrink-0 text-primary mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-foreground">
                    Joint sponsorship:
                  </span>{" "}
                  {renderWithLimitLink(workshopData.sponsorship.jointNote)}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              {workshopData.sponsorship.benefitsTitle}
            </h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {workshopData.sponsorship.benefits.map((benefit, index) => {
                const Icon =
                  benefit.icon === "Megaphone"
                    ? Megaphone
                    : benefit.icon === "LayoutPanelTop"
                      ? LayoutPanelTop
                      : Eye;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 md:p-7 border shadow-md card-hover space-y-3"
                  >
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

          {/* Why Sponsor */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              {workshopData.sponsorship.whyTitle}
            </h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {workshopData.sponsorship.whyReasons.map((reason, index) => {
                const Icon =
                  reason.icon === "Users"
                    ? Users
                    : reason.icon === "TrendingUp"
                      ? TrendingUp
                      : Lightbulb;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl p-5 border border-border/50 bg-muted/10 card-hover"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-semibold leading-tight">
                        {reason.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
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
              <Card key={index} className="glass border card-hover">
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
