import './userProfile.css';

const UserProfile = ({ user, posts }) => {
    let pic = "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg";;

    return (
        <div>
            <div className="header">
                <img src={pic} className="profilePic"></img>
                <div className="userInfo">
                    <h2>food_lover</h2>
                    <div style={{display:"flex", flexDirection:"row", gap:"3em", width:"35vw"}}>
                        <p>Posts: 5</p>
                        <p>Followers: 15</p>
                        <p>Following: 52</p>
                    </div>
                    <p>Kitchen enthusiast whipping up tasty creations! Passionate about sharing homemade meals and the joy of cooking. Follow along for recipes and kitchen inspiration!</p>
                </div>
            </div>
            <div>
                <h3 style={{color:"white", textAlign:"center", padding:"1em", backgroundColor:"#FAADAD", width:"70vw", margin: "auto", borderRadius: "10px"}}>Posts</h3>
                <div className="posts">  
                    <img className="post" src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/food-photographer-ideas.jpg"></img>
                    <img className="post" src="https://i.pinimg.com/736x/6f/48/52/6f48521251136531eed37fa42bcebdc8.jpg"></img>
                    <img className="post" src="https://godoxstore.co.uk/media/blog/ad200-pro-food-photography.jpg"></img>
                    <img className="post" src="https://img.restaurantsbrighton.co.uk/wp-content/uploads/2025/01/9_NOyguc.jpeg?tr=w-768,c-at_max"></img>
                    <img className="post" src="https://kristineskitchenblog.com/wp-content/uploads/2023/02/tacos-recipe-16-2.jpg"></img>
                </div>
            </div>
            
        </div>
    )
}

export default UserProfile