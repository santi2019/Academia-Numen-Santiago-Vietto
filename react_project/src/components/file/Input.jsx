import React, {useState} from 'react'

function Input() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

  return (
    <div>
        <input type="file" accept='image/*' onChange={handleImageChange}/>
        {selectedImage && <img src={selectedImage} alt="Vista previa"/>}
    </div>
  )
}


export default Input;
