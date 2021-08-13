import React from "react";
import Dropzone from 'react-dropzone'
import CSVReader from 'react-csv-reader';
import './styles.css'

class DragAndDrop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			csvData:[],
			csvUploaded:[]
		};
	}
	
	/**
   * get CSV data here
   * the data will be in array
   */

  handleUploadCsv = (data, filename) => {
		let fileExist = this.state.csvUploaded.filter(
			file => file.filename === filename
		).length;
		if (fileExist === 0) {
			this.validateUploadedCsv(data, filename);
		} else {
			console.log('This file is already Uploaded: ' + filename)
			alert('This file is already Uploaded: ' + filename);
		}
	};
	/**
   	* csv file upload error handler
   	*/
	handleUploadCsvError = data => {
		alert('Something went wrong while uploading the file', data);
	};
	
	/**
   * check for the existance of file in the state
   */
  validateUploadedCsv = (data, filename) => {
    if (typeof Array.prototype.reIndexOf === 'undefined') {
      Array.prototype.reIndexOf = function(rx) {
        for (var i in this) {
          if (this[i].toString().match(rx)) {
            return i;
          }
        }
        return -1;
      };
    }
    // var indexOfItemCode = data[0].reIndexOf(/Item Code/);
    var indexOfItemCode = data.length;
    if (indexOfItemCode > 0) {
      let parsedItems = this.pushItemRow(data);
      this.setState({
        csvData: [...parsedItems, ...this.state.csvData],
        csvUploaded: [
          {
            filename: filename,
            status: 'valid',
            itemCount: parsedItems.length
          },
          ...this.state.csvUploaded
        ]
      });
	  this.props.onDrop(this.state)
      return true;
    } else {
      this.setState({
        csvUploaded: [
          {
            filename: filename,
            status: 'invalid',
            itemCount: 'invalid'
          },
          ...this.state.csvUploaded
        ]
      });
	  this.props.onDrop(this.state)
      return false;
    }
  };
  
  /**
   * push RFID tag field to the array
   */
  pushItemRow = (data) => {
    let csvCombinedData = [];
    data.forEach(tag => {
      csvCombinedData.push(tag);
    });
    csvCombinedData.splice(0, 1);
    return csvCombinedData;
  };


	render() {
		return (
			<CSVReader
              parserOptions="{}"
              cssClass="csv-reader-input"
              label="Drag and drop file here"
              onFileLoaded={this.handleUploadCsv}
              onError={this.handleUploadCsvError}
              inputId="CSV"
            />
		);
	}
}

export default DragAndDrop


