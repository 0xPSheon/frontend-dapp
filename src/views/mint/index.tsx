// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Constant Imports
import SwitchNetworkModal from 'src/views/shared/SwitchNetworkModal'

// ** Types
import { ProjectType } from 'src/types/api/projectTypes'

interface Props {
  initProjectEntity: ProjectType
}

const MintMainSection = (props: Props) => {
  // ** Props
  const { initProjectEntity } = props

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Mint' />
          <CardContent>123</CardContent>
        </Card>
      </Grid>

      <SwitchNetworkModal initProjectEntity={initProjectEntity} />
    </Grid>
  )
}

export default MintMainSection
