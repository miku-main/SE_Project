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
        <Box className="post-page" style={{padding: "2rem"}}>
            <h1>Post</h1>

            <label> Choose Images :</label>
            <input 
                type="file" 
                accept="image/*" 
                multiple onChange={handleImageChange} 
                style={{marginBottom: "1rem"}} 
            />
            
            <div style={{display: "flex",  gap: "2rem", marginBottom: "2rem"}}>
                    {imageIndex !== null && (
                        <div style={{flex: 2}}>
                            
                            <img 
                                src={images[imageIndex]} 
                                alt="Selected Preview" 
                                style={{
                                    width: "100%", 
                                    maxHeight: 400, 
                                    objectFit: "contain", 
                                    borderRadius: "8px", 
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.1"
                                }} 
                            />
                        </div>
                    )}
                    <form onSubmit={handleSubmit} style={{flex: 1}}>
                    <textarea 
                        value={description} 
                        onChange={handleDescriptionChange} 
                        placeholder="Enter food description..." 
                        rows="8" 
                        style={{
                            width:'100%',
                            padding: "10px",
                            marginBottom: "1rem",
                            resize: "none",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    ></textarea>
                    <button 
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Post
                    </button>
                </form>
            </div>

            {images.length > 0 && (
                <div>
                    <h3>Image Select:</h3>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginTop: "10px",
                        }}    
                    >
                        {images.map((image, index) => (
                            <img 
                                key={index} 
                                src={image} 
                                alt={`Preview ${index}`} 
                                onClick={() => setimageIndex(index)}
                                style={{
                                    width: "100px", 
                                    height: "100px", 
                                    objectFit: "cover", 
                                    boarder: imageIndex === index 
                                        ? "3px solid blue" : "1px solid grey", 
                                    cursor: "pointer"}} 
                            />
                        ))}
                    </div>
                </div>
            )}
        </Box>
    )
}

export default Post;