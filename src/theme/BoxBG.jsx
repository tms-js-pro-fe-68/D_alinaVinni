
export default function BoxBG(props){

    return(
            <div  className='BoxBG' style={{
                background: 'black',
                height: '100%',
                width: '100vw',
                flexDirection: 'column',
                marginTop: '0px',
                zIndex: '-20',
                position: 'absolute',
            }}>{props.children}</div> 

    )
}
