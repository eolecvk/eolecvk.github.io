// Shared profile data — single source of truth for the homepage hero,
// the resume hero, and the collaborate page.

export const DOMAIN = 'eolecvk.com'

export const NAME = 'Eole Cervenka'
export const ROLE = 'Machine Learning Engineer'
export const SECONDARY_ROLE = 'Collaboration enthusiast'

export const POSITIONING = 'Currently building AI agents for credit analysis'

export const POSITIONING_COMPANY = 'Constellation Finance'
export const POSITIONING_COMPANY_URL = 'https://app.constellationfinance.ai/'

export const NOW_LINE =
  'Currently leading the MCP product at Constellation Finance — Seed, $3.5M.'

export const PILLS = [
  'Cited by Google Research',
  '7y production ML',
  'Hollywood VFX shipped',
  'Multi-agent LLM systems',
] as const

export const LINKS = {
  github: 'https://github.com/eolecvk',
  linkedin: 'https://www.linkedin.com/in/eole-cervenka/',
  huggingface: 'https://huggingface.co/eolecvk',
  googleResearch: 'https://arxiv.org/abs/2301.00704',
} as const

// Cal.com booking link for cofounder intros.
export const CAL_URL = 'https://cal.com/eole-cervenka'
export const CAL_ENABLED = true

export const LINKEDIN_URL = LINKS.linkedin
