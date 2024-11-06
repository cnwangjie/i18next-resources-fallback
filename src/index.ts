import type { ResourceLanguage, i18n } from 'i18next'
import { flattenObject } from './util'

export const i18nextResourcesFallback = (
  i18n: i18n,
  resources: Record<string, ResourceLanguage>,
) => {
  i18n.on('loaded', lngs => {
    for (const [lng, namespaces] of Object.entries(lngs)) {
      for (const ns in namespaces) {
        const res = resources?.[lng]?.[ns]
        if (res && typeof res === 'object') {
          i18n.addResourceBundle(lng, ns, flattenObject(res), true, false)
        }
      }
    }
  })
}

export default i18nextResourcesFallback
