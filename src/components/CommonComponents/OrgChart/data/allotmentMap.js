const DATA = {
	"data":{
		"type":"user",
		"text":"Pratap Reddy",
		"imageUrl":"./assets/police-icon.png",
		"fleetCount":"5000",
		"positionName":"ADGP",
		"children":[
			{
				"type":"division",
				"text":"Comissioner of Police, Bangalore City",
				"fleetCount":"800",
				"positionName":"",
				"children":[
					{
						"type":"division",
						"text":"Deputy Comissioner of Police, North",
						"fleetCount":"210",
						"positionName":"",
						"children":[
							{
								"type":"division",
								"text":"Assistant Comissioner of Police, Viveknagar",
								"fleetCount":"400",
								"positionName":"",
								"children":[
									{
										"type":"division",
										"text":"Inspector MT - Police Station, Cubbon Park",
										"fleetCount":"400",
										"positionName":"",
										"children":[
											{
												"type":"division",
												"text":"Officers",
												"fleetCount":"20",
												"positionName":"",
												"children":[
													{
														"type":"vehicle",
														"text":"Toyota Innova",
														"fleetCount":"5",
														"positionName":"Alloted Vehicles",
														"children":[
															{
																"type":"vehicle",
																"text":"KA9866453",
																"fleetCount":"1",
																"positionName":"Car",
																"children":[
																	{
																		"type":"driver",
																		"text":"Rakesh K",
																		"imageUrl":"./assets/police-icon.png",
																		"positionName":"Driver",
																		"fleetCount":"1",
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
};

export default DATA; 