const WHATSAPP_NUMBER = '5511999999999'

export function buildWhatsAppUrl(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ''}`
}

export const WA_DEFAULT_MESSAGE =
  'Olá! Gostaria de solicitar um orçamento para manutenção de máquina EDM.'

export const WA_URL = buildWhatsAppUrl(WA_DEFAULT_MESSAGE)
