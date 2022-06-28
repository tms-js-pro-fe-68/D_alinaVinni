import { Box, Typography } from "@mui/material";


export default function Introduce(){
    return(
    <Box sx={{display:{xs: 'column', md:'flex'},
    mt:'15px'}}>
        <Box container 
        sx={{width:{md:'50%', xs:'100%'},
        height: '450px',
        ml:{ xs: '0px', md: 'auto'},
        mr:{xs: '0px' ,md:'auto'},
        display:'flex'
        }}>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./keqing-genshin-impact.gif')`,
            zIndex: '-9',
            height: '300px',
            width: {xs:'350px', md:'500px'},
            marginLeft:{md:'100px', xs:'60px'},
            borderRadius: '30px'
            }}/>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./b4564cc739c391a0f182c2d70bfef416.gif')`,
            zIndex: '-7',
            height: '220px',
            width: {xs:'310px', md:'450px'},
            marginTop:{xs:'330px', md: '230px'},
            ml:{xs:'-320px', md:'-130px'},
            borderRadius: '30px'
            }}/>
            <Box
            className='forGifsIntro animation_light'
            sx={{background: `center no-repeat url('./animesher.com_nge-neon-genesis-evangelion-evangelion-1329234.gif')`,
            zIndex: '-8',
            height: '270px',
            width: {xs: '350px', md:'480px'},
            mt: {xs:'130px', md:'15px'},
            ml:{xs:'-170px', md:'-240px'},
            borderRadius: '30px'
            }}/>
        </Box>
        <Box sx={{width: '50%', 
        height:'100%',
        ml:{xs: '5%', md:'15%'},
        marginTop:'100px',
        display:{xs:'none', md:'block'}}}>
            <Typography
            classes={{root: 'headingFont'}}
            sx={{
                fontSize: '48px',
                width: {xs:'90%', md:'70%'}}}>
                    Discover, collect, and
                    sell extraordinary
            </Typography>
            <Typography 
            classes={{root: 'headingFont'}}
            sx={{color: '#FD1C68', 
            marginTop: '-10px',
            fontSize: '48px',
            width: {xs:'90%', md:'70%'}}}>NFTs</Typography>
        </Box>
        <Box
        sx={{width:'100%',
        mt:16,
        display:{xs:'block', md:'none'}}}>
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