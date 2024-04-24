import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react"

interface ContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  test: () => void
}

const rightSideBarContext = createContext<ContextValue>({
  isOpen: false,
  setIsOpen: () => {},
  test: () => {}
});


export const useRightSideBar = ()=>{
  return useContext(rightSideBarContext)
}

export const RightSideDIsplayProvider = ({ children } : { children : ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <rightSideBarContext.Provider value={{
        isOpen,
        setIsOpen,
      }}>
        {children}
      </rightSideBarContext.Provider>
    </>
  )
}

export default rightSideBarContext