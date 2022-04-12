/**
 * 恢复展览状态
 */

export const useFilterRouter = (data: any[]) => {
  return data.filter(item => {
    if (item.path) return true
  })
}