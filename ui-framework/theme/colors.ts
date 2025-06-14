export const textColorClass = {
  primary: 'text-[#F6F8F9]',        // Soft near-white for high contrast on dark BGs
  secondary: 'text-[#B4D1CF]',      // Gentle mint-teal for calm accent text
  accent: 'text-[#2D8A78]',         // Vibrant seafoam pop — joyful and bright
  neutral: 'text-gray-300',         // Default readable neutral
  dark: 'text-gray-700',         
  success: 'text-emerald-400',
  danger: 'text-rose-400',
};

export const bgColorClass = {
  none: 'bg-transparent',
  primary: 'bg-[#035E64]',          // Refined deep teal — strong, gift-forward brand
  secondary: 'bg-[#113A3B]',        // Charcoal green-gray — depth and contrast
  accent: 'bg-[#F0F2F1]',           // Clean silver-white for gift card areas or highlights
  neutral: 'bg-[#0B1A1A]',          // Deepest teal-black — main background
  surface: 'bg-[#1C2D2D]',          // Slightly softened surface card background
  success: 'bg-emerald-100',
  warning: 'bg-yellow-100',
  danger: 'bg-rose-100',
};

export const borderColorClass = {
  primary: 'border-[#035E64]',      // Deep teal brand stroke
  secondary: 'border-[#113A3B]',    // Soft dark gray-green
  accent: 'border-[#5ED9C1]',       // Lively aqua for highlights
  neutral: 'border-[#2E3F3F]',      // Muted cool-border base
  danger: 'border-rose-500',
};

export const colorVariantClass = {
  primary: `${bgColorClass.primary} ${textColorClass.primary} hover:bg-[#024B50]`,
  secondary: `${bgColorClass.secondary} ${textColorClass.primary} hover:bg-[#0D2C2D]`,
  accent: `${bgColorClass.accent} ${textColorClass.dark} hover:bg-[#DDE0DF]`,
  neutral: `${bgColorClass.neutral} ${textColorClass.secondary} hover:bg-[#182828]`,
  success: `${bgColorClass.success} ${textColorClass.neutral} hover:bg-success/70`,
  warning: `${bgColorClass.warning} ${textColorClass.neutral} hover:bg-warning/70`,
  danger: `${bgColorClass.danger} ${textColorClass.neutral} hover:bg-danger/70`,
  surface: `${bgColorClass.surface} ${textColorClass.neutral} hover:bg-[#2A3C3C]`,
  ghost: `bg-transparent ${textColorClass.secondary} hover:bg-[#243535]`,
  outline: `border border-current bg-transparent ${textColorClass.primary} hover:bg-primary hover:text-white`,
};








