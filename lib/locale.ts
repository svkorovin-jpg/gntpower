export function setAppLocale(lang: string) {
  const value = lang === "ru" ? "ru" : "uk"
  document.cookie = `locale=${value};domain=.gntpower.com;path=/;max-age=31536000;SameSite=Lax`
}
