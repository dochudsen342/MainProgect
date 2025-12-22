import { DropDownDirection } from '@/shared/types/ui'
import cl from './popup.module.scss'

export const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom left': cl.optionsBottomLeft,
  'bottom right': cl.optionsBottomRight,
  'top left': cl.optionsTopLeft,
  'top right': cl.optionsTopRight,
}
