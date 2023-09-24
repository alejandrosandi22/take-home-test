export async function getUserService(username: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/${username}`,
  );

  return await response.json();
}
