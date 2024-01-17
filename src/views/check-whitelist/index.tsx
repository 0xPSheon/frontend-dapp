// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// ** Api Imports
import { useCheckWhitelistQuery } from 'src/store/api/whitelist'

// ** Actions
import { showWalletConnectorDialog } from 'src/store/dialog/walletConnectorSlice'

// ** Types
import type { AppDispatch } from 'src/store'

const CheckWhitelistSection = () => {
  // ** Hooks
  const auth = useAuth()
  const dispatch = useDispatch<AppDispatch>()
  const { data: freeMintCheck, isLoading: isFreMintCheckQueryLoading } = useCheckWhitelistQuery(
    {
      address: auth.user.address,
      phase: 'Free Mint'
    },
    {
      skip: auth.user.address === '0x0'
    }
  )

  // ** Logics
  const handleOpenConnectWalletModal = () => {
    dispatch(showWalletConnectorDialog())
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='檢查錢包是否在白名單內' />
          <CardContent>
            {auth.user.role === 'Public' ? (
              <Stack spacing={2}>
                <Typography>
                  請連接錢包以確認您的錢包是否在白名單內，如果您的錢包在白名單內，您將可以進行鑄造。
                </Typography>
                <Box>
                  <Button variant='contained' onClick={handleOpenConnectWalletModal}>
                    連接錢包
                  </Button>
                </Box>
              </Stack>
            ) : (
              <Stack spacing={2}>
                <Typography>{`錢包：${auth.user.address}`}</Typography>
                {isFreMintCheckQueryLoading ? (
                  <Skeleton variant='text' width='30%' />
                ) : (
                  <Typography>{`免費鑄造階段： ${freeMintCheck?.message === 'ok' ? '✅' : '❌'}`}</Typography>
                )}
                <Typography>公售銷售階段： ✅</Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CheckWhitelistSection
