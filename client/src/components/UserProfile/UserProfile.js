import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Button from '../../elements/CustomButton/CustomButton';
import avatar from '../../assets/img/faces/face-3.jpg';
import Sidebar from '../Sidebar/Sidebar';
import { FormInputs } from '../FormInputs/FormInputs';
import { Card } from '../Card/Card';
import { UserCard } from '../UserCard/UserCard';

class UserProfile extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Sidebar {...this.props} />
			<div id='main-panel' className='main-panel'>
			<Grid fluid>
					<Row>
						<Col md={8}>
							<Card title='Edit Profile' content={
                                    <form>
                                        <FormInputs
                                            ncols = {['col-md-6' , 'col-md-6' , ]}
                                            proprieties = {[
                                                {
                                                 label : 'Username',
                                                 type : 'text',
                                                 bsClass : 'form-control',
                                                 placeholder : 'Username',
                                                 defaultValue : 'mike1'
                                                },
                                                {
                                                 label : 'Email address',
                                                 type : 'email',
                                                 bsClass : 'form-control',
                                                 placeholder : 'mike1@mike1.com'
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {['col-md-6' , 'col-md-6']}
                                            proprieties = {[
                                                {
                                                 label : 'First name',
                                                 type : 'text',
                                                 bsClass : 'form-control',
                                                 placeholder : 'First name',
                                                 defaultValue : 'Mike'
                                                },
                                                {
                                                 label : 'Last name',
                                                 type : 'text',
                                                 bsClass : 'form-control',
                                                 placeholder : 'Last name',
                                                 defaultValue : 'Ignaczak'
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {['col-md-12']}
                                            proprieties = {[
                                                {
                                                    label : 'Address',
                                                    type : 'text',
                                                    bsClass : 'form-control',
                                                    placeholder : 'Home Adress',
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {['col-md-4','col-md-4','col-md-4']}
                                            proprieties = {[
                                                {
                                                    label : 'City',
                                                    type : 'text',
                                                    bsClass : 'form-control',
                                                    placeholder : 'City',
                                                },
                                                {
                                                    label : 'Country',
                                                    type : 'text',
                                                    bsClass : 'form-control',
                                                    placeholder : 'Country',
                                                    defaultValue : 'United States'
                                                },
                                                {
                                                    label : 'Postal Code',
                                                    type : 'number',
                                                    bsClass : 'form-control',
                                                    placeholder : 'ZIP Code'
                                                }
                                            ]}
                                        />

                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId='formControlsTextarea'>
                                                    <ControlLabel>Enter Your Crutch Words Here</ControlLabel>
                                                    <FormControl rows='5' componentClass='textarea' bsClass='form-control' placeholder='Please seperate each word by a semi colon (ex: word; word; word)'/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle='info'
                                            pullRight
                                            fill
                                            type='submit'
                                        >
                                            Update Profile
                                        </Button>
                                        <div className='clearfix'></div>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                bgImage='https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'
                                avatar={avatar}
                                name='Mike Ignaczak'
                                userName='mike1'
                                description={
                                    <span>
                                        'Like'
                                        <br />
                                        'Um'
                                        <br />
										'Essentially'
										<br />
										'So'
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className='fa fa-facebook-square'></i></Button>
                                        <Button simple><i className='fa fa-twitter'></i></Button>
                                        <Button simple><i className='fa fa-google-plus-square'></i></Button>
                                    </div>
                                }
                            />
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default UserProfile;