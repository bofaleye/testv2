import React, { Fragment, FunctionComponent } from 'react';
import { Button, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Contact } from '../models/contact';
import UserAvatar from './UserAvatar';

import './style.css';

const SearchContactCard: FunctionComponent<{ contact: Contact }> = ({ contact }) => {
    return (<Fragment>
        <div style={{
            position: 'relative'
        }}>
        <Card style={{
            maxWidth: '366px',
            height: '147px',
            marginTop: '25px',
            borderRadius: '8px',
            overflow: 'visible',
        }}>
            <div className="card-inner">
                <div className="avatar-container">
                    <UserAvatar
                        url={contact.profileImage}
                        trust={contact.trust}
                    />
                </div>
                <div className='header-ctn'>
                    <h4 className="header-txt">Gina Snelly</h4>
                    <label className='header-des'>nessuna connessione</label>
                </div>
                <div>
                    <div>
                        <Button
                            style={{
                                height: '40px',
                                width: '40px',
                                backgroundColor: '#EAE8FE'
                            }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            startIcon={<AddIcon
                                fontSize='large'
                                style={{
                                    width: '100%',
                                    textAlign: 'center'
                                }} />}
                        />
                    </div>
                </div>
            </div>
            <div className="lower-card">
                <label>Sta già condividendo <strong className="str-decor">Disney Plus</strong></label>
            </div>
        </Card>
        </div>
    </Fragment>)
}

export default SearchContactCard;