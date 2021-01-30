/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `light`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `light`)
  }

  return (
    <Box as="footer" variant="footer">
    </Box>
  )
}

export default Footer
