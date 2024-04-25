import { Box, Text } from "@chakra-ui/react"

const StickyNote = ({ title, content, background } : {title:string, content:string, background:string} ) => {
  return (
    <>
      <Box backgroundColor={`${background}`} p={3} borderRadius={10} height={200} width={220}>
        <Text fontSize={"2xl"} fontWeight={700}>{title}</Text>
        <Box fontSize={14}>
          {content}
        </Box>
      </Box>
    </>
  )
}

export default StickyNote