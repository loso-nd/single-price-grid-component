import React from 'react'
import { Button } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

function Subscription() {
    return (
        <div className="sub-container">
            <div className="sub-details">
                <div className="subscription-details"> 
                    <h3> Montly Subscription</h3>
                    <div>
                        <p className="price">
                            <span> $29</span> per month
                            <br/>
                            {/* <span className="access">Full access for less than $1 a day</span> */}
                        </p>
                        <p className="access">
                            Full access for less than $1 a day
                        </p>
                        <Button color='olive' size='massive' style={{minWidth: '90%', maxWidth: '90%', borderRadius: '8px', fontsize: '30px'}}> Sign Up</Button>
                    </div>
                </div>
            
                <div className="why-us"> 
                <h3> Why Us</h3>
                    <div className="list">
                        <List>
                            <List.Item>Tutorials by industry experts</List.Item>
                            <List.Item>Peer & expert code reveiw</List.Item>
                            <List.Item>Codding exercises</List.Item>
                            <List.Item>Access to our GitHub repos</List.Item>
                            <List.Item>Community forum</List.Item>
                            <List.Item>Coding exercises</List.Item>
                        </List>
                    </div>
                </div>         
            </div>

        </div>
    )
}

export default Subscription
