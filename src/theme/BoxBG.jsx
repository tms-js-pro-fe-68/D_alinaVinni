
export default function BoxBG(props){

    return(
            <div  className='BoxBG' style={{
                background: 'black',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0px',
                zIndex: '-20',
                position: 'absolute',
            }}>{props.children}</div> 

    )
}
