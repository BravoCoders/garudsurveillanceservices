import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Bell,
  Cpu,
  Map,
  Cloud,
  Moon,
  Thermometer,
  Siren,
  ArrowRight,
  IndianRupee,
  Building2,
  TrafficCone,
  School2,
  BarChart3,
  Lock,
  Zap,
  Video,
  Cog,
  Smartphone,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Utility
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur border-zinc-200">
    {children}
  </span>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border bg-white border-zinc-200">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PricingCard = ({
  tier,
  price,
  period = "mo",
  bullets = [],
  highlight = false,
  cta = "Start now",
}) => (
  <Card
    className={`relative rounded-2xl border-zinc-200 ${
      highlight ? "ring-2 ring-zinc-900" : ""
    }`}
  >
    {highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white shadow">
        Popular
      </div>
    )}
    <CardHeader>
      <CardTitle className="flex items-baseline gap-2 text-zinc-900">
        {tier}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-5">
      <div className="flex items-end gap-1">
        <IndianRupee className="h-5 w-5" />
        <span className="text-4xl font-bold leading-none">{price}</span>
        <span className="text-zinc-500 mb-1">/{period}</span>
      </div>
      <ul className="space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            <span className="text-zinc-700">{b}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" size="lg">
        {cta}
      </Button>
    </CardContent>
  </Card>
);

export default function SentinelDroneLanding() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border bg-white border-zinc-200">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-semibold">Sentinel Drone</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#features" className="hover:opacity-70">
              Features
            </a>
            <a href="#how" className="hover:opacity-70">
              How it works
            </a>
            <a href="#pricing" className="hover:opacity-70">
              Pricing
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              Docs
            </Button>
            <Button>Request Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <Pill>
              <Siren className="h-4 w-4" />
              Intelligent Aerial Security for India
            </Pill>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Autonomous surveillance built for banks, intersections, and
              campuses
            </h1>
            <p className="text-lg text-zinc-700">
              Sentinel Drone is a smart aerial security officer that detects,
              analyzes, and responds to threats in real-time—no human monitoring
              needed. With on-device AI, it works even in low-connectivity areas
              and adapts its patrols to your environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="">
                Book a live demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download one-pager
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-zinc-600">
              <Pill>
                <Cpu className="h-3.5 w-3.5" /> Edge AI
              </Pill>
              <Pill>
                <Video className="h-3.5 w-3.5" /> Real-time evidence
              </Pill>
              <Pill>
                <Cloud className="h-3.5 w-3.5" /> Works offline
              </Pill>
              <Pill>
                <Moon className="h-3.5 w-3.5" /> Night vision ready
              </Pill>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border bg-white shadow border-zinc-200">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2">
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Threat Detection</div>
                  <p className="text-xs text-zinc-600">
                    Loitering, armed intrusions, unattended objects, crowd
                    spikes.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Adaptive Patrols</div>
                  <p className="text-xs text-zinc-600">
                    Fixed loops for banks, flexible paths at intersections,
                    schedules on campuses.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Instant Alerts</div>
                  <p className="text-xs text-zinc-600">
                    Push to security teams with map location + video evidence.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Indian Context</div>
                  <p className="text-xs text-zinc-600">
                    Recognizes local vehicles, uniforms, and threat patterns.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Edge AI</div>
                  <p className="text-xs text-zinc-600">
                    Low-latency inference on board; no costly cloud dependency.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-3 border-zinc-200">
                  <div className="text-sm font-semibold">Modular Upgrades</div>
                  <p className="text-xs text-zinc-600">
                    Thermal, night vision, loudspeaker, voice alerts, more.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos / Use cases */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6" />
            <div>
              <div className="font-semibold">Bank Security</div>
              <div className="text-sm text-zinc-600">
                Fixed patrols, vault perimeter watch, ATM zones.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrafficCone className="h-6 w-6" />
            <div>
              <div className="font-semibold">Traffic Intersections</div>
              <div className="text-sm text-zinc-600">
                Flexible flight paths; crowd and vehicle anomaly alerts.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <School2 className="h-6 w-6" />
            <div>
              <div className="font-semibold">Campuses</div>
              <div className="text-sm text-zinc-600">
                Timetabled patrols; entry/exit monitoring and gatherings.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">
              Why Sentinel beats CCTV and generic drones
            </h2>
            <p className="mt-2 text-zinc-600">
              Aerial perspective + on-device intelligence = fewer blind spots
              and faster response.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={Bell}
              title="Real-time smart alerts"
              desc="Instant notifications with GPS pin and video evidence to security teams or authorities."
            />
            <Feature
              icon={Cpu}
              title="Edge AI processing"
              desc="All critical inference happens on board to minimize latency and reliance on internet."
            />
            <Feature
              icon={Map}
              title="Adaptive patrols"
              desc="Static loops for banks, dynamic paths for junctions, and scheduled routes on campuses."
            />
            <Feature
              icon={Lock}
              title="Privacy & data control"
              desc="Local processing keeps sensitive footage on-prem; fine-grained retention policies."
            />
            <Feature
              icon={Zap}
              title="Rapid deployment"
              desc="Modular, cost-effective design that scales across sites and geographies."
            />
            <Feature
              icon={BarChart3}
              title="Actionable analytics"
              desc="Dashboards show heatmaps, incident timelines, and trend reports."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <Card className="rounded-2xl border-zinc-200">
              <CardHeader>
                <CardTitle>1) Deploy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-700">
                <p>
                  Install docking/charging points and define patrol zones. Choose
                  modules: <strong>Night Vision</strong>, <strong>Thermal</strong>,{" "}
                  <strong>Voice Alerts</strong>.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200">
              <CardHeader>
                <CardTitle>2) Detect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-700">
                <p>
                  On-board models spot loitering, intrusions, unattended objects,
                  crowd surges; video stays local by default.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200">
              <CardHeader>
                <CardTitle>3) Respond</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-700">
                <p>
                  Automatic alerts with clip + coordinates to team apps,
                  siren/voice deterrence, and incident logging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Flexible plans: DaaS or SaaS</h2>
            <p className="mt-2 text-zinc-600">
              Choose a full hardware subscription (DaaS) or software-only (SaaS).
              Admin Dashboard Premium is available as an add-on.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <PricingCard
              tier="DaaS — Drone as a Service"
              price="29,999"
              bullets={[
                "Hardware + maintenance included",
                "Edge-AI models pre-installed",
                "1 drone + docking/charging kit",
                "Up to 2 km patrol radius",
                "Standard analytics dashboard",
              ]}
              cta="Get DaaS quote"
            />
            <PricingCard
              tier="SaaS — Software only"
              price="9,999"
              bullets={[
                "Per site / per month",
                "Use with your existing drones",
                "Real-time alerts + incident logs",
                "Heatmaps & trend reports",
                "Email/WhatsApp notifications",
              ]}
              highlight
              cta="Start SaaS trial"
            />
            <PricingCard
              tier="Admin Dashboard Premium"
              price="4,999"
              bullets={[
                "Advanced RBAC & SSO",
                "Unlimited alert rules",
                "Longer video retention",
                "Custom reports & exports",
                "Priority support (SLA)",
              ]}
              cta="Upgrade to Premium"
            />
          </div>
          <p className="mt-4 text-center text-xs text-zinc-500">
            All prices in INR and indicative; final pricing depends on
            configuration, volume, and SLAs.
          </p>
        </div>
      </section>

      {/* Tech + Modules */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">
                Edge AI, built for Indian conditions
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> Recognizes local vehicles,
                  uniforms, and environmental nuances.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> Works in patchy
                  connectivity; syncs summaries when bandwidth returns.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> Data governance controls:
                  on-prem, hybrid, or cloud archival.
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <Pill>
                  <Thermometer className="h-3.5 w-3.5
