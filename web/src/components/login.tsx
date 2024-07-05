import { useGoogleLogin } from "react-oauth-google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    upi: string;
}

// New user to MongoDB
const postUserData = async (data: UserData) => {
    await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            accessToken: data.accessToken,
        }),
    })
        .then((response) => {
            console.log("New User added!!");
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

//updating User in MongoDB
const updateUserData = async (data: UserData) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/api/user/` + data.email,
            {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    accessToken: data.accessToken,
                    upi: data.email.split("@")[0],
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to update user data");
        } else {
            console.log("User Data Updated");
        }
    } catch (error) {
        console.error(error);
    }
};

// Passes UPI to WDCC member checker API
const useGoogleSignIn = (
  currentPage: string,
  setLoading: (loading: boolean) => void
) => {
  const navigate = useNavigate();

  const handleSignIn = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
          try {
              setLoading(true);
              const userInfo = await axios.get(
                  "https://www.googleapis.com/oauth2/v3/userinfo",
                  {
                      headers: {
                          Authorization: `Bearer ${tokenResponse.access_token}`,
                      },
                  }
              );


              if (userInfo.data.email.endsWith("aucklanduni.ac.nz")) {
                const userUPI: string = userInfo.data.email.split("@")[0];
                  const getUserData = async () => {
                      await fetch(
                          `${import.meta.env.VITE_SERVER_URL}/api/user/` +
                              userUPI,
                          {
                              method: "GET",
                          }
                      )
                          .then((response) => {
                              console.log(
                                  "Fetch response for user data - Checking if user is in DB"
                              );
                              // If we get something then, update the user data. Else post.

                              if (response.status == 200) {
                                  console.log("Updating User Data");

                                  updateUserData({
                                      firstName: userInfo.data.firstName,
                                      lastName: userInfo.data.lastName,
                                      email: userInfo.data.email,
                                      accessToken: tokenResponse.access_token,
                                      upi: userUPI,
                                  });
                              } else {
                                  console.log("Posting User Data");
                                  postUserData({
                                      firstName: userInfo.data.firstName,
                                      lastName: userInfo.data.lastName,
                                      email: userInfo.data.email,
                                      accessToken: tokenResponse.access_token,
                                      upi: userUPI,
                                  });
                              }
                          })
                          .catch((error) => {
                              console.log(error);
                          });
                  };

                  // Check MongoDB if user is in DB, then updates/posts user data accordingly
                  getUserData();
              } else {
                  // Redirect to error page if user is not in WDCC
                  navigate("/sign-in-error");
              }
          } catch (error) {
              console.error("Failed to fetch user info:", error);
          }
      },
      onError: (error) => {
          console.log("Login failed:", error);
      },
      // Assuming implicit flow as default; no need to specify unless changing
  });
  console.log(currentPage);
  return handleSignIn;
};

export default useGoogleSignIn;
