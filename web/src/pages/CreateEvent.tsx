import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

export default function CreateEvent() {
    // localStorage.setItem("UserId", "6691eb4fd81e01fe01d4858e");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] =  useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");




    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handlePostClick = async () => {   
        const user = localStorage.getItem("user_id");
        console.log(title, description, location, user)

        if (!title || !description || !location || !user) {
            alert("Please fill in all fields and select a file.");
            return;
        }
        try{
            
            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/event/`,{
                    eventName: title,
                    description: description,
                    place: location,
                    eventCreator: user
            },
        ).then(async (response) => {
            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/location/add-event`,{
                    locationName: location,
                    event: response.data._id
            },
        )
        console.log(response)
        })

        }catch (error:any){
            console.log("Error: ", error)
        }

    };

    return (
        <div>
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">CREATE</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />

                <div className="grid grid-cols-4 text-navy font-bold">
                    <div className="col-span-1">
                        <h1 className="">IMAGE UPLOAD</h1>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {selectedFile && (
                            <div>
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "300px",
                                    }}
                                />
                                <p>Filename: {selectedFile.name}</p>
                                <p>File type: {selectedFile.type}</p>
                                <p>File size: {selectedFile.size} bytes</p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-3">
                        <h1>TITLE</h1>
                        <input
                            type="text"
                            className="bg-white w-full rounded p-2 mb-6"
                            placeholder=""
                            value = {title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                                // console.log(e.target.value)
                            }}
                        />
                        <h1>DESCRIPTION</h1>
                        <textarea
                            className="bg-white w-full rounded p-2 mb-6"
                            placeholder=""
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <h1>LOCATION</h1>
                        <input
                            type="text"
                            className="bg-white w-full rounded p-2 mb-6"
                            placeholder=""
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <h1>POINTS</h1>
                        <input
                            type="number"
                            className="bg-white w-full rounded p-2 mb-6"
                            placeholder=""
                        />
                        <div className="flex w-full">
                            <button 
                            className="bg-navy text-primary px-10 py-2 rounded-xl text-2xl ml-auto"
                            onClick={handlePostClick}
                            >
                                POST
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
