
import React, { useState, useRef } from 'react'
import { Link,  } from 'react-router-dom'
import axios from 'axios'

import '../Componant Style/addProduct.css'

import addIcon from '../assets/addIcon.svg'
import imageAdd from '../assets/imageAdd.svg'
import remove from '../assets/remove.svg'

export default function AddPrinter() {

  const base64Images = [];

  const fileInputRef = useRef(null);
  
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [viewImages, setViewImages] = useState(false)

  const [promo, setPromo] = useState(false)

  const [allData, setAllData] = useState({
    Brand:'',
    Model:'',
    Type:'',
    FicheTechnique:'',
    Prix:'',
    Poursantage:'',
    Description:'',
  })

  const param = {
    info:allData,
    image:selectedFiles
  }

  if(selectedFiles.length>0 && !viewImages){
    setViewImages(true)
  }else if(selectedFiles.length===0 && viewImages){
    setViewImages(false)
  }






  //Function to handling input file changing
  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length + selectedFiles.length < 6){
      if (files.length > 0 && selectedFiles.length === 0) {
        const fileList = Array.from(files);
        setSelectedFiles(fileList);
      }else if (files.length > 0 && selectedFiles.length > 0){
        const fileList = Array.from(files);
        const updatedSelectedFiles = selectedFiles.concat(fileList);
        setSelectedFiles(updatedSelectedFiles)
      }
    }else{
      alert("max is 5 pictures" )
    }
  };






  //Funciton that convert arrayfile to arrayByte
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        resolve(event.target.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }




  // Function to convert all files to bytes
  async function convertImagesToBase64(imageFiles) {

  
    for (const file of imageFiles) {
      try {
        const base64Image = await convertToBase64(file);
        base64Images.push(base64Image);
      } catch (error) {
        console.error('Error converting image to Base64:', error);
      }
    }
  
    return base64Images;
  }




  //Function to handle the delete image button Clicked
  const handleButtonClick = (index) => {

  const updatedFiles = [...selectedFiles];
  updatedFiles.splice(index, 1);
  setSelectedFiles(updatedFiles);

  };




  // Function fon handling the input text changing
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAllData((prevValues) => ({
        ...prevValues,
        [name]: value,
    }));

    allData.Poursantage && allData.Prix ? setPromo(true):setPromo(false)
  };





  //Function that hundle when the button send data in clicked
  const handleClick = (e) => { 

    let isDuplicat;
    e.preventDefault();
    

    if(allData.Poursantage.trim()==="" || allData.Brand.trim()==="" || allData.Description.trim()==="" || allData.FicheTechnique.trim()==="" || allData.Type.trim()==="" || allData.Prix.trim()==="" || allData.Model.trim()===""){
      alert("Remplie tous les champs")
    }else if(selectedFiles.length===0){
      alert("Selectionner les images")
    }else{
      convertImagesToBase64(selectedFiles).then((base64Images) => {
        isDuplicat = hasDuplicates(base64Images)
        if(isDuplicat ){
          alert ("les photos sont dupliquées");
        }else{
          axios.post('http://localhost:8000/insertLaptop', param)
          .then((response) => {
            // Handle the response from the server
            console.log('Response:', response.data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
          });
        }
      });
    }
  }






  // Function to check if two byte arrays are equal
  const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  };




  // Function to check for duplicate byte arrays in the array
  const hasDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (areArraysEqual(array[i], array[j])) {
          return true; // Found duplicates
        }
      }
    }
    return false; 
  };



  return (
    <div className='addContainerDashboard'>
    <div className='headerAddProduct'>
      <p id='addProductTxt'>Add Product</p>
      <div className='headerAddProductCA'>
        <Link to='/Dashboard/Dashboard' id='textGris' >Cancel</Link>
        <div onClick={handleClick}>
          <p>Add</p>
          <img src={addIcon} alt=''/>
        </div>
      </div>
    </div>

    <div className='inputsAddProduct'>
  

      <div className='inputImages'>
      
        <div className={`${viewImages ? `viewImage` : `inputAdd`}`} >
          <img  src={imageAdd}  alt=''/>
          <p>Add images from your device <strong onClick={() => fileInputRef.current.click()}>Browse</strong> </p>
          <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          />
        </div>
        
        <div className={`${viewImages ? `imagesProducts` : `viewImage`}`}>
            {selectedFiles.map((file, index) => (
              <div key={index} className='imageContainerInputs'>
                <div className='inputFile'>
                  <img
                    className='imageProduct'
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Selected  ${index}`}
                  />
                </div>
                <div className='addDelete'>
                  <img src={remove} alt='' className='delete' onClick={() => handleButtonClick(index)}/>
                  <hr/>
                  <p className='add' onClick={() => fileInputRef.current.click()}>+</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='inputContainerAdd'>

        <div className='elementsLigne'>
          <div className='imputContainer'>
            <p className='textInput'>Brand</p>
            <input placeholder='Ex: Asus' type='text' name='Brand' value={allData.Brand} onChange={handleInputChange}/>
          </div>
          <div className='imputContainer'>
            <p className='textInput'>Model</p>
            <input placeholder='Ex: ZenBook Duo 14' name='Model' value={allData.Model} type='text' onChange={handleInputChange}/>
          </div>
        </div>

        <div className='elementsLigne'>
          <div className='imputContainer'>
          <p className='textInput'>Type</p>
            <select className='selectPrinterType' value={allData.Type} name='Type' type='text' onChange={handleInputChange}>
            <option>Imprimante</option>
            <option>Laser</option>
            <option>Multifonctions</option>
            </select>
          </div>
          <div className='imputContainer'>
            <p className='textInput'>Fiche technique</p>
            <input placeholder='URL de la fiche technique' value={allData.FicheTechnique} name='FicheTechnique' type='text' onChange={handleInputChange}/>
          </div>
        </div>

        <div className='elementsLigne'>
          <div className='imputContainer'>
            <p className='textInput'>Prix</p>
            <input placeholder='Ex: 10.000,00' name='Prix' value={allData.Prix} type='number' onChange={handleInputChange}/>
          </div>
          <div className='imputContainer'>
             
              <p id='PromotionTxt'>Promotion</p>
             <div className='insideInput'>
                <div>
                  <p className='textInput'>%</p>
                  <input id='Promotion' type='number' name='Poursantage' min={0} max={100} value={allData.Poursantage} required onChange={handleInputChange} placeholder='Ex: 10' />
                </div>
                  
                { promo && <div className='prixPromo'>
                  <p>prix Promo</p>
                  <p className='prix' name="prixPromo">{parseFloat(allData.Prix) - (parseFloat(allData.Prix)*parseInt(allData.Poursantage)/100)}</p>
                </div>}
             </div>
          </div>
        </div>

        <div className='insideInput'>
          <p className='textInput'>Description</p>
          <textarea rows="5" placeholder='Ex: Caractéristiques principales' name='Description' required value={allData.Description} onChange={handleInputChange}/>
        </div>

      </div>
    </div>
  </div>

  )
}
