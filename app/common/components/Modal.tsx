import { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import ReactDOM from "react-dom"

import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: auto;
`

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  min-width: 630px;
  width: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  pointer-events: auto;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CloseIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 6px;
  color: ${({ theme }) => theme.colors.Text.placeholder};
`

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title = "" }) => {
  const mouseDownTargetRef = useRef<EventTarget | null>(null)

  // 모달 밖 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <>
      <Overlay
        onMouseDown={(e) => {
          mouseDownTargetRef.current = e.target
        }}
        onMouseUp={(e) => {
          if (
            mouseDownTargetRef.current === e.currentTarget &&
            e.target === e.currentTarget
          ) {
            onClose()
          }
        }}
      >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <HeaderWrapper>
            <Typography type="BigBold">{title}</Typography>
            <CloseIconWrapper>
              <Icon onClick={onClose} size={20}>
                <CloseIcon />
              </Icon>
            </CloseIconWrapper>
          </HeaderWrapper>
          {children}
        </ModalContainer>
      </Overlay>
      ,
    </>,
    document.body, // 모달을 루트 DOM에 렌더링
  )
}

export default Modal
