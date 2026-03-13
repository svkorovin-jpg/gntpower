export function trackEvent(event: string, data?: any) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    })
  }
}