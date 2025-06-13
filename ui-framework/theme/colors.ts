export const textColorClass = {
  primary: 'text-[#E1E8EB]',        // Silver-gray (main readable text)
  secondary: 'text-[#A7C7C5]',      // Pale teal (muted emphasis)
  accent: 'text-[#60C3AD]',         // Bright aqua green (energy pop)
  neutral: 'text-gray-300',         // Default readable neutral
  success: 'text-emerald-400',
  danger: 'text-rose-400',
};

export const bgColorClass = {
  none: 'bg-transparent',
  primary: 'bg-[#004C54]',          // Eagles midnight green (primary CTA, headers)
  secondary: 'bg-[#1A2C2B]',        // Deep charcoal-teal (containers, buttons)
  accent: 'bg-[#D7D9D8]',           // Bright silver-gray (for light cards or highlights)
  neutral: 'bg-[#0E1A1A]',          // Deepest green-black (base background)
  surface: 'bg-[#1F2E2E]',          // Dark teal (cards, sections)
  success: 'bg-emerald-100',
  warning: 'bg-yellow-100',
  danger: 'bg-rose-100',
};

export const borderColorClass = {
  primary: 'border-[#004C54]',      // Midnight green
  secondary: 'border-[#1A2C2B]',    // Deep charcoal
  accent: 'border-[#60C3AD]',       // Bright aqua
  neutral: 'border-[#2C3A3A]',      // Muted green-gray
  danger: 'border-rose-500',
};

export const colorVariantClass = {
  primary: `${bgColorClass.primary} ${textColorClass.primary} hover:bg-[#003A40]`,
  secondary: `${bgColorClass.secondary} ${textColorClass.primary} hover:bg-[#132020]`,
  accent: `${bgColorClass.accent} ${textColorClass.accent} hover:bg-[#BDC0BF]`,
  neutral: `${bgColorClass.neutral} ${textColorClass.secondary} hover:bg-[#1A2B2B]`,
  success: `${bgColorClass.success} ${textColorClass.neutral} hover:bg-success/70`,
  warning: `${bgColorClass.warning} ${textColorClass.neutral} hover:bg-warning/70`,
  danger: `${bgColorClass.danger} ${textColorClass.neutral} hover:bg-danger/70`,
  surface: `${bgColorClass.surface} ${textColorClass.neutral} hover:bg-[#2C3C3C]`,
  ghost: `bg-transparent ${textColorClass.secondary} hover:bg-[#2A3A3A]`,
  outline: `border border-current bg-transparent ${textColorClass.primary} hover:bg-primary hover:text-white`,
};







