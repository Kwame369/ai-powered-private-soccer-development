import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Database,
  Dumbbell,
  FileText,
  Gauge,
  Map,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Trophy,
  Upload,
  Users,
  Video,
  Wand2,
  Zap
} from "lucide-react";

const brand = {
  name: "AI-Powered Private Soccer Development",
  phone: "647 985 7186",
  email: "kwame1996@hotmail.com",
  location: "TBD"
};

const packages = [
  {
    name: "Starter Development",
    price: "$120/month",
    note: "Perfect for new players building consistency.",
    features: ["2 private sessions monthly", "Skill baseline", "Parent feedback", "Homework plan"]
  },
  {
    name: "AI Growth Plan",
    price: "$350/month",
    note: "Best for serious improvement.",
    features: ["6 private sessions monthly", "Video review", "Player report card", "Growth roadmap", "Parent portal access"],
    popular: true
  },
  {
    name: "Match IQ Elite",
    price: "$650/month",
    note: "Complete player development management.",
    features: ["9 private sessions monthly", "Match analysis", "AI progress dashboard", "Auto-highlight clips", "Parent strategy call"]
  }
];

const features = [
  { icon: Wand2, title: "AI Video Analysis", text: "Upload clips and turn match moments into clear coaching notes." },
  { icon: Video, title: "Auto-Highlight Clips", text: "Create shareable player highlights from key actions." },
  { icon: Map, title: "Tactical Heatmaps", text: "Track where players receive, dribble, shoot, and defend." },
  { icon: Zap, title: "Speed Detection", text: "Measure acceleration, recovery runs, and explosive moments." },
  { icon: FileText, title: "PDF Player Reports", text: "Generate branded report cards and development roadmaps." },
  { icon: QrCode, title: "QR Homework", text: "Give players scannable homework sheets with drills and videos." },
  { icon: Users, title: "Coach CRM", text: "Manage parents, players, leads, sessions, notes, and follow-ups." },
  { icon: CreditCard, title: "Stripe Payments", text: "Prepare for subscriptions, packages, invoices, and paid assessments." }
];

const metrics = [
  { label: "First Touch", value: 82, icon: Target },
  { label: "Scanning", value: 68, icon: Activity },
  { label: "Decision Speed", value: 74, icon: Gauge },
  { label: "Finishing", value: 79, icon: Trophy }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Button({ children, onClick, secondary }) {
  return (
    <button onClick={onClick} className={secondary ? "btn btn-secondary" : "btn"}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [dashboard, setDashboard] = useState("Parent Portal");

  const dashboardItems = {
    "Parent Portal": ["Book sessions", "View reports", "Watch clips", "Track homework", "Pay invoices"],
    "Player App": ["Daily homework", "QR drills", "Progress badges", "Video lessons", "Reflection questions"],
    "Coach CRM": ["Lead tracking", "Session notes", "Player database", "Report builder", "Follow-up reminders"],
    "Admin Panel": ["Revenue dashboard", "Memberships", "Staff accounts", "Analytics", "Automations"]
  };

  return (
    <main>
      <header className="header">
        <div className="brand">
          <div className="logo">
  <img src="/logo.svg" alt="APD Logo" style={{ width: "42px" }} />
</div>
          <div>
            <strong>{brand.name}</strong>
            <small>Game IQ + Technical Development + AI Progress Tracking</small>
          </div>
        </div>
        <nav>
          <button onClick={() => scrollToId("programs")}>Programs</button>
          <button onClick={() => scrollToId("features")}>AI Tools</button>
          <button onClick={() => scrollToId("dashboard")}>Dashboard</button>
          <button onClick={() => scrollToId("pricing")}>Pricing</button>
          <button onClick={() => scrollToId("book")}>Book</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <motion.div className="hero-text" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <div className="pill"><ShieldCheck size={16} /> Private Soccer Development • Location: {brand.location}</div>
          <h1>Private soccer coaching powered by AI progress tracking.</h1>
          <p>
            We help young players improve their real match performance through technical training,
            Game IQ, video review, parent updates, homework plans, and measurable development.
          </p>
          <div className="hero-actions">
           <a className="btn" href="https://calendly.com/kwame1996/30min" target="_blank" rel="noreferrer">
  Book Free Assessment <ChevronRight size={18} />
</a>
            <Button secondary onClick={() => scrollToId("features")}>Explore AI Features</Button>
          </div>
        </motion.div>

        <motion.div className="phone-card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card>
            <div className="card-head">
              <div>
                <small>Live Player Snapshot</small>
                <h3>Aden — U9 Winger</h3>
              </div>
              <BarChart3 />
            </div>
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div className="metric" key={metric.label}>
                  <div className="metric-top">
                    <span><Icon size={16} /> {metric.label}</span>
                    <strong>{metric.value}%</strong>
                  </div>
                  <div className="bar"><div style={{ width: `${metric.value}%` }} /></div>
                </div>
              );
            })}
          </Card>
        </motion.div>
      </section>

      <section id="programs" className="section dark">
        <div className="section-title">
          <small>Programs</small>
          <h2>Training that connects directly to match performance</h2>
          <p>Every session uses a Whole-Part-Whole approach: game realism, focused technical work, position-specific actions, and reflection.</p>
        </div>
        <div className="grid three">
          <Card><Dumbbell /><h3>Technical Development</h3><p>Passing, receiving, dribbling, shooting, first touch, ball mastery, and weak foot confidence.</p></Card>
          <Card><Target /><h3>Game IQ Training</h3><p>Scanning, movement, decisions, positioning, communication, and match problem-solving.</p></Card>
          <Card><Camera /><h3>AI Video Review</h3><p>Upload clips, tag moments, create reports, and build the next development plan.</p></Card>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-title">
          <small>Next-Level Features</small>
          <h2>Built like a real player development platform</h2>
          <p>These features turn the business from simple private coaching into a premium AI-powered development system.</p>
        </div>
        <div className="grid four">
          {features.map((feature) => {
            const Icon = feature.icon;
            return <Card key={feature.title}><Icon /><h3>{feature.title}</h3><p>{feature.text}</p></Card>;
          })}
        </div>
      </section>

      <section id="dashboard" className="section dark">
        <div className="section-title">
          <small>App Dashboard</small>
          <h2>Parent portal, player app, coach CRM, and admin dashboard</h2>
        </div>
        <div className="dashboard">
          <Card>
            {Object.keys(dashboardItems).map((item) => (
              <button key={item} onClick={() => setDashboard(item)} className={dashboard === item ? "tab active" : "tab"}>{item}</button>
            ))}
          </Card>
          <Card>
            <div className="card-head">
              <div><small>Active Module</small><h3>{dashboard}</h3></div>
              <Smartphone />
            </div>
            <div className="grid two">
              {dashboardItems[dashboard].map((item) => <div className="mini" key={item}><CheckCircle2 /> {item}</div>)}
            </div>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <small>Recommended Tech Stack</small>
          <h2>Launch simple now, scale later</h2>
        </div>
        <div className="grid two">
          <Card><Smartphone /><h3>Frontend</h3><p>React / Vite now. Upgrade to Next.js later when you add advanced SEO, authentication, and server features.</p></Card>
          <Card><Database /><h3>Backend</h3><p>Supabase for parent login, player profiles, database, and secure video/report storage.</p></Card>
          <Card><Upload /><h3>Video Storage</h3><p>Supabase Storage, Firebase Storage, or Cloudinary for uploaded match clips and player files.</p></Card>
          <Card><Calendar /><h3>Booking + Payments</h3><p>Calendly or Cal.com for booking. Stripe for monthly memberships and one-time payments.</p></Card>
          <Card><MessageCircle /><h3>Automation</h3><p>Email, SMS, or WhatsApp reminders for homework, session reminders, and parent updates.</p></Card>
          <Card><Wand2 /><h3>AI Layer</h3><p>OpenAI API for report writing, player summaries, coach assistant, and video analysis notes.</p></Card>
        </div>
      </section>

      <section id="pricing" className="section dark">
        <div className="section-title">
          <small>Pricing</small>
          <h2>Monthly development packages</h2>
        </div>
        <div className="grid three">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={pkg.popular ? "popular" : ""}>
              {pkg.popular && <div className="popular-label">POPULAR</div>}
              <h3>{pkg.name}</h3>
              <p>{pkg.note}</p>
              <h2>{pkg.price}</h2>
              {pkg.features.map((item) => <div className="check" key={item}><CheckCircle2 /> {item}</div>)}
              <Button onClick={() => scrollToId("book")}>Choose Plan</Button>
            </Card>
          ))}
        </div>
      </section>

      <section id="book" className="section book">
        <div>
          <small>Book Now</small>
          <h2>Start with a free player assessment.</h2>
          <p>Tell us about your child, their position, and what they need to improve. We’ll recommend the right development pathway.</p>
          <div className="contact-box">
            <strong>Contact</strong>
            <p>Phone: {brand.phone}</p>
            <p>Email: {brand.email}</p>
            <p>Location: {brand.location}</p>
          </div>
          <div className="review"><Star fill="currentColor" /> “Private training that finally shows measurable progress.”</div>
        </div>

        <Card>
          {submitted ? (
            <div className="success">
              <CheckCircle2 size={60} />
              <h3>Assessment request received.</h3>
              <p>This form is ready visually. Next step: connect it to email, Supabase, or a CRM.</p>
              <Button onClick={() => setSubmitted(false)}>Send Another</Button>
            </div>
          ) : (
            <form
  className="booking-form"
  action="https://formspree.io/f/mkoejlvw"
  method="POST"
>
              <input required placeholder="Parent name" />
              <input required type="email" placeholder="Email address" />
              <input placeholder="Phone number" />
              <input required placeholder="Player name" />
              <select><option>U7-U9</option><option>U10-U12</option><option>U13-U15</option><option>U16+</option></select>
              <select><option>Striker</option><option>Winger</option><option>Midfielder</option><option>Defender</option><option>Goalkeeper</option></select>
              <textarea rows="5" placeholder="What does your child need help with?" />
              <Button>Request Assessment</Button>
            </form>
          )}
        </Card>
      </section>

      <footer>
        <strong>{brand.name}</strong>
        <p>{brand.phone} • {brand.email} • Location: {brand.location}</p>
      </footer>
    </main>
  );
}
