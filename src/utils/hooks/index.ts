import { useSelector } from "react-redux"
import { BolgModularType } from "@/types"
import { initStateType } from "@/store/reducer"

// 获取当前所在的模块
export const useCurrentModule = () => {
  const currentModule = useSelector<initStateType, BolgModularType>((state) => state.currentModule)
  return currentModule
} 