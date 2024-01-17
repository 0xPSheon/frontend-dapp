// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const MintLoadingSkeleton = () => {
  // ** Renders
  const renderMintCard = () => {
    return (
      <Card>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7}>
            <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                <Skeleton />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='rounded' height={80} />
              </Typography>
              <Divider sx={{ my: theme => `${theme.spacing(7)} !important` }} />
              <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>
                  <Skeleton variant='text' />
                  <Skeleton variant='text' />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Skeleton variant='text' />
                  <Skeleton variant='text' />
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid
            item
            sm={5}
            xs={12}
            sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
          >
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'action.hover'
              }}
            >
              <Stack spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon icon='cryptocurrency-color:eth' />
                  <Typography variant='h3' sx={{ pl: 2, lineHeight: 0.9334, fontSize: '3.75rem !important' }}>
                    <Skeleton variant='text' width={96} />
                  </Typography>
                </Box>
                <Box>
                  <Skeleton variant='text' width={200} />
                  <Skeleton variant='text' width={200} />
                </Box>
                <Typography variant='body2' sx={{ mb: 7, display: 'flex', flexDirection: 'column' }}></Typography>

                <Box>
                  <Skeleton variant='rounded' height='2rem' />
                </Box>
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    )
  }

  return (
    <Grid container spacing={6}>
      {Array.from(Array(3).keys()).map(index => (
        <Grid key={`mint-card-skeleton-${index}`} item xs={12}>
          {renderMintCard()}
        </Grid>
      ))}
    </Grid>
  )
}

export default MintLoadingSkeleton
