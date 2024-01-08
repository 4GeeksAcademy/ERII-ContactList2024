import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Home = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();
	useEffect(() => {
		actions.loadContacts();
	}, []);

	return (
		<div className="container">
			<div className="contacts">
				<ul>
					{store.contacts.map((contact, index) => {
						return (
							<li className="row contact" key={contact.id}>
								<div className="col-md-3 photo">
									<img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" />
								</div>
								<div className="col-md-7 col-10">
									<div className="name">
										{contact.full_name}
									</div>
									<div className="address">
										{contact.address}
									</div>
									<div className="phone">
										{contact.phone}
									</div>
									<div className="email">
										{contact.email}
									</div>
								</div>
								<div className="col-md-2 col-2 ">
									<button
										className="btn"
										data-bs-toggle="modal" data-bs-target="#exampleModal"
										type="button"
										onClick={() => {
											actions.contactToDelete(contact);
										}}
									>
										<i className="fa-solid fa-trash-can"></i>
									</button>
									<button
										className="btn"
										type="button"
										onClick={() => {
											actions.seeContact(contact);
											navigate('/editForm')
										}}
									>
										<i className="fa-solid fa-pencil" />
									</button>

									<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-body">
													Are you sure you want delete {store.contactToDelete.full_name} ?
												</div>
												<div className="modal-footer">
													<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
													<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
														actions.deleteContact(store.contactToDelete.id)
													}}>Delete</button>
												</div>
											</div>
										</div>
									</div>






								</div>
							</li>
						)
					})}
				</ul>
			</div>

		</div>
	);
};