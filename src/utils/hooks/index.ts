import { message } from 'antd'
import { RefObject, useState } from 'react'

/**
 * 恢复展览状态
 */

export const useFilterRouter = (data: any[]) => {
  return data.filter((item) => {
    if (item.path) return true
  })
}

export const useFullscreen = (element: RefObject<HTMLElement>) => {
  // 是否全屏
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  // 打开全屏
  const openFullScreen = () => {
    console.log(document.fullscreenElement)
    if (!document.fullscreenEnabled) message.error('对不起，您的浏览器暂不支持全屏')
    setIsFullScreen(true);
    element.current?.requestFullscreen();
  }
  // 关闭全屏
  const closeFullScreem = () => {
    setIsFullScreen(false)
    document.exitFullscreen()
  }
  // 打开或关闭全屏
  const toggleFullscreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false);
      document.exitFullscreen()
    } else {
      setIsFullScreen(true);
      element.current?.requestFullscreen();
    }
  }
  return {
    isFullScreen,
    openFullScreen,
    closeFullScreem,
    toggleFullscreen
  }
}
