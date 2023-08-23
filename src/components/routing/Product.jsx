import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { Grid, Image, Input, Button } from 'semantic-ui-react'

function ProductPage() {
    return (<>
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Input
                        icon={{ name: 'search', circular: true, link: true }}
                        placeholder='Search...'
                    />
                </Grid.Column>
                <Grid.Column width={4}>
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink to='primary' className="nav-link" >Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='secondary' className="nav-link " >secondary</NavLink>
                            </li>
                        </ul>
                    </div>
                </Grid.Column>

            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Outlet />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>);
}

export default ProductPage;