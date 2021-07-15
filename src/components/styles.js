
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "100%",
        // height: "100%",
    },
    logoBar: {
        display: 'flex',
        width: '100px',
        height: '100px',
    },
    centerContainer: {
        flexGrow: 1,
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    leftContainer: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    errorContainer: {
        flexGrow: 1,
        paddingLeft: theme.spacing(4),
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    rightContainer: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    centerContainerX: {
        border: "1px solid grey",
        borderColor: 'green',
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    mainHeader: {
        textAlign: 'center',
    },
    normalText: {
        fontWeight: '400',
        textAlign: 'left',
    },
    submitButton:{
        width: "100%",
        height: "50px",
    },
    tableContainer: {
        flexGrow: 1,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",        
        // border: "1px solid green",
    },
    table:{
        backgroundColor: '#202020',
        // backgroundColor: '#707070',
    },
    cell :{
        color: "white !important",
    },
    cellText: {
        fontWeight: 500,
    },
    tableHeader :{
        fontWeight: 300,
    },
    
}));

export default useStyles;