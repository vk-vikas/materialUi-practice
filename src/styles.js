import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'beige',
        padding: theme.spacing(6,0)
    },
    buttonGroup: {
        paddingTop: '20px'
    }
}))

export default useStyles;