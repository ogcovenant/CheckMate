import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react"

interface ContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

const rightSideBarContext = createContext<ContextValue>({
  isOpen: false,
  setIsOpen: () => {},
  type: "task",
  setType: () => {}
});


export const useRightSideBar = () => {
  return useContext(rightSideBarContext)
}

export const RightSideDIsplayProvider = ({ children } : { children : ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [ type, setType ] = useState("task");

  return (
    <>
      <rightSideBarContext.Provider value={{
        isOpen,
        setIsOpen,
        setType,
        type
      }}>
        {children}
      </rightSideBarContext.Provider>
    </>
  )
}

export default rightSideBarContext