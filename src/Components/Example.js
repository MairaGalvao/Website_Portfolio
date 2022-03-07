import React from 'react'
import { useMediaQuery } from 'react-responsive'

export function Example (){
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <Box>
    <Typography variant="h1">Device Test!</Typography>
    {isDesktopOrLaptop && <Typography>You are a desktop or laptop<Typography>}
    {isBigScreen && <Typography>You  have a huge screen<Typography>}
    {isTabletOrMobile && <Typography>You are a tablet or mobile phone<Typography>}
    <Typography>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation<Typography>
    {isRetina && <Typography>You are retina<Typography>}
  </Box>
}

