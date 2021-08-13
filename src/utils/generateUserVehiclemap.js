export function unitVehicleMapping (data){
	const {vehicleAllotmentChart, vehicleDetail} = data.data
	
  let finalData = {
		"type":"Vehicle",
		"text":`${vehicleDetail[0].reg_number}`,
		"positionName":`${vehicleDetail[0].vehicle_brand} - ${vehicleDetail[0].vehicle_model} - ${vehicleDetail[0].vehicle_mfc_year}`,
		"children":[{
			"type":"driver",
			"text":`${vehicleDetail[0].assignee_name}`,
			"imageUrl":"./assets/police-icon.png",
			"positionName":"Driver",
		}]
	}
  
  for(var i = vehicleAllotmentChart.length - 1; i >= 0; i-- ){
		finalData = {
			"type":"division",
			"text":vehicleAllotmentChart[i].police_unit_name,
			"positionName":"",
			"children":[finalData]
      	}
  }
  
  return finalData
}