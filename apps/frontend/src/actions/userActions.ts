import { UserType } from "../../../../packages/types/userTypes.js";

export const isLoggedIn = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/isLogged`, {
      credentials: "include",
    });
    const response: { success: boolean; data?: UserType; error?: string } =
      await res.json();
    return response;
  } catch (err) {
    console.error("Error while checking if the user is logged in", err);
  }
  return {
    success: false,
    error: "Server down",
  };
};

export const SearchUser = async (username: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/user/search?query=${username}`,
      {
        credentials: "include",
      }
    );
    const response: { success: boolean; data?: UserType[] } = await res.json();
    return response;
  } catch (err) {
    console.error("Error while searching for the user", err);
    return { success: false };
  }
};
export const FollowUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/user/follow/${userId}`,
      {
        credentials: "include",
      }
    );
    const response: { success: boolean; message?: string; error?: string } =
      await res.json();
    return response;
  } catch (err) {
    console.error("Error while following the user", err);
    return {
      success: false,
      error: "Something went wrong while making the request",
    };
  }
};
export const UnfollowUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/user/unfollow/${userId}`,
      {
        credentials: "include",
      }
    );
    const response: { success: boolean; message?: string; error?: string } =
      await res.json();
    return response;
  } catch (err) {
    console.error("Error while unfollowing the user", err);
    return {
      success: false,
      error: "Something went wrong while making the request",
    };
  }
};
interface GetFollowingResponse {
  success: boolean;
  data?: { followers: UserType }[];
  error?: string;
}
export const getFollowingAction = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/user/following`, {
      credentials: "include",
    });
    const response: GetFollowingResponse = await res.json();
    return response;
  } catch (err) {
    return {
      success: false,
      error: "Something went wrong while making the request",
    };
  }
};
