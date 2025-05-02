'use client'
import { Box } from "@mui/material";
import { set } from "mongoose";
import { useState } from "react";

const Post = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                ingredients: ingredients.split(','),
                steps: steps.split('\n'),
                country,
                description,
                imageLink,
            }),
        });
        
        if (res.ok) {
            setMessage("Post created successfully!");
            setImageLink("");
            setDescription("");
        } else {
            setMessage("Failed to create post. Please try again.");
        }
    } // handleSubmit function ends here
    const containerStyle = {
        width:"auto",
        height:"fit-content",
        backgroundColor:"#FAADAD",
        border:"1px solid white",
        borderRadius:"0.5rem",
        paddingLeft:"1.5rem",
        paddingRight:"1.5rem",
        paddingTop:"2%",
        paddingBottom:"2%"
    }
    const innerContainerStyle = {
        display:"flex",
        justifyContent:"space-around",
    }

    return (
        <Box sx={containerStyle}>
        <Box sx={innerContainerStyle}>

            <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Box>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="w-full px-3 py-2 rounded-lg boarder border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        required
                    />
                </Box>

                <Box>
                    <textarea 
                        placeholder="Ingredients (comma separated)" 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                </Box>

                <Box>
                    <textarea 
                        placeholder="Steps (one step per line)" 
                        value={steps} 
                        onChange={(e) => setSteps(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                </Box>

                <Box>
                    <input 
                        type="text" 
                        placeholder="Country of Origin" 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </Box>

                <Box>
                    <textarea 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                </Box>

                <Box>
                    <input 
                        type="text" 
                        placeholder="Image Link" 
                        value={imageLink} 
                        onChange={(e) => setImageLink(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </Box>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Post
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}

        </Box>
        </Box>
    ) // return statement ends here

} // Post component ends here
export default Post;


// Use the code below if we are adding the clod provider and choosing 
// images from the local system
/*
const Post = () => {
    // for storing image file and description
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");
    const [imageIndex, setimageIndex] = useState(null);


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
    const handleSubmit = async (e) => {
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
*/