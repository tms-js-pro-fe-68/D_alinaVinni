import { Box } from "@mui/material";

export default function BoxBG({sx, ...otherProps}){

    return(
            <Box  className='BoxBG' 
            sx={{
                background: 'black',
                width: '100vw',
                flexDirection: 'column',
                marginTop: '0px',
                zIndex: '-20',
                position: 'absolute',
                ...sx,
            }}{...otherProps}/>

    )
}
