import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react"

interface ContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  test: () => void
}

const rightSideBarContext = createContext<ContextValue>({
  isOpen: true,
  setIsOpen: () => {},
  test: () => {}
});


export const useRightSideBar = ()=>{
  return useContext(rightSideBarContext)
}

export const RightSideDIsplayProvider = ({ children } : { children : ReactNode }) => {

  const [isOpen, setIsOpen] = useState(true);

  const test = () => {
    console.log("Hello")
  }

  return (
    <>
      <rightSideBarContext.Provider value={{
        isOpen,
        setIsOpen,
        test
      }}>
        {children}
      </rightSideBarContext.Provider>
    </>
  )
}

export default rightSideBarContext