import { exhibition } from '@/store/action'
import { useDispatch } from 'react-redux'

/**
 * 恢复展览状态
 */
export const useRedirectExhibition = () => {
  const dispatch = useDispatch()
  return () => {
    dispatch(exhibition)
  }
}
