import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {},
    headerBanner: {},
    headerAppBar: {
        padding: theme.spacing(1),
        alignContent: 'center',
    },
    footer: {},
    footerAppBar: {
        padding: theme.spacing(1),
        alignContent: 'center',
    },
    container: {
        padding: theme.spacing(2),
    },
    page: {
        width: '100%',
        minHeight: 500,
    }
}));
