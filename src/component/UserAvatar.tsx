import React, { Fragment, FunctionComponent } from 'react';
import { Avatar, CircularProgress, Badge } from '@material-ui/core';

import './style.css'


const UserAvatar: FunctionComponent<{ url: string, trust: number }> = ({ url, trust }) => {
    
    return (
    <Fragment>
        <div>
            <Badge style={{
                position: 'absolute',
                top: '-2%',
                zIndex: 6,
                left: '50px',
            }} badgeContent={trust} 
            color="primary" overlap='circle' />
            <CircularProgress style={{
                position: 'absolute',
                width: '102px',
                height: '102px',
                top: '-10px',
                left: '-1px',
                zIndex: 5,
                background: 'linear-gradient:(188.8deg, #FA5D75 6.7%, rgba(120, 100, 246, 0.67) 65.76%)',
                border: '1px solid #FFFFFF',
                borderRadius: '10px'
                // transform: rotate(-90deg);
            }} variant="determinate" value={trust} />
            <Avatar style={{
                width: '89px',
                height: '89px',
                position: 'absolute',
                zIndex: 3,
                top: 0,
                left: '5px'
            }} className="avatar" alt="profile picture" src={url} variant='circular' />
        </div>
    </Fragment>)
}

export default UserAvatar;