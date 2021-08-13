import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import _ from 'lodash';
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"
import Autocomplete from '@material-ui/lab/Autocomplete';


// Destructure props

const Details = ({
	sourceDestinationCities,
	handleChange,
	errorFixed,	
	handleChangeAutoComplete,
	values: { source_city, destination_city, travel_date, return_date },
	filedError,
	isError,
	saveFlightsSearch,
}) => {

	const defaultPropsVehicleId = {
		options: sourceDestinationCities,
		getOptionLabel: (option) => option.name
	};

	// Check if all values are not empty
	const isEmpty =
		errorFixed &&
		(source_city > 0 ||
		destination_city > 0 ||
		travel_date.toString().length > 0 ||
		return_date.toString().length > 0)

		const onTagsChange = input => (event, values) => {
			const value = _.get(values, 'name', "")
			if (input) {
				handleChangeAutoComplete(input, value)
			}
		}
	return (
		<Fragment>
			<Grid container spacing={4} xs={12} sm={10} justify="center" noValidate>
				<Grid item xs={12} sm={6}>
					<InputLabel className="customInputLableForAutoComplete" htmlFor="vehicleModel" >Source City *</InputLabel>
					<Autocomplete
						{...defaultPropsVehicleId}
						id="source_city"
						debug
						className="customAutoComplete"
						onChange={onTagsChange("source_city")}
						value={source_city === "" ? null :
							sourceDestinationCities.filter(obj => obj.name === source_city)[0]
						}
						renderInput={(params) => <TextField
							className="customInputBoxForAutoComplete"
							{...params}
							placeholder="Source City"
							margin="normal"
							error={filedError.source_city !== ""}
							helperText={
								filedError.source_city !== "" ? `${filedError.source_city}` : ""
							}
							required
						/>}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputLabel className="customInputLableForAutoComplete" htmlFor="vehicleModel" >Destination City *</InputLabel>
					<Autocomplete
						{...defaultPropsVehicleId}
						id="destination_city"
						debug
						className="customAutoComplete"
						onChange={onTagsChange("destination_city")}
						value={destination_city === "" ? null :
							sourceDestinationCities.filter(obj => obj.id === destination_city)[0]
						}
						renderInput={(params) => <TextField
							className="customInputBoxForAutoComplete"
							{...params}
							placeholder="Destination City"
							margin="normal"
							error={filedError.destination_city !== ""}
							helperText={
								filedError.destination_city !== "" ? `${filedError.destination_city}` : ""
							}
							required
						/>
					}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Travel Date"
						name="travel_date"
						InputLabelProps={{
							shrink: true
						}}
						placeholder="Travel Date"
						defaultValue={travel_date}
						onChange={handleChange("travel_date")}
						margin="normal"
						error={filedError.travel_date !== ""}
						type="date"
						helperText={
							filedError.travel_date !== "" ? `${filedError.travel_date}` : ""
						}
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Return Date"
						name="return_date"
						InputLabelProps={{
							shrink: true
						}}
						placeholder="Return Date"
						defaultValue={return_date}
						onChange={handleChange("return_date")}
						margin="normal"
						error={filedError.return_date !== ""}
						type="date"
						helperText={
							filedError.return_date !== "" ? `${filedError.return_date}` : ""
						}
						required
					/>
				</Grid>
			</Grid>
			<div
				style={{ display: "flex", marginTop: 50, justifyContent: "flex-end", width: "65%" }}
			>
				<Button
					variant="contained"
					disabled={!isEmpty || isError}
					color="primary"
					onClick={saveFlightsSearch}
				>
					Search
				</Button>

			</div>
		</Fragment>
	)
}

export default Details
