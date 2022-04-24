import { BolgModularTitleType } from '@/types'
import { useCurrentModule } from '@/utils/hooks'

/**
 * 展示内容
 */
export const replaceModule = (name: string | undefined, currentModule: BolgModularTitleType) => {
  if (!name) {
    return {
      type: 'replaceModule',
      value: currentModule
    }
  }
  return {
    type: 'replaceModule',
    value: name
  }
}
