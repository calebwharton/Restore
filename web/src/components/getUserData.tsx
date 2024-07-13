async function getUserData(userId: string) {
    try {
      const response = await fetch(`/get/${userId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Failed to fetch user data');
      return null;
    }
  }

export default getUserData;