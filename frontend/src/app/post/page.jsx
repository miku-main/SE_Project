'use client'
import { Box } from "@mui/material";
import { useState } from "react";

const Post = () => {
    // for storing image file and description
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");
    const [imageIndex, setimageIndex] = useState(null);

    // to handle selecting image
    /*
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);   
            const reader = new FileReader();
            reader.onloaded = () => {
                setPreviewImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
    */
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                previews.push(reader.result);
                if (previews.length === files.length) {
                    setImages(previews);
                    setimageIndex(0);
                }
            }
            reader.readAsDataURL(file);
        });
    }
    


    // for handling description input change    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    // for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // 
        const selectedImage = images[imageIndex];

        // log submitted data

        setImages([]);
        setDescription("");
        setimageIndex("");
    }

    return(
        <Box className="post-page">
            //
            Post
            {images.length > 0 && (
                <div>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Preview ${index}`} style={{width: "100px", height: "100px", objectFit: "cover", boarder: imageIndex === index ? "3px solid blue" : "1px solid grey", cursor: "pointer"}} onClick={() => setimageIndex(index)}/>
                    ))}
                </div>
            )}

            {imageIndex !== null && (
                <div style={{marginTop: "20px"}}>
                    <h3>Selected Images Preview:</h3>
                    <img src={images[imageIndex]} alt="Selected Preview" style={{width: "100%", maxHeight: 400, objectFit: "contain"}} />
                </div>
            )}



            <form onSubmit={handleSubmit}>
                <div>
                    <label> Choose Image:</label>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} />           
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={handleDescriptionChange} placeholder="Enter food description..." rows="8" style={{width:'50%'}}></textarea>
                </div>
                <button type="submit">Post</button>
            </form>

           
{/*}
            {previewImage && (
                <div className="preview">
                <h3>Preview:</h3>
                <img src={previewImage} alt="Preview" style={{maxWidth: "300px"}} />
                <p>{description}</p>
                </div>
                )} 
*/}
        </Box>
    )
}

export default Post;