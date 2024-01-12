// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>{`© ${new Date().getFullYear()}`}</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
        <LinkStyled target='_blank' href='https://wagmi.sh/'>
          wagmi
        </LinkStyled>
        <LinkStyled target='_blank' href='https://mui.com/material-ui/getting-started/'>
          Mui
        </LinkStyled>
        <LinkStyled target='_blank' href='https://nextjs.org/'>
          Next.js
        </LinkStyled>
      </Box>
    </Box>
  )
}

export default FooterContent
