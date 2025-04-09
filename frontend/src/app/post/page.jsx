'use client'
import { Box } from "@mui/material";
import { useState } from "react";

const Post = () => {
    // for storing image file and description
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    // to handle selecting image
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

    // for handling description input change    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    // for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // log submitted data

        setImage(null);
        setDescription("");
        setPreviewImage("");
    }

    return(
        <Box className="post-page">
            Post
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Images:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />           
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={handleDescriptionChange} placeholder="Enter food description..." rows="8" style={{width:'50%'}}></textarea>
                </div>
                <button type="submit">Post</button>
            </form>

            {previewImage && (
                <div className="preview">
                <h3>Preview:</h3>
                <img src={previewImage} alt="Preview" style={{maxWidth: "300px"}} />
                <p>{description}</p>
                </div>
                )} 

        </Box>
    )
}

export default Post;