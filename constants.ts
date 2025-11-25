import { Shield, MessageSquare, Palette, Mic2, Flame, Feather, Layout, Zap, Box, Anchor } from 'lucide-react';

export enum SectionType {
  INTRO = 'INTRO',
  DOCTRINE = 'DOCTRINE',
  NARRATIVE = 'NARRATIVE',
  VISUAL = 'VISUAL',
  SYNTHESIS = 'SYNTHESIS'
}

export const NAV_ITEMS = [
  { id: SectionType.INTRO, label: '00. Overview', icon: Layout },
  { id: SectionType.DOCTRINE, label: '01. Doctrine', icon: Shield },
  { id: SectionType.NARRATIVE, label: '02. Cadence', icon: Mic2 },
  { id: SectionType.VISUAL, label: '03. Visual', icon: Palette },
  { id: SectionType.SYNTHESIS, label: '04. Synthesis', icon: Anchor },
];

export const THREE_NOS = [
  {
    title: "No Sugarcoating",
    desc: "Vulnerability in its rawest form. Rejection of the curated highlight reel.",
    icon: Zap
  },
  {
    title: "No Script",
    desc: "A direct counter-narrative to algorithm-friendly, sanitized content.",
    icon: MessageSquare
  },
  {
    title: "No Apology",
    desc: "Truth is a tactical tool. It requires no softening or justification.",
    icon: Flame
  }
];

export const PERSONAS = [
  {
    title: "The Street Preacher",
    role: "Raw Observation",
    desc: "Delivers the 'gospel for the misfits' with unapologetic grit. Sermons in alleyways.",
    color: "border-zinc-500"
  },
  {
    title: "The Urban Mythmaker",
    role: "Transcribed Lore",
    desc: "Transmutes struggle into digital folklore. Reframing marginalized existence as sacred drama.",
    color: "border-amber-700"
  },
  {
    title: "The Spiritual Jester",
    role: "Power Redirection",
    desc: "Whimsical edge. Redirecting power from pain through humor. Laughter as survival.",
    color: "border-zinc-200"
  }
];

export const VISUAL_RULES = [
  {
    title: "Tactical Minimalism",
    rule: "Design as Discipline",
    desc: "Every element must earn its place. The physical space is a weapon—clean, intentional, cinematic."
  },
  {
    title: "Monochrome & Bronze",
    rule: "Strategic Contrast",
    desc: "Light must earn its right to exist. Matte black asserts; metallic bronze signifies earned legacy."
  },
  {
    title: "Texture Over Pattern",
    rule: "Tactile Resonance",
    desc: "Rough, unapologetic surfaces that resist polish. Stone and metal over smooth plastic."
  }
];