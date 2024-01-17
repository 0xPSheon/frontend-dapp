// ** React Imports
import { Ref, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Wagmi Imports
import { useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'

// ** Util Imports
import { getChainInstance } from 'src/utils'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { ProjectType } from 'src/types/api/projectTypes'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

interface Props {
  initProjectEntity: ProjectType
}

const SwitchNetworkModal = (props: Props) => {
  // ** props
  const { initProjectEntity } = props

  // ** Hooks
  const { user, disconnectWallet } = useAuth()
  const { chain } = useNetwork()
  const { isLoading: isSwitchLoading, switchNetwork } = useSwitchNetwork()
  const { disconnect } = useDisconnect()

  // ** Vars
  const chainInstance = getChainInstance(initProjectEntity!.useChainName!)

  // ** Logics
  const handleDisconnect = () => {
    disconnect()

    disconnectWallet()
  }

  return (
    <Dialog
      fullWidth
      open={user.role !== 'Public' && chain?.name !== chainInstance.name}
      maxWidth='sm'
      scroll='body'
      TransitionComponent={Transition}
    >
      <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 3, fontWeight: '700' }}>
                切換當前網路
              </Typography>
              <Typography variant='body1'>{`我們的合約運行在以太坊 ${chainInstance.name} 上`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {switchNetwork ? (
              <LoadingButton
                disabled={isSwitchLoading}
                loading={isSwitchLoading}
                variant='contained'
                onClick={() => switchNetwork(chainInstance.id)}
              >
                <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                  切換
                </Typography>
              </LoadingButton>
            ) : (
              <Typography variant='subtitle2' sx={{ fontWeight: '700' }}>
                在您的錢包里切換以太坊網絡
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant='subtitle2' sx={{ mx: 4, fontWeight: '700' }}>
                OR
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleDisconnect} variant='text' size='small' color='warning'>
              登出
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' textAlign='center'>
              我們僅檢測您的錢包地址以獲取您的資產。 我們不會訪問它或用它執行任何鏈上操作。
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default SwitchNetworkModal
