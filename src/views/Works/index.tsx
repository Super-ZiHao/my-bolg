import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Empty } from 'antd'
import { worksList } from '@/utils/constants'
import { exhibition, unExhibition } from '@/store/action'
import { initStateType } from '@/store/reducer'

type Props = {}
const Works: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const isExhibition = useSelector<initStateType, [string, string]>((state) => state.isExhibition)
  const navigate = useNavigate()
  const open = (path: string) => {
    dispatch(exhibition())
    navigate(`/works/${path}`)
  }
  const handleBack = () => {
    dispatch(unExhibition())
    navigate(-1);
  }
  return (
    <div className="flex w-full h-full relative">
      <div className="main-card exhibition" style={{ left: isExhibition[0] }}>
        <div className="exhibition-left">
          <Outlet />
        </div>
        <div className="exhibition-right" onClick={handleBack}>
          <div className="exhibition-right-icon" />
        </div>
      </div>
      <div className="main-card works" style={{ left: isExhibition[1] }}>
        <div className="works-main">
          {worksList.map((item, index) => (
            <div
              className="works-main-item"
              key={index}
              onClick={() => open(item.path)}
              style={{ animation: `X ${0.5 + index / 10}s ease forwards` }}
            >
              <Empty />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
