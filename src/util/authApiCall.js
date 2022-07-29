import axios from "axios";

//post api call = signup new user

export async function signUpApi(email, password, firstName, lastName) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/auth/signup",
      headers: { authorization: localStorage.getItem("token") },
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
    console.log(
      "signupUser response user",
      response.data.createdUser,
      "encodedToken",
      response.data.encodedToken
    );
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
  } catch (error) {
    console.log("signup error", error);
  }
}


