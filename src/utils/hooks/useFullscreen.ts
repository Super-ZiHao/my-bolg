import { RefObject, useState, useEffect } from 'react'
import { message } from 'antd'

const useFullscreen: (
  element: RefObject<HTMLElement>
) => {
  isFullScreen: boolean // 是否全屏
  openFullScreen: () => void // 打开全屏
  closeFullScreem: () => void // 关闭全屏
  toggleFullscreen: () => void // 切换全屏
} = (element) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(element.current ? document.fullscreenElement === element.current : !!document.fullscreenElement)
  const openFullScreen = () => {
    if (!document.fullscreenEnabled) message.error('对不起，您的浏览器暂不支持全屏')
    setIsFullScreen(true)
    element.current?.requestFullscreen()
  }
  const closeFullScreem = () => {
    setIsFullScreen(false)
    if (document.fullscreenElement) document.exitFullscreen()
  }
  const toggleFullscreen = () => (isFullScreen ? closeFullScreem() : openFullScreen())

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    window.addEventListener('fullscreenchange', handleFullScreenChange)
    return () => {
      window.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [isFullScreen])
  return {
    isFullScreen,
    openFullScreen,
    closeFullScreem,
    toggleFullscreen
  }
}

export default useFullscreen
