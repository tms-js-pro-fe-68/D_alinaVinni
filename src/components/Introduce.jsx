import { Box, Typography } from "@mui/material";


export default function Introduce(){
    return(
    <Box sx={{display:{xs: 'column', lg:'flex'},
    mt:'15px'}}>
        <Box container 
        sx={{width:{lg:'50%', xs:'100%'},
        height: '450px',
        ml:{ xs: '0px', lg: 'auto'},
        mr:{xs: '0px' ,lg:'auto'},
        display:'flex'
        }}>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./keqing-genshin-impact.gif')`,
            zIndex: '-9',
            height: '300px',
            width: {xs:'350px', lg:'500px', sm:'450px'},
            ml:{lg:'100px', xs:'30px', sm:'40px'},
            borderRadius: '30px'
            }}/>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./b4564cc739c391a0f182c2d70bfef416.gif')`,
            zIndex: '-7',
            height: '220px',
            width: {xs:'310px', lg:'450px', sm:'390px'},
            mt:{xs:'330px', lg: '230px', sm:'320px'},
            ml:{xs:'-250px', lg:'-130px', sm:'-250px'},
            borderRadius: '30px'
            }}/>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./animesher.com_nge-neon-genesis-evangelion-evangelion-1329234.gif')`,
            zIndex: '-8',
            height: {xs:'200px', sm:'270px'},
            width: {xs: '230px', lg:'480px', sm:'300px'},
            mt: {xs:'170px', lg:'15px', sm:'80px'},
            ml:{xs:'-160px', lg:'-240px', sm:'-200px'},
            borderRadius: '30px'
            }}/>
        </Box>
        <Box sx={{width: '50%', 
        height:'100%',
        ml:{xs: '5%', lg:'15%'},
        marginTop:'100px',
        display:{xs:'none', lg:'block'}}}>
            <Typography
            classes={{root: 'headingFont'}}
            sx={{
                fontSize: '48px',
                width: {xs:'90%', lg:'70%'}}}>
                    Discover, collect, and
                    sell extraordinary
            </Typography>
            <Typography 
            classes={{root: 'headingFont'}}
            sx={{color: '#FD1C68', 
            marginTop: '-10px',
            fontSize: '48px',
            width: {xs:'90%', lg:'70%'}}}>NFTs</Typography>
        </Box>
        <Box
        sx={{width:'100%',
        mt:16,
        display:{xs:'block', lg:'none'}}}>
            <Typography
            classes={{root: 'headingFont'}}
            sx={{
                fontSize: '48px',
                width: '100%',
                color: '#FD1C68',
                textAlign: 'center'}}>NFT's</Typography>
        </Box>
    </Box>
    )
}