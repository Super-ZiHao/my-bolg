import { RefObject, useState, useEffect } from 'react'

const useFullscreen: (
  element: RefObject<HTMLElement>
) => {
  isCompatible: boolean // 浏览器是否兼容全屏
  isFullScreen: boolean // 是否全屏
  openFullScreen: () => void // 打开全屏
  closeFullScreem: () => void // 关闭全屏
  toggleFullscreen: () => void // 切换全屏
} = (element) => {
  const [isCompatible] = useState<boolean>(document.fullscreenEnabled)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(element.current ? document.fullscreenElement === element.current : !!document.fullscreenElement)
  const openFullScreen = () => {
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
    isCompatible,
    isFullScreen,
    openFullScreen,
    closeFullScreem,
    toggleFullscreen
  }
}

export default useFullscreen
