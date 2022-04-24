import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { initStateType } from '@/store/reducer'
import { menuList } from '../constants'
import { replaceModule } from '@/store/action'
import { BolgModularPathType, BolgModularTitleType } from '@/types'

/**
 * 获取当前所在模块
 * @returns 当前所在的模块
 */
export const useCurrentModule = () => {
  const currentModule = useSelector<initStateType, BolgModularTitleType>((state) => state.currentModule)
  return currentModule
}
/**
 * 设置模块
 * @returns 
 */
export const useReplaceCurrentModule = () => {
  const currentModule = useCurrentModule()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (path: BolgModularPathType) => {
    dispatch(replaceModule(menuList.find((item) => item.path === path)?.title, currentModule))
    navigate(`../${path}`)
  }
}
